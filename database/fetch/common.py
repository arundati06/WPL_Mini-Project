"""Shared helpers for the ScholarConnect API fetchers (standard library only)."""
import base64, json, os, re, ssl, sys, time, urllib.error, urllib.parse, urllib.request
from datetime import datetime, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
DB_DIR = os.path.dirname(HERE)
IMPORT_DIR = os.path.join(DB_DIR, "imported")
os.makedirs(IMPORT_DIR, exist_ok=True)

USER_AGENT = "ScholarConnectBot/1.0 (student WPL mini-project; data sync script)"
LEVELS = ["Class 9-10", "Class 11-12", "Diploma", "Undergraduate", "Postgraduate", "Doctoral"]


def now_iso():
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def load_env():
    """Read KEY=VALUE lines from database/fetch/.env (if present) into os.environ."""
    path = os.path.join(HERE, ".env")
    if os.path.exists(path):
        for line in open(path, encoding="utf-8"):
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def http_get(url, params=None, headers=None, auth=None, retries=3, timeout=60, raw=False):
    """GET with retries + polite backoff. Returns parsed JSON (or bytes if raw=True)."""
    if params:
        url = url + ("&" if "?" in url else "?") + urllib.parse.urlencode(params)
    h = {"User-Agent": USER_AGENT, "Accept": "application/json"}
    h.update(headers or {})
    if auth:
        h["Authorization"] = "Basic " + base64.b64encode(f"{auth[0]}:{auth[1]}".encode()).decode()
    last = None
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers=h)
            with urllib.request.urlopen(req, timeout=timeout, context=ssl.create_default_context()) as r:
                body = r.read()
                return body if raw else json.loads(body.decode("utf-8"))
        except urllib.error.HTTPError as e:
            last = e
            if e.code in (401, 403, 404):
                raise RuntimeError(f"HTTP {e.code} for {url.split('?')[0]} - {e.read()[:300]!r}") from e
            time.sleep(2 * (attempt + 1))
        except (urllib.error.URLError, TimeoutError) as e:
            last = e
            time.sleep(2 * (attempt + 1))
    raise RuntimeError(f"Request failed after {retries} tries: {url.split('?')[0]} ({last})")


def save_json(name, data):
    path = os.path.join(IMPORT_DIR, name)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    return path


def clean(text, limit=None):
    if text is None:
        return ""
    t = re.sub(r"\s+", " ", str(text)).strip()
    return t[:limit].rstrip() + "…" if limit and len(t) > limit else t


def map_levels(text):
    """Map free-text degree info (e.g. 'Master, PhD') to ScholarConnect education levels."""
    t = (text or "").lower()
    out = []
    if re.search(r"\b(bachelor|undergrad|ug\b|b\.?sc|b\.?tech|b\.?a\b|first degree)", t): out.append("Undergraduate")
    if re.search(r"\b(master|postgrad|pg\b|m\.?sc|mba|m\.?tech|graduate)", t): out.append("Postgraduate")
    if re.search(r"\b(phd|ph\.d|doctor|doctoral|research degree)", t): out.append("Doctoral")
    if re.search(r"\b(diploma|polytechnic)", t): out.append("Diploma")
    if re.search(r"\b(class 1[12]|higher secondary|high school)", t): out.append("Class 11-12")
    return [l for l in LEVELS if l in out]


def record(**k):
    """Build one imported scholarship in the same shape as generator/real_records.py."""
    base = dict(
        scope="International", host=["Not specified"], currency="INR", amountOriginal=None,
        amountNote="Not provided by this data source - see the official page", period="Annual",
        levels=[], fields=["All Fields"], states=["All India"], nationalities=["Any country"],
        maxIncome=None, minPct=None, social=[], special="", gender="All", category="Other", awards=None,
        description="", documents=[], process="See the official page for how to apply.",
        deadline=None, deadlineNote="Not provided by this data source", ptype="Other",
        countryInfo={}, sources=[],
    )
    base.update(k)
    assert base.get("name") and base.get("dataSource") and base.get("externalId") and base.get("url"), k
    base["fetchedAt"] = base.get("fetchedAt") or now_iso()
    return base


def log(msg):
    print(msg, file=sys.stderr, flush=True)
