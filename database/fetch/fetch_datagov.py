"""Fetch official scholarship statistics from India's Open Government Data API (data.gov.in).

data.gov.in publishes STATISTICS about scholarship schemes (beneficiaries, funds released,
state-wise counts), not scheme rules. These rows go into the `scholarship_statistics` table and
are linked to a scholarship in the database when the scheme name matches.

Setup:
  1. Register at https://data.gov.in and copy your API key (My Account).
  2. Put DATAGOV_API_KEY=... in database/fetch/.env (or export it).
  3. Optional: DATAGOV_RESOURCES=<resource-id>,<resource-id>  to fetch specific datasets.
     Without it the script searches the catalogue for "scholarship" resources.

Run:  python3 fetch_datagov.py          -> database/imported/datagov.json
"""
import os, sys
from common import http_get, save_json, log, load_env, now_iso, clean

BASE = "https://api.data.gov.in"


def api_key():
    load_env()
    k = os.environ.get("DATAGOV_API_KEY")
    if not k:
        raise RuntimeError("Set DATAGOV_API_KEY (free key from https://data.gov.in -> My Account)")
    return k


def discover(key, term="scholarship", limit=50):
    """Search the OGD catalogue for resources whose title mentions the term."""
    try:
        d = http_get(f"{BASE}/lists", {"format": "json", "api-key": key, "offset": 0, "limit": limit,
                                        "filters[title]": term})
    except RuntimeError as e:
        log(f"[datagov] catalogue search failed ({e}); set DATAGOV_RESOURCES instead")
        return []
    recs = d.get("records") or d.get("data") or []
    out = []
    for r in recs:
        rid = r.get("index_name") or r.get("resource_id") or r.get("id")
        title = r.get("title") or r.get("name")
        if rid and title and term in title.lower():
            out.append((rid, title))
    log(f"[datagov] catalogue search found {len(out)} '{term}' resources")
    return out


def fetch_resource(key, rid, page=500, max_rows=20000):
    rows, offset, meta = [], 0, {}
    while offset < max_rows:
        d = http_get(f"{BASE}/resource/{rid}", {"api-key": key, "format": "json", "offset": offset, "limit": page})
        if not meta:
            meta = {"title": d.get("title"), "org": d.get("org"), "updated": d.get("updated_date"),
                    "source": d.get("source"), "fields": [f.get("name") or f.get("id") for f in d.get("field", [])]}
        batch = d.get("records", [])
        rows.extend(batch)
        total = int(d.get("total") or 0)
        offset += page
        if not batch or offset >= total:
            break
    return meta, rows


def fetch():
    key = api_key()
    ids = [x.strip() for x in os.environ.get("DATAGOV_RESOURCES", "").split(",") if x.strip()]
    targets = [(i, None) for i in ids] or discover(key)
    resources, fetched = [], now_iso()
    for rid, title in targets:
        try:
            meta, rows = fetch_resource(key, rid)
        except RuntimeError as e:
            log(f"[datagov] {rid}: {e}")
            continue
        log(f"[datagov] {rid}: {len(rows)} rows - {meta.get('title')}")
        resources.append(dict(resourceId=rid, title=clean(meta.get("title") or title, 300), org=meta.get("org"),
                              updated=meta.get("updated"), fields=meta.get("fields"), rows=rows,
                              url=f"https://www.data.gov.in/resource/{rid}", fetchedAt=fetched))
    return resources


if __name__ == "__main__":
    res = fetch()
    print(save_json("datagov.json", res))
    if not res:
        sys.exit("[datagov] nothing fetched")
