# ScholarConnect

A scholarship directory and matching website: **real national and international scholarships**, student and institution **accounts**, an **admin page**, and **daily data sync** from public APIs.

```
Website (HTML/CSS/JS)  ⇄  Node.js server (server/)  ⇄  MongoDB database "scholarconnect"
                                                       ├─ scholarships collection (reloaded by data syncs)
                                                       └─ account collections (grow as people register; never wiped)
Daily sync (database/fetch/) → Wikidata · Kaggle · data.gov.in → scholarships collection + js/data.js
```

---

## Phase 1: One-time setup (about 10 minutes)

**You need:** Node.js 20.19+ (`node -v`), Python 3 (`python3 --version`) and MongoDB.

- [ ] **Start MongoDB**
  - Install *MongoDB Community Server* (it runs as a service on port 27017) and, optionally, *MongoDB Compass* to look at the data. Connect Compass to `mongodb://127.0.0.1:27017`.
  - or Homebrew: `brew tap mongodb/brew && brew install mongodb-community && brew services start mongodb-community`
  - or use a free MongoDB Atlas cluster and paste its connection string into `MONGODB_URI`.
- [ ] **Configure the server.** From the project folder:
  ```bash
  cd server
  cp .env.example .env
  open -e .env        # set MONGODB_URI if yours is not the default; change SESSION_SECRET to any long random text
  ```
- [ ] **Install and create the database**
  ```bash
  npm install
  npm run db:init      # creates indexes and loads the 55 verified scholarships
  ```
- [ ] **Create your admin login**
  ```bash
  npm run create-admin # asks for your name, email and a password
  ```
- [ ] **Optional: check everything works:** `npm test` (17 automatic checks; removes its test accounts afterwards)

## Phase 2: Run the website

```bash
cd server
npm start
```
Open **http://localhost:3000**. Leave the Terminal window open while you use the site; press `Ctrl + C` to stop.

> Double-clicking `index.html` still lets you browse scholarships, but **registering and logging in need the server** (the pages will tell you so).

## Phase 3: What people can do

| Who | Where | What happens in the database |
|---|---|---|
| Student | *Create Student Account* | New document in `users` (password stored as a bcrypt hash) |
| Student | *Eligibility Form* (while logged in) | Profile saved in `students`, and pre-filled next time |
| Student | ♥ on any scholarship | Saved in `saved_scholarships`, and synced across devices |
| Student | *Students* dashboard | Matches calculated on the server (`server/lib/match.js`) |
| Institution | *Register Institution* | `users` + `institutions` + a `scholarship_submissions` row (Pending) |
| Institution | *Institutions* page (logged in) | Sees its submissions and the admin's decision |
| Admin | **admin.html** | Lists all users; search, deactivate, reset password, delete; verify institutions; approve or reject submissions |

## Phase 4: Keep scholarship data fresh

```bash
cd database/fetch
python3 sync.py --apply       # pull from APIs, rebuild data, refresh MongoDB (accounts untouched)
```
- Keys for Kaggle and data.gov.in go in `database/fetch/.env` (see `.env.example`). Wikidata needs no key.
- Run it automatically every day: `bash schedule_mac.sh install` (Mac), or the GitHub Action in `.github/workflows/`.
- Details: `database/README.md`.

## Where everything is

| Path | What |
|---|---|
| `*.html`, `css/`, `js/` | The website (`js/auth.js` handles accounts, `js/admin.js` the admin page) |
| `server/` | Node.js + Express backend: `routes/` (auth, student, institution, admin), `scripts/` (db-init, create-admin, smoke-test) |
| `database/db.json` | Scholarship data (rebuilt by syncs, loaded into MongoDB by `npm run db:content`) |
| `server/models/` | Mongoose models for the account collections (users, institutions, students, ...) |
| `database/fetch/` | API fetchers + `sync.py` + schedulers |
| `database/generator/` | Hand-verified records (`real_records.py`) and the build script |

## Security built in

- Passwords hashed with bcrypt; never stored or logged in plain text.
- Login sessions are stored in MongoDB (`sessions` collection) with an http-only cookie.
- Login and registration are rate-limited (30 tries per 15 minutes).
- All inputs are validated on the server too. Queries go through Mongoose schemas, and request fields are type-checked before use. Request bodies must be JSON (blocks cross-site form posts).
- The server only serves website files, never `.env`, `database/` or `server/`.
- `.env` files are git-ignored. Keep keys and passwords out of GitHub.

## Hosting note

GitHub Pages only hosts static files, so it can show the scholarship directory but **not** accounts. To put accounts online you need a host that runs Node.js (e.g. Render or Railway) plus a hosted MongoDB database (MongoDB Atlas has a free tier). Set the same variables from `server/.env` there (`MONGODB_URI` becomes the Atlas connection string) and run `npm run db:init` once.
