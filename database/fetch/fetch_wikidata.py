"""Fetch scholarships from Wikidata (open data, CC0, no API key).

Uses the public SPARQL endpoint: https://query.wikidata.org/sparql
Gets every item that is an instance of "scholarship" (or a subclass), with its
country, sponsor/provider, official website and English description.
Wikidata does NOT hold amounts, deadlines or detailed eligibility.

Run:  python3 fetch_wikidata.py            -> database/imported/wikidata.json
"""
import re
from common import http_get, record, save_json, clean, log, now_iso

SPARQL = "https://query.wikidata.org/sparql"
WD_API = "https://www.wikidata.org/w/api.php"
DEFAULT_CLASS = "Q188823"  # "scholarship" (confirmed by a live run)


def resolve_class():
    """Confirm the Wikidata item for 'scholarship' (falls back to a label search)."""
    d = http_get(WD_API, {"action": "wbgetentities", "ids": DEFAULT_CLASS, "props": "labels",
                          "languages": "en", "format": "json"})
    label = d.get("entities", {}).get(DEFAULT_CLASS, {}).get("labels", {}).get("en", {}).get("value", "")
    if label.lower() == "scholarship":
        return DEFAULT_CLASS
    s = http_get(WD_API, {"action": "wbsearchentities", "search": "scholarship", "language": "en",
                          "type": "item", "limit": 10, "format": "json"})
    for hit in s.get("search", []):
        if hit.get("label", "").lower() == "scholarship":
            return hit["id"]
    raise RuntimeError("Could not find the Wikidata item for 'scholarship'")


QUERY = """
SELECT ?item ?itemLabel ?itemDescription ?countryLabel ?iso ?curCode ?website ?providerLabel ?inception WHERE {
  ?item wdt:P31/wdt:P279* wd:%(cls)s .
  OPTIONAL { ?item wdt:P17 ?country .
             OPTIONAL { ?country wdt:P297 ?iso }
             OPTIONAL { ?country wdt:P38 ?cur . ?cur wdt:P498 ?curCode } }
  OPTIONAL { ?item wdt:P856 ?website }
  OPTIONAL { ?item wdt:P1027|wdt:P859|wdt:P112|wdt:P137|wdt:P749 ?provider }
  OPTIONAL { ?item wdt:P571 ?inception }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
LIMIT %(limit)d
"""


# Wikidata's official country labels -> the names used elsewhere in the database
COUNTRY_ALIASES = {
    "United States of America": "United States", "People's Republic of China": "China",
    "Kingdom of the Netherlands": "Netherlands", "Republic of Ireland": "Ireland",
    "Russian Federation": "Russia", "Republic of Korea": "South Korea", "Korea, South": "South Korea",
    "Czech Republic": "Czechia", "Kingdom of Denmark": "Denmark",
}


def provider_type(name):
    n = (name or "").lower()
    if re.search(r"ministry|government|department|commission|council|embassy|federal|state of", n): return "Government"
    if re.search(r"university|college|institute|school", n): return "University"
    if re.search(r"foundation|trust|fund|society|endowment", n): return "Foundation"
    if re.search(r"bank|limited|ltd|inc\b|corporation|company", n): return "Private"
    return "Other"


def fetch(limit=5000):
    cls = resolve_class()
    log(f"[wikidata] scholarship class = {cls}; querying SPARQL ...")
    data = http_get(SPARQL, {"query": QUERY % {"cls": cls, "limit": limit}, "format": "json"},
                    headers={"Accept": "application/sparql-results+json"}, timeout=120)
    rows = data["results"]["bindings"]
    log(f"[wikidata] {len(rows)} raw rows")

    items = {}
    for b in rows:
        v = lambda k: b.get(k, {}).get("value")
        qid = v("item").rsplit("/", 1)[-1]
        label = v("itemLabel")
        if not label or re.fullmatch(r"Q\d+", label):      # no English label -> skip
            continue
        it = items.setdefault(qid, dict(label=label, desc=v("itemDescription"), countries={}, websites=set(),
                                        providers=set(), inception=v("inception")))
        if v("countryLabel") and not re.fullmatch(r"Q\d+", v("countryLabel")):
            c = COUNTRY_ALIASES.get(v("countryLabel"), v("countryLabel"))
            iso, cur = it["countries"].get(c, (None, None))
            it["countries"][c] = (iso or v("iso"), cur or v("curCode"))
        if v("website"): it["websites"].add(v("website"))
        if v("providerLabel") and not re.fullmatch(r"Q\d+", v("providerLabel")): it["providers"].add(v("providerLabel"))

    out, fetched = [], now_iso()
    for qid, it in items.items():
        countries = sorted(it["countries"])
        national = countries == ["India"]
        provider = sorted(it["providers"])[0] if it["providers"] else "Not specified"
        wd_url = f"https://www.wikidata.org/wiki/{qid}"
        website = sorted(it["websites"])[0] if it["websites"] else wd_url
        desc = clean(it["desc"]) or "Scholarship listed on Wikidata."
        year = (it["inception"] or "")[:4]
        out.append(record(
            name=clean(it["label"], 150), provider=clean(provider, 150), ptype=provider_type(provider),
            scope="National" if national else "International",
            host=["India"] if national else (countries or ["Not specified"]),
            nationalities=["India"] if national else ["Any country"],
            category="Other",
            description=desc[0].upper() + desc[1:] + (f" Established {year}." if year.isdigit() else ""),
            url=website, sources=[wd_url],
            countryInfo={c: {"iso": iso, "currency": cur} for c, (iso, cur) in it["countries"].items()},
            dataSource="wikidata", externalId=qid, fetchedAt=fetched,
        ))
    log(f"[wikidata] {len(out)} scholarships after grouping ({sum(r['scope'] == 'National' for r in out)} in India)")
    return out


if __name__ == "__main__":
    recs = fetch()
    print(save_json("wikidata.json", recs))
