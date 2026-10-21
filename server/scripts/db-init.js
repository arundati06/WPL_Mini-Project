/**
 * Set up / refresh the ScholarConnect MongoDB database.
 *   npm run db:init          -> create indexes + load the scholarships from database/db.json
 *   npm run db:content       -> only reload the scholarships (accounts untouched)
 *   node scripts/db-init.js --accounts   -> only create the account indexes (no scholarship reload)
 * Accounts are never deleted: only the "scholarships" collection is replaced.
 * The GitHub daily sync / sync.py rewrite database/db.json; running db:content loads that into MongoDB.
 */
const fs = require('fs');
const path = require('path');
const { connect, disconnect, safeUri } = require('../lib/db');
const { DB_DIR } = require('../lib/config');
const models = require('../models');
const { Session } = require('../lib/sessionStore');

async function loadScholarships() {
  const file = path.join(DB_DIR, 'db.json');
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  // db.json calls the number "id"; MongoDB documents get "scholarship_id" (and their own _id)
  const docs = data.scholarships.map(({ id, ...rest }) => ({ scholarship_id: id, ...rest }));
  const col = models.Scholarship.collection;
  await col.deleteMany({});
  await col.insertMany(docs);
  const manual = docs.filter((d) => d.dataSource === 'manual').length;
  console.log(`  ✓ scholarships: ${docs.length} loaded (${manual} hand-verified)`);
}

async function main() {
  const onlyAccounts = process.argv.includes('--accounts');
  const onlyContent = process.argv.includes('--content');
  try {
    await connect();
  } catch (e) {
    console.error(`\n✗ Could not connect to MongoDB at ${safeUri()}.`);
    console.error('  Is MongoDB running? Open MongoDB Compass and connect to mongodb://127.0.0.1:27017 to check.');
    console.error('  Using Atlas or another address? Set MONGODB_URI in server/.env.');
    console.error('  Details:', e.message);
    process.exit(1);
  }
  console.log(`Setting up MongoDB database at ${safeUri()} ...`);

  if (!onlyContent) {
    for (const m of [...Object.values(models), Session]) await m.createIndexes();
    console.log('  ✓ indexes (unique email, one profile per user, one save per scholarship ...)');
  }
  if (!onlyAccounts) await loadScholarships();

  const [scholarships, users] = await Promise.all([models.Scholarship.countDocuments(), models.User.countDocuments()]);
  console.log(`Done: ${scholarships} scholarships, ${users} registered users.`);
  await disconnect();
}

main().catch(async (e) => { console.error('✗', e.message); try { await disconnect(); } catch (_) { /* ignore */ } process.exit(1); });
