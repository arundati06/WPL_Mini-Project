# ScholarConnect

ScholarConnect is a scholarship directory and matching website built for a Web Programming Lab mini project. Students can browse real national and international scholarships, check which ones they qualify for, and save their favourites. Institutions can submit scholarships, and an admin reviews them.

## Features

- **Scholarship directory:** search and filter by name, provider, field, location, income and deadline.
- **Eligibility check:** a student fills in one form and gets a ranked list of scholarships with a match score and the reasons behind it.
- **Student accounts:** register, log in, save the eligibility profile, and save scholarships with the heart button. Saved items follow the account across devices.
- **Institution accounts:** register an institution, submit a scholarship, and see whether it was approved or rejected.
- **Admin page:** view all users, search, deactivate, reset passwords or delete accounts, verify institutions, and approve or reject scholarship submissions.
- **Daily data sync:** a script pulls scholarship data from public APIs and a GitHub Action keeps it fresh.

## Tech stack

| Layer     | Technology                                                          |
| --------- | ------------------------------------------------------------------- |
| Frontend  | HTML, CSS, vanilla JavaScript                                       |
| Backend   | Node.js, Express                                                    |
| Database  | MongoDB with Mongoose                                               |
| Auth      | bcrypt password hashes, `express-session` cookies stored in MongoDB |
| Data sync | Python scripts, GitHub Actions                                      |
