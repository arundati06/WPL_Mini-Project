# ScholarConnect – Real Scholarship Database

**55 real scholarships: 32 national, 23 international.** Each one was checked on 18 Oct 2026 and stores:
- its **official page / application portal** (`official_url`)
- the page(s) it was checked against (`scholarship_sources`)
- a `last_verified` date

There is no dummy data. Account collections (users, institutions, students, saved_scholarships, sessions) live in MongoDB and are defined in `server/models/`. They start **empty**, fill up as people register, and are **never deleted by a data sync**.

> Amounts and deadlines change every cycle. A blank `deadline` means no fixed date has been announced, and `deadline_note` says when it usually opens. A blank amount means "fully funded" or "varies by course", and `amount_note` explains it. Always confirm on the official page.

## What's covered

| Group | Scholarships |
|---|---|
| Central government | NSP schemes (Central Sector, Post-Matric SC/ST/OBC/Minorities, Top Class SC & ST, NMMSS, Ishan Uday), AICTE Pragati / Saksham / Swanath / PG, INSPIRE-SHE, PMRF, UGC NET-JRF, PMSS, ST National Fellowship |
| State governments | Maharashtra (Rajarshi Shahu, MahaDBT), West Bengal (SVMCM), Gujarat (MYSY), Tamil Nadu (Pudhumai Penn), Karnataka (Vidyasiri) |
| Private / CSR | Reliance Foundation UG & PG, Kotak Kanya, HDFC Parivartan, ONGC, Tata Capital Pankh, Santoor, LIC Golden Jubilee, Sitaram Jindal |
| Study abroad | Fulbright-Nehru (Master's & Doctoral), Chevening, Commonwealth, Rhodes, Gates Cambridge, GREAT, Inlaks, Knight-Hennessy, Erasmus Mundus, DAAD WISE, Eiffel, Charpak, Swiss Government, Holland, Ireland GOI-IES, MEXT, GKS, Mitacs, National Overseas Scholarship (SC), J.N. Tata, K.C. Mahindra, Aga Khan |

## Files

| File | What it is |
|---|---|
| `db.json` | The scholarships (what `npm run db:content` loads into the MongoDB `scholarships` collection) |
| `schema.sql`, `seed.sql`, `accounts.sql` | Old MySQL scripts. No longer used by the server; the generator still writes the first two |
| `scholarships.csv` | Same scholarships as one flat sheet (opens in Excel) |
| `sample_queries.sql` | Old MySQL example queries (unused) |
| `generator/` | `real_records.py` holds every record. Edit it, then run `python3 build_real.py ../..` to regenerate everything, including `js/data.js` |

## Load it

**Easiest:** `cd server && npm install && npm run db:init` (see the main README).

To refresh scholarships later, run `npm run db:content` in `server/`. Accounts are kept. Open MongoDB Compass to browse the `scholarships`, `users`, `students` and other collections.

## How national and international fit together

`scholarships.scope` is `National` or `International`.

| Question | Where it's stored |
|---|---|
| Where does the student study? | `scholarship_host_countries`, or `host_any = 1` with `host_note` ("Any country") |
| Which Indian state must the applicant be from? | `scholarship_states`, or `all_india = 1` |
| Who can apply? | `scholarship_nationalities`, or `open_to_all_nationalities = 1` |
| Reserved for SC/ST/OBC/EWS? | `scholarship_social_categories` (no rows = open to all) |

Foreign awards keep their own currency (`amount_original`) plus an approximate rupee value (`amount_inr`). The rupee value uses the rates in `currencies` (Oct 2026), so update that table when you want fresh values.

`CALL sp_match_scholarships(<user_id>)` (for a student with a saved profile) runs the same rules and weights as `js/eligibility.js`. The two were checked against each other on test profiles and gave identical results.

## Pulling data from APIs (`fetch/`)

`fetch/sync.py` pulls real scholarship data from three APIs, merges it with the hand-verified records, and rebuilds everything: CSV, JSON and `js/data.js`.

| Source | API | Key? | Gives |
|---|---|---|---|
| Wikidata | `query.wikidata.org/sparql` | No | Scholarship names, providers, countries, official websites (worldwide) |
| Kaggle | Kaggle datasets API | Yes (`kaggle.json`) | ScholarshipPortal dataset: international university scholarships, levels, deadlines |
| data.gov.in | Open Government Data API | Yes (free) | Official Indian scholarship statistics → `scholarship_statistics` table |

```bash
cd database/fetch
cp .env.example .env            # add KAGGLE_USERNAME, KAGGLE_KEY, DATAGOV_API_KEY
python3 sync.py                 # fetch all three + rebuild (no pip installs needed)
python3 sync.py --only wikidata # just one source
python3 sync.py --apply         # also refresh MongoDB (uses server/.env; accounts untouched)
```

- Each record keeps `data_source` (`manual`, `wikidata` or `kaggle`), `external_id` (e.g. the Wikidata Q-id) and `fetched_at`.
- API records that duplicate a hand-verified scholarship are dropped, so the verified version wins.
- API sources don't publish eligibility rules, so API records appear in the directory and filters (there's a "Data Source" filter) but are **never auto-matched** by the eligibility form.
- If one API fails, the last saved copy in `database/imported/` is used and the other sources still run.
- Kaggle columns are detected automatically and the mapping is printed. If a column is missed, set `KAGGLE_COLUMNS` in `.env`, e.g. `{"name":"title","provider":"university"}`.

## Keeping it up to date

Before each academic year, open each `official_url`, update the amount, deadline and eligibility in `generator/real_records.py`, and rebuild. To add a scholarship, append one `add(...)` block with its official link and source.
