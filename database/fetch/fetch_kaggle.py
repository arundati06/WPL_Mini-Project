"""Fetch a scholarship dataset from Kaggle via the Kaggle API.

Default dataset: timmofeyy/-universities-schoolarships-all-around-the-world
(compiled from scholarshipportal.com - check the dataset's licence on Kaggle).

Credentials (any one of):
  * env vars KAGGLE_USERNAME and KAGGLE_KEY (or put them in database/fetch/.env)
  * ~/.kaggle/kaggle.json  (Kaggle -> Settings -> API -> Create New Token)

Columns are detected automatically by name; the detected mapping is printed.
Override with KAGGLE_COLUMNS='{"name":"title","provider":"university",...}'.

Run:  python3 fetch_kaggle.py [owner/dataset]   -> database/imported/kaggle.json
"""
import csv, io, json, os, re, sys, zipfile, hashlib
from datetime import datetime
from common import http_get, record, save_json, clean, log, load_env, map_levels, now_iso

DATASET = "timmofeyy/-universities-schoolarships-all-around-the-world"
API = "https://www.kaggle.com/api/v1/datasets/download/"

# candidate header names per field (lower-case substrings, first match wins)
FIELD_HINTS = {
    "name": ["scholarship name", "scholarship", "title", "name"],
    "provider": ["university", "provider", "institution", "organisation", "organization", "school", "sponsor"],
    "country": ["country", "location", "destination"],
    "level": ["degree", "level", "study level", "program"],
    "amount": ["amount", "fund", "value", "award", "grant", "financial", "benefit"],
    "deadline": ["deadline", "due", "closing"],
    "url": ["url", "link", "website", "href"],
    "description": ["description", "details", "about", "summary", "info"],
    "eligibility": ["eligib", "nationality", "requirement", "who can"],
}


def credentials():
    load_env()
    u, k = os.environ.get("KAGGLE_USERNAME"), os.environ.get("KAGGLE_KEY")
    if u and k:
        return u, k
    path = os.path.expanduser("~/.kaggle/kaggle.json")
    if os.path.exists(path):
        d = json.load(open(path))
        return d["username"], d["key"]
    raise RuntimeError("No Kaggle credentials: set KAGGLE_USERNAME/KAGGLE_KEY or create ~/.kaggle/kaggle.json")


def detect_columns(headers):
    override = os.environ.get("KAGGLE_COLUMNS")
    if override:
        return json.loads(override)
    low = {h: h.lower().strip() for h in headers}
    mapping, used = {}, set()
    for field, hints in FIELD_HINTS.items():
        for hint in hints:
            hit = next((h for h in headers if h not in used and hint in low[h]), None)
            if hit:
                mapping[field] = hit
                used.add(hit)
                break
    return mapping


def parse_deadline(text):
    t = clean(text)
    for fmt in ("%Y-%m-%d", "%d %B %Y", "%B %d, %Y", "%d %b %Y", "%b %d, %Y", "%d/%m/%Y", "%m/%d/%Y", "%d.%m.%Y"):
        try:
            return datetime.strptime(t, fmt).strftime("%Y-%m-%d")
        except ValueError:
            pass
    return None


def read_tables(blob):
    """Kaggle returns a zip (or a bare CSV for single-file datasets)."""
    if blob[:2] == b"PK":
        z = zipfile.ZipFile(io.BytesIO(blob))
        names = [n for n in z.namelist() if n.lower().endswith(".csv")]
        return {n: z.read(n).decode("utf-8-sig", errors="replace") for n in names}
    return {"data.csv": blob.decode("utf-8-sig", errors="replace")}


def to_records(tables, dataset):
    out, fetched = [], now_iso()
    for fname, text in tables.items():
        rows = list(csv.DictReader(io.StringIO(text)))
        if not rows:
            continue
        cols = detect_columns(list(rows[0].keys()))
        log(f"[kaggle] {fname}: {len(rows)} rows; columns found = {list(rows[0].keys())}")
        log(f"[kaggle] detected mapping = {cols}")
        if "name" not in cols:
            log(f"[kaggle] skipping {fname}: no name/title column (set KAGGLE_COLUMNS to map it)")
            continue
        g = lambda r, f: clean(r.get(cols[f], "")) if f in cols else ""
        for r in rows:
            name = g(r, "name")
            if not name:
                continue
            provider = g(r, "provider") or "Not specified"
            country = g(r, "country")
            countries = [c.strip() for c in re.split(r"[,;/|]", country) if c.strip()] if country else []
            national = countries == ["India"]
            url = g(r, "url") or f"https://www.kaggle.com/datasets/{dataset}"
            amount = g(r, "amount")
            dl_text = g(r, "deadline")
            elig = g(r, "eligibility")
            ext = hashlib.sha1(f"{name}|{provider}|{country}".encode()).hexdigest()[:16]
            out.append(record(
                name=clean(name, 150), provider=clean(provider, 150),
                ptype="University" if re.search(r"universit|college|institut|school", provider, re.I) else "Other",
                scope="National" if national else "International",
                host=["India"] if national else (countries or ["Not specified"]),
                nationalities=["India"] if national else ["Any country"],
                levels=map_levels(g(r, "level")),
                amountNote=clean(amount, 250) or "Not provided by this data source - see the official page",
                deadline=parse_deadline(dl_text),
                deadlineNote=clean(dl_text, 150) or "Not provided by this data source",
                special=clean(elig, 250), category="Study Abroad" if not national else "Other",
                description=clean(g(r, "description"), 600) or f"{name} offered by {provider}.",
                url=url, sources=[f"https://www.kaggle.com/datasets/{dataset}"],
                dataSource="kaggle", externalId=ext, fetchedAt=fetched,
            ))
    log(f"[kaggle] {len(out)} scholarships parsed")
    return out


def fetch(dataset=DATASET):
    user, key = credentials()
    log(f"[kaggle] downloading {dataset} ...")
    blob = http_get(API + dataset, auth=(user, key), raw=True, timeout=180,
                    headers={"Accept": "application/zip, text/csv, */*"})
    return to_records(read_tables(blob), dataset)


if __name__ == "__main__":
    recs = fetch(sys.argv[1] if len(sys.argv) > 1 else DATASET)
    print(save_json("kaggle.json", recs))
