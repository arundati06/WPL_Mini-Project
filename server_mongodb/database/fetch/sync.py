"""ScholarConnect data sync - pulls scholarships from APIs and rebuilds the database.

  python3 sync.py                      # all sources: wikidata, kaggle, datagov
  python3 sync.py --only wikidata      # one or more sources (comma-separated)
  python3 sync.py --apply              # also load the result into MongoDB (runs server/scripts/db-init.js --content)
  python3 sync.py --no-fetch           # just rebuild from the last saved API results

What it does
  1. Calls each API (fetch_*.py). A source that fails keeps its previous saved result.
  2. Removes duplicates, and drops API records that match one of the 55 hand-verified ones.
  3. Saves database/imported/imported_records.json and statistics.json.
  4. Runs generator/build_real.py -> schema.sql, seed.sql, scholarships.csv, db.json, js/data.js
  5. With --apply: refreshes the scholarships collection in MongoDB via server/scripts/db-init.js --content
     (uses server/.env for the login; registered accounts are never touched)
"""
import argparse, json, os, re, subprocess, sys
from common import IMPORT_DIR, DB_DIR, save_json, log, load_env

SOURCES = ["wikidata", "kaggle", "datagov"]


def norm(name):
    n = re.sub(r"\(.*?\)", " ", (name or "").lower())
    n = re.sub(r"[^a-z0-9 ]+", " ", n.replace("&", " and "))
    return re.sub(r"\b(the|scholarships?|programme|program|scheme|for|of|and)\b", " ", n).split()


def same(a, b):
    ta, tb = set(norm(a)), set(norm(b))
    return bool(ta and tb) and len(ta & tb) / len(ta | tb) >= 0.8


def run_fetch(src):
    mod = __import__(f"fetch_{src}")
    data = mod.fetch()
    previous = load_saved(src)
    # Safety for unattended runs: an empty or sharply smaller result usually means the API
    # had a bad day, so keep the last good copy instead of wiping data.
    if previous and len(data) < 0.5 * len(previous):
        raise RuntimeError(f"got {len(data)} records vs {len(previous)} last time - keeping the previous copy")
    save_json(f"{src}.json", data)
    return data


def load_saved(src):
    path = os.path.join(IMPORT_DIR, f"{src}.json")
    return json.load(open(path, encoding="utf-8")) if os.path.exists(path) else []


def main():
    load_env()
    ap = argparse.ArgumentParser()
    ap.add_argument("--only", default=",".join(SOURCES))
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--no-fetch", action="store_true")
    a = ap.parse_args()
    wanted = [s.strip() for s in a.only.split(",") if s.strip()]

    results, status = {}, {}
    for src in SOURCES:
        if src in wanted and not a.no_fetch:
            try:
                results[src] = run_fetch(src)
                status[src] = f"fetched {len(results[src])}"
            except Exception as e:  # keep going; fall back to last good copy
                results[src] = load_saved(src)
                status[src] = f"FAILED ({e}); using {len(results[src])} saved"
        else:
            results[src] = load_saved(src)
            status[src] = f"saved copy, {len(results[src])}"

    # ---- merge scholarship records (wikidata first, then kaggle), de-duplicate
    sys.path.insert(0, os.path.join(DB_DIR, "generator"))
    from real_records import R as MANUAL
    merged, skipped_manual, skipped_dup = [], 0, 0
    for src in ("wikidata", "kaggle"):
        for r in results.get(src, []):
            if any(same(r["name"], m["name"]) for m in MANUAL):
                skipped_manual += 1
                continue
            dup = next((x for x in merged if same(r["name"], x["name"]) and set(r["host"]) & set(x["host"])), None)
            if dup:
                dup["sources"] = sorted(set(dup["sources"]) | set(r["sources"]))
                skipped_dup += 1
                continue
            merged.append(r)
    save_json("imported_records.json", merged)
    save_json("statistics.json", results.get("datagov", []))

    print("\n=== Sync summary")
    for s in SOURCES:
        print(f"  {s:9s} {status[s]}")
    print(f"  imported scholarships: {len(merged)}  (skipped {skipped_manual} already hand-verified, {skipped_dup} duplicates)")
    print(f"  statistics resources : {len(results.get('datagov', []))}")

    # ---- rebuild database files + js/data.js
    project = os.path.dirname(DB_DIR)
    subprocess.run([sys.executable, os.path.join(DB_DIR, "generator", "build_real.py"), project], check=True)

    if a.apply:
        # Refresh only the scholarships collection; user accounts are left untouched.
        server = os.path.join(project, "server")
        subprocess.run(["node", os.path.join(server, "scripts", "db-init.js"), "--content"], cwd=server, check=True)
        print("  loaded into MongoDB (accounts untouched)")


if __name__ == "__main__":
    main()
