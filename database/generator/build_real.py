"""ScholarConnect - builds the REAL scholarship database.
Source of truth: real_records.py (researched records with official URLs).
Outputs: database/schema.sql, database/seed.sql, database/scholarships.csv, database/db.json, js/data.js
Usage:  python3 build_real.py <project_root>
"""
import csv, json, os, re, sys
from real_records import R

def _load_imported(name):
    path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "imported", name)
    return json.load(open(path, encoding="utf-8")) if os.path.exists(path) else []
IMPORTED = _load_imported("imported_records.json")   # from database/fetch/sync.py (API data)
STATS = _load_imported("statistics.json")            # data.gov.in resources

OUT = sys.argv[1]
DB = os.path.join(OUT, "database")
os.makedirs(DB, exist_ok=True)
VERIFIED = "2026-10-18"

# ---------------------------------------------------------------- reference data
# Approximate INR rates (themoneyconverter.com, Oct 2026). Used only to show "≈ ₹" and sort.
RATES = {"INR": 1, "USD": 85.35, "GBP": 113.64, "EUR": 96.98, "JPY": 0.5939, "CHF": 103.11,
         "KRW": 0.0593, "CAD": 61.63, "SEK": 8.81, "AUD": 54.61, "SGD": 64.90}
SYMBOL = {"INR": "₹", "USD": "$", "GBP": "£", "EUR": "€", "JPY": "¥", "CHF": "CHF ", "KRW": "₩",
          "CAD": "C$", "SEK": "kr ", "AUD": "A$", "SGD": "S$", "BDT": "৳", "LKR": "Rs ", "KES": "KSh ", "NGN": "₦"}
COUNTRY = {  # name: (iso, currency, region)
    "India": ("IN", "INR", "South Asia"), "United States": ("US", "USD", "North America"),
    "United Kingdom": ("GB", "GBP", "Europe"), "Germany": ("DE", "EUR", "Europe"), "France": ("FR", "EUR", "Europe"),
    "Netherlands": ("NL", "EUR", "Europe"), "Ireland": ("IE", "EUR", "Europe"), "Sweden": ("SE", "SEK", "Europe"),
    "Switzerland": ("CH", "CHF", "Europe"), "Belgium": ("BE", "EUR", "Europe"), "Canada": ("CA", "CAD", "North America"),
    "Japan": ("JP", "JPY", "Asia"), "South Korea": ("KR", "KRW", "Asia"), "Australia": ("AU", "AUD", "Oceania"),
    "Singapore": ("SG", "SGD", "Asia"), "Bangladesh": ("BD", "BDT", "South Asia"), "Sri Lanka": ("LK", "LKR", "South Asia"),
    "Kenya": ("KE", "KES", "Africa"), "Nigeria": ("NG", "NGN", "Africa"),
}
STATES = [
    ("AP", "Andhra Pradesh", "State"), ("AR", "Arunachal Pradesh", "State"), ("AS", "Assam", "State"),
    ("BR", "Bihar", "State"), ("CG", "Chhattisgarh", "State"), ("GA", "Goa", "State"), ("GJ", "Gujarat", "State"),
    ("HR", "Haryana", "State"), ("HP", "Himachal Pradesh", "State"), ("JH", "Jharkhand", "State"),
    ("KA", "Karnataka", "State"), ("KL", "Kerala", "State"), ("MP", "Madhya Pradesh", "State"),
    ("MH", "Maharashtra", "State"), ("MN", "Manipur", "State"), ("ML", "Meghalaya", "State"), ("MZ", "Mizoram", "State"),
    ("NL", "Nagaland", "State"), ("OD", "Odisha", "State"), ("PB", "Punjab", "State"), ("RJ", "Rajasthan", "State"),
    ("SK", "Sikkim", "State"), ("TN", "Tamil Nadu", "State"), ("TS", "Telangana", "State"), ("TR", "Tripura", "State"),
    ("UP", "Uttar Pradesh", "State"), ("UK", "Uttarakhand", "State"), ("WB", "West Bengal", "State"),
    ("AN", "Andaman and Nicobar Islands", "UT"), ("CH", "Chandigarh", "UT"),
    ("DH", "Dadra and Nagar Haveli and Daman and Diu", "UT"), ("DL", "Delhi", "UT"), ("JK", "Jammu and Kashmir", "UT"),
    ("LA", "Ladakh", "UT"), ("LD", "Lakshadweep", "UT"), ("PY", "Puducherry", "UT"),
]
LEVELS = ["Class 9-10", "Class 11-12", "Diploma", "Undergraduate", "Postgraduate", "Doctoral"]
PROVIDER_COUNTRY = {
    "United States-India Educational Foundation (USIEF)": "India", "UK Foreign, Commonwealth & Development Office (FCDO)": "United Kingdom",
    "Commonwealth Scholarship Commission in the UK": "United Kingdom", "Rhodes Trust": "United Kingdom",
    "Inlaks Shivdasani Foundation": "India", "Gates Cambridge Trust": "United Kingdom",
    "French Ministry for Europe and Foreign Affairs (via Campus France)": "France", "Swiss Confederation (SERI / FCS)": "Switzerland",
    "Ministry of Education, Culture, Sports, Science and Technology, Japan": "Japan",
    "National Institute for International Education (NIIED), Korea": "South Korea",
    "J.N. Tata Endowment for the Higher Education of Indians": "India",
    "Dutch Ministry of Education, Culture and Science & Dutch universities (Nuffic)": "Netherlands",
    "Higher Education Authority (HEA), Ireland": "Ireland", "K.C. Mahindra Education Trust": "India",
    "Aga Khan Foundation": "Switzerland", "European Commission (EACEA)": "Belgium", "Mitacs & AICTE": "Canada",
    "British Council & UK universities (GREAT Britain campaign)": "United Kingdom", "Stanford University": "United States",
    "Embassy of France in India (Campus France India)": "France", "German Academic Exchange Service (DAAD)": "Germany",
}

def slugify(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower().replace("&", "and").replace("'", "")).strip("-")

# ---------------------------------------------------------------- normalise
SPECIAL_HOSTS = ("Any country", "Any EU country", "Not specified")
for r in IMPORTED:                                   # countries seen in API data
    for c in r.get("host", []) + r.get("nationalities", []):
        if c not in COUNTRY and c not in SPECIAL_HOSTS:
            info = r.get("countryInfo", {}).get(c, {})
            COUNTRY[c] = (info.get("iso"), info.get("currency"), "Other")
for c, (iso, cur, reg) in list(COUNTRY.items()):     # drop ISO codes clashing with a known country
    if iso and sum(1 for v in COUNTRY.values() if v[0] == iso) > 1 and reg == "Other":
        COUNTRY[c] = (None, cur, reg)
# Stable ids: hand-verified records keep 1..N (in file order); API records get a permanent id
# from imported/id_map.json, so saved scholarships keep pointing at the same item after every sync.
IMPORT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "imported")
ID_MAP_PATH = os.path.join(IMPORT_DIR, "id_map.json")
ID_MAP = json.load(open(ID_MAP_PATH, encoding="utf-8")) if os.path.exists(ID_MAP_PATH) else {}
def stable_id(i, r):
    if "dataSource" not in r:
        return i
    key = f'{r["dataSource"]}:{r["externalId"]}'
    if key not in ID_MAP:
        ID_MAP[key] = max([10000] + list(ID_MAP.values())) + 1
    return ID_MAP[key]
S = []
seen_slugs = set()
for i, r in enumerate(list(R) + IMPORTED, 1):
    s = dict(r)
    s["id"] = stable_id(i, r)
    s.setdefault("dataSource", "manual")
    s.setdefault("fetchedAt", None)
    s.setdefault("scope", "National")
    s.setdefault("host", ["India"])
    s.setdefault("nationalities", ["India"])
    s.setdefault("social", [])
    s.setdefault("special", "")
    s.setdefault("gender", "All")
    s.setdefault("period", "Annual")
    s.setdefault("awards", None)
    s.setdefault("requires", None)
    cur = s["currency"]
    s["amountInr"] = None if s["amountOriginal"] is None else int(round(s["amountOriginal"] * RATES[cur] / (1000 if cur != "INR" else 1)) * (1000 if cur != "INR" else 1))
    s["slug"] = slugify(s["name"])[:150]
    if s["slug"] in seen_slugs:
        s["slug"] = f'{s["slug"][:130]}-{s.get("externalId", i)}'.lower()
    seen_slugs.add(s["slug"])
    s.setdefault("externalId", s["slug"])
    s["hostAny"] = next((h for h in s["host"] if h in SPECIAL_HOSTS), None)
    s["hostList"] = [h for h in s["host"] if h not in SPECIAL_HOSTS]
    s["openToAll"] = "Any country" in s["nationalities"]
    s["providerCountry"] = PROVIDER_COUNTRY.get(s["provider"]) or (
        "India" if s["dataSource"] == "manual" or s["scope"] == "National" else (s["hostList"][0] if s["hostList"] else None))
    for h in s["hostList"] + [n for n in s["nationalities"] if n != "Any country"] + ([s["providerCountry"]] if s["providerCountry"] else []):
        assert h in COUNTRY, h
    for st in s["states"]:
        assert st == "All India" or st in [x[1] for x in STATES], st
    for l in s["levels"]:
        assert l in LEVELS, l
    S.append(s)

FIELDS = sorted({f for s in S for f in s["fields"] if f != "All Fields"})
DOCS = sorted({d for s in S for d in s["documents"]})
CATEGORIES = []
for c in ["Merit", "Financial Need", "STEM", "Women in Education", "Social Welfare", "Disability Support", "Research", "Government", "Study Abroad", "Other"]:
    if any(s["category"] == c for s in S): CATEGORIES.append(c)
assert all(s["category"] in CATEGORIES for s in S)

providers = {}
for s in S:
    if s["provider"] not in providers:
        m = re.match(r"https?://[^/]+", s["url"])
        providers[s["provider"]] = dict(id=len(providers) + 1, name=s["provider"][:160], type=s["ptype"],
                                        country=s["providerCountry"], website=m.group(0) if m else s["url"])
countries = sorted({c for s in S for c in s["hostList"] + [n for n in s["nationalities"] if n != "Any country"] + ([s["providerCountry"]] if s["providerCountry"] else [])} | {"India"},
                   key=lambda c: (c != "India", c))
currencies = sorted(({COUNTRY[c][1] for c in countries} | {s["currency"] for s in S}) - {None})

# ================================================================= SQL helpers
def q(v):
    if v is None: return "NULL"
    if isinstance(v, bool): return "1" if v else "0"
    if isinstance(v, (int, float)): return repr(v)
    return "'" + str(v).replace("\\", "\\\\").replace("'", "''") + "'"

def ins(table, cols, rows, chunk=100):
    if not rows: return f"-- (no rows for {table})\n"
    out = []
    for i in range(0, len(rows), chunk):
        part = rows[i:i + chunk]
        out.append(f"INSERT INTO {table} ({', '.join(cols)}) VALUES\n" +
                   ",\n".join("  (" + ", ".join(q(v) for v in r) + ")" for r in part) + ";")
    return "\n".join(out) + "\n"

cid = {c: i for i, c in enumerate(countries, 1)}
sid_ = {st[1]: i for i, st in enumerate(STATES, 1)}
lid = {l: i for i, l in enumerate(LEVELS, 1)}
fid = {f: i for i, f in enumerate(FIELDS, 1)}
catid = {c: i for i, c in enumerate(CATEGORIES, 1)}
did = {d: i for i, d in enumerate(DOCS, 1)}

# ================================================================= schema.sql
SCHEMA = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "schema_template.sql")).read()
open(os.path.join(DB, "schema.sql"), "w").write(SCHEMA)

# ================================================================= seed.sql
nat = sum(s["scope"] == "National" for s in S)
seed = [f"""-- ============================================================
-- ScholarConnect - REAL scholarship data ({len(S)} scholarships: {nat} national, {len(S) - nat} international)
-- Every scholarship links to its official page (official_url) and to the page(s) it was
-- checked against (scholarship_sources). Last verified: {VERIFIED}.
-- Amounts and deadlines change every cycle - always confirm on the official page.
-- Accounts (users, institutions, profiles) are in accounts.sql and are not touched by this file.
-- Generated file - run after schema.sql.
-- ============================================================
USE scholarconnect;
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
"""]
seed.append("-- Currencies (approximate INR rates, Oct 2026, for display/sorting only)\n" +
            ins("currencies", ["currency_code", "symbol", "inr_rate", "rate_as_of"],
                [(c, SYMBOL.get(c, c).strip(), RATES.get(c), "2026-10-18" if c in RATES else None) for c in currencies]))
seed.append(ins("countries", ["country_id", "iso_code", "name", "currency_code", "region"],
                [(cid[c], COUNTRY[c][0], c, COUNTRY[c][1], COUNTRY[c][2]) for c in countries]))
seed.append("-- Indian states and union territories\n" + ins("states", ["state_id", "country_id", "code", "name", "kind"],
            [(sid_[st[1]], cid["India"], st[0], st[1], st[2]) for st in STATES]))
seed.append(ins("education_levels", ["level_id", "name", "sort_order"], [(i, l, i) for l, i in lid.items()]))
seed.append(ins("fields_of_study", ["field_id", "name"], [(i, f) for f, i in fid.items()]))
seed.append(ins("categories", ["category_id", "name"], [(i, c) for c, i in catid.items()]))
seed.append(ins("document_types", ["document_id", "name"], [(i, d) for d, i in did.items()]))
seed.append("-- Providers (real organisations)\n" + ins("providers",
            ["provider_id", "name", "provider_type", "country_id", "website", "is_verified"],
            [(p["id"], p["name"], p["type"], cid.get(p["country"]), p["website"][:255], 1 if p["name"] in {s["provider"] for s in S if s["dataSource"] == "manual"} else 0) for p in providers.values()]))

rows, lv, fl, ss, hc, na, so, dc, src = [], [], [], [], [], [], [], [], []
for s in S:
    i = s["id"]
    rows.append((i, s["slug"], s["name"], providers[s["provider"]]["id"], s["scope"], catid[s["category"]], s["currency"],
                 s["amountOriginal"], s["amountInr"], s["amountNote"], s["period"], s["awards"], s["deadline"], s["deadlineNote"],
                 1 if "All Fields" in s["fields"] else 0, 1 if "All India" in s["states"] else 0,
                 1 if s["hostAny"] else 0, s["hostAny"], 1 if s["openToAll"] else 0,
                 s["maxIncome"], s["minPct"], s["gender"], s["special"] or None, s["requires"], s["description"], s["process"],
                 s["url"][:255], "Open", VERIFIED if s["dataSource"] == "manual" else None,
                 s["dataSource"], s["externalId"], (s["fetchedAt"] or "").replace("T", " ").replace("Z", "") or None))
    lv += [(i, lid[l]) for l in s["levels"]]
    fl += [(i, fid[f]) for f in s["fields"] if f != "All Fields"]
    ss += [(i, sid_[x]) for x in s["states"] if x != "All India"]
    hc += [(i, cid[x]) for x in s["hostList"]]
    na += [(i, cid[x]) for x in s["nationalities"] if x != "Any country"]
    so += [(i, x) for x in s["social"]]
    dc += [(i, did[d], k) for k, d in enumerate(s["documents"], 1)]
    src += [(i, u[:500], VERIFIED if s["dataSource"] == "manual" else (s["fetchedAt"] or VERIFIED)[:10]) for u in s["sources"]]

seed.append(f"-- Scholarships\n" + ins("scholarships",
            ["scholarship_id", "slug", "name", "provider_id", "scope", "category_id", "currency_code", "amount_original",
             "amount_inr", "amount_note", "amount_period", "num_awards", "deadline", "deadline_note", "all_fields", "all_india",
             "host_any", "host_note", "open_to_all_nationalities", "max_income_inr", "min_percentage", "gender_eligibility",
             "special_eligibility", "required_profile_flag", "description", "application_process", "official_url", "status", "last_verified",
             "data_source", "external_id", "fetched_at"], rows, 20))
for t, cols, data in [("scholarship_levels", ["scholarship_id", "level_id"], lv),
                      ("scholarship_fields", ["scholarship_id", "field_id"], fl),
                      ("scholarship_states", ["scholarship_id", "state_id"], ss),
                      ("scholarship_host_countries", ["scholarship_id", "country_id"], hc),
                      ("scholarship_nationalities", ["scholarship_id", "country_id"], na),
                      ("scholarship_social_categories", ["scholarship_id", "social_category"], so),
                      ("scholarship_documents", ["scholarship_id", "document_id", "sort_order"], dc),
                      ("scholarship_sources", ["scholarship_id", "source_url", "checked_on"], src)]:
    seed.append(ins(t, cols, data, 300))
def _tok(x): return set(re.sub(r"[^a-z0-9 ]", " ", (x or "").lower()).split()) - {"the", "of", "for", "and", "scheme", "scholarship", "scholarships", "students", "to", "in"}
stat_rows = []
for res in STATS:
    tt = _tok(res.get("title"))
    best = max(((len(tt & _tok(s["name"])) / max(1, len(_tok(s["name"]))), s["id"]) for s in S if s["dataSource"] == "manual"), default=(0, None))
    match = best[1] if best[0] >= 0.6 else None
    for row in res.get("rows", []):
        stat_rows.append((res["resourceId"], (res.get("title") or "")[:300], (res.get("org") and ", ".join(res["org"]) if isinstance(res.get("org"), list) else res.get("org")),
                          json.dumps(row, ensure_ascii=False), match, res["url"][:255], (res.get("fetchedAt") or "").replace("T", " ").replace("Z", "") or None))
seed.append("-- Official statistics from data.gov.in (OGD API)\n" + ins("scholarship_statistics",
            ["resource_id", "resource_title", "organisation", "row_json", "scholarship_id", "source_url", "fetched_at"], stat_rows, 200))
seed.append("SET FOREIGN_KEY_CHECKS = 1;\n")
open(os.path.join(DB, "seed.sql"), "w").write("\n".join(seed))

# ================================================================= front-end shape
def fe(s):
    return dict(id=s["id"], name=s["name"], provider=s["provider"], type=s["ptype"], scope=s["scope"],
                hostCountries=s["host"], currency=s["currency"], amountOriginal=s["amountOriginal"], amount=s["amountInr"],
                amountNote=s["amountNote"], amountPeriod=s["period"], awards=s["awards"],
                deadline=s["deadline"], deadlineNote=s["deadlineNote"], educationLevel=s["levels"], fields=s["fields"],
                states=s["states"], nationalities=s["nationalities"], maxIncome=s["maxIncome"],
                minimumPercentage=s["minPct"], category=s["category"], socialCategories=s["social"],
                specialEligibility=s["special"], requires=s["requires"], gender=s["gender"], description=s["description"],
                documents=s["documents"], process=s["process"], officialUrl=s["url"], sources=s["sources"],
                lastVerified=VERIFIED if s["dataSource"] == "manual" else None,
                dataSource=s["dataSource"], fetchedAt=s["fetchedAt"])
FE = [fe(s) for s in S]
js = f"""/* ============================================================
   ScholarConnect - REAL scholarship data (national + international)
   GENERATED from database/generator - mirrors database/seed.sql.
   {len(S)} real scholarships, each with its official URL (officialUrl) and the
   page(s) it was checked against (sources). Last verified: {VERIFIED}.
   Amounts/deadlines change every cycle; always confirm on officialUrl.

   null values mean "not fixed / not applicable":
     amount, amountOriginal  -> see amountNote (e.g. fully funded, varies by course)
     deadline                -> see deadlineNote (e.g. opens every June)
     maxIncome               -> no income limit
     minimumPercentage       -> no fixed % (see specialEligibility)
   ============================================================ */

const SCHOLARSHIPS = {json.dumps(FE, ensure_ascii=False, indent=2)};

const CATEGORIES = {json.dumps(CATEGORIES, ensure_ascii=False)};

const CURRENCY_SYMBOLS = {json.dumps(SYMBOL, ensure_ascii=False)};

const DATA_LAST_VERIFIED = "{VERIFIED}";

/* When the APIs were last synced (null = never) */
const DATA_LAST_SYNCED = {json.dumps(max((s["fetchedAt"] for s in S if s["fetchedAt"]), default=None))};

/* All Indian states & union territories (for profile forms) */
const INDIAN_STATES = {json.dumps(sorted(x[1] for x in STATES), ensure_ascii=False)};
"""
open(os.path.join(OUT, "js", "data.js"), "w").write(js)

# ================================================================= CSV + JSON
with open(os.path.join(DB, "scholarships.csv"), "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    cols = ["id", "name", "provider", "type", "scope", "category", "hostCountries", "currency", "amountOriginal", "amount",
            "amountNote", "amountPeriod", "awards", "deadline", "deadlineNote", "educationLevel", "fields", "states",
            "nationalities", "maxIncome", "minimumPercentage", "socialCategories", "gender", "specialEligibility",
            "description", "documents", "process", "officialUrl", "sources", "lastVerified"]
    w.writerow(cols)
    for s in FE:
        w.writerow(["; ".join(map(str, s[c])) if isinstance(s[c], list) else ("" if s[c] is None else s[c]) for c in cols])

json.dump(dict(meta=dict(name="ScholarConnect real scholarship database", lastVerified=VERIFIED, count=len(S),
                         note="Real scholarships with official links. Confirm amounts/deadlines on officialUrl."),
               currencies=[dict(code=c, symbol=SYMBOL.get(c, c).strip(), inrRate=RATES.get(c)) for c in currencies],
               countries=[dict(name=c, iso=COUNTRY[c][0], currency=COUNTRY[c][1], region=COUNTRY[c][2]) for c in countries],
               states=[dict(code=a, name=b, kind=k) for a, b, k in STATES],
               educationLevels=LEVELS, fieldsOfStudy=FIELDS, categories=CATEGORIES, documentTypes=DOCS,
               providers=list(providers.values()), scholarships=FE),
          open(os.path.join(DB, "db.json"), "w"), ensure_ascii=False, indent=2)

if IMPORTED:
    os.makedirs(IMPORT_DIR, exist_ok=True)
    json.dump(ID_MAP, open(ID_MAP_PATH, "w"), indent=0)
print(f"imported_from_apis={len(IMPORTED)} statistics_rows={len(stat_rows)}")
print(f"scholarships={len(S)} national={nat} international={len(S) - nat} providers={len(providers)} "
      f"countries={len(countries)} fields={len(FIELDS)} docs={len(DOCS)} sources={len(src)}")

