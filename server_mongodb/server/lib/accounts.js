/** Delete an account and everything that belongs to it (MongoDB has no cascading deletes). */
const { User, Institution, Submission, StudentProfile, SavedScholarship } = require('../models');
const { Session } = require('./sessionStore');

async function deleteAccount(userId) {
  const inst = await Institution.findOne({ user: userId }).lean();
  if (inst) {
    await Submission.deleteMany({ institution: inst._id });
    await Institution.deleteOne({ _id: inst._id });
  }
  await StudentProfile.deleteMany({ user: userId });
  await SavedScholarship.deleteMany({ user: userId });
  await Session.deleteMany({ userId: String(userId) });      // log them out everywhere
  await User.deleteOne({ _id: userId });
}

module.exports = { deleteAccount };
