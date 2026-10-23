/* ============================================================
   ScholarConnect - REAL scholarship data (national + international)
   GENERATED from database/generator - mirrors database/seed.sql.
   561 real scholarships, each with its official URL (officialUrl) and the
   page(s) it was checked against (sources). Last verified: 2026-10-18.
   Amounts/deadlines change every cycle; always confirm on officialUrl.

   null values mean "not fixed / not applicable":
     amount, amountOriginal  -> see amountNote (e.g. fully funded, varies by course)
     deadline                -> see deadlineNote (e.g. opens every June)
     maxIncome               -> no income limit
     minimumPercentage       -> no fixed % (see specialEligibility)
   ============================================================ */

const SCHOLARSHIPS = [
  {
    "id": 1,
    "name": "Central Sector Scheme of Scholarships for College and University Students",
    "provider": "Department of Higher Education, Ministry of Education",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 12000,
    "amount": 12000,
    "amountNote": "₹12,000/year (UG, first 3 years); ₹20,000/year (PG)",
    "amountPeriod": "Annual",
    "awards": 82000,
    "deadline": "2026-10-31",
    "deadlineNote": "NSP 2026-27 cycle (verify on NSP)",
    "educationLevel": [
      "Undergraduate",
      "Postgraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 450000,
    "minimumPercentage": null,
    "category": "Merit",
    "socialCategories": [],
    "specialEligibility": "Above 80th percentile of successful candidates in Class 12 (own board & stream)",
    "requires": null,
    "gender": "All",
    "description": "Merit-cum-means scholarship for students in the top 20 percentile of their Class 12 board who are in regular UG/PG courses. 50% of slots are for girls; SC/ST/OBC reservation applies.",
    "documents": [
      "Class 12 Marksheet",
      "Income Certificate",
      "Aadhaar-seeded Bank Account",
      "Bonafide Certificate",
      "Caste Certificate (if applicable)"
    ],
    "process": "Apply (fresh or renewal) on the National Scholarship Portal; institute and board verify. Renewal needs 50% marks and 75% attendance.",
    "officialUrl": "https://scholarships.gov.in",
    "sources": [
      "https://nitkkr.ac.in/wp-content/uploads/2025/04/Central-Sector-Scheme-Of-Scholarships-For-College-And-University-Students.pdf",
      "https://www.indiascholarships.in/scholarships/central-sector-scheme-of-scholarship-for-college-and-university-students"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 2,
    "name": "Post-Matric Scholarship for Scheduled Caste Students",
    "provider": "Ministry of Social Justice and Empowerment",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Tuition & non-refundable fees reimbursed + monthly academic allowance (rate depends on course group)",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Set by each state; usually Oct–Dec",
    "educationLevel": [
      "Class 11-12",
      "Diploma",
      "Undergraduate",
      "Postgraduate",
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 250000,
    "minimumPercentage": null,
    "category": "Social Welfare",
    "socialCategories": [
      "SC"
    ],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Centrally sponsored scheme that funds SC students for any recognised post-matric course, from Class 11 to PhD. Implemented through state SC welfare departments.",
    "documents": [
      "Caste Certificate",
      "Income Certificate",
      "Previous Marksheet",
      "Bonafide / Admission Proof",
      "Aadhaar-seeded Bank Account"
    ],
    "process": "Apply on NSP or your state's scholarship portal (e.g. MahaDBT); funds are paid by DBT.",
    "officialUrl": "https://scholarships.gov.in",
    "sources": [
      "https://www.indiascholarships.in/guides/sc-postmatric-scholarship-income-rules"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 3,
    "name": "AICTE Pragati Scholarship for Girl Students",
    "provider": "All India Council for Technical Education (AICTE)",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 50000,
    "amount": 50000,
    "amountNote": "₹50,000/year (degree: up to 4 years; diploma: up to 3 years)",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": "2026-10-31",
    "deadlineNote": "Tentative, NSP 2026-27",
    "educationLevel": [
      "Diploma",
      "Undergraduate"
    ],
    "fields": [
      "Engineering",
      "Computer Science",
      "Information Technology",
      "Architecture",
      "Pharmacy"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 800000,
    "minimumPercentage": null,
    "category": "Women in Education",
    "socialCategories": [],
    "specialEligibility": "Girl students; up to two girls per family; first year (or lateral-entry second year) of an AICTE-approved technical course",
    "requires": null,
    "gender": "Female",
    "description": "AICTE scheme for students in AICTE-approved technical degree or diploma courses. Girl students; up to two girls per family.",
    "documents": [
      "Class 10/12 Marksheet",
      "Income Certificate",
      "Admission Letter",
      "Tuition Fee Receipt",
      "Aadhaar-seeded Bank Account"
    ],
    "process": "Apply on the National Scholarship Portal; the institute verifies the application.",
    "officialUrl": "https://scholarships.gov.in",
    "sources": [
      "https://www.indiascholarships.in/news/aicte-scholarships-and-fellowships-complete-guide-for-students-researchers-and-f"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 4,
    "name": "AICTE Saksham Scholarship for Specially-Abled Students",
    "provider": "All India Council for Technical Education (AICTE)",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 50000,
    "amount": 50000,
    "amountNote": "₹50,000/year (degree: up to 4 years; diploma: up to 3 years)",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": "2026-10-31",
    "deadlineNote": "Tentative, NSP 2026-27",
    "educationLevel": [
      "Diploma",
      "Undergraduate"
    ],
    "fields": [
      "Engineering",
      "Computer Science",
      "Information Technology",
      "Architecture",
      "Pharmacy"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 800000,
    "minimumPercentage": null,
    "category": "Disability Support",
    "socialCategories": [],
    "specialEligibility": "Benchmark disability of 40% or more; first year (or lateral-entry second year) of an AICTE-approved technical course",
    "requires": "Disability",
    "gender": "All",
    "description": "AICTE scheme for students in AICTE-approved technical degree or diploma courses. Benchmark disability of 40% or more.",
    "documents": [
      "Class 10/12 Marksheet",
      "Income Certificate",
      "Admission Letter",
      "Tuition Fee Receipt",
      "Aadhaar-seeded Bank Account"
    ],
    "process": "Apply on the National Scholarship Portal; the institute verifies the application.",
    "officialUrl": "https://scholarships.gov.in",
    "sources": [
      "https://www.indiascholarships.in/news/aicte-scholarships-and-fellowships-complete-guide-for-students-researchers-and-f"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 5,
    "name": "AICTE Swanath Scholarship",
    "provider": "All India Council for Technical Education (AICTE)",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 50000,
    "amount": 50000,
    "amountNote": "₹50,000/year (degree: up to 4 years; diploma: up to 3 years)",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": "2026-10-31",
    "deadlineNote": "Tentative, NSP 2026-27",
    "educationLevel": [
      "Diploma",
      "Undergraduate"
    ],
    "fields": [
      "Engineering",
      "Computer Science",
      "Information Technology",
      "Architecture",
      "Pharmacy"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 800000,
    "minimumPercentage": null,
    "category": "Financial Need",
    "socialCategories": [],
    "specialEligibility": "Orphans, wards of parents who died of COVID-19, or wards of martyred armed forces / CAPF personnel; first year (or lateral-entry second year) of an AICTE-approved technical course",
    "requires": "Orphan / Ward of Armed Forces",
    "gender": "All",
    "description": "AICTE scheme for students in AICTE-approved technical degree or diploma courses. Orphans, wards of parents who died of COVID-19, or wards of martyred armed forces / CAPF personnel.",
    "documents": [
      "Class 10/12 Marksheet",
      "Income Certificate",
      "Admission Letter",
      "Tuition Fee Receipt",
      "Aadhaar-seeded Bank Account"
    ],
    "process": "Apply on the National Scholarship Portal; the institute verifies the application.",
    "officialUrl": "https://scholarships.gov.in",
    "sources": [
      "https://www.indiascholarships.in/news/aicte-scholarships-and-fellowships-complete-guide-for-students-researchers-and-f"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 6,
    "name": "AICTE PG Scholarship (GATE / GPAT / CEED)",
    "provider": "All India Council for Technical Education (AICTE)",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 148800,
    "amount": 148800,
    "amountNote": "₹12,400/month for up to 24 months",
    "amountPeriod": "Monthly",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Portal usually opens around September",
    "educationLevel": [
      "Postgraduate"
    ],
    "fields": [
      "Engineering",
      "Computer Science",
      "Information Technology",
      "Architecture",
      "Pharmacy",
      "Design"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Merit",
    "socialCategories": [],
    "specialEligibility": "Valid GATE, GPAT or CEED score; admitted to an AICTE-approved M.E./M.Tech/M.Arch/M.Pharm/M.Des",
    "requires": null,
    "gender": "All",
    "description": "Monthly stipend for GATE/GPAT/CEED-qualified students in AICTE-approved full-time postgraduate programmes.",
    "documents": [
      "GATE / GPAT / CEED Scorecard",
      "Admission Letter",
      "Aadhaar-seeded Bank Account"
    ],
    "process": "The institute registers eligible students on AICTE's PG scholarship portal; stipend paid monthly by DBT.",
    "officialUrl": "https://aicte.gov.in",
    "sources": [
      "https://www.indiascholarships.in/news/aicte-scholarships-and-fellowships-complete-guide-for-students-researchers-and-f"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 7,
    "name": "National Overseas Scholarship for SC Students",
    "provider": "Ministry of Social Justice and Empowerment",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Any country"
    ],
    "currency": "USD",
    "amountOriginal": 15400,
    "amount": 1314000,
    "amountNote": "Full tuition + US$15,400/yr maintenance (UK: £9,900) + contingency, airfare, visa and insurance",
    "amountPeriod": "Annual",
    "awards": 125,
    "deadline": null,
    "deadlineNote": "Round 1 Feb–Mar, Round 2 Sep–Oct (40 days each)",
    "educationLevel": [
      "Postgraduate",
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 800000,
    "minimumPercentage": 60,
    "category": "Study Abroad",
    "socialCategories": [
      "SC"
    ],
    "specialEligibility": "Unconditional offer from a QS top-500 university; age 35 or under; 30% of awards for women",
    "requires": null,
    "gender": "All",
    "description": "Government of India scholarship for SC (also denotified/nomadic tribes and landless labourer families) students pursuing a master's or PhD abroad.",
    "documents": [
      "Caste Certificate",
      "Income Certificate",
      "Unconditional Offer Letter",
      "Degree Marksheets",
      "Passport"
    ],
    "process": "Apply online at nosmsje.gov.in in one of two rounds; selection on merit within category quotas.",
    "officialUrl": "https://nosmsje.gov.in",
    "sources": [
      "https://nosmsje.gov.in/nosmsje/public/images/Scheme-guidelines-2025-26.pdf"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 8,
    "name": "INSPIRE Scholarship for Higher Education (SHE)",
    "provider": "Department of Science and Technology",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 80000,
    "amount": 80000,
    "amountNote": "₹80,000/year",
    "amountPeriod": "Annual",
    "awards": 10000,
    "deadline": null,
    "deadlineNote": "Annual call, usually Oct–Dec",
    "educationLevel": [
      "Undergraduate",
      "Postgraduate"
    ],
    "fields": [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "Earth Sciences",
      "Statistics"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "STEM",
    "socialCategories": [],
    "specialEligibility": "Top 1% in Class 12 board, or JEE-Advanced/NEET top 10,000, or admission to IISER/NISER/CEBS; age 17–22",
    "requires": null,
    "gender": "All",
    "description": "DST scholarship with mentorship for talented students pursuing BSc/MSc (or integrated MS) in the natural and basic sciences.",
    "documents": [
      "Class 12 Marksheet",
      "Eligibility Proof (board top-1% certificate or rank card)",
      "Endorsement from Principal",
      "Bank Details"
    ],
    "process": "Apply on the online-inspire.gov.in portal once the annual call is announced.",
    "officialUrl": "https://online-inspire.gov.in",
    "sources": [
      "https://www.indiascienceandtechnology.gov.in/nurturing-minds/scholarships/post-graduation/inspire-she-innovation-science-pursuit-inspired"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 9,
    "name": "Top Class Education Scheme for SC Students",
    "provider": "Ministry of Social Justice and Empowerment",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 286000,
    "amount": 286000,
    "amountNote": "Full tuition (capped at ₹2 lakh/yr in private institutes) + ₹86,000 first-year allowance (₹41,000 later years)",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": "2026-10-31",
    "deadlineNote": "NSP 2026-27 cycle",
    "educationLevel": [
      "Undergraduate",
      "Postgraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 800000,
    "minimumPercentage": null,
    "category": "Social Welfare",
    "socialCategories": [
      "SC"
    ],
    "specialEligibility": "Admission to a notified premier institution (IITs, IIMs, NITs, AIIMS, NLUs etc.); 30% slots for girls",
    "requires": null,
    "gender": "All",
    "description": "Covers full fees and living, book and computer costs for SC students who secure admission to notified top-class institutions.",
    "documents": [
      "Caste Certificate",
      "Income Certificate",
      "Admission Letter",
      "Fee Receipt",
      "Aadhaar-seeded Bank Account"
    ],
    "process": "Apply on the National Scholarship Portal; the institution verifies.",
    "officialUrl": "https://scholarships.gov.in",
    "sources": [
      "https://www.indiascholarships.in/scholarships/top-class-education-scheme-for-sc-students"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 10,
    "name": "Prime Minister's Scholarship Scheme (PMSS) for Wards of Ex-Servicemen",
    "provider": "Kendriya Sainik Board, Ministry of Defence",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 36000,
    "amount": 36000,
    "amountNote": "₹3,000/month for girls, ₹2,500/month for boys (paid annually)",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": "2026-12-31",
    "deadlineNote": "Fresh applications 2026-27",
    "educationLevel": [
      "Undergraduate"
    ],
    "fields": [
      "Engineering",
      "Medicine",
      "Pharmacy",
      "Business Administration",
      "Computer Science",
      "Architecture",
      "Law",
      "Nursing"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": 60,
    "category": "Government",
    "socialCategories": [],
    "specialEligibility": "Dependent wards/widows of ex-servicemen and ex-Coast Guard personnel; first year of a professional/technical course (MBA/MCA also allowed)",
    "requires": "Orphan / Ward of Armed Forces",
    "gender": "All",
    "description": "Scholarship for wards and widows of ex-servicemen and ex-Coast Guard personnel pursuing professional degree courses.",
    "documents": [
      "Ex-Serviceman Discharge Book / PPO",
      "Class 12 Marksheet",
      "Admission Proof",
      "Bank Details"
    ],
    "process": "Apply online on the Kendriya Sainik Board portal; verified by the Zila Sainik Board.",
    "officialUrl": "https://desw.gov.in/prime-ministers-scholarship-scheme-pmss",
    "sources": [
      "https://www.indiascholarships.in/scholarships/prime-ministers-scholarship-scheme-pmss-for-wardswidows-of-ex-servicemen-and-ex-coast-guar"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 11,
    "name": "Prime Minister's Research Fellowship (PMRF)",
    "provider": "Ministry of Education",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 840000,
    "amount": 840000,
    "amountNote": "₹70,000/month (yrs 1–2), ₹75,000 (yr 3), ₹80,000 (yrs 4–5) + ₹2 lakh/yr research grant",
    "amountPeriod": "Monthly",
    "awards": null,
    "deadline": "2026-10-31",
    "deadlineNote": "Current cycle; cycles run twice a year",
    "educationLevel": [
      "Doctoral"
    ],
    "fields": [
      "Engineering",
      "Computer Science",
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Research",
    "socialCategories": [],
    "specialEligibility": "PhD admission at a PMRF granting institution (IITs, IISc, IISERs, NITs, select central universities); CGPA 8.0+ (direct entry)",
    "requires": null,
    "gender": "All",
    "description": "India's flagship doctoral fellowship for top students joining PhD programmes at premier institutes in science and technology.",
    "documents": [
      "Degree Transcripts",
      "PhD Admission Letter",
      "Research Proposal",
      "Recommendation Letters"
    ],
    "process": "Get admitted to a PhD at a granting institute, which nominates you; complete the application on the PMRF portal.",
    "officialUrl": "https://www.pmrf.in",
    "sources": [
      "https://www.indiascholarships.in/scholarships/prime-ministers-research-fellowship-pmrf"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 12,
    "name": "Post-Matric Scholarship for Scheduled Tribe Students",
    "provider": "Ministry of Tribal Affairs",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 12000,
    "amount": 12000,
    "amountNote": "Course fees (GoI cap ₹2.5 lakh engg / ₹6 lakh MBBS at private institutes) + stipend up to ₹1,200/month (hostellers, professional courses)",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "State portals; suggested registration window 1 Apr–30 Sep",
    "educationLevel": [
      "Class 11-12",
      "Diploma",
      "Undergraduate",
      "Postgraduate",
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 250000,
    "minimumPercentage": null,
    "category": "Social Welfare",
    "socialCategories": [
      "ST"
    ],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Funds ST students in any recognised post-matric course from Class 11 to postgraduate level; extra allowance for students with disabilities.",
    "documents": [
      "ST Certificate",
      "Income Certificate",
      "Previous Marksheet",
      "Fee Receipt",
      "Aadhaar-seeded Bank Account"
    ],
    "process": "Apply on your state/UT scholarship portal (or NSP where the state has none); tracked on dbttribal.gov.in.",
    "officialUrl": "https://tribal.nic.in/ScholarshiP.aspx",
    "sources": [
      "https://www.chowgules.ac.in/wp-content/uploads/2026/07/NSP-Scholarship-2026-27-Circular-and-Guidelines-for-ST-students.pdf"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 13,
    "name": "PM YASASVI Post-Matric Scholarship for OBC, EBC and DNT Students",
    "provider": "Ministry of Social Justice and Empowerment",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Tuition/non-refundable fees + academic allowance (varies by course and state)",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": "2026-10-31",
    "deadlineNote": "NSP 2026-27 cycle",
    "educationLevel": [
      "Class 11-12",
      "Diploma",
      "Undergraduate",
      "Postgraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 250000,
    "minimumPercentage": null,
    "category": "Social Welfare",
    "socialCategories": [
      "OBC"
    ],
    "specialEligibility": "Also open to Economically Backward Classes (EBC) and De-notified Tribes (DNT)",
    "requires": null,
    "gender": "All",
    "description": "Umbrella scheme (PM YASASVI) supporting OBC, EBC and DNT students in post-matric education.",
    "documents": [
      "Caste Certificate",
      "Income Certificate",
      "Previous Marksheet",
      "Aadhaar-seeded Bank Account"
    ],
    "process": "Apply on NSP or the state scholarship portal.",
    "officialUrl": "https://scholarships.gov.in",
    "sources": [
      "https://www.indiascholarships.in/scholarships/pm-yasasvi-jk-obc/eligibility"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 14,
    "name": "National Means-cum-Merit Scholarship (NMMSS)",
    "provider": "Department of School Education & Literacy, Ministry of Education",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 12000,
    "amount": 12000,
    "amountNote": "₹12,000/year (₹1,000/month) from Class 9 to 12",
    "amountPeriod": "Annual",
    "awards": 100000,
    "deadline": "2026-11-30",
    "deadlineNote": "Application deadline; state exam usually Nov–Dec",
    "educationLevel": [
      "Class 9-10",
      "Class 11-12"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 350000,
    "minimumPercentage": 55,
    "category": "Merit",
    "socialCategories": [],
    "specialEligibility": "Class 8 student of a government / aided / local-body school; must clear the state NMMS exam (MAT + SAT)",
    "requires": null,
    "gender": "All",
    "description": "Prevents drop-out after Class 8 by supporting meritorious students from low-income families until Class 12.",
    "documents": [
      "Class 8 Marksheet",
      "Income Certificate",
      "NMMS Exam Result",
      "Aadhaar-seeded Bank Account"
    ],
    "process": "Qualify the state-level NMMS exam, then apply on NSP; renew each year (55% in Class 9/11, 60% in Class 10).",
    "officialUrl": "https://scholarships.gov.in",
    "sources": [
      "https://www.indiascholarships.in/scholarships/national-means-cum-merit-scholarship"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 15,
    "name": "Post-Matric Scholarship for Minorities",
    "provider": "Ministry of Minority Affairs",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 12000,
    "amount": 12000,
    "amountNote": "Admission & tuition fees + maintenance allowance up to ₹1,200/month for hostellers",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": "2026-10-31",
    "deadlineNote": "NSP 2026-27 cycle",
    "educationLevel": [
      "Class 11-12",
      "Diploma",
      "Undergraduate",
      "Postgraduate",
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 200000,
    "minimumPercentage": 50,
    "category": "Social Welfare",
    "socialCategories": [],
    "specialEligibility": "Minority Community (Muslim, Christian, Sikh, Buddhist, Jain, Parsi); 30% for girls",
    "requires": "Minority Community",
    "gender": "All",
    "description": "Supports students from notified minority communities from Class 11 to PhD, including ITI and vocational courses.",
    "documents": [
      "Minority Community Self-Declaration",
      "Income Certificate",
      "Previous Marksheet",
      "Fee Receipt",
      "Aadhaar-seeded Bank Account"
    ],
    "process": "Apply on the National Scholarship Portal.",
    "officialUrl": "https://scholarships.gov.in",
    "sources": [
      "https://www.indiascholarships.in/scholarships/post-matric-scholarship-scheme-for-minorities-nsp"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 16,
    "name": "Ishan Uday Special Scholarship for North Eastern Region",
    "provider": "University Grants Commission (UGC)",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 78000,
    "amount": 78000,
    "amountNote": "₹5,400/month (general degree) or ₹7,800/month (technical/medical/professional), 10 months a year",
    "amountPeriod": "Annual",
    "awards": 10000,
    "deadline": "2026-10-31",
    "deadlineNote": "NSP 2026-27 cycle",
    "educationLevel": [
      "Undergraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "Assam",
      "Arunachal Pradesh",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Sikkim",
      "Tripura"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 450000,
    "minimumPercentage": null,
    "category": "Financial Need",
    "socialCategories": [],
    "specialEligibility": "Domicile of a North-Eastern state; regular (not distance/part-time) UG course",
    "requires": null,
    "gender": "All",
    "description": "UGC scholarship that helps students from the North-Eastern Region pursue general, technical and professional undergraduate degrees.",
    "documents": [
      "Domicile Certificate",
      "Income Certificate",
      "Class 12 Marksheet",
      "Admission Proof",
      "Aadhaar-seeded Bank Account"
    ],
    "process": "Apply on the National Scholarship Portal; the institute verifies.",
    "officialUrl": "https://scholarships.gov.in",
    "sources": [
      "https://www.indiascholarships.in/scholarships/ishan-uday-special-scholarship-for-north-eastern-region"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 17,
    "name": "UGC Junior Research Fellowship (NET-JRF)",
    "provider": "University Grants Commission (UGC)",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 444000,
    "amount": 444000,
    "amountNote": "₹37,000/month (JRF, 2 yrs), ₹42,000/month (SRF, 3 yrs) + HRA + annual contingency",
    "amountPeriod": "Monthly",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Via UGC-NET, held June and December",
    "educationLevel": [
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": 55,
    "category": "Research",
    "socialCategories": [],
    "specialEligibility": "Qualify UGC-NET with JRF; age 30 or under at exam (relaxation for OBC-NCL/SC/ST/PwD/women)",
    "requires": null,
    "gender": "All",
    "description": "Fellowship for NET-JRF qualified candidates pursuing a PhD in humanities, social sciences and other UGC-NET subjects.",
    "documents": [
      "NET-JRF Certificate",
      "PG Marksheet",
      "PhD Admission / Joining Report"
    ],
    "process": "Qualify UGC-NET (held twice a year by NTA), then join a PhD; the university processes the fellowship.",
    "officialUrl": "https://ugcnet.nta.nic.in",
    "sources": [
      "https://www.indiascholarships.in/scholarships/ugc-junior-research-fellowship-jrf"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 18,
    "name": "National Fellowship for Higher Education of ST Students",
    "provider": "Ministry of Tribal Affairs",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 372000,
    "amount": 372000,
    "amountNote": "₹31,000/month (JRF), ₹35,000/month (SRF) + HRA + contingency",
    "amountPeriod": "Monthly",
    "awards": 750,
    "deadline": "2026-10-31",
    "deadlineNote": "Expected; verify on portal",
    "educationLevel": [
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": 55,
    "category": "Research",
    "socialCategories": [
      "ST"
    ],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship for Scheduled Tribe students pursuing MPhil/PhD at recognised universities.",
    "documents": [
      "ST Certificate",
      "PG Marksheet",
      "PhD Registration Proof"
    ],
    "process": "Apply on the national tribal fellowship portal; selection on PG marks if applicants exceed 750.",
    "officialUrl": "https://fellowship.tribal.gov.in",
    "sources": [
      "https://www.indiascholarships.in/scholarships/national-fellowship-scholarship-for-higher-education-of-st-students"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 19,
    "name": "National Scholarship for Higher Education of ST Students (Top Class)",
    "provider": "Ministry of Tribal Affairs",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 286000,
    "amount": 286000,
    "amountNote": "Full tuition (up to ₹2.5 lakh/yr at private institutes) + ₹3,000/month stipend + ₹5,000 books + ₹45,000 one-time computer",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": "2026-10-31",
    "deadlineNote": "Expected; verify on NSP",
    "educationLevel": [
      "Undergraduate",
      "Postgraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 600000,
    "minimumPercentage": null,
    "category": "Social Welfare",
    "socialCategories": [
      "ST"
    ],
    "specialEligibility": "Merit admission to a notified premier institution (not management quota)",
    "requires": null,
    "gender": "All",
    "description": "Covers full costs for ST students admitted on merit to notified top institutions (IITs, IIMs, AIIMS, NITs etc.).",
    "documents": [
      "ST Certificate",
      "Income Certificate",
      "Admission Letter",
      "Fee Receipt",
      "Aadhaar-seeded Bank Account"
    ],
    "process": "Apply on the National Scholarship Portal.",
    "officialUrl": "https://scholarships.gov.in",
    "sources": [
      "https://www.indiascholarships.in/scholarships/national-fellowship-scholarship-for-higher-education-of-st-students"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 20,
    "name": "Reliance Foundation Undergraduate Scholarships",
    "provider": "Reliance Foundation",
    "type": "Foundation",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 200000,
    "amount": 200000,
    "amountNote": "Up to ₹2 lakh over the degree",
    "amountPeriod": "Over full course",
    "awards": 5000,
    "deadline": null,
    "deadlineNote": "2026-27 applications open; check site for closing date",
    "educationLevel": [
      "Undergraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Merit",
    "socialCategories": [],
    "specialEligibility": "First-year full-time UG students; merit-cum-means with an aptitude test",
    "requires": null,
    "gender": "All",
    "description": "Merit-cum-means scholarship for first-year undergraduates in any stream, selected through an online aptitude test.",
    "documents": [
      "Class 12 Marksheet",
      "Income Proof",
      "Admission Proof",
      "Aadhaar"
    ],
    "process": "Apply online and take the aptitude test; no fee at any stage.",
    "officialUrl": "https://scholarships.reliancefoundation.org",
    "sources": [
      "https://www.reliancefoundation.org/media/media-release/Reliance_Foundation_Scholarships_2026-27"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 21,
    "name": "Reliance Foundation Postgraduate Scholarships",
    "provider": "Reliance Foundation",
    "type": "Foundation",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 600000,
    "amount": 600000,
    "amountNote": "Up to ₹6 lakh over the degree",
    "amountPeriod": "Over full course",
    "awards": 100,
    "deadline": null,
    "deadlineNote": "2026-27 applications open; check site for closing date",
    "educationLevel": [
      "Postgraduate"
    ],
    "fields": [
      "Engineering",
      "Computer Science",
      "Information Technology",
      "Biology",
      "Biotechnology",
      "Physics",
      "Chemistry",
      "Mathematics"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "STEM",
    "socialCategories": [],
    "specialEligibility": "First-year full-time PG students in engineering, technology, energy and life sciences",
    "requires": null,
    "gender": "All",
    "description": "Merit-based scholarship for first-year postgraduates in future-ready science and technology disciplines.",
    "documents": [
      "UG Marksheets",
      "Admission Proof",
      "Statement of Purpose",
      "Resume"
    ],
    "process": "Apply online; selection on academic merit, aptitude and interview.",
    "officialUrl": "https://scholarships.reliancefoundation.org",
    "sources": [
      "https://www.reliancefoundation.org/media/media-release/Reliance_Foundation_Scholarships_2026-27"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 22,
    "name": "Kotak Kanya Scholarship",
    "provider": "Kotak Education Foundation",
    "type": "Foundation",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 150000,
    "amount": 150000,
    "amountNote": "₹1.5 lakh/year until graduation",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Usually closes around September; 2026-27 cycle expected",
    "educationLevel": [
      "Undergraduate"
    ],
    "fields": [
      "Engineering",
      "Medicine",
      "Business Administration",
      "Law",
      "Architecture",
      "Design"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 600000,
    "minimumPercentage": 75,
    "category": "Women in Education",
    "socialCategories": [],
    "specialEligibility": "Admission to an NIRF/NAAC-accredited institution in a professional course",
    "requires": null,
    "gender": "Female",
    "description": "Supports meritorious girls from low-income families in professional undergraduate degrees at reputed institutions.",
    "documents": [
      "Class 12 Marksheet",
      "Income Certificate",
      "Admission Letter",
      "Fee Structure",
      "Aadhaar"
    ],
    "process": "Apply online via Buddy4Study; shortlisted students have a telephonic/virtual interview.",
    "officialUrl": "https://www.kotakeducationfoundation.org/kotak-kanya-scholarship",
    "sources": [
      "https://www.indiascholarships.in/scholarships/kotak-kanya-scholarship"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 23,
    "name": "HDFC Bank Parivartan ECSS Programme",
    "provider": "HDFC Bank (Parivartan CSR)",
    "type": "Private",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 50000,
    "amount": 50000,
    "amountNote": "₹15,000–₹18,000 (school/diploma), ₹30,000 (general UG), ₹50,000 (professional UG), ₹35,000–₹75,000 (PG)",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Usually July–August",
    "educationLevel": [
      "Class 9-10",
      "Class 11-12",
      "Diploma",
      "Undergraduate",
      "Postgraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 250000,
    "minimumPercentage": 55,
    "category": "Financial Need",
    "socialCategories": [],
    "specialEligibility": "Preference to students facing a personal/family crisis in the last 3 years",
    "requires": null,
    "gender": "All",
    "description": "Educational Crisis Scholarship Support that keeps students from low-income or crisis-hit families in school and college.",
    "documents": [
      "Previous Marksheet",
      "Income Proof",
      "Admission / Fee Receipt",
      "Crisis Proof (if applicable)",
      "Bank Details"
    ],
    "process": "Apply online via Buddy4Study; documents verified followed by a telephonic interview.",
    "officialUrl": "https://www.parivartanecss.com",
    "sources": [
      "https://www.indiascholarships.in/scholarships/hdfc-bank-parivartan-ecss-scholarship"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 24,
    "name": "ONGC Foundation Scholarship",
    "provider": "ONGC Foundation",
    "type": "Foundation",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 48000,
    "amount": 48000,
    "amountNote": "₹48,000/year",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": "2026-10-31",
    "deadlineNote": "Per current cycle; verify on portal",
    "educationLevel": [
      "Undergraduate",
      "Postgraduate"
    ],
    "fields": [
      "Engineering",
      "Medicine",
      "Business Administration",
      "Earth Sciences"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 450000,
    "minimumPercentage": 60,
    "category": "Social Welfare",
    "socialCategories": [
      "SC",
      "ST",
      "OBC",
      "EWS"
    ],
    "specialEligibility": "Income limit ₹4.5 lakh for SC/ST, ₹2 lakh for OBC/EWS; age 30 or under",
    "requires": null,
    "gender": "All",
    "description": "ONGC's scholarship for SC, ST, OBC and EWS students in engineering, MBBS, MBA and master's in geology/geophysics.",
    "documents": [
      "Caste / EWS Certificate",
      "Income Certificate",
      "Marksheet",
      "Admission Proof",
      "Bank Details"
    ],
    "process": "Apply on the ONGC scholarship portal (NSP registration also required).",
    "officialUrl": "https://www.ongcscholar.org",
    "sources": [
      "https://www.indiascholarships.in/scholarships/ongc-scholarship-csr"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 25,
    "name": "Tata Capital Pankh Scholarship",
    "provider": "Tata Capital",
    "type": "Private",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 18000,
    "amount": 18000,
    "amountNote": "Up to 80–100% of fees, capped at ₹10,000–₹15,000 (Class 11-12) or ₹12,000–₹18,000 (UG/diploma); higher for professional UG",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Around Oct–Nov 2026 (sources differ)",
    "educationLevel": [
      "Class 11-12",
      "Diploma",
      "Undergraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 250000,
    "minimumPercentage": 60,
    "category": "Financial Need",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Tata Capital's CSR scholarship covering most of the course fee for students from low-income families.",
    "documents": [
      "Previous Marksheet",
      "Income Proof",
      "Fee Receipt",
      "Admission Proof",
      "Bank Details"
    ],
    "process": "Apply online via Buddy4Study.",
    "officialUrl": "https://www.tatacapital.com/corporate-sustainability/education-uninterrupted.html",
    "sources": [
      "https://www.indiascholarships.in/scholarships/tata-capital-pankh-scholarship"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 26,
    "name": "Santoor Women's Scholarship",
    "provider": "Wipro Consumer Care & Wipro Cares",
    "type": "Private",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 30000,
    "amount": 30000,
    "amountNote": "₹30,000/year for the 3-year degree",
    "amountPeriod": "Annual",
    "awards": 1000,
    "deadline": null,
    "deadlineNote": "Late November 2026",
    "educationLevel": [
      "Undergraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "Andhra Pradesh",
      "Telangana",
      "Karnataka",
      "Chhattisgarh"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Women in Education",
    "socialCategories": [],
    "specialEligibility": "Studied Class 10 and 12 in government schools; joined UG straight after Class 12",
    "requires": null,
    "gender": "Female",
    "description": "Supports young women from government schools in four states to pursue full-time undergraduate degrees.",
    "documents": [
      "Class 10 & 12 Marksheets",
      "Government School Proof",
      "Admission Proof",
      "Aadhaar",
      "Bank Details"
    ],
    "process": "Apply online on the Santoor scholarship portal.",
    "officialUrl": "https://www.santoorscholarships.com",
    "sources": [
      "https://www.indiascholarships.in/news/santoor-womens-scholarship-2026-27-registration-dates"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 27,
    "name": "LIC Golden Jubilee Scholarship",
    "provider": "Life Insurance Corporation of India (Golden Jubilee Foundation)",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 40000,
    "amount": 40000,
    "amountNote": "₹40,000/yr medicine, ₹30,000/yr engineering, ₹20,000/yr other UG/diploma/ITI, ₹15,000 special (after Class 10)",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": "2026-12-15",
    "deadlineNote": "Applications usually open late October",
    "educationLevel": [
      "Class 11-12",
      "Diploma",
      "Undergraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 450000,
    "minimumPercentage": 60,
    "category": "Financial Need",
    "socialCategories": [],
    "specialEligibility": "First-year students; passed Class 10/12/diploma in last 3 years",
    "requires": null,
    "gender": "All",
    "description": "LIC's scholarship for students from low-income families entering medicine, engineering, other degrees, diplomas or ITI.",
    "documents": [
      "Marksheet",
      "Income Certificate",
      "Admission Proof",
      "Bank Details"
    ],
    "process": "Apply on LIC's Golden Jubilee scholarship portal; selection by divisional office.",
    "officialUrl": "https://licindia.in",
    "sources": [
      "https://www.indiascholarships.in/scholarships/lic-golden-jubilee-scholarship"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 28,
    "name": "Sitaram Jindal Foundation Scholarship",
    "provider": "Sitaram Jindal Foundation",
    "type": "Foundation",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 38400,
    "amount": 38400,
    "amountNote": "₹500–₹3,200/month depending on course (+₹1,000–1,200 for hostellers)",
    "amountPeriod": "Monthly",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Rolling / verify on site",
    "educationLevel": [
      "Class 11-12",
      "Diploma",
      "Undergraduate",
      "Postgraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 400000,
    "minimumPercentage": null,
    "category": "Financial Need",
    "socialCategories": [],
    "specialEligibility": "Minimum marks vary by course and gender (e.g. Class 11-12: boys 60–65%, girls 55–60%)",
    "requires": null,
    "gender": "All",
    "description": "Long-running monthly scholarship for students from Class 11 to PG from modest-income families.",
    "documents": [
      "Previous Marksheet",
      "Income Certificate",
      "Fee Receipt",
      "Bank Details"
    ],
    "process": "Apply online on the foundation's portal.",
    "officialUrl": "https://www.sitaramjindalfoundation.org",
    "sources": [
      "https://www.indiascholarships.in/scholarships/sitaram-jindal-foundation-scholarship"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 29,
    "name": "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojana",
    "provider": "Directorate of Higher Education, Government of Maharashtra",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Tuition fee reimbursement: 100% (non-professional, income ≤ ₹8 lakh); professional courses 100% (≤ ₹2.5 lakh) or 50% (₹2.5–8 lakh)",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "2026-27 cycle expected; previous cycle closed 30 Sep",
    "educationLevel": [
      "Diploma",
      "Undergraduate",
      "Postgraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "Maharashtra"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 800000,
    "minimumPercentage": null,
    "category": "Financial Need",
    "socialCategories": [
      "General",
      "EWS"
    ],
    "specialEligibility": "Admission through CAP to a government/aided/approved institution; regular courses only",
    "requires": null,
    "gender": "All",
    "description": "Maharashtra fee reimbursement scheme (EBC) for open-category and EWS students in higher education.",
    "documents": [
      "Domicile Certificate",
      "Income Certificate",
      "CAP Allotment Letter",
      "Fee Receipt",
      "Previous Marksheet"
    ],
    "process": "Apply on the MahaDBT portal; the college and directorate verify.",
    "officialUrl": "https://mahadbt.maharashtra.gov.in",
    "sources": [
      "https://www.indiascholarships.in/hi/scholarships/maharashtra-rajarshi-shahu"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 30,
    "name": "Swami Vivekananda Merit-cum-Means Scholarship (SVMCM)",
    "provider": "Higher Education Department, Government of West Bengal",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 96000,
    "amount": 96000,
    "amountNote": "₹1,000–₹8,000/month depending on course and level",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": "2026-10-31",
    "deadlineNote": "Verify on portal",
    "educationLevel": [
      "Class 11-12",
      "Diploma",
      "Undergraduate",
      "Postgraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "West Bengal"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 250000,
    "minimumPercentage": 60,
    "category": "Merit",
    "socialCategories": [],
    "specialEligibility": "Study in a recognised West Bengal institution; 60% for HS/UG (53–55% for PG)",
    "requires": null,
    "gender": "All",
    "description": "West Bengal's merit-cum-means scholarship for meritorious students from low-income families, Class 11 to PG.",
    "documents": [
      "Domicile Certificate",
      "Income Certificate",
      "Previous Marksheet",
      "Admission Receipt",
      "Bank Details"
    ],
    "process": "Apply on the SVMCM portal; institute and department verify.",
    "officialUrl": "https://svmcm.wbhed.gov.in",
    "sources": [
      "https://www.indiascholarships.in/scholarships/swami-vivekananda-merit-cum-means-scholarship-svmcm"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 31,
    "name": "Mukhyamantri Yuva Swavalamban Yojana (MYSY)",
    "provider": "Education Department, Government of Gujarat",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 200000,
    "amount": 200000,
    "amountNote": "50% fee support up to ₹2 lakh/yr (medical), ₹50,000 (engineering), ₹25,000 (diploma), ₹10,000 (other UG) + hostel ₹12,000/yr + books",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": "2026-10-31",
    "deadlineNote": "Applications open from July",
    "educationLevel": [
      "Diploma",
      "Undergraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "Gujarat"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 600000,
    "minimumPercentage": 80,
    "category": "Merit",
    "socialCategories": [],
    "specialEligibility": "80 percentile/marks in Class 10 (for diploma) or Class 12 (for degree)",
    "requires": null,
    "gender": "All",
    "description": "Gujarat scheme covering half the fees, hostel and book costs for meritorious students from families earning up to ₹6 lakh.",
    "documents": [
      "Domicile Certificate",
      "Income Certificate",
      "Class 10/12 Marksheet",
      "Admission Letter",
      "Fee Receipt"
    ],
    "process": "Apply on the MYSY portal, then verify documents at a help centre.",
    "officialUrl": "https://mysy.gujarat.gov.in",
    "sources": [
      "https://www.indiascholarships.in/scholarships/mukhyamantri-yuva-swavalamban-yojana-mysy"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 32,
    "name": "Pudhumai Penn Scheme",
    "provider": "Social Welfare and Women Empowerment Department, Government of Tamil Nadu",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 12000,
    "amount": 12000,
    "amountNote": "₹1,000/month until the course is completed",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": "2026-10-31",
    "deadlineNote": "Applications June–October",
    "educationLevel": [
      "Diploma",
      "Undergraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "Tamil Nadu"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Women in Education",
    "socialCategories": [],
    "specialEligibility": "Studied Class 6–12 in a government school (or govt-aided Tamil-medium school); first higher-education course",
    "requires": null,
    "gender": "Female",
    "description": "Monthly support for girls from government schools who go on to college, diploma or ITI in Tamil Nadu.",
    "documents": [
      "School Study Certificate (Class 6–12)",
      "Admission Proof",
      "Aadhaar",
      "Bank Details"
    ],
    "process": "Applied through the college's nodal officer on the penkalvi portal.",
    "officialUrl": "https://penkalvi.tn.gov.in",
    "sources": [
      "https://www.indiascholarships.in/scholarships/legacy-pudhumai-penn-scheme"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 33,
    "name": "Vidyasiri Food and Accommodation Scholarship",
    "provider": "Backward Classes Welfare Department, Government of Karnataka",
    "type": "Government",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": 15000,
    "amount": 15000,
    "amountNote": "₹1,500/month for 10 months + ₹1,200 book grant",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "2026-27 cycle expected; previous cycle closed 31 Aug",
    "educationLevel": [
      "Diploma",
      "Undergraduate",
      "Postgraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "Karnataka"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": 250000,
    "minimumPercentage": 55,
    "category": "Social Welfare",
    "socialCategories": [
      "OBC"
    ],
    "specialEligibility": "Not staying in a government hostel; Category-1 limits shown (stricter for 2A/3A/3B)",
    "requires": null,
    "gender": "All",
    "description": "Karnataka support for food and accommodation costs of backward-class students who could not get a government hostel seat.",
    "documents": [
      "Caste & Income Certificate",
      "Previous Marksheet",
      "Admission Proof",
      "Aadhaar-seeded Bank Account"
    ],
    "process": "Apply on Karnataka's State Scholarship Portal (SSP).",
    "officialUrl": "https://ssp.postmatric.karnataka.gov.in",
    "sources": [
      "https://www.indiascholarships.in/scholarships/vidyasiri-food-and-accommodation-scholarship-for-obc-students-karnataka"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 34,
    "name": "Fulbright-Nehru Master's Fellowships",
    "provider": "United States-India Educational Foundation (USIEF)",
    "type": "International Body",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "USD",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Fully funded: tuition, monthly living stipend, round-trip airfare, J-1 visa support, accident & sickness cover",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Usually closes mid-May (next: ~May 2027 for 2028-29)",
    "educationLevel": [
      "Postgraduate"
    ],
    "fields": [
      "Economics",
      "Environmental Science",
      "Public Policy",
      "Law",
      "Journalism",
      "Public Health",
      "Sustainability Studies",
      "Urban Planning",
      "Social Sciences"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": 55,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "3+ years of relevant full-time work experience; Indian citizen resident in India; no prior US degree",
    "requires": null,
    "gender": "All",
    "description": "Fully funded master's study in the US for Indian professionals with leadership potential in fields such as public policy, public health, economics and urban planning.",
    "documents": [
      "Passport",
      "Degree Transcripts",
      "Statement of Purpose",
      "Recommendation Letters",
      "CV / Resume",
      "Work Experience Letters",
      "English Test Score (if required)"
    ],
    "process": "Apply online to USIEF; shortlisted candidates are interviewed in India.",
    "officialUrl": "https://www.usief.org.in",
    "sources": [
      "https://www.indiascholarships.in/scholarships/fulbright-nehru-masters-fellowships"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 35,
    "name": "Chevening Scholarships",
    "provider": "UK Foreign, Commonwealth & Development Office (FCDO)",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "GBP",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Fully funded one-year master's: tuition, monthly living allowance, return economy flight, visa fee",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "2027-28 round closed 6 Oct 2026; next opens ~Aug 2027",
    "educationLevel": [
      "Postgraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "2,800+ hours (~2 years) of work experience; must return home for 2 years after the degree",
    "requires": null,
    "gender": "All",
    "description": "The UK government's global scholarship for future leaders to do a one-year master's at any UK university.",
    "documents": [
      "Passport",
      "Degree Transcripts",
      "Statement of Purpose",
      "Recommendation Letters",
      "CV / Resume",
      "Three UK Course Applications",
      "Leadership & Networking Essays"
    ],
    "process": "Apply online with four essays and three UK course choices; interviews at the British High Commission.",
    "officialUrl": "https://www.chevening.org",
    "sources": [
      "https://www.businesstoday.in/nri/story/chevening-scholarship-opens-for-2027-28-who-can-apply-what-it-covers-key-deadline-for-indians-555345-2026-09-14"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 36,
    "name": "Commonwealth Master's Scholarships",
    "provider": "Commonwealth Scholarship Commission in the UK",
    "type": "International Body",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "GBP",
    "amountOriginal": 20544,
    "amount": 2335000,
    "amountNote": "Full tuition + £1,712/month stipend (£2,000 in London) + return airfare + study travel grant",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": "2026-10-20",
    "deadlineNote": "CSC portal deadline; India's nominating agency closes earlier",
    "educationLevel": [
      "Postgraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India",
      "Bangladesh",
      "Sri Lanka",
      "Kenya",
      "Nigeria"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "Upper-second-class (2:1) degree; cannot afford UK study otherwise; nominated by national agency (no MBA)",
    "requires": null,
    "gender": "All",
    "description": "Fully funded one-year taught master's at a UK university for talented candidates from eligible Commonwealth countries, including India.",
    "documents": [
      "Passport",
      "Degree Transcripts",
      "Statement of Purpose",
      "Recommendation Letters",
      "CV / Resume",
      "Nomination from National Agency",
      "Two References"
    ],
    "process": "Apply through your national nominating agency (Ministry of Education for India), then on the CSC portal.",
    "officialUrl": "https://cscuk.fcdo.gov.uk/masters",
    "sources": [
      "https://cscuk.fcdo.gov.uk/masters"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 37,
    "name": "Rhodes Scholarship (India)",
    "provider": "Rhodes Trust",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "GBP",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Fully funded postgraduate study at the University of Oxford (fees, stipend, flights, visa)",
    "amountPeriod": "Annual",
    "awards": 5,
    "deadline": null,
    "deadlineNote": "Opens 1 June, closes ~23 July each year",
    "educationLevel": [
      "Postgraduate",
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "Exceptional academics, character and leadership; age/eligibility per India constituency rules",
    "requires": null,
    "gender": "All",
    "description": "The world's oldest international graduate scholarship; five awards each year for Indian candidates to study at Oxford.",
    "documents": [
      "Passport",
      "Degree Transcripts",
      "Statement of Purpose",
      "Recommendation Letters",
      "CV / Resume",
      "Personal Statement",
      "Academic Statement",
      "Five Reference Letters"
    ],
    "process": "Apply online; shortlisted candidates attend regional and final interviews.",
    "officialUrl": "https://www.rhodeshouse.ox.ac.uk/scholarships/apply/india",
    "sources": [
      "https://www.rhodeshouse.ox.ac.uk/scholarships/apply/india"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 38,
    "name": "Inlaks Shivdasani Foundation Scholarship",
    "provider": "Inlaks Shivdasani Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United States",
      "United Kingdom",
      "Germany",
      "France",
      "Netherlands",
      "Switzerland"
    ],
    "currency": "USD",
    "amountOriginal": 120000,
    "amount": 10242000,
    "amountNote": "Up to US$120,000 for the course: tuition, living, one-way airfare, health allowance",
    "amountPeriod": "Over full course",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Usually opens Jan, closes ~31 March",
    "educationLevel": [
      "Postgraduate",
      "Doctoral"
    ],
    "fields": [
      "Humanities",
      "Social Sciences",
      "Law",
      "Fine Arts",
      "Design",
      "Architecture",
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "Economics"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": 65,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "Admission to a top university in the US, UK or Europe; not for engineering, computer science, medicine or MBA",
    "requires": null,
    "gender": "All",
    "description": "Merit scholarship for outstanding Indian graduates to study at top universities in the US, UK and Europe (excludes engineering, CS, medicine, MBA).",
    "documents": [
      "Passport",
      "Degree Transcripts",
      "Statement of Purpose",
      "Recommendation Letters",
      "CV / Resume",
      "Admission Offer (or application proof)"
    ],
    "process": "Apply online; shortlisted candidates are interviewed.",
    "officialUrl": "https://www.inlaksfoundation.org",
    "sources": [
      "https://www.indiascholarships.in/bn/scholarships/inlaks-shivdasani-foundation-scholarship"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 39,
    "name": "Gates Cambridge Scholarship",
    "provider": "Gates Cambridge Trust",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "GBP",
    "amountOriginal": 23152,
    "amount": 2631000,
    "amountNote": "Full cost: tuition + £23,152/yr maintenance + visa, health surcharge, airfares",
    "amountPeriod": "Annual",
    "awards": 70,
    "deadline": "2026-12-08",
    "deadlineNote": "International round: 8 Dec 2026 or 6 Jan 2027 depending on course",
    "educationLevel": [
      "Postgraduate",
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "Non-UK citizens applying for a full-time PhD, MLitt or one-year master's at Cambridge (not MBA)",
    "requires": null,
    "gender": "All",
    "description": "Full-cost scholarships for outstanding applicants from outside the UK to pursue a postgraduate degree at the University of Cambridge.",
    "documents": [
      "Passport",
      "Degree Transcripts",
      "Statement of Purpose",
      "Recommendation Letters",
      "CV / Resume",
      "Gates Cambridge Statement"
    ],
    "process": "Apply via the Cambridge Applicant Portal and tick the Gates Cambridge box.",
    "officialUrl": "https://www.gatescambridge.org",
    "sources": [
      "https://propakistani.pk/2026/09/15/fully-funded-gates-cambridge-scholarship-2027-for-masters-and-phd-in-the-uk-is-now-open/"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 40,
    "name": "Eiffel Excellence Scholarship",
    "provider": "French Ministry for Europe and Foreign Affairs (via Campus France)",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "France"
    ],
    "currency": "EUR",
    "amountOriginal": 14400,
    "amount": 1397000,
    "amountNote": "€1,200/month (master's) or €2,000/month (PhD) + travel, insurance, cultural activities",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Institution deadlines Oct–Nov 2026; Campus France closes Jan 2027",
    "educationLevel": [
      "Postgraduate",
      "Doctoral"
    ],
    "fields": [
      "Engineering",
      "Biology",
      "Mathematics",
      "Computer Science",
      "Law",
      "Economics",
      "Business Administration",
      "Humanities",
      "Social Sciences"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "Age 29 or under (master's) / 35 or under (PhD); nominated by a French institution",
    "requires": null,
    "gender": "All",
    "description": "French government scholarship to attract top international students to master's and PhD programmes in France.",
    "documents": [
      "Passport",
      "Degree Transcripts",
      "Statement of Purpose",
      "Recommendation Letters",
      "CV / Resume",
      "Nomination by French Institution"
    ],
    "process": "Apply to the French institution, which nominates you to Campus France.",
    "officialUrl": "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence",
    "sources": [
      "https://u-paris.fr/language/en/eiffel-excellence-scholarship-2027/"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 41,
    "name": "Swiss Government Excellence Scholarships",
    "provider": "Swiss Confederation (SERI / FCS)",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Switzerland"
    ],
    "currency": "CHF",
    "amountOriginal": 29400,
    "amount": 3031000,
    "amountNote": "CHF 2,450/month (PhD up to 36 months; research fellowship 6–12 months)",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": "2026-11-10",
    "deadlineNote": "India deadline, 2027-28",
    "educationLevel": [
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Research",
    "socialCategories": [],
    "specialEligibility": "Master's completed by Jul 2027; born after 31 Dec 1991; support letter from a Swiss supervisor",
    "requires": null,
    "gender": "All",
    "description": "Swiss government PhD scholarships and research fellowships at Swiss universities for graduates from abroad, including India.",
    "documents": [
      "Passport",
      "Master's Transcripts",
      "Research Proposal",
      "Swiss Supervisor's Letter & CV",
      "Two Recommendation Letters"
    ],
    "process": "Apply on the GO ESKAS portal via the Swiss embassy channel for India.",
    "officialUrl": "https://www.sbfi.admin.ch/en/swiss-government-excellence-scholarships-at-a-glance",
    "sources": [
      "https://educationpost.in/news/education/scholarship/swiss-government-excellence-scholarships-open-for-202728"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 42,
    "name": "MEXT (Monbukagakusho) Japanese Government Scholarship",
    "provider": "Ministry of Education, Culture, Sports, Science and Technology, Japan",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Japan"
    ],
    "currency": "JPY",
    "amountOriginal": 1728000,
    "amount": 1026000,
    "amountNote": "≈¥143,000–145,000/month (research students), ≈¥117,000 (undergraduate) + full tuition + airfare",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Embassy route usually opens ~April; exams May–June",
    "educationLevel": [
      "Undergraduate",
      "Postgraduate",
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "Embassy recommendation route: written test and interview",
    "requires": null,
    "gender": "All",
    "description": "Japanese government scholarship covering tuition, a monthly stipend and airfare for research, undergraduate and other programmes in Japan.",
    "documents": [
      "Passport",
      "Degree Transcripts",
      "Statement of Purpose",
      "Recommendation Letters",
      "CV / Resume",
      "Research Plan",
      "Medical Certificate"
    ],
    "process": "Apply through the Embassy of Japan in India (written exam and interview) or via a Japanese university.",
    "officialUrl": "https://www.in.emb-japan.go.jp/education/japanese_government_scholarships.html",
    "sources": [
      "https://www.indiascholarships.in/scholarships/mext-scholarship-japan"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 43,
    "name": "Global Korea Scholarship (GKS)",
    "provider": "National Institute for International Education (NIIED), Korea",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "South Korea"
    ],
    "currency": "KRW",
    "amountOriginal": 10800000,
    "amount": 640000,
    "amountNote": "≈KRW 900,000/month + tuition (up to KRW 5 million), airfare, settlement, language and completion grants, insurance",
    "amountPeriod": "Annual",
    "awards": 78,
    "deadline": null,
    "deadlineNote": "Embassy track ~Feb–Mar; university track ~Sep–Oct",
    "educationLevel": [
      "Undergraduate",
      "Postgraduate",
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": 80,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "80% CGPA or top 20% of class; age under 25 (UG) / under 40 (graduate); 78 seats reserved for India",
    "requires": null,
    "gender": "All",
    "description": "Korean government scholarship for undergraduate and graduate degrees in Korea, including a year of Korean language training.",
    "documents": [
      "Passport",
      "Degree Transcripts",
      "Statement of Purpose",
      "Recommendation Letters",
      "CV / Resume",
      "Study Plan",
      "Medical Assessment"
    ],
    "process": "Apply via the embassy track or directly to a Korean university (university track).",
    "officialUrl": "https://www.studyinkorea.go.kr",
    "sources": [
      "https://studyabroad.careers360.com/articles/gks-global-korea-scholarship"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 44,
    "name": "J.N. Tata Endowment Loan Scholarship",
    "provider": "J.N. Tata Endowment for the Higher Education of Indians",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Any country"
    ],
    "currency": "INR",
    "amountOriginal": 1000000,
    "amount": 1000000,
    "amountNote": "Loan scholarship of ₹1–10 lakh (some sources say up to ₹20 lakh) at 2% simple interest; travel grant possible",
    "amountPeriod": "One-time",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Opens January, closes around end-January / March each year",
    "educationLevel": [
      "Postgraduate",
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": 60,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "Indian graduates with an admission offer abroad; partly loan (repayable)",
    "requires": null,
    "gender": "All",
    "description": "Century-old Tata endowment providing low-interest loan scholarships to Indian graduates for postgraduate study abroad.",
    "documents": [
      "Passport",
      "Degree Transcripts",
      "Statement of Purpose",
      "Recommendation Letters",
      "CV / Resume",
      "Admission Offer",
      "Financial Statement"
    ],
    "process": "Apply online, followed by a test and interview.",
    "officialUrl": "https://www.jntataendowment.org",
    "sources": [
      "https://www.indiascholarships.in/scholarships/jn-tata-endowment-for-higher-education"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 45,
    "name": "Holland Scholarship",
    "provider": "Dutch Ministry of Education, Culture and Science & Dutch universities (Nuffic)",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Netherlands"
    ],
    "currency": "EUR",
    "amountOriginal": 5000,
    "amount": 485000,
    "amountNote": "€5,000 one-time in the first year",
    "amountPeriod": "One-time",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Usually 1 Feb or 1 May, set by each university",
    "educationLevel": [
      "Undergraduate",
      "Postgraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "Non-EEA students starting a bachelor's or master's at a participating Dutch institution; country list set by each university",
    "requires": null,
    "gender": "All",
    "description": "One-time grant for talented non-EEA students starting a full-time degree at a participating Dutch university or university of applied sciences.",
    "documents": [
      "Passport",
      "Transcripts",
      "Motivation Letter",
      "Admission Application"
    ],
    "process": "Apply through the Dutch institution's own scholarship procedure after applying for admission.",
    "officialUrl": "https://www.studyinnl.org",
    "sources": [
      "https://www.wur.nl/en/article/holland-scholarship-international-students.htm"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 46,
    "name": "Government of Ireland International Education Scholarship (GOI-IES)",
    "provider": "Higher Education Authority (HEA), Ireland",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Ireland"
    ],
    "currency": "EUR",
    "amountOriginal": 10000,
    "amount": 970000,
    "amountNote": "€10,000 stipend + full tuition waiver for one year",
    "amountPeriod": "One-time",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Call usually opens ~Feb, closes ~Mar",
    "educationLevel": [
      "Undergraduate",
      "Postgraduate",
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "Non-EU/EEA students accepted at an Irish higher education institution (final-year UG, master's, PhD); confirm current eligible-country list",
    "requires": null,
    "gender": "All",
    "description": "Irish government scholarship offering a stipend and fee waiver for one year of study in Ireland.",
    "documents": [
      "Passport",
      "Transcripts",
      "Offer Letter",
      "Personal Statement",
      "Reference Letters"
    ],
    "process": "Apply online to the HEA; institutions confirm admission.",
    "officialUrl": "https://hea.ie/policy/internationalisation/goi-ies/",
    "sources": [
      "https://www.scholarshipscentral.com/blog/government-of-ireland-international-education-scholarship-2027"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 47,
    "name": "K.C. Mahindra Scholarships for Post-Graduate Studies Abroad",
    "provider": "K.C. Mahindra Education Trust",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Any country"
    ],
    "currency": "INR",
    "amountOriginal": 1000000,
    "amount": 1000000,
    "amountNote": "Interest-free loan scholarship: up to ₹10 lakh (top 3 Fellows) / up to ₹5 lakh (others)",
    "amountPeriod": "One-time",
    "awards": null,
    "deadline": "2026-10-31",
    "deadlineNote": "Per current cycle; verify on site",
    "educationLevel": [
      "Postgraduate",
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "First-class degree; admission (or application) to a reputed foreign university; repayable interest-free",
    "requires": null,
    "gender": "All",
    "description": "Interest-free loan scholarships from the Mahindra group's education trust for Indian graduates pursuing postgraduate study abroad.",
    "documents": [
      "Passport",
      "Degree Transcripts",
      "Statement of Purpose",
      "Recommendation Letters",
      "CV / Resume",
      "Admission Offer / Application Proof"
    ],
    "process": "Apply online; shortlisted candidates are interviewed.",
    "officialUrl": "https://www.kcmet.org",
    "sources": [
      "https://www.indiascholarships.in/scholarships/kc-mahindra-scholarship-for-post-graduate-studies-abroad"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 48,
    "name": "Aga Khan Foundation International Scholarship Programme",
    "provider": "Aga Khan Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Any country"
    ],
    "currency": "USD",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Tuition and living expenses: 50% grant + 50% loan (5% annual service charge)",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Usually 31 March",
    "educationLevel": [
      "Postgraduate",
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India",
      "Bangladesh",
      "Kenya"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "Outstanding students with no other means of financing; preference for under-30s; resident in India",
    "requires": null,
    "gender": "All",
    "description": "Need-based scholarship-loan for postgraduate study abroad for outstanding students from select developing countries, including India.",
    "documents": [
      "Passport",
      "Degree Transcripts",
      "Statement of Purpose",
      "Recommendation Letters",
      "CV / Resume",
      "Financial Need Statement"
    ],
    "process": "Apply to the Aga Khan Foundation office in India.",
    "officialUrl": "https://the.akdn/en/what-we-do/developing-human-capacity/education/international-scholarships",
    "sources": [
      "https://www.indiascholarships.in/scholarships/aga-khan-foundation-international-scholarship-programme"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 49,
    "name": "Erasmus Mundus Joint Master's Scholarships",
    "provider": "European Commission (EACEA)",
    "type": "International Body",
    "scope": "International",
    "hostCountries": [
      "Any EU country"
    ],
    "currency": "EUR",
    "amountOriginal": 16800,
    "amount": 1629000,
    "amountNote": "€1,400/month + full tuition + up to €3,000/yr travel & installation + insurance",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Programme deadlines mostly Dec 2026 – Feb 2027",
    "educationLevel": [
      "Postgraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "Study in at least two European countries; apply to each joint programme separately",
    "requires": null,
    "gender": "All",
    "description": "EU-funded scholarships for joint master's programmes run by consortia of universities across two or more European countries.",
    "documents": [
      "Passport",
      "Degree Transcripts",
      "Statement of Purpose",
      "Recommendation Letters",
      "CV / Resume",
      "English Test Score (IELTS/TOEFL)"
    ],
    "process": "Choose programmes from the Erasmus Mundus catalogue and apply on each programme's own portal.",
    "officialUrl": "https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en",
    "sources": [
      "https://www.indiascholarships.in/scholarships/erasmus-mundus-joint-masters-scholarships",
      "https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 50,
    "name": "Mitacs Globalink Research Internship (AICTE)",
    "provider": "Mitacs & AICTE",
    "type": "International Body",
    "scope": "International",
    "hostCountries": [
      "Canada"
    ],
    "currency": "CAD",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Fully funded 12-week research internship: airfare, housing, food stipend, insurance",
    "amountPeriod": "One-time",
    "awards": 300,
    "deadline": null,
    "deadlineNote": "2027 round closed 16 Sep 2026; next opens ~Aug 2027",
    "educationLevel": [
      "Undergraduate"
    ],
    "fields": [
      "Engineering",
      "Computer Science",
      "Information Technology"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": 70,
    "category": "STEM",
    "socialCategories": [],
    "specialEligibility": "Full-time BE/BTech student with 1–3 semesters remaining; age 18+",
    "requires": null,
    "gender": "All",
    "description": "Summer research internship at Canadian universities for senior Indian engineering undergraduates, under the Mitacs–AICTE partnership.",
    "documents": [
      "Passport",
      "Transcripts",
      "Professor's Reference Letter",
      "CV"
    ],
    "process": "Apply to 3–10 projects across at least three Canadian provinces.",
    "officialUrl": "https://www.mitacs.ca",
    "sources": [
      "https://news.careers360.com/aicte-mitacs-globalink-research-internship-2027-application-deadline-september-16"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 51,
    "name": "GREAT Scholarships – India",
    "provider": "British Council & UK universities (GREAT Britain campaign)",
    "type": "International Body",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "GBP",
    "amountOriginal": 10000,
    "amount": 1136000,
    "amountNote": "At least £10,000 towards tuition for a one-year master's",
    "amountPeriod": "One-time",
    "awards": 12,
    "deadline": null,
    "deadlineNote": "Set by each university",
    "educationLevel": [
      "Postgraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "Indian citizens; offer from a participating UK university (list changes each year)",
    "requires": null,
    "gender": "All",
    "description": "Tuition scholarships from participating UK universities for Indian students on one-year postgraduate courses.",
    "documents": [
      "Passport",
      "Degree Transcripts",
      "UK University Offer",
      "English Test Score",
      "Personal Statement"
    ],
    "process": "Apply for admission to a participating university, then apply for its GREAT scholarship.",
    "officialUrl": "https://study-uk.britishcouncil.org/scholarships-funding/great-scholarships/india",
    "sources": [
      "https://www.businesstoday.in/nri/study/story/want-to-study-in-uk-indian-students-can-apply-for-ps10000-great-scholarships-561647-2026-10-15"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 52,
    "name": "Knight-Hennessy Scholars",
    "provider": "Stanford University",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "USD",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Full funding for up to 3 years of Stanford graduate study: tuition, living & academic stipend, annual travel",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "2027 cohort closed 6 Oct 2026; usually opens June",
    "educationLevel": [
      "Postgraduate",
      "Doctoral"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "Apply to a full-time Stanford graduate programme; open to all nationalities",
    "requires": null,
    "gender": "All",
    "description": "Stanford's flagship graduate scholarship providing full funding and leadership development to scholars from around the world.",
    "documents": [
      "Passport",
      "Degree Transcripts",
      "Statement of Purpose",
      "Recommendation Letters",
      "CV / Resume",
      "Video Statement"
    ],
    "process": "Submit the Knight-Hennessy application and a separate Stanford graduate programme application.",
    "officialUrl": "https://knight-hennessy.stanford.edu",
    "sources": [
      "https://www.scholarshipscentral.com/knight-hennessy-scholars-2027"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 53,
    "name": "Charpak Master's Scholarship",
    "provider": "Embassy of France in India (Campus France India)",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "France"
    ],
    "currency": "EUR",
    "amountOriginal": 10320,
    "amount": 1001000,
    "amountNote": "€860/month + visa and Campus France fee waiver + health insurance + housing priority",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Usually early in the year; interviews in April",
    "educationLevel": [
      "Postgraduate"
    ],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Study Abroad",
    "socialCategories": [],
    "specialEligibility": "Indian citizen or OCI; age 30 or under; admitted to a full-time master's in France",
    "requires": null,
    "gender": "All",
    "description": "French government scholarship for Indian students pursuing a full-time master's degree in France.",
    "documents": [
      "Passport",
      "CV",
      "French Admission Letter",
      "Marksheets",
      "Recommendation Letters"
    ],
    "process": "Apply on the Institut Français India scholarship portal; shortlisted candidates have an online interview.",
    "officialUrl": "https://inde.campusfrance.org",
    "sources": [
      "https://inde.campusfrance.org/node/88"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 54,
    "name": "DAAD WISE (Working Internships in Science and Engineering)",
    "provider": "German Academic Exchange Service (DAAD)",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "EUR",
    "amountOriginal": 2802,
    "amount": 272000,
    "amountNote": "€934/month for 2–3 months + travel subsidy (~€1,075) + health insurance",
    "amountPeriod": "One-time",
    "awards": null,
    "deadline": "2026-11-05",
    "deadlineNote": "DAAD portal deadline",
    "educationLevel": [
      "Undergraduate"
    ],
    "fields": [
      "Engineering",
      "Computer Science",
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": 85,
    "category": "STEM",
    "socialCategories": [],
    "specialEligibility": "85% aggregate / 8.5 CGPA; invitation from a German professor at a public university or research institute",
    "requires": null,
    "gender": "All",
    "description": "Summer research internship in Germany for top Indian undergraduate science and engineering students.",
    "documents": [
      "Passport",
      "Transcripts",
      "Invitation Letter from German Host",
      "CV",
      "Recommendation Letter"
    ],
    "process": "Secure a host professor, then apply on the DAAD portal.",
    "officialUrl": "https://www2.daad.de/deutschland/stipendium/datenbank/en/",
    "sources": [
      "https://www.indiascholarships.in/scholarships/daad-wise-research-internship-germany"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 55,
    "name": "Fulbright-Nehru Doctoral Research Fellowships",
    "provider": "United States-India Educational Foundation (USIEF)",
    "type": "International Body",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "USD",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "6–9 months in the US: monthly stipend, round-trip airfare, J-1 visa support, health cover, affiliation fees",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Usually closes ~July (2027-28 round closed)",
    "educationLevel": [
      "Doctoral"
    ],
    "fields": [
      "Engineering",
      "Computer Science",
      "Data Science",
      "Physics",
      "Earth Sciences",
      "Electronics"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Research",
    "socialCategories": [],
    "specialEligibility": "Registered for a PhD at an Indian institution; not a government employee; priority fields change yearly",
    "requires": null,
    "gender": "All",
    "description": "Lets Indian PhD scholars spend 6–9 months doing research at a US institution.",
    "documents": [
      "PhD Registration Proof",
      "Research Proposal",
      "Supervisor Recommendation",
      "CV",
      "Passport"
    ],
    "process": "Apply online via USIEF/IIE portal; shortlisted candidates interviewed.",
    "officialUrl": "https://www.usief.org.in/fulbright-fellowships/fellowships-for-indian-citizen/fulbright-nehru-doctoral-research-fellowships",
    "sources": [
      "https://www.usief.org.in/fulbright-fellowships/fellowships-for-indian-citizen/fulbright-nehru-doctoral-research-fellowships"
    ],
    "lastVerified": "2026-10-18",
    "dataSource": "manual",
    "fetchedAt": null
  },
  {
    "id": 10001,
    "name": "Leonardo da Vinci programme",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "European Commission funding programme",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q203211",
    "sources": [
      "https://www.wikidata.org/wiki/Q203211"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10002,
    "name": "Fulbright Scholarship",
    "provider": "Bureau of Educational and Cultural Affairs",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American educational grant program Established 1946.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://foreign.fulbrightonline.org/",
    "sources": [
      "https://www.wikidata.org/wiki/Q253936"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10003,
    "name": "Prix de Rome",
    "provider": "Institut de France",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "France"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "French scholarship for arts students Established 1663.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q576434",
    "sources": [
      "https://www.wikidata.org/wiki/Q576434"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10004,
    "name": "Arthur F. Burns Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q709311",
    "sources": [
      "https://www.wikidata.org/wiki/Q709311"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10005,
    "name": "Alfred Döblin Scholarship",
    "provider": "Academy of Arts, Berlin",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "German literary scholarship Established 1985.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q784298",
    "sources": [
      "https://www.wikidata.org/wiki/Q784298"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10006,
    "name": "Derkovits Gyula scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Hungary"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Hungarian scholarship for young artist (1955–) Established 1955.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q904182",
    "sources": [
      "https://www.wikidata.org/wiki/Q904182"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10007,
    "name": "Copernicus-Sholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q965697",
    "sources": [
      "https://www.wikidata.org/wiki/Q965697"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10008,
    "name": "DAAD Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 1925.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.daad.de/",
    "sources": [
      "https://www.wikidata.org/wiki/Q1151557"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10009,
    "name": "Deutschlandstipendium",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Germany-wide scholarship program",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.deutschlandstipendium.de/deutschlandstipendium/",
    "sources": [
      "https://www.wikidata.org/wiki/Q1206372"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10010,
    "name": "Szilárd Leó Professorial Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Hungary"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 1998.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q1298618",
    "sources": [
      "https://www.wikidata.org/wiki/Q1298618"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10011,
    "name": "Google Summer of Code",
    "provider": "Larry Page",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Annual program that offers open-source software projects to post-secondary student developers Established 2005.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://summerofcode.withgoogle.com/",
    "sources": [
      "https://www.wikidata.org/wiki/Q1324301"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10012,
    "name": "Elias Canetti scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Austria"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Austrian scholarship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q1328959",
    "sources": [
      "https://www.wikidata.org/wiki/Q1328959"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10013,
    "name": "Erwin-Schrödinger-Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q1362778",
    "sources": [
      "https://www.wikidata.org/wiki/Q1362778"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10014,
    "name": "Rolf-Dieter-Brinkmann scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Literary award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q1398217",
    "sources": [
      "https://www.wikidata.org/wiki/Q1398217"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10015,
    "name": "Follow Fluxus - After Fluxus",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship awarded by the Nassauischer Kunstverein Wiesbaden",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q1435552",
    "sources": [
      "https://www.wikidata.org/wiki/Q1435552"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10016,
    "name": "MacArthur Fellows Program",
    "provider": "John D. and Catherine T. MacArthur Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Prizes awarded annually by the John D. and Catherine T. MacArthur Foundation Established 1981.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.macfound.org/programs/fellows/",
    "sources": [
      "https://www.wikidata.org/wiki/Q1543268"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10017,
    "name": "H.C. Artmann Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q1562509",
    "sources": [
      "https://www.wikidata.org/wiki/Q1562509"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10018,
    "name": "Travel Scholarship of the German Archaeological Institute",
    "provider": "German Archaeological Institute",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Grant in archaeology, conferred by the German Archaeological Institute Established 1859.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q1632037",
    "sources": [
      "https://www.wikidata.org/wiki/Q1632037"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10019,
    "name": "Märkisch Scholarship for Music",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "German music award in the form of a scholarship (1978–) Established 1978.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q1683188",
    "sources": [
      "https://www.wikidata.org/wiki/Q1683188"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10020,
    "name": "Märkisch Scholarship for Fine Arts",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "German art prize in the form of a scholarship (1978–) Established 1978.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q1957465",
    "sources": [
      "https://www.wikidata.org/wiki/Q1957465"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10021,
    "name": "Märkisch Scholarship for Literature",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "German literary award in the form of a scholarship (1978–) Established 1978.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://mkk-online.de/historie/",
    "sources": [
      "https://www.wikidata.org/wiki/Q1957466"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10022,
    "name": "Pell Grant",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "U.S. federal student aid subsidy",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q2068057",
    "sources": [
      "https://www.wikidata.org/wiki/Q2068057"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10023,
    "name": "writer in residence",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship for writers including right of free local residence for several months",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q2328028",
    "sources": [
      "https://www.wikidata.org/wiki/Q2328028"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10024,
    "name": "LVR-Wissenschaftspreis",
    "provider": "Landschaftsverband Rheinland",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 1956.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://rheinland-ausgezeichnet.lvr.de/de/lvr_preise/albert_steeger_preis/albert_steeger_preis.html",
    "sources": [
      "https://www.wikidata.org/wiki/Q2637485"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10025,
    "name": "Entente Cordiale Scholarships",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Franco-British scholarship scheme",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q2922463",
    "sources": [
      "https://www.wikidata.org/wiki/Q2922463"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10026,
    "name": "Zellidja Bourse",
    "provider": "Fondation de France",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "France"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 1939.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.zellidja.com/",
    "sources": [
      "https://www.wikidata.org/wiki/Q2922465"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10027,
    "name": "Natural Sciences and Engineering Research Council of Canada",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Canada"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Agency of the Government of Canada that provides grants for research in the natural sciences and engineering Established 1978.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.nserc-crsng.gc.ca/",
    "sources": [
      "https://www.wikidata.org/wiki/Q2993807"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10028,
    "name": "Prix d'Europe",
    "provider": "ministère de la Culture et des Communications",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Canada"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Canadian study grant (1911)",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q3405439",
    "sources": [
      "https://www.wikidata.org/wiki/Q3405439"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10029,
    "name": "Fred Åkerström grant",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Sweden"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 1987.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q3434440",
    "sources": [
      "https://www.wikidata.org/wiki/Q3434440"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10030,
    "name": "demyship",
    "provider": "Magdalen College",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "A type of scholarship, specifically for Magdalen College, Oxford",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q3705403",
    "sources": [
      "https://www.wikidata.org/wiki/Q3705403"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10031,
    "name": "Marshall Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarships for Americans to study in the UK, named in honor of George Marshall and the Marshall Plan",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q4442635",
    "sources": [
      "https://www.wikidata.org/wiki/Q4442635"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10032,
    "name": "Aschehoug's newcomer prize",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Norway"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Norwegian literary scholarship Established 1993.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q4493296",
    "sources": [
      "https://www.wikidata.org/wiki/Q4493296"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10033,
    "name": "1851 Research Fellowship",
    "provider": "Royal Commission for the Exhibition of 1851",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "A three-year research scholarship awarded each year by the Royal Commission for the Exhibition of 1851",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q4554830",
    "sources": [
      "https://www.wikidata.org/wiki/Q4554830"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10034,
    "name": "Australian Postgraduate Awards",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Australia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Postgraduate research scholarship to 2017 Established 1994.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q4824572",
    "sources": [
      "https://www.wikidata.org/wiki/Q4824572"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10035,
    "name": "Boettcher Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Full tuition scholarship for students from Colorado, United States",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q4937254",
    "sources": [
      "https://www.wikidata.org/wiki/Q4937254"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10036,
    "name": "Bright Futures Scholarship Program",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Florida scholarship program Established 1997.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.floridastudentfinancialaidsg.org/SAPBFMAIN/SAPBFMAIN",
    "sources": [
      "https://www.wikidata.org/wiki/Q4967416"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10037,
    "name": "Buck scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "California college scholarship from 1989 to 2016 Established 1989.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.buckfoundation.org",
    "sources": [
      "https://www.wikidata.org/wiki/Q4982975"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10038,
    "name": "Durham Palestine Educational Trust",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "UK charitable organization Established 1984.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://durhampalestine.webspace.durham.ac.uk/",
    "sources": [
      "https://www.wikidata.org/wiki/Q5316541"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10039,
    "name": "HESEG Foundation",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Israel"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Canadian charitable foundation Established 2006.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.heseg.com/",
    "sources": [
      "https://www.wikidata.org/wiki/Q5629489"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10040,
    "name": "Scholarship of the Minister of Science and Higher Education for academic performance",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q9347583",
    "sources": [
      "https://www.wikidata.org/wiki/Q9347583"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10041,
    "name": "National Program for Access to Technical Education and Employment",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Brazil"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Brazilian government programme",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q10354328",
    "sources": [
      "https://www.wikidata.org/wiki/Q10354328"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10042,
    "name": "Programa Universidade para Todos",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Brazil"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship grants given by the Brazilian government based on ENEM score Established 2004.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://prouniportal.mec.gov.br/",
    "sources": [
      "https://www.wikidata.org/wiki/Q10354358"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10043,
    "name": "1 km Film Award",
    "provider": "Git Scheynius",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Sweden"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q10397186",
    "sources": [
      "https://www.wikidata.org/wiki/Q10397186"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10044,
    "name": "Sir George Elliot Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "New Zealand scholarship Established 1999.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.elliottrust.org.nz/",
    "sources": [
      "https://www.wikidata.org/wiki/Q115683866"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10092,
    "name": "Heisenberg scholarship",
    "provider": "German Research Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship of the Heisenberg Programme",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.dfg.de/de/foerderung/foerdermoeglichkeiten/programme/einzelfoerderung/heisenberg",
    "sources": [
      "https://www.wikidata.org/wiki/Q62102902"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10093,
    "name": "Kalpana Chawla ISU Scholarship",
    "provider": "Christopher Stott",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship for Indian women participating in international space education programs Established 2017.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.kalpanachawlascholars.org/",
    "sources": [
      "https://www.wikidata.org/wiki/Q63814006"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10094,
    "name": "Kalpana Chawla Memorial Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship awarded by the Indian Students Association at the University of Texas at El Paso Established 2005.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q63814407",
    "sources": [
      "https://www.wikidata.org/wiki/Q63814407"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10095,
    "name": "Elizabeth Buttler Reed Scholarship",
    "provider": "Phi Beta Kappa Society",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.pbknca.org/scholarship/scholarship.reed.phi.beta.kappa.pbk.htm",
    "sources": [
      "https://www.wikidata.org/wiki/Q64398257"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10096,
    "name": "Benjamin A. Gilman International Scholarship",
    "provider": "Institute of International Education",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American scholarship Established 2000.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.gilmanscholarship.org/",
    "sources": [
      "https://www.wikidata.org/wiki/Q65068934"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10097,
    "name": "Oskar Kallas award",
    "provider": "Estonian National Museum",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Estonia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship conferred by Estonian National Museum Established 2015.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q65264753",
    "sources": [
      "https://www.wikidata.org/wiki/Q65264753"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10098,
    "name": "Daiwa Scholarship",
    "provider": "Daiwa Anglo-Japanese Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://dajf.org.uk/scholarships/daiwa-scholarship",
    "sources": [
      "https://www.wikidata.org/wiki/Q66789531"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10099,
    "name": "Bursa Cusana",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Netherlands"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q73298096",
    "sources": [
      "https://www.wikidata.org/wiki/Q73298096"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10100,
    "name": "Sigtunastiftelsen author scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Sweden"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q78860411",
    "sources": [
      "https://www.wikidata.org/wiki/Q78860411"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10101,
    "name": "Churchill Fellowship",
    "provider": "Winston Churchill Memorial Trusts",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Australia",
      "New Zealand",
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award that provides educational opportunities, administered by the Winston Churchill Memorial Trusts Established 1965.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q82243242",
    "sources": [
      "https://www.wikidata.org/wiki/Q82243242"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10102,
    "name": "Institute for Citizenship",
    "provider": "Hubert Harry Harshman",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Canada"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship for post-graduate studies at the University of Toronto Established 1954.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q83483843",
    "sources": [
      "https://www.wikidata.org/wiki/Q83483843"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10103,
    "name": "aramco college degree program",
    "provider": "Saudi Aramco",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Saudi Arabia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q85871691",
    "sources": [
      "https://www.wikidata.org/wiki/Q85871691"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10104,
    "name": "Marie Curie Fellowship",
    "provider": "Marie Skłodowska-Curie Actions",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Research fellowship Established 1996.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q87655181",
    "sources": [
      "https://www.wikidata.org/wiki/Q87655181"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10105,
    "name": "Paoletti Prize",
    "provider": "National Center for Scientific Research",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "France"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship from the Institute of Biological Sciences, intended to support young researches Established 1996.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://insb.cnrs.fr/fr/prix-paoletti",
    "sources": [
      "https://www.wikidata.org/wiki/Q88072608"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10106,
    "name": "IKY scholarship",
    "provider": "State Scholarships Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Greece"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 1951.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.iky.gr/el/upotrofies-gr/upotrofies-gr",
    "sources": [
      "https://www.wikidata.org/wiki/Q92950964"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10107,
    "name": "Rot",
    "provider": "Rothschild family",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Israel"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 2016.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://rothschildcp.com/%D7%AA%D7%9B%D7%A0%D7%99%D7%AA-%D7%A9%D7%92%D7%A8%D7%99%D7%A8%D7%99-%D7%A8%D7%95%D7%98%D7%A9%D7%99%D7%9C%D7%93%D7%A2%D7%A9%D7%99%D7%94-%D7%97%D7%91%D7%A8%D7%AA%D7%99%D7%AA-%D7%9E%D7%A9%D7%9E%D7%A2/",
    "sources": [
      "https://www.wikidata.org/wiki/Q96480235"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10108,
    "name": "Beasiswa Unggulan Dosen Indonesia",
    "provider": "Ministry of Research and Technology",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://budi.ristekdikti.go.id/web/",
    "sources": [
      "https://www.wikidata.org/wiki/Q96788101"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10109,
    "name": "Villa Médicis hors les murs",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "France"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q97852346",
    "sources": [
      "https://www.wikidata.org/wiki/Q97852346"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10110,
    "name": "Sabic Leadership Scholarship",
    "provider": "Ben Sabic Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Canada"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "A Canadian merit-based scholarship dedicated to young community leaders Established 2020.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://bensabic.foundation/scholarship/",
    "sources": [
      "https://www.wikidata.org/wiki/Q98463333"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10111,
    "name": "Allen Briggs '88 Memorial Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.ncssm.edu/donate/distance-education/allen-k-briggs-88-memorial-scholarship",
    "sources": [
      "https://www.wikidata.org/wiki/Q106193937"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10112,
    "name": "Charles Merrill Jr. Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship to study abroad",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.iesabroad.org/study-abroad/alumni/merrill-scholarship",
    "sources": [
      "https://www.wikidata.org/wiki/Q106355129"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10113,
    "name": "Fonds pour la Formation de chercheurs et l'aide à la recherche",
    "provider": "Ministry of Education and Higher Education",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Canada"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Research fund Established 1984.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q106990239",
    "sources": [
      "https://www.wikidata.org/wiki/Q106990239"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10114,
    "name": "“la Caixa” Fellowship",
    "provider": "La Caixa",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Spain"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship of “La Caixa” Foundation Established 1982.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://fundacionlacaixa.org/en/fellowships-general-information",
    "sources": [
      "https://www.wikidata.org/wiki/Q107301576"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10115,
    "name": "Rafael del Pino Excellence Scholarship",
    "provider": "Rafael del Pino Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Spain"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship awarded by the Rafael del Pino Foundation",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://frdelpino.es/categoria-beca/01_becas-de-excelencia/",
    "sources": [
      "https://www.wikidata.org/wiki/Q107352473"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10116,
    "name": "Gamers Helping Gamers",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American nonprofit organization assisting students with college tuition",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.gamershelpinggamers.org/",
    "sources": [
      "https://www.wikidata.org/wiki/Q107404464"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10117,
    "name": "Posse Veterans Program",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship program issued by the Posse Foundation to veterans of the U.S. Armed Forces seeking to pursue a bachelors degree at top colleges or universities",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.possefoundation.org/shaping-the-future/posse-veterans-program",
    "sources": [
      "https://www.wikidata.org/wiki/Q108567137"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10118,
    "name": "FERO scholarship",
    "provider": "FERO Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 2009.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://fero.org/ca/investigacio/beques-fero/",
    "sources": [
      "https://www.wikidata.org/wiki/Q108826570"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10119,
    "name": "Charles Ives Scholarship",
    "provider": "American Academy of Arts and Letters",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Grants awarded annually to composers for continued study in composition Established 1970.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://artsandletters.org/",
    "sources": [
      "https://www.wikidata.org/wiki/Q109532226"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10120,
    "name": "Halyna Hutchins Scholarship Fund",
    "provider": "American Film Institute",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 2021.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.afi.com/halyna-hutchins-scholarship-fund/",
    "sources": [
      "https://www.wikidata.org/wiki/Q109592315"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10121,
    "name": "Oxford-Kobe Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q109599947",
    "sources": [
      "https://www.wikidata.org/wiki/Q109599947"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10122,
    "name": "Elder Overseas Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Australia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Australian music scholarship Established 1883.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q110818702",
    "sources": [
      "https://www.wikidata.org/wiki/Q110818702"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10123,
    "name": "Chinese Government Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "China"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q112085410",
    "sources": [
      "https://www.wikidata.org/wiki/Q112085410"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10124,
    "name": "University Postgraduate Programme",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "China"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q112085411",
    "sources": [
      "https://www.wikidata.org/wiki/Q112085411"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10125,
    "name": "Albrecht Lempp Scholarship",
    "provider": "Literarisches Colloquium Berlin",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Poland"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Annual literary scholarship of LCB in Berlin for Polish and German writers and translators Established 2013.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://lcb.de/foerderung/albrecht-lempp-stipendium/",
    "sources": [
      "https://www.wikidata.org/wiki/Q112121422"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10126,
    "name": "Shirtcliffe Fellowship",
    "provider": "Universities New Zealand",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "New Zealand award for doctoral study in New Zealand or another Commonwealth country Established 1935.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q115395883",
    "sources": [
      "https://www.wikidata.org/wiki/Q115395883"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10046,
    "name": "Astrid Lindgrens Stiftelse Solkattens stipend",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Sweden"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 2001.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q10420925",
    "sources": [
      "https://www.wikidata.org/wiki/Q10420925"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10047,
    "name": "Cornelis Vreeswijk scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Sweden"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Swedish music scholarship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q10459775",
    "sources": [
      "https://www.wikidata.org/wiki/Q10459775"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10048,
    "name": "Jenny Lind scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q10539936",
    "sources": [
      "https://www.wikidata.org/wiki/Q10539936"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10049,
    "name": "Maria Bonnier Dahlins stipendium",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Sweden"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q10577177",
    "sources": [
      "https://www.wikidata.org/wiki/Q10577177"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10050,
    "name": "Rubus Arcticus",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Sweden"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Annual cultural grant awarded by the County Council of Norrbotten County in Sweden",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q10657581",
    "sources": [
      "https://www.wikidata.org/wiki/Q10657581"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10051,
    "name": "Sankei Scholarship",
    "provider": "Fuji Television",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q11305542",
    "sources": [
      "https://www.wikidata.org/wiki/Q11305542"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10052,
    "name": "Freeman Asian Scholarship Program",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.wesleyan.edu/admission/freeman/",
    "sources": [
      "https://www.wikidata.org/wiki/Q11333869"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10053,
    "name": "gakumonryō",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q11448142",
    "sources": [
      "https://www.wikidata.org/wiki/Q11448142"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10054,
    "name": "The Kastuś Kalinoŭski Scholarship Programme",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship program",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q11827538",
    "sources": [
      "https://www.wikidata.org/wiki/Q11827538"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10055,
    "name": "Fartein Valen Prize",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Norwegian music award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q11968550",
    "sources": [
      "https://www.wikidata.org/wiki/Q11968550"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10056,
    "name": "W. Towyn Roberts Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Wales"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q13132706",
    "sources": [
      "https://www.wikidata.org/wiki/Q13132706"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10057,
    "name": "Harry S. Truman Scholarship",
    "provider": "Harry S. Truman Scholarship Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American graduate fellowship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q15138139",
    "sources": [
      "https://www.wikidata.org/wiki/Q15138139"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10058,
    "name": "DRA scholarship",
    "provider": "German Broadcasting Archive",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship of the German Broadcasting Archive",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q15148237",
    "sources": [
      "https://www.wikidata.org/wiki/Q15148237"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10059,
    "name": "Sixten Jernberg Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Sweden"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Swedish cross-country skiing award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q16271115",
    "sources": [
      "https://www.wikidata.org/wiki/Q16271115"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10060,
    "name": "Riho Päts scholarship in music education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Estonia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Music education award in Estonia Established 2002.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q16412354",
    "sources": [
      "https://www.wikidata.org/wiki/Q16412354"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10061,
    "name": "Schwarzman Scholars",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "China"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Postgraduate award program for students to study at Tsinghua University in China Established 2013.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.schwarzmanscholars.org/",
    "sources": [
      "https://www.wikidata.org/wiki/Q17152830"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10062,
    "name": "Focillon Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q17175174",
    "sources": [
      "https://www.wikidata.org/wiki/Q17175174"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10063,
    "name": "Léonie Sonnings Musikstipendium",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q18452024",
    "sources": [
      "https://www.wikidata.org/wiki/Q18452024"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10064,
    "name": "Feodor Lynen scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q19508729",
    "sources": [
      "https://www.wikidata.org/wiki/Q19508729"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10065,
    "name": "Fredrik Roos Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Sweden"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Swedish visual arts and early career award for artists aged 35 or under (2011–) Established 2011.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q19978522",
    "sources": [
      "https://www.wikidata.org/wiki/Q19978522"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10066,
    "name": "Mendelssohn Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship in the United Kingdom",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q20010780",
    "sources": [
      "https://www.wikidata.org/wiki/Q20010780"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10067,
    "name": "Preis der Charlotten-Stiftung für Philologie",
    "provider": "Royal Prussian Academy of Sciences",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Grant in the humanities, awarded by the Prussian Academy of Sciences Established 1874.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q20898907",
    "sources": [
      "https://www.wikidata.org/wiki/Q20898907"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10068,
    "name": "resident at the Villa Medici",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "France",
      "Italy"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Competitive scholarship offered yearly to French-speaking artists for a 3-year endowment",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.villamedici.it/fr/anciens-pensionnaires/",
    "sources": [
      "https://www.wikidata.org/wiki/Q20962313"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10069,
    "name": "Catherine Helen Spence Memorial Scholarships",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Australia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "South Australian merit-based grants for overseas study in sociology Established 1912.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q24962458",
    "sources": [
      "https://www.wikidata.org/wiki/Q24962458"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10070,
    "name": "Yuri Lotman scholarship",
    "provider": "Yuri Lotman Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Estonia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship for graduate students in semiotics and Slavic philology, issued by the Yuri Lotman Foundation Established 2001.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q25499428",
    "sources": [
      "https://www.wikidata.org/wiki/Q25499428",
      "https://www.wikidata.org/wiki/Q25521617"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10071,
    "name": "Katzir Fellowships",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Israel"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 1991.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.rashi.org.il/katzir-scholarships-program?gclid=Cj0KCQjwirz3BRD_ARIsAImf7LPbAE5DZKZ4q5Nw2xLRcdMIcs2VLhSTLgT_WxdDCJMAOIywbHt1jZsaAgkPEALw_wcB",
    "sources": [
      "https://www.wikidata.org/wiki/Q27076869"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10072,
    "name": "Heinz Nixdorf Programm",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q27478413",
    "sources": [
      "https://www.wikidata.org/wiki/Q27478413"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10073,
    "name": "Slam Dunk Scholarship",
    "provider": "Shueisha",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://slamdunk-sc.shueisha.co.jp/",
    "sources": [
      "https://www.wikidata.org/wiki/Q28693075"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10074,
    "name": "Tromsø municipality's art scholarship",
    "provider": "Tromsø Municipality",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Norway"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Norwegian scholarship Established 1988.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q28719186",
    "sources": [
      "https://www.wikidata.org/wiki/Q28719186"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10075,
    "name": "K W Gullers grant",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Sweden"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Swedish photo prize",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q28927353",
    "sources": [
      "https://www.wikidata.org/wiki/Q28927353"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10076,
    "name": "Bourse de l’Académie",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q29169737",
    "sources": [
      "https://www.wikidata.org/wiki/Q29169737"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10077,
    "name": "Vietnam Education Foundation",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Independent U.S. federal government agency Established 2000.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://home.vef.gov/",
    "sources": [
      "https://www.wikidata.org/wiki/Q29364525"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10078,
    "name": "Hubert H. Humphrey Fellowship",
    "provider": "United States Department of State",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 1978.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.humphreyfellowship.org/",
    "sources": [
      "https://www.wikidata.org/wiki/Q30589345"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10079,
    "name": "Ela ja sära",
    "provider": "Cultural Endowment of Estonia",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Estonia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship for creative work by Cultural Endowment of Estonia Established 2000.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q31273884",
    "sources": [
      "https://www.wikidata.org/wiki/Q31273884"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10080,
    "name": "Astrid Lindgren's World Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship founded in 1987 Established 1987.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://astridlindgrensnas.se/salikon-stipendiet/",
    "sources": [
      "https://www.wikidata.org/wiki/Q31884881"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10081,
    "name": "Open Science Fellows Program",
    "provider": "Stifterverband für die Deutsche Wissenschaft",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Joint project of Wikimedia Deutschland, the Stifterverband, and the Volkswagen Foundation",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.fellowsfreieswissen.de",
    "sources": [
      "https://www.wikidata.org/wiki/Q42092479"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10082,
    "name": "Novos Valores",
    "provider": "Diputación Provincial de Pontevedra",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Spain"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Galician artistic contest Established 1982.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.depo.gal/novos-valores",
    "sources": [
      "https://www.wikidata.org/wiki/Q49135316"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10083,
    "name": "Sixten Gemzéus stora musikstipendium",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Sweden"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Swedish music scholarship Established 2017.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q53542391",
    "sources": [
      "https://www.wikidata.org/wiki/Q53542391"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10084,
    "name": "Lendület (Momentum) Research Programme",
    "provider": "Hungarian Academy of Sciences",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Hungary"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Support programme for young scientists by the Hungarian Academy of Sciences Established 2009.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://mta.hu/lendulet",
    "sources": [
      "https://www.wikidata.org/wiki/Q55216395"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10085,
    "name": "Harold McPheeters Scholarship",
    "provider": "National Organization for Human Services",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.nationalhumanservices.org/index.php?option=com_content&view=article&id=52",
    "sources": [
      "https://www.wikidata.org/wiki/Q55379474"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10086,
    "name": "Stadtschreiberstipendium",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship, part of Ingeborg Bachmann Prize",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q55429862",
    "sources": [
      "https://www.wikidata.org/wiki/Q55429862"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10087,
    "name": "Statira Biggs Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship at the University of Washington for students from China, Japan, or Korea",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q56271766",
    "sources": [
      "https://www.wikidata.org/wiki/Q56271766"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10088,
    "name": "Savings Bank Foundation DNB's art grant",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Norway"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 2008.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q56405387",
    "sources": [
      "https://www.wikidata.org/wiki/Q56405387"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10089,
    "name": "Software Sustainability Institute Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship award Established 2012.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.software.ac.uk/programmes-and-events/fellowship-programme",
    "sources": [
      "https://www.wikidata.org/wiki/Q56489568"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10090,
    "name": "The custodian of the two holy mosques scholarship program",
    "provider": "Government of Saudi Arabia",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Saudi Arabia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q60572933",
    "sources": [
      "https://www.wikidata.org/wiki/Q60572933"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10091,
    "name": "Jardine Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Undergraduate award for study at the Universities of Oxford and Cambridge Established 1982.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q60742242",
    "sources": [
      "https://www.wikidata.org/wiki/Q60742242"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10045,
    "name": "Hemmung der Interferon-vermittelten Virusabwehr durch das E6-Protein des humanen Papillomvirus 16",
    "provider": "German Research Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Research project",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q116073361",
    "sources": [
      "https://www.wikidata.org/wiki/Q116073361"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10127,
    "name": "Inflammation in the rotenone-model of Parkinson’s disease",
    "provider": "German Research Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q116088368",
    "sources": [
      "https://www.wikidata.org/wiki/Q116088368"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10128,
    "name": "Singular Lagrangian varieties and related normal form problems in the semi-classical analysis of quantised integrable systems",
    "provider": "German Research Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q116102813",
    "sources": [
      "https://www.wikidata.org/wiki/Q116102813"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10129,
    "name": "Chronology of the Early Bronze Age on the Upper Euphrates based on the ceramic sequence from Norsuntepe (Elazig Province/Turkey). Cultural development…",
    "provider": "German Research Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q116111032",
    "sources": [
      "https://www.wikidata.org/wiki/Q116111032"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10130,
    "name": "Graz resident writer",
    "provider": "Graz",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Austria"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Austrian literary prize for writers from Europe (1988-) Established 1988.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q638467",
    "sources": [
      "https://www.wikidata.org/wiki/Q638467"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10131,
    "name": "Móricz Zsigmond Grant",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Hungary"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award Established 1973.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q1213278",
    "sources": [
      "https://www.wikidata.org/wiki/Q1213278"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10132,
    "name": "Functional characterization of neurons in the Drosophila medulla, which is the first processing center for color vision, using a behavioural assay",
    "provider": "German Research Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q116124130",
    "sources": [
      "https://www.wikidata.org/wiki/Q116124130"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10133,
    "name": "Louis Forman RSM Fellowship Award",
    "provider": "Royal Society of Medicine",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Dermatology award in the UK",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q116133874",
    "sources": [
      "https://www.wikidata.org/wiki/Q116133874"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10208,
    "name": "UNESCO-L'Oréal International Fellowships",
    "provider": "UNESCO",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q21284866",
    "sources": [
      "https://www.wikidata.org/wiki/Q21284866"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10209,
    "name": "Paul Harris Fellow",
    "provider": "Rotary Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Rotary Foundation recognition for individuals who meet high professional and personal standards set forth by Paul Harris. Established 1957.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.rotary.org/en/history-paul-harris-fellow-recognition",
    "sources": [
      "https://www.wikidata.org/wiki/Q21289545"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10210,
    "name": "Carnegie African Diaspora Fellowship Program",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholar fellowship program for educational projects at African higher education institutions",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.iie.org/Programs/Carnegie-African-Diaspora-Fellowship-Program",
    "sources": [
      "https://www.wikidata.org/wiki/Q22907070"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10211,
    "name": "Woodrow Wilson Teaching Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q22909809",
    "sources": [
      "https://www.wikidata.org/wiki/Q22909809"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10212,
    "name": "TED Fellow",
    "provider": "TED",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship awarded by TED",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.ted.com/participate/ted-fellows-program",
    "sources": [
      "https://www.wikidata.org/wiki/Q23014197"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10213,
    "name": "Anton Starkopf Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Annual prize by the Cultural Endowment of Tartu",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q25504007",
    "sources": [
      "https://www.wikidata.org/wiki/Q25504007"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10214,
    "name": "Baltimore Social Innovation Fellowship",
    "provider": "David Warnock",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Awarded by the Warnock Foundation in Baltimore, Maryland",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q28050481",
    "sources": [
      "https://www.wikidata.org/wiki/Q28050481"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10215,
    "name": "Bruno Walter Fellowship",
    "provider": "Cabrillo Festival of Contemporary Music",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Conducting fellowship at the Cabrillo Festival of Contemporary Music",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://cabrillomusic.org/about-us/educational-programs/conductors-composers-workshop/",
    "sources": [
      "https://www.wikidata.org/wiki/Q28050495"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10216,
    "name": "Kerala Sangeetha Nataka Akademi Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship in arts Established 1972.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.keralasangeethanatakaakademi.in/",
    "sources": [
      "https://www.wikidata.org/wiki/Q28174028"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10217,
    "name": "Warren T. Brookes Journalism Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q28547253",
    "sources": [
      "https://www.wikidata.org/wiki/Q28547253"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10218,
    "name": "Humboldt Research Fellowship",
    "provider": "Alexander von Humboldt Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship for postdoctoral and experienced researchers of all nationalities that conduct their research in Germany.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q28854612",
    "sources": [
      "https://www.wikidata.org/wiki/Q28854612"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10219,
    "name": "Royal Society University Research Fellowship",
    "provider": "Royal Society of London",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Research fellowship awarded to outstanding early career scientists in the United Kingdom who are judged by the Royal Society to have the potential to become leaders in their field",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://royalsociety.org/grants-schemes-awards/grants/university-research/",
    "sources": [
      "https://www.wikidata.org/wiki/Q28857542"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10220,
    "name": "National Endowment for the Arts Fellowship",
    "provider": "National Endowment for the Arts",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q28911895",
    "sources": [
      "https://www.wikidata.org/wiki/Q28911895"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10221,
    "name": "Pew Fellowship in Marine Conservation",
    "provider": "The Pew Charitable Trusts",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 1989.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.pewtrusts.org/en/projects/marine-fellows/about",
    "sources": [
      "https://www.wikidata.org/wiki/Q30238527"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10222,
    "name": "Fellow of the Faculty of Public Health",
    "provider": "Faculty of Public Health",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q30458765",
    "sources": [
      "https://www.wikidata.org/wiki/Q30458765"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10223,
    "name": "Fellow of the Institute of Biology",
    "provider": "Institute of Biology",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q30464115",
    "sources": [
      "https://www.wikidata.org/wiki/Q30464115"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10224,
    "name": "Wellcome Trust Principal Research Fellowship",
    "provider": "Wellcome Trust",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Research fellowship granted by the Wellcome Trust",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q32625952",
    "sources": [
      "https://www.wikidata.org/wiki/Q32625952"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10225,
    "name": "Jane Coffin Childs postdoctoral Fellowship",
    "provider": "Jane Coffin Childs Memorial Fund for Medical Research",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scientific research fellowship for three years Established 1937.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q39182247",
    "sources": [
      "https://www.wikidata.org/wiki/Q39182247"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10226,
    "name": "3M Teaching Fellow",
    "provider": "3M",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Canada"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q49000065",
    "sources": [
      "https://www.wikidata.org/wiki/Q49000065"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10227,
    "name": "Bassel Khartabil Free Culture Fellowship",
    "provider": "Creative Commons",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q51950451",
    "sources": [
      "https://www.wikidata.org/wiki/Q51950451"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10228,
    "name": "Killam Research Fellowship",
    "provider": "Canada Council for the Arts",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Canada Council research award Established 1968.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q56627685",
    "sources": [
      "https://www.wikidata.org/wiki/Q56627685"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10229,
    "name": "Rutherford Discovery Fellowship",
    "provider": "Royal Society Te Apārangi",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "New Zealand award giving financial support to early- to mid-career researchers Established 2010.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://royalsociety.org.nz/what-we-do/funds-and-opportunities/rutherford-discovery-fellowships/",
    "sources": [
      "https://www.wikidata.org/wiki/Q56878278"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10230,
    "name": "iSTEM Fellow",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award name",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q57979232",
    "sources": [
      "https://www.wikidata.org/wiki/Q57979232"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10231,
    "name": "Jefferson Science Fellow",
    "provider": "United States Agency for International Development",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship Established 2003.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://sites.nationalacademies.org/PGA/Jefferson/index.htm",
    "sources": [
      "https://www.wikidata.org/wiki/Q60141383"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10232,
    "name": "Alfred P. Sloan Fellow",
    "provider": "Alfred P. Sloan Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Academic fellowship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q60667392",
    "sources": [
      "https://www.wikidata.org/wiki/Q60667392"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10233,
    "name": "Ashoka Fellow",
    "provider": "Ashoka",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellow of Ashoka organization",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.ashoka.org/en-us/ashoka-fellows",
    "sources": [
      "https://www.wikidata.org/wiki/Q60784950"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10234,
    "name": "Junior Research Fellow",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Academic position popular at Oxford and Cambridge",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q60842126",
    "sources": [
      "https://www.wikidata.org/wiki/Q60842126"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10235,
    "name": "Functional analysis of a novel viral RNA binding protein",
    "provider": "Biotechnology and Biological Sciences Research Council",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "PhD studentship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q63341474",
    "sources": [
      "https://www.wikidata.org/wiki/Q63341474"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10236,
    "name": "Self-Optimising Multiphasic Flow Reactor and Work-up Processing",
    "provider": "Engineering and Physical Sciences Research Council",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "PhD studentship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q63341475",
    "sources": [
      "https://www.wikidata.org/wiki/Q63341475"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10237,
    "name": "How does the human papillomavirus (HPV) E5 protein control skin cell growth and differentiation during a productive life cycle?",
    "provider": "Biotechnology and Biological Sciences Research Council",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "PhD studentship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q63341477",
    "sources": [
      "https://www.wikidata.org/wiki/Q63341477"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10238,
    "name": "Liquid Crystal Microdroplets and confined systems for novel shutters",
    "provider": "Engineering and Physical Sciences Research Council",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "PhD studentship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q63341478",
    "sources": [
      "https://www.wikidata.org/wiki/Q63341478"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10239,
    "name": "The importance of visual impact on public acceptance of renewable and non-conventional energy sources",
    "provider": "Natural Environment Research Council",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "PhD studentship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q63341480",
    "sources": [
      "https://www.wikidata.org/wiki/Q63341480"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10240,
    "name": "Evaluation of 3D dual-polarised radar-ased hydrometeor classification algorithms over the UK",
    "provider": "Natural Environment Research Council",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "PhD studentship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q63341482",
    "sources": [
      "https://www.wikidata.org/wiki/Q63341482"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10241,
    "name": "Exploring the impact of the early obesogenic home environment on children's growth and psychological development",
    "provider": "Economic and Social Research Council",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "PhD studentship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q63341483",
    "sources": [
      "https://www.wikidata.org/wiki/Q63341483"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10242,
    "name": "Canada Council Senior Arts Fellowship",
    "provider": "Canada Council for the Arts",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Canada"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q63412996",
    "sources": [
      "https://www.wikidata.org/wiki/Q63412996"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10243,
    "name": "Szent-Györgyi Albert Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Hungary"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship by the Hungarian Ministry of Education for scientific research Established 2004.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q63614732",
    "sources": [
      "https://www.wikidata.org/wiki/Q63614732"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10244,
    "name": "Mandela Washington Fellowship",
    "provider": "Young African Leaders Initiative",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 2014.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://yali.state.gov/mwf/",
    "sources": [
      "https://www.wikidata.org/wiki/Q63838268"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10245,
    "name": "Safina Center Kalpana Chawla ‘Launchpad’ Fellowship",
    "provider": "The Safina Center",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship for funding projects Established 2017.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://safinacenter.org/programs/safina-center-fellows/safina-center-kalpana-chawla-launchpad-fellows/",
    "sources": [
      "https://www.wikidata.org/wiki/Q63852444"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10246,
    "name": "Lila Acheson Wallace American Playwrights Fellowship",
    "provider": "Juilliard School",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Graduate-level playwriting fellowship at the Juilliard School",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q63972666",
    "sources": [
      "https://www.wikidata.org/wiki/Q63972666"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10247,
    "name": "Bass Fellow",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q64138369",
    "sources": [
      "https://www.wikidata.org/wiki/Q64138369"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10248,
    "name": "Kundiman Fellowship",
    "provider": "Kundiman",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Literary fellowship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q64717385",
    "sources": [
      "https://www.wikidata.org/wiki/Q64717385"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10249,
    "name": "Cave Canem fellow",
    "provider": "Cave Canem Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Literary fellowship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q64736408",
    "sources": [
      "https://www.wikidata.org/wiki/Q64736408"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10250,
    "name": "Fellow of Pew Foundation",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Science award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q64852031",
    "sources": [
      "https://www.wikidata.org/wiki/Q64852031"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10251,
    "name": "Kerala Sahitya Akademi Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Literary honour Established 1970.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q65087752",
    "sources": [
      "https://www.wikidata.org/wiki/Q65087752"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10252,
    "name": "Schmidt Science Fellows",
    "provider": "Schmidt Futures",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Postdoctoral fellowship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q65120466",
    "sources": [
      "https://www.wikidata.org/wiki/Q65120466"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10253,
    "name": "Georgina Sweet Australian Laureate Fellowship",
    "provider": "Australian Research Council",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Australia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 2010.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.arc.gov.au/policies-strategies/strategy/gender-equality-research/kathleen-fitzpatrick-and-georgina-sweet-australian-laureate-fellows",
    "sources": [
      "https://www.wikidata.org/wiki/Q66085136"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10254,
    "name": "Kathleen Fitzpatrick Australian Laureate Fellowship",
    "provider": "Australian Research Council",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Australia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 2010.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.arc.gov.au/policies-strategies/strategy/gender-equality-research/kathleen-fitzpatrick-and-georgina-sweet-australian-laureate-fellows",
    "sources": [
      "https://www.wikidata.org/wiki/Q66085137"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10255,
    "name": "CantoMundo fellow",
    "provider": "CantoMundo",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Literary fellowship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q66426749",
    "sources": [
      "https://www.wikidata.org/wiki/Q66426749"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10256,
    "name": "Dorothy McCluskey Visiting Fellowship in Conservation",
    "provider": "Yale School of the Environment",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q66446669",
    "sources": [
      "https://www.wikidata.org/wiki/Q66446669"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10257,
    "name": "ACR Distinguished Fellow Award",
    "provider": "American College of Rheumatology",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "The ACR Distinguished Fellow Award recognizes clinical and research fellows who are in a rheumatology fellowship training program and have performed meritoriously",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.rheumatology.org/Get-Involved/Awards/ACR-Awards",
    "sources": [
      "https://www.wikidata.org/wiki/Q70134157"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10258,
    "name": "Elise Richter Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award and funding scheme of the Austrian Science Fund for highly qualified female scientists and scholars of any discipline, who strive for an university career.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q73547666",
    "sources": [
      "https://www.wikidata.org/wiki/Q73547666"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10259,
    "name": "Harvard Junior Fellow",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q75090471",
    "sources": [
      "https://www.wikidata.org/wiki/Q75090471"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10260,
    "name": "Frank Knox Memorial Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship at Harvard University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://frankknox.harvard.edu/",
    "sources": [
      "https://www.wikidata.org/wiki/Q76246422"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10261,
    "name": "Loeb Fellowship",
    "provider": "Harvard Graduate School of Design",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 1968.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://loebfellowship.gsd.harvard.edu/",
    "sources": [
      "https://www.wikidata.org/wiki/Q80835725"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10262,
    "name": "Azrieli Fellows Program",
    "provider": "Azrieli Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Israel"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q83987737",
    "sources": [
      "https://www.wikidata.org/wiki/Q83987737"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10263,
    "name": "Fellowship of the Academy of American Poets",
    "provider": "Academy of American Poets",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American poetry award (1936-) Established 1936.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94660580",
    "sources": [
      "https://www.wikidata.org/wiki/Q122710186",
      "https://www.wikidata.org/wiki/Q94660580"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10264,
    "name": "Continuing Bass University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94973003",
    "sources": [
      "https://www.wikidata.org/wiki/Q94973003"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10265,
    "name": "Fellow of the Fields Institute",
    "provider": "Fields Institute",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94983882",
    "sources": [
      "https://www.wikidata.org/wiki/Q94983882"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10266,
    "name": "Gregory Amadon Family University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997201",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997201"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10267,
    "name": "Anonymous Friends University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997202",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997202"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10268,
    "name": "Gerhard Casper University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997204",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997204"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10269,
    "name": "Paul Davies Family University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997205",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997205"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10270,
    "name": "Duca Family University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997206",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997206"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10271,
    "name": "Dunlevie Family University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997208",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997208"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10272,
    "name": "Barbara D. Finberg University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997209",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997209"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10273,
    "name": "Bert and Candace Forbes University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997211",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997211"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10274,
    "name": "Thomas W. and Susan B. Ford University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997212",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997212"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10275,
    "name": "Michael Forman University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997213",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997213"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10276,
    "name": "John A. and Cynthia Fry Gunn University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997217",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997217"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10277,
    "name": "Mimi and Peter Haas University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997218",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997218"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10278,
    "name": "Robert and Ruth Halperin University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997220",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997220"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10279,
    "name": "Rachford and Carlota A. Harris University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997222",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997222"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10280,
    "name": "Hazy Family University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997223",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997223"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10281,
    "name": "Yumi and Yasunori Kaneko Family University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997225",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997225"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10282,
    "name": "William and Dorothy Kaye University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997226",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997226"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10283,
    "name": "William R. and Gretchen B. Kimball University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997227",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997227"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10284,
    "name": "Kleinheinz Family University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997229",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997229"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10285,
    "name": "Landreth Family University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997232",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997232"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10286,
    "name": "Martin Family University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997233",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997233"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10287,
    "name": "Barbara and Buzz McCoy University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997234",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997234"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10288,
    "name": "Burton J. and Deedee McMurtry University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997236",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997236"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10503,
    "name": "Milligan Family University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997237",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997237"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10504,
    "name": "John and Lydia Pearce Mitchell University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997239",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997239"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10289,
    "name": "Olivier & Nomellini Family University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997240",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997240"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10290,
    "name": "Robert K. Packard University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997241",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997241"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10291,
    "name": "Pritzker University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997243",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997243"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10292,
    "name": "Eleanor Loring Ritch University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997246",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997246"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10293,
    "name": "Louise and Claude Rosenberg, Jr. University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997247",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997247"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10294,
    "name": "John Henry Samter University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997249",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997249"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10381,
    "name": "Agnes Hoppin Memorial Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship for women students at the American School Established 1898.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q394545",
    "sources": [
      "https://www.wikidata.org/wiki/Q394545"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10382,
    "name": "Sangeet Natak Akademi Fellowship",
    "provider": "Sangeet Natak Akademi",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Indian honor for the performing arts Established 1954.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://sangeetnatak.gov.in",
    "sources": [
      "https://www.wikidata.org/wiki/Q632094"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10383,
    "name": "Guggenheim Fellowship",
    "provider": "John Simon Guggenheim Memorial Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Grant in the arts, awarded annually Established 1925.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.gf.org/program",
    "sources": [
      "https://www.wikidata.org/wiki/Q1316544"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10384,
    "name": "White House Fellows",
    "provider": "Lyndon B. Johnson",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Staff of the U.S. president Established 1964.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q1325730",
    "sources": [
      "https://www.wikidata.org/wiki/Q1325730"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10385,
    "name": "Sylt resident writer",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "German scholarship for writers (2000-2018) Established 2000.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q1664495",
    "sources": [
      "https://www.wikidata.org/wiki/Q1664495"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10386,
    "name": "Miller Research Fellows",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 1960.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q1935483",
    "sources": [
      "https://www.wikidata.org/wiki/Q1935483"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10387,
    "name": "National Heritage Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American folk arts award Established 1982.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.arts.gov/honors/heritage",
    "sources": [
      "https://www.wikidata.org/wiki/Q1967283"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10388,
    "name": "Robert Burns Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Literary award in New Zealand Established 1958.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q2156656",
    "sources": [
      "https://www.wikidata.org/wiki/Q2156656"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10389,
    "name": "Intel Fellow",
    "provider": "Intel",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q4041451",
    "sources": [
      "https://www.wikidata.org/wiki/Q4041451"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10390,
    "name": "Yale World Fellows",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "International fellowship program at Yale University Established 2002.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://worldfellows.yale.edu",
    "sources": [
      "https://www.wikidata.org/wiki/Q4127363"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10391,
    "name": "Sigmund Skard Fellowship",
    "provider": "Det Norske Samlaget",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Norway"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Grant by Norvegian publishing house Det Norske Samlaget",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q4586472",
    "sources": [
      "https://www.wikidata.org/wiki/Q4586472"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10392,
    "name": "Nieman Fellowship",
    "provider": "Harvard University",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship for journalism at Harvard University Established 1938.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://nieman.harvard.edu/",
    "sources": [
      "https://www.wikidata.org/wiki/Q4707545"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10393,
    "name": "Alicia Patterson Fellowship",
    "provider": "Alicia Patterson Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Grant awarded by the Alicia Patterson Foundation Established 1966.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q4726290",
    "sources": [
      "https://www.wikidata.org/wiki/Q4726290"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10394,
    "name": "Bannerman Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship program",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q4856956",
    "sources": [
      "https://www.wikidata.org/wiki/Q4856956"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10395,
    "name": "Berlin Prize",
    "provider": "American Academy in Berlin",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Academic fellowship award Established 1998.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.americanacademy.de/",
    "sources": [
      "https://www.wikidata.org/wiki/Q4892456"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10396,
    "name": "Commonwealth Scholarship and Fellowship Plan",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "An international programme which offers scholarships and fellowships to citizens of other Commonwealth countries",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q5153851",
    "sources": [
      "https://www.wikidata.org/wiki/Q5153851"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10397,
    "name": "Eisenhower Fellowships",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Organization Established 1953.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://efworld.org/",
    "sources": [
      "https://www.wikidata.org/wiki/Q5349914"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10398,
    "name": "Federation Fellowship",
    "provider": "Australian Research Council",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Australia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 2001.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q5440730",
    "sources": [
      "https://www.wikidata.org/wiki/Q5440730"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10399,
    "name": "Frances Hodgkins Fellowship",
    "provider": "University of Otago",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "New Zealand arts residency Established 1962.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q5478718",
    "sources": [
      "https://www.wikidata.org/wiki/Q5478718"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10400,
    "name": "Harkness Fellowship",
    "provider": "Commonwealth Fund",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Research fellowship awarded by the Commonwealth Fund",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q5658217",
    "sources": [
      "https://www.wikidata.org/wiki/Q5658217"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10401,
    "name": "Harry Oppenheimer Fellowship Award",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "South Africa"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 2001.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q5671387",
    "sources": [
      "https://www.wikidata.org/wiki/Q5671387"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10402,
    "name": "Herbert Scoville Jr. Peace Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Nonprofit organization in United States of America Established 1987.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://scoville.org/",
    "sources": [
      "https://www.wikidata.org/wiki/Q5735546"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10403,
    "name": "Jacob K. Javits Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Defunct academic support programme",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q6118826",
    "sources": [
      "https://www.wikidata.org/wiki/Q6118826"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10404,
    "name": "Jeannette K. Watson Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Undergraduate three-year internship grant Established 1999.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q6172286",
    "sources": [
      "https://www.wikidata.org/wiki/Q6172286"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10405,
    "name": "John S. Knight Fellowships for Professional Journalists",
    "provider": "Knight Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship for journalism at Stanford University Established 1966.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://jsk.stanford.edu",
    "sources": [
      "https://www.wikidata.org/wiki/Q6256309"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10406,
    "name": "José Rizal's Global Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Philippines"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Ideas of the Philippine national hero",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q6293870",
    "sources": [
      "https://www.wikidata.org/wiki/Q6293870"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10407,
    "name": "Knight-Wallace Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Journalism organization Established 1973.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.mjfellows.org",
    "sources": [
      "https://www.wikidata.org/wiki/Q6422182"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10408,
    "name": "Knight Science Journalism Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Journalism fellowship program at MIT",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q6422280",
    "sources": [
      "https://www.wikidata.org/wiki/Q6422280"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10409,
    "name": "Lady Davis Fellowship Award",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Research grant awarded",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q6470064",
    "sources": [
      "https://www.wikidata.org/wiki/Q6470064"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10410,
    "name": "Mozart Fellowship",
    "provider": "University of Otago",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Musical residency in New Zealand university",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q6927894",
    "sources": [
      "https://www.wikidata.org/wiki/Q6927894"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10411,
    "name": "National Space Grant College and Fellowship Program",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American institions of space research Established 1988.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q6978618",
    "sources": [
      "https://www.wikidata.org/wiki/Q6978618"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10412,
    "name": "National Teaching Fellowship",
    "provider": "Advance HE",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "British award for excellence in teaching in higher education",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q6978850",
    "sources": [
      "https://www.wikidata.org/wiki/Q6978850"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10413,
    "name": "Katherine Mansfield Menton Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "New Zealand literary award Established 1970.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7015588",
    "sources": [
      "https://www.wikidata.org/wiki/Q7015588"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10414,
    "name": "Newton International Fellowship",
    "provider": "Royal Society of London",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Postdoctoral research fellowship in the UK for a non-UK scientist",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://royalsociety.org/grants-schemes-awards/grants/newton-international/",
    "sources": [
      "https://www.wikidata.org/wiki/Q7020266"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10415,
    "name": "Pew Fellowship in the Arts",
    "provider": "Pew Center for Arts & Heritage",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 1991.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7179538",
    "sources": [
      "https://www.wikidata.org/wiki/Q7179538"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10416,
    "name": "Presidential Innovation Fellows",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "US fellowship program Established 2012.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://presidentialinnovationfellows.gov/",
    "sources": [
      "https://www.wikidata.org/wiki/Q7241444"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10417,
    "name": "Robert Bosch Foundation Fellowship Program",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Program to promote German-US ties Established 1984.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7342225",
    "sources": [
      "https://www.wikidata.org/wiki/Q7342225"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10418,
    "name": "Royal Society Wolfson Fellowship",
    "provider": "Royal Society of London",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award and fellowship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://royalsociety.org/grants-schemes-awards/grants/royal-society-wolfson-fellowship/",
    "sources": [
      "https://www.wikidata.org/wiki/Q7374839"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10419,
    "name": "Sloan Fellowship",
    "provider": "Alfred P. Sloan Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award Established 1955.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.sloan.org/sloan-research-fellowships/",
    "sources": [
      "https://www.wikidata.org/wiki/Q7541057"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10420,
    "name": "Stegner Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Creative writing program at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://creativewriting.stanford.edu/about-the-fellowship",
    "sources": [
      "https://www.wikidata.org/wiki/Q7606694"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10421,
    "name": "Summer Undergraduate Research Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Summer immersion experience",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7637468",
    "sources": [
      "https://www.wikidata.org/wiki/Q7637468"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10422,
    "name": "Sàr Ghaidheal Fellowships",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Annual award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7665197",
    "sources": [
      "https://www.wikidata.org/wiki/Q7665197"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10423,
    "name": "The Albert Schweitzer Fellowship",
    "provider": "Helene Bresslau",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Non-profit organization in the USA Established 1940.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.schweitzerfellowship.org/",
    "sources": [
      "https://www.wikidata.org/wiki/Q7713009"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10424,
    "name": "Thiel Fellowship",
    "provider": "Peter Thiel",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship founded by Peter Thiel Established 2010.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.thielfellowship.org",
    "sources": [
      "https://www.wikidata.org/wiki/Q7783986"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10425,
    "name": "Thomas A. Scott Fellowship in Hygiene",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7786907",
    "sources": [
      "https://www.wikidata.org/wiki/Q7786907"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10426,
    "name": "Thomas J. Watson Fellowship",
    "provider": "Thomas J. Watson Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship stipend for fourth-year undergraduate overseas study",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7791165",
    "sources": [
      "https://www.wikidata.org/wiki/Q7791165"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10427,
    "name": "Thomas R. Pickering Foreign Affairs Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American graduate school fellowship program Established 1992.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7793372",
    "sources": [
      "https://www.wikidata.org/wiki/Q7793372"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10428,
    "name": "Turner Tomorrow Fellowship Award",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American literary prize",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7855965",
    "sources": [
      "https://www.wikidata.org/wiki/Q7855965"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10429,
    "name": "William Hodges Fellowship",
    "provider": "Southern Institute of Technology",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Artist in residence programme in Southland, New Zealand Established 1996.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q8012375",
    "sources": [
      "https://www.wikidata.org/wiki/Q8012375"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10430,
    "name": "Witter Bynner Fellowship",
    "provider": "United States Poet Laureate",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Poetry fellowship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.loc.gov/poetry/prize-fellow/bynner.html",
    "sources": [
      "https://www.wikidata.org/wiki/Q8028578"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10431,
    "name": "Bjornson scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q11961484",
    "sources": [
      "https://www.wikidata.org/wiki/Q11961484"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10432,
    "name": "European Programme for Intervention Epidemiology Training",
    "provider": "European Centre for Disease Prevention and Control",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Clinical surveillance program",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q12877395",
    "sources": [
      "https://www.wikidata.org/wiki/Q12877395"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10433,
    "name": "Susan Miller Fellowship",
    "provider": "Berkeley Center for New Media",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q15629591",
    "sources": [
      "https://www.wikidata.org/wiki/Q15629591"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10434,
    "name": "Outreachy",
    "provider": "Bloomberg L.P.",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Open source software internship program for marginalized people in IT industry Established 2006.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.outreachy.org/",
    "sources": [
      "https://www.wikidata.org/wiki/Q15894890"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10435,
    "name": "Ado Vabbe Art Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Estonia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Estonian art prize Established 1997.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q16409654",
    "sources": [
      "https://www.wikidata.org/wiki/Q16409654"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10436,
    "name": "Jawarharlal Nehru Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship conferred by the Jawaharlal Nehru Memorial Fund",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q16849792",
    "sources": [
      "https://www.wikidata.org/wiki/Q16849792"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10437,
    "name": "Knight-Bagehot Fellowship Program",
    "provider": "Columbia University",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Columbia University scholarship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q16973529",
    "sources": [
      "https://www.wikidata.org/wiki/Q16973529"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10202,
    "name": "Beit Memorial Fellowships for Medical Research",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Historic fellowships in the UK",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q17016867",
    "sources": [
      "https://www.wikidata.org/wiki/Q17016867"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10203,
    "name": "James McKeen Cattell Fellow Award",
    "provider": "Association for Psychological Science",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award for outstanding contributions to applied psychological research",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q17113252",
    "sources": [
      "https://www.wikidata.org/wiki/Q17113252"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10204,
    "name": "NATO Defense College Fellowships",
    "provider": "NATO",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Designed for international security scholars/academics/researchers of NATO Allies and its Partners. Established 1993.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q17505217",
    "sources": [
      "https://www.wikidata.org/wiki/Q17505217"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10205,
    "name": "AMS Centennial Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Research award Established 1973.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q17511891",
    "sources": [
      "https://www.wikidata.org/wiki/Q17511891"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10206,
    "name": "Shuttleworth Foundation Fellowship",
    "provider": "Shuttleworth Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q18609642",
    "sources": [
      "https://www.wikidata.org/wiki/Q18609642"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10207,
    "name": "Babits Mihály Translation Scholarship",
    "provider": "Ministry of Human Capacities",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Hungary"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 2006.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q20439723",
    "sources": [
      "https://www.wikidata.org/wiki/Q20439723"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10296,
    "name": "W. Warren Shelden University Fellow in Undergraduate Education",
    "provider": "Stanford University",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997252",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997252"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10298,
    "name": "Stanford Friends University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997255",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997255"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10299,
    "name": "William and Lynda Steere University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997257",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997257"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10300,
    "name": "Sugden Family University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997258",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997258"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10301,
    "name": "Oswald G. Villard University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997261",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997261"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10302,
    "name": "J. Frederick and Elisabeth Brewer Weintz University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997262",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997262"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10303,
    "name": "Akiko Yamazaki and Jerry Yang University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997264",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997264"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10304,
    "name": "Mr. and Mrs. Frank W. Yeung University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997265",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997265"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10305,
    "name": "African Postdoctoral Training Initiative Fellow",
    "provider": "African Academy of Sciences",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.aasciences.africa/aesa/programmes/african-postdoctoral-training-initiative-apti",
    "sources": [
      "https://www.wikidata.org/wiki/Q96276472"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10306,
    "name": "Australian Laureate Fellowship",
    "provider": "Australian Research Council",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Australia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Professorial research fellowship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q96372793",
    "sources": [
      "https://www.wikidata.org/wiki/Q96372793"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10307,
    "name": "Grant McLennan Memorial Fellowship",
    "provider": "Queensland Government",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Australia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Music fellowship awarded annually by the Queensland Government Established 2007.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q97016047",
    "sources": [
      "https://www.wikidata.org/wiki/Q97016047"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10308,
    "name": "Putnam Fellow",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award for the top five (or six in the case of a tie) participants in the annual William Lowell Putnam Mathematical Competition",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q99486391",
    "sources": [
      "https://www.wikidata.org/wiki/Q99486391"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10309,
    "name": "Radcliffe Institute for Advanced Study Fellowship Program",
    "provider": "Radcliffe Institute for Advanced Study",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Institution",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q99931814",
    "sources": [
      "https://www.wikidata.org/wiki/Q99931814"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10310,
    "name": "I Tatti Fellowship",
    "provider": "Harvard University Center for Italian Renaissance Studies",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Italy"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://itatti.harvard.edu/fellowships",
    "sources": [
      "https://www.wikidata.org/wiki/Q99931905"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10311,
    "name": "James Cook Research Fellowship",
    "provider": "Royal Society Te Apārangi",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship awarded by the Royal Society of New Zealand",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q104451522",
    "sources": [
      "https://www.wikidata.org/wiki/Q104451522"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10312,
    "name": "Swarnajayanti Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "National",
    "hostCountries": [
      "India"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "India"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Indian research award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q104852299",
    "sources": [
      "https://www.wikidata.org/wiki/Q104852299"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10313,
    "name": "Hazel Rowley Literary Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Australia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Australian literary award Established 2011.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://hazelrowley.com",
    "sources": [
      "https://www.wikidata.org/wiki/Q104911003"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10314,
    "name": "MBIE Science Whitinga Fellowship",
    "provider": "Ministry of Business, Innovation and Employment",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Science award in New Zealand Established 2021.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.mbie.govt.nz/science-and-technology/science-and-innovation/funding-information-and-opportunities/investment-funds/mbie-science-whitinga-fellowship/",
    "sources": [
      "https://www.wikidata.org/wiki/Q105090765"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10315,
    "name": "UC Davis Chancellor’s Fellows",
    "provider": "University of California, Davis",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Program to honor achievements of outstanding early career UC Davis faculty Established 2000.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://academicaffairs.ucdavis.edu/uc-and-campus-awards",
    "sources": [
      "https://www.wikidata.org/wiki/Q105950049"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10316,
    "name": "Ecological Society of America Early Career Fellows",
    "provider": "Ecological Society of America",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship to honor outstanding early career ecologists",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.esa.org/about/awards/#early-career-fellow",
    "sources": [
      "https://www.wikidata.org/wiki/Q105950353"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10317,
    "name": "Rothschild Fellowship",
    "provider": "Yad Hanadiv",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Israel"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "The Rothschild Fellowship programme for young scholars of outstanding academic merit Established 1979.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.yadhanadiv.org.il/rothschild-fellows",
    "sources": [
      "https://www.wikidata.org/wiki/Q106007699"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10318,
    "name": "Andrew Carnegie Fellow",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellow of the Andrew Carnegie Fellows Program Established 2015.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.carnegie.org/awards/award/andrew-carnegie-fellows/",
    "sources": [
      "https://www.wikidata.org/wiki/Q106166209"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10319,
    "name": "Millstone Research Fellowship",
    "provider": "Western Society for French History",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q106213876",
    "sources": [
      "https://www.wikidata.org/wiki/Q106213876"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10320,
    "name": "New Directions Fellowships",
    "provider": "Andrew W. Mellon Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Assist faculty members in the humanities and humanistic social sciences who seek to acquire systematic training in cross-disciplinary research Established 2002.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q106292667",
    "sources": [
      "https://www.wikidata.org/wiki/Q106292667"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10321,
    "name": "Woodrow Wilson National Fellowship",
    "provider": "The Institute for Citizens & Scholars",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://woodrow.org",
    "sources": [
      "https://www.wikidata.org/wiki/Q106382431"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10322,
    "name": "Association of Science-Technology Centers Fellow Award for Outstanding Contribution",
    "provider": "Association of Science and Technology Centers",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Honorary Award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q106388084",
    "sources": [
      "https://www.wikidata.org/wiki/Q106388084"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10323,
    "name": "DoD NDSEG Fellowship",
    "provider": "United States Department of Defense",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American science and engineering fellowship Established 1989.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://ndseg.org/",
    "sources": [
      "https://www.wikidata.org/wiki/Q106880920"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10324,
    "name": "Google Fellow",
    "provider": "Google",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q107110818",
    "sources": [
      "https://www.wikidata.org/wiki/Q107110818"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10325,
    "name": "Djerassi Resident Artists Fellowship",
    "provider": "Djerassi Artists Residency",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship awarded by Djerassi Resident Artists Program Established 1979.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://djerassi.org/",
    "sources": [
      "https://www.wikidata.org/wiki/Q107309013"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10326,
    "name": "Charlotte and Walter Buchanan Faculty Fellow",
    "provider": "Texas A&M University",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Engineering fellowship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q107360523",
    "sources": [
      "https://www.wikidata.org/wiki/Q107360523"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10327,
    "name": "Latinx Artist Fellowship",
    "provider": "Andrew W. Mellon Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award by Mellon Foundation and Ford Foundation Established 2021.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q107587273",
    "sources": [
      "https://www.wikidata.org/wiki/Q107587273"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10328,
    "name": "USACM Fellows Award",
    "provider": "United States Association for Computational Mechanics",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Recognizes outstanding contributions to computational mechanics. Winners receive a certificate",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.usacm.org/honors-and-awards-guidelines",
    "sources": [
      "https://www.wikidata.org/wiki/Q109347588"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10329,
    "name": "MacDowell Fellowship",
    "provider": "MacDowell",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Residency grant in the arts",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.macdowell.org/",
    "sources": [
      "https://www.wikidata.org/wiki/Q109769379"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10330,
    "name": "Sarah Berliner Research Fellowship",
    "provider": "Emile Berliner",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Research grant awarded to female scientists Established 1908.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q110232520",
    "sources": [
      "https://www.wikidata.org/wiki/Q110232520"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10331,
    "name": "Bronx Museum Artist in the Marketplace Fellowship",
    "provider": "Bronx Museum of the Arts",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Bronx Museum program to support emerging New York City artists Established 1980.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q111442415",
    "sources": [
      "https://www.wikidata.org/wiki/Q111442415"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10332,
    "name": "Herbert H. Richardson Fellow",
    "provider": "Texas A&M University College of Engineering",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Faculty fellow conferred by College of Engineering at Texas A&M University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q111490556",
    "sources": [
      "https://www.wikidata.org/wiki/Q111490556"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10333,
    "name": "Morris E. Foster Faculty Fellow",
    "provider": "Texas A&M University",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed faculty fellowship conferred by Texas A&M University in mechanical engineering",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q111501535",
    "sources": [
      "https://www.wikidata.org/wiki/Q111501535"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10334,
    "name": "Ruth and William Neely '52 Dow Jones Chemical Fellow",
    "provider": "Texas A&M University College of Engineering",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Conferred by Texas A&M University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q111503932",
    "sources": [
      "https://www.wikidata.org/wiki/Q111503932"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10335,
    "name": "Steve Brauer Jr. '02 Faculty Fellow",
    "provider": "Texas A&M University",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Conferred by Texas A&M University Established 2015.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q111505397",
    "sources": [
      "https://www.wikidata.org/wiki/Q111505397"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10336,
    "name": "William O. and Montine P. Head Faculty Fellow",
    "provider": "Texas A&M University College of Engineering",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Conferred by Texas A&M University's College of Engineering for outstanding performance",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q111514226",
    "sources": [
      "https://www.wikidata.org/wiki/Q111514226"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10337,
    "name": "Edmund Hillary Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "New Zealand entrepreneurship organisation",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://ehf.org",
    "sources": [
      "https://www.wikidata.org/wiki/Q111939263"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10338,
    "name": "Earth Leadership Program Fellow",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.earthleadership.org/fellows-name",
    "sources": [
      "https://www.wikidata.org/wiki/Q112132519"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10339,
    "name": "Arts and Humanities Research Council Fellowship",
    "provider": "Arts and Humanities Research Council",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship awarded by the Arts and Humanities Research Council",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q113144889",
    "sources": [
      "https://www.wikidata.org/wiki/Q113144889"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10340,
    "name": "DOE/Sloan Foundation Postdoctoral Fellowship in Computational Molecular Biology",
    "provider": "United States Department of Energy",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q113192581",
    "sources": [
      "https://www.wikidata.org/wiki/Q113192581"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10341,
    "name": "Packard Fellowship for Science and Engineering",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Science fellowship Established 1988.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.packard.org/what-we-fund/science/packard-fellowships-for-science-and-engineering/",
    "sources": [
      "https://www.wikidata.org/wiki/Q113469875"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10342,
    "name": "Banting Postdoctoral Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Canada"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "The Banting Postdoctoral Fellowships program provides funding to the very best postdoctoral applicants, both nationally and internationally, who will positively contribute to the country's economic, social, and research-based growth. Established 2014.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://banting.fellowships-bourses.gc.ca/",
    "sources": [
      "https://www.wikidata.org/wiki/Q113513490"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10343,
    "name": "Berkeley Fellow of the Owens College, Manchester",
    "provider": "University of Manchester",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award granted by Owens College",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q114218584",
    "sources": [
      "https://www.wikidata.org/wiki/Q114218584"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10344,
    "name": "Lower East Side Printshop Keyholder Residency",
    "provider": "Lower East Side Printshop",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Year-long residency awarded by the Lower East Side Printshop in New York City",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q114313932",
    "sources": [
      "https://www.wikidata.org/wiki/Q114313932"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10345,
    "name": "Shakespeare’s Globe International Actors’ Fellow",
    "provider": "Shakespeare Globe Centre New Zealand",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award in New Zealand",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q114755837",
    "sources": [
      "https://www.wikidata.org/wiki/Q114755837"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10346,
    "name": "Dr A.T. Shousha Foundation Prize and Fellowship",
    "provider": "World Health Organization",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "WHO Public Health Prize Established 1966.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q115978966",
    "sources": [
      "https://www.wikidata.org/wiki/Q115978966"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10347,
    "name": "Francesco Pocchiari Fellowship",
    "provider": "World Health Organization",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "WHO Public Health Award Established 1991.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://apps.who.int/gb/awards/e/Pocchiari.html",
    "sources": [
      "https://www.wikidata.org/wiki/Q116025761"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10348,
    "name": "Helmholtz International Fellow Award",
    "provider": "Helmholtz Association of German Research Centres",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "International award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q116214143",
    "sources": [
      "https://www.wikidata.org/wiki/Q116214143"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10349,
    "name": "Fellowship of the Vrije Universiteit Brussel",
    "provider": "Rector of the Vrije Universiteit Brussel",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Belgium"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award granted by the Vrije Universiteit Brussel",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q116267143",
    "sources": [
      "https://www.wikidata.org/wiki/Q116267143"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10350,
    "name": "John Macphail Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Rugby union award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q116443344",
    "sources": [
      "https://www.wikidata.org/wiki/Q116443344"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10188,
    "name": "Ramón y Cajal",
    "provider": "Ministry of Science of Spain",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Spain"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Spanish post-doctoral scholarship Established 2001.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q116764016",
    "sources": [
      "https://www.wikidata.org/wiki/Q116764016"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10189,
    "name": "National Achievement Scholarship Program",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American scholarship program Established 1964.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q116868367",
    "sources": [
      "https://www.wikidata.org/wiki/Q116868367"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10351,
    "name": "Smithsonian Artist Research Fellowship",
    "provider": "Smithsonian Institution",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q117127514",
    "sources": [
      "https://www.wikidata.org/wiki/Q117127514"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10190,
    "name": "Core18 Leaders Lab",
    "provider": "Moshe Zeldman",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Entrepreneurial boot camp for select Jewish leaders ages 19-25",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q117309433",
    "sources": [
      "https://www.wikidata.org/wiki/Q117309433"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10352,
    "name": "Klebnikov Fellowship",
    "provider": "Harriman Institute",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q117321458",
    "sources": [
      "https://www.wikidata.org/wiki/Q117321458"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10191,
    "name": "résident à La Factorie",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q117350160",
    "sources": [
      "https://www.wikidata.org/wiki/Q117350160"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10353,
    "name": "Nuffield Travelling Fellowship",
    "provider": "Nuffield Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Academic award for Commonwealth scholars to spend time in the UK",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q117839992",
    "sources": [
      "https://www.wikidata.org/wiki/Q117839992"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10354,
    "name": "Erskine Fellowship",
    "provider": "University of Canterbury",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Teaching fellowship at the University of Canterbury, New Zealand",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q117840800",
    "sources": [
      "https://www.wikidata.org/wiki/Q117840800"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10192,
    "name": "Junior National Scholarship",
    "provider": "Government of New Zealand",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Secondary school scholarship in New Zealand established in 1903 Established 1903.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q118255823",
    "sources": [
      "https://www.wikidata.org/wiki/Q118255823"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10193,
    "name": "Senior National Scholarship",
    "provider": "Government of New Zealand",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "University scholarship in New Zealand established in 1903 Established 1903.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q118255837",
    "sources": [
      "https://www.wikidata.org/wiki/Q118255837"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10355,
    "name": "John Carter Brown Library Fellowship",
    "provider": "John Carter Brown Library",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Annual fellowship to scholars engaged in research on the early Americas Established 1962.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://jcblibrary.org/fellowships",
    "sources": [
      "https://www.wikidata.org/wiki/Q118525491"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10194,
    "name": "Juan de la Cierva Scholarship",
    "provider": "Ministry of Science, Innovation and Universities",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Spain"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Spanish scientific postdoctoral scholarship Established 2004.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q119398901",
    "sources": [
      "https://www.wikidata.org/wiki/Q119398901"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10356,
    "name": "Emile Noël Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://jeanmonnetprogram.org/fellows/emile-noel-fellowship-overview/",
    "sources": [
      "https://www.wikidata.org/wiki/Q119792459"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10195,
    "name": "Coca-Cola Scholars Program",
    "provider": "Coca-Cola Scholars Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American scholarship program Established 1986.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q121913200",
    "sources": [
      "https://www.wikidata.org/wiki/Q121913200"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10357,
    "name": "Teacher Fellow Award",
    "provider": "North American Colleges and Teachers of Agriculture",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award by NACTA",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q122199888",
    "sources": [
      "https://www.wikidata.org/wiki/Q122199888"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10196,
    "name": "Slicher van Bath de Jong Foundation for the advancement of study and research on the history of Latin America",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.cedla.nl/slicher-van-bath-de-jong-fonds",
    "sources": [
      "https://www.wikidata.org/wiki/Q122418210"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10197,
    "name": "Horror Writers Association Scholarship",
    "provider": "Horror Writers Association",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Grant awarded by The Horror Writers Association",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://horrorscholarships.com",
    "sources": [
      "https://www.wikidata.org/wiki/Q122609050"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10198,
    "name": "Mary Wollstonecraft Shelley Scholarship",
    "provider": "Horror Writers Association",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Grant awarded by the Horror Writers Association",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://horrorscholarships.com/hwa-scholarship/",
    "sources": [
      "https://www.wikidata.org/wiki/Q122609204"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10199,
    "name": "Rocky Wood Memorial Scholarship Fund for Non-fiction Writing",
    "provider": "Horror Writers Association",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Grant awarded by The Horror Writers Association",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://horrorscholarships.com/rocky-wood-memorial-non-fiction-scholarship/",
    "sources": [
      "https://www.wikidata.org/wiki/Q122609814"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10200,
    "name": "Dark Poetry Scholarship",
    "provider": "Horror Writers Association",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Grant awarded by the Horror Writers Association Established 2015.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://horrorscholarships.com/hwa-scholarship/",
    "sources": [
      "https://www.wikidata.org/wiki/Q122609952"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10201,
    "name": "Dennis Etchison Young Writers Scholarship",
    "provider": "Horror Writers Association",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Grant awarded by the Horror Writers Association",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://horrorscholarships.com/hwa-scholarship/",
    "sources": [
      "https://www.wikidata.org/wiki/Q122609987"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10473,
    "name": "Diversity Grants",
    "provider": "Horror Writers Association",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Granted by the Horror Writers Association",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://horrorscholarships.com/hwa-scholarship/",
    "sources": [
      "https://www.wikidata.org/wiki/Q122610017"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10474,
    "name": "The Scholarship From Hell",
    "provider": "Horror Writers Association",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Granted by the Horror Writers Association",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://horrorscholarships.com/hwa-scholarship/",
    "sources": [
      "https://www.wikidata.org/wiki/Q122610052"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10134,
    "name": "Consolidator Fellowship, Historisches Kolleg, Munich",
    "provider": "Deutsches Stiftungszentrum",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.historischeskolleg.de/consolidator-fellowships/",
    "sources": [
      "https://www.wikidata.org/wiki/Q122802669"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10358,
    "name": "Postdoctoral Fellowship for Excellence in Research and Leadership",
    "provider": "Natural Sciences and Engineering Research Council of Canada",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scientific award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q122810690",
    "sources": [
      "https://www.wikidata.org/wiki/Q122810690"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10135,
    "name": "Eccles Centre & Hay Festival Writer's Award",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "British award for work on future book",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q122973536",
    "sources": [
      "https://www.wikidata.org/wiki/Q122973536"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10136,
    "name": "Bo Setterlind Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Sweden"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship established in 1991 Established 1991.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q123128860",
    "sources": [
      "https://www.wikidata.org/wiki/Q123128860"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10359,
    "name": "National Humanities Center Fellowship",
    "provider": "National Humanities Center",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Residential fellowship in the humanities awarded annually Established 1978.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://nationalhumanitiescenter.org/scholarly-programs",
    "sources": [
      "https://www.wikidata.org/wiki/Q123155347"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10360,
    "name": "Harry der Boghosian Endowed Fellowship",
    "provider": "Syracuse University Board of Trustees",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed academic position at Syracuse University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q123239193",
    "sources": [
      "https://www.wikidata.org/wiki/Q123239193"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10361,
    "name": "New Zealand Mana Tūāpapa Future Leader Fellowship",
    "provider": "Ministry of Business, Innovation and Employment",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Type of fellowship in New Zealand, part of New Zealand Mana Tūārangi Distinguished Researcher Fellowships Established 2024.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q123398538",
    "sources": [
      "https://www.wikidata.org/wiki/Q123398538"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10362,
    "name": "New Zealand Mana Tūānuku Research Leader Fellowship",
    "provider": "Ministry of Business, Innovation and Employment",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Type of fellowship in New Zealand, part of New Zealand Mana Tūārangi Distinguished Researcher Fellowships Established 2024.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q123398541",
    "sources": [
      "https://www.wikidata.org/wiki/Q123398541"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10363,
    "name": "New Zealand Mana Tūārangi Distinguished Researcher Fellowship",
    "provider": "Ministry of Business, Innovation and Employment",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Type of fellowship in New Zealand, part of New Zealand Mana Tūārangi Distinguished Researcher Fellowships Established 2024.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q123398544",
    "sources": [
      "https://www.wikidata.org/wiki/Q123398544"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10364,
    "name": "Leverhulme Fellowship",
    "provider": "Leverhulme Trust",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship awarded by the Leverhulme Trust",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q123411090",
    "sources": [
      "https://www.wikidata.org/wiki/Q123411090"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10137,
    "name": "The Katharine McCormick Advanced Postdoctoral Scholar Fellowship to Support Women in Academic Medicine",
    "provider": "Stanford University",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Postdoctoral scholarship at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q123411707",
    "sources": [
      "https://www.wikidata.org/wiki/Q123411707"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10138,
    "name": "Ingeborg Bachmann Scholarship",
    "provider": "Wolf Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q123413618",
    "sources": [
      "https://www.wikidata.org/wiki/Q123413618"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10365,
    "name": "Honorary Life Fellowship",
    "provider": "New Zealand Geographical Society",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award made by the New Zealand Geographical Society",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q123432549",
    "sources": [
      "https://www.wikidata.org/wiki/Q123432549"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10366,
    "name": "The Caroline Plummer Fellowship in Community Dance",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award conferred by University of Otago in New Zealand Established 2005.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q123458787",
    "sources": [
      "https://www.wikidata.org/wiki/Q123458787"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10367,
    "name": "Rutherford Foundation Postdoctoral Fellowship",
    "provider": "Royal Society Te Apārangi",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Postdoctoral award in New Zealand (cf Rutherford Discovery)",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q123467320",
    "sources": [
      "https://www.wikidata.org/wiki/Q123467320"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10368,
    "name": "Ngā Puanga Pūtaiao Fellowship",
    "provider": "Royal Society Te Apārangi",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Research fellowship in New Zealand, for early and mid-career researchers",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q123842247",
    "sources": [
      "https://www.wikidata.org/wiki/Q123842247"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10139,
    "name": "Quercus Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Ireland"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.ucc.ie/en/quercus/",
    "sources": [
      "https://www.wikidata.org/wiki/Q124216489"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10369,
    "name": "Max Day Environmental Science Fellowship Award",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.science.org.au/supporting-science/awards-and-opportunities/max-day-environmental-science-fellowship-award",
    "sources": [
      "https://www.wikidata.org/wiki/Q124248464"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10370,
    "name": "the Culture of Health Leaders program of the Robert Wood Johnson Foundation",
    "provider": "Robert Wood Johnson Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q124257520",
    "sources": [
      "https://www.wikidata.org/wiki/Q124257520"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10140,
    "name": "Bharati Memorial Award",
    "provider": "Maxwell School of Citizenship and Public Affairs",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award at Syracuse University Established 1992.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q124354656",
    "sources": [
      "https://www.wikidata.org/wiki/Q124354656"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10141,
    "name": "Betty Crocker Homemakers of Tomorrow",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Prize for American high schoolers awarded from 1955-1977",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q124619368",
    "sources": [
      "https://www.wikidata.org/wiki/Q124619368"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10372,
    "name": "Max Weber Fellow",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q124857566",
    "sources": [
      "https://www.wikidata.org/wiki/Q124857566"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10142,
    "name": "Open Source Promotion Plan",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://summer-ospp.ac.cn/",
    "sources": [
      "https://www.wikidata.org/wiki/Q125021065"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10373,
    "name": "Rhodes Visiting Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship by the Rhodes Trust",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q125369845",
    "sources": [
      "https://www.wikidata.org/wiki/Q125369845"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10374,
    "name": "Mercator Fellowship",
    "provider": "Stiftung Mercator",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Academic fellowship awarded by Stiftung Mercator",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q125454352",
    "sources": [
      "https://www.wikidata.org/wiki/Q125454352"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10375,
    "name": "JD Stout Fellowship in New Zealand Studies",
    "provider": "Stout Research Centre for New Zealand Studies",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Academic award to reseachers of New Zealand society, history or culture. Established 1985.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q125501807",
    "sources": [
      "https://www.wikidata.org/wiki/Q125501807"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10376,
    "name": "Talent Development Grant Scheme",
    "provider": "Creative Industries Fund NL",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Dutch talent-development grant scheme for designers and makers",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q125823081",
    "sources": [
      "https://www.wikidata.org/wiki/Q125823081"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10377,
    "name": "Ernst & Young Fellow",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q125844872",
    "sources": [
      "https://www.wikidata.org/wiki/Q125844872"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10378,
    "name": "Carnegie Fellow",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award and fellowship granted by the Carnegie Corporation of New York Established 2015.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.carnegie.org/awards/award/andrew-carnegie-fellows/",
    "sources": [
      "https://www.wikidata.org/wiki/Q125860258"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10143,
    "name": "The Klockrosen scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Sweden"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Financial support for authors of fiction and essays that required research or travel.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q126162934",
    "sources": [
      "https://www.wikidata.org/wiki/Q126162934"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10144,
    "name": "Remembrance Week",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Annual event at Syracuse University Established 1988.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://remembrance.syr.edu/",
    "sources": [
      "https://www.wikidata.org/wiki/Q126347514"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10379,
    "name": "Charlotte W. Newcombe Doctoral Dissertation Fellowship",
    "provider": "The Institute for Citizens & Scholars",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q126389698",
    "sources": [
      "https://www.wikidata.org/wiki/Q126389698"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10380,
    "name": "Arnold O. Beckman Postdoctoral Fellowship",
    "provider": "Arnold and Mabel Beckman Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q127432344",
    "sources": [
      "https://www.wikidata.org/wiki/Q127432344"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10505,
    "name": "Wired Innovation Fellow",
    "provider": "Wired",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award granted by Wired",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q127515789",
    "sources": [
      "https://www.wikidata.org/wiki/Q127515789"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10506,
    "name": "Echoing Green Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q128810958",
    "sources": [
      "https://www.wikidata.org/wiki/Q128810958"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10476,
    "name": "American-Scandinavian Foundation Fellowship",
    "provider": "The American-Scandinavian Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Awarded by American-Scandinavian Foundation",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q129167488",
    "sources": [
      "https://www.wikidata.org/wiki/Q129167488"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10477,
    "name": "Yaddo Fellowship",
    "provider": "Yaddo",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Artist residency",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q130235652",
    "sources": [
      "https://www.wikidata.org/wiki/Q130235652"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10478,
    "name": "Beatriu de Pinós Fellow",
    "provider": "Agency for Administration of University and Research",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scientific award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q130248610",
    "sources": [
      "https://www.wikidata.org/wiki/Q130248610"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10145,
    "name": "Research Training Program",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Australia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Australian government higher education scholarship program Established 2017.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q130305259",
    "sources": [
      "https://www.wikidata.org/wiki/Q130305259"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10479,
    "name": "Wilder Green Fellowship in Architecture",
    "provider": "MacDowell",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship established in 2006 Established 2006.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.macdowell.org/sponsored-fellowships/wilder-green-fellowship",
    "sources": [
      "https://www.wikidata.org/wiki/Q130376092"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10146,
    "name": "Fundación Barrié Fellowship",
    "provider": "Fundación Pedro Barrié",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Spain"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q130443963",
    "sources": [
      "https://www.wikidata.org/wiki/Q130443963"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10147,
    "name": "Lichtwark Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Germany"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "German scholarship for visual artists (1951-) Established 1951.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q130492476",
    "sources": [
      "https://www.wikidata.org/wiki/Q130492476"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10480,
    "name": "Sargeson Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "A New Zealand literary award Established 1987.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q131451286",
    "sources": [
      "https://www.wikidata.org/wiki/Q131451286"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10148,
    "name": "Les Kurbas Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Ukrainian scholarship established to support theater artists, named after Les Kurbas.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q131760910",
    "sources": [
      "https://www.wikidata.org/wiki/Q131760910"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10481,
    "name": "Maxwell Fraser Fellowship",
    "provider": "National Library of Wales",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q131764321",
    "sources": [
      "https://www.wikidata.org/wiki/Q131764321"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10482,
    "name": "Cullman Fellowship",
    "provider": "Dorothy and Lewis B. Cullman Center for Scholars and Writers",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "International fellowship program at the Dorothy and Lewis B. Cullman Center for Scholars and Writers",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.nypl.org/about/fellowships-institutes/cullman-center-scholars-writers/fellowships",
    "sources": [
      "https://www.wikidata.org/wiki/Q132156951"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10149,
    "name": "CUNY SEEK",
    "provider": "New York State Black, Puerto Rican, Hispanic and Asian Legislative Caucus",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "City University of New York program Established 1965.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.cuny.edu/academics/academic-programs/seek-college-discovery/",
    "sources": [
      "https://www.wikidata.org/wiki/Q132191551"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10150,
    "name": "Kennicott Hebrew Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship at Oxford for the study of Hebrew Established 1830.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q133455550",
    "sources": [
      "https://www.wikidata.org/wiki/Q133455550"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10151,
    "name": "Heath Ledger Scholarship",
    "provider": "Australians in Film",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Australia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Annual acting scholarship awarded to emerging Australian actors Established 2008.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://australiansinfilm.org/hls/",
    "sources": [
      "https://www.wikidata.org/wiki/Q133519959"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10483,
    "name": "Medical Research Council (MRC) Doctoral Training Award",
    "provider": "Medical Research Council",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "PhD scholarship awarded by the UK Medical Research Council",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q133818377",
    "sources": [
      "https://www.wikidata.org/wiki/Q133818377"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10484,
    "name": "IBET Momentum Fellowship",
    "provider": "University of Toronto",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Canada"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship about black engineering Established 2021.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q133847789",
    "sources": [
      "https://www.wikidata.org/wiki/Q133847789"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10485,
    "name": "Doris Duke Fellowship for the Promotion of Child Well-Being",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Doctoral fellowship awarded by the Doris Duke Charitable Foundation for research on child well-being and policy",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q133934781",
    "sources": [
      "https://www.wikidata.org/wiki/Q133934781"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10486,
    "name": "AWARD fellowship",
    "provider": "African Women in Agricultural Research and Development",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship from the African Women in Agricultural Research and Development",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q134374814",
    "sources": [
      "https://www.wikidata.org/wiki/Q134374814"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10152,
    "name": "William P. Perry, Jr. Endowment",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowment fund supporting Liberal Arts majors at Stetson University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q134569909",
    "sources": [
      "https://www.wikidata.org/wiki/Q134569909"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10153,
    "name": "William F. Grupe Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Awarded to Rutgers Medical School Candidates based on Academic Merits & Financial Needs",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q134580812",
    "sources": [
      "https://www.wikidata.org/wiki/Q134580812"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10487,
    "name": "Fellowship of the Orthodontic Technicians Association",
    "provider": "Orthodontic Technicians Association",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Awarded in order to recognise a member or past member of the Orthodontic Technicians Association for their years of service to orthodontic technology or for their distinguished ability or originality in their field.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q134893066",
    "sources": [
      "https://www.wikidata.org/wiki/Q134893066"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10488,
    "name": "Charlemagne Prize Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship awarded by the Charlemagne Prize Academy for research and academic work",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q134988651",
    "sources": [
      "https://www.wikidata.org/wiki/Q134988651"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10489,
    "name": "Leonard A. Lauder Fellowship in Modern Art at the Metropolitan Museum of Art",
    "provider": "Metropolitan Museum of Art",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship at the Metropolitan Museum's Leonard A. Lauder Research Center for Modern Art Established 2013.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q135109961",
    "sources": [
      "https://www.wikidata.org/wiki/Q135109961"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10490,
    "name": "Faculty Leadership Fellow",
    "provider": "University of Oklahoma Health Sciences Center",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship for early-career faculty at the University of Oklahoma Health Sciences Center",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://facdev.ouhsc.edu/Certificates-Fellowships/Faculty-Leadership-Program-FLP",
    "sources": [
      "https://www.wikidata.org/wiki/Q135117304"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10154,
    "name": "NASA Postdoctoral Program Fellowship",
    "provider": "National Aeronautics and Space Administration",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Offers unique research opportunities to highly-talented U.S. and non-U.S. scientists to engage in ongoing NASA research projects at a NASA Center, NASA Headquarters, or at a NASA-affiliated research institute",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://npp.orau.org/index.html",
    "sources": [
      "https://www.wikidata.org/wiki/Q135244169"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10155,
    "name": "Hallett H. and Mary F. Germond Graduate Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship at the University of Wisconsis, Madison",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q135381471",
    "sources": [
      "https://www.wikidata.org/wiki/Q135381471"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10156,
    "name": "Holtzer Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 1929.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q135403568",
    "sources": [
      "https://www.wikidata.org/wiki/Q135403568"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10157,
    "name": "Marie Skłodowska-Curie Grant",
    "provider": "European Union",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "EU MSCA programme scholarship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://marie-sklodowska-curie-actions.ec.europa.eu/",
    "sources": [
      "https://www.wikidata.org/wiki/Q135418327"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10491,
    "name": "Cultural Vibrancy Fellowship Grant",
    "provider": "Aspen",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Arts fellowship and grant program awarded by the City of Aspen Established 2025.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://aspen.gov/1696/Cultural-Vibrancy-Fellowship",
    "sources": [
      "https://www.wikidata.org/wiki/Q135552969"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10492,
    "name": "Aspen Art Museum Artist Fellowship",
    "provider": "Aspen Art Museum",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Arts fellowship awarded by the Aspen Art Museum to regional artists Established 2018.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://aspenartmuseum.org/education/artist-fellowship/",
    "sources": [
      "https://www.wikidata.org/wiki/Q135553205"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10493,
    "name": "Policy Leader Fellow",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Italy"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship programme at the European University Institute’s School of Transnational Governance, offering early- and mid-career professionals in policy and international affairs a residential training and networking opportunity in Florence. Established 2017.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.eui.eu/apply?id=policy-leader-fellowship",
    "sources": [
      "https://www.wikidata.org/wiki/Q135878658"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10158,
    "name": "Joseph J. Malone Fellowship in Arab and Islamic Studies",
    "provider": "National Council on US-Arab Relations",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Program for American professionals in academia, government, and business, offering educational experiences in the Arab world to foster understanding of Arab–U.S. relations and regional diversity. Established 1984.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q135902922",
    "sources": [
      "https://www.wikidata.org/wiki/Q135902922"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10494,
    "name": "NIH F32 NRSA Postdoctoral Fellowship 2025",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Postdoctoral fellowship awarded by the NIH F32 NRSA program",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q135915997",
    "sources": [
      "https://www.wikidata.org/wiki/Q135915997"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10159,
    "name": "Bard College Conducting Fellowship",
    "provider": "Bard College",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship awarded by the Bard College",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q135919818",
    "sources": [
      "https://www.wikidata.org/wiki/Q135919818"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10160,
    "name": "Boursier de la fondation Lambert Darchis",
    "provider": "Fondation Lambert Darchis",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship granted to young students from the area of Liège to to complete their artistic or religious training in Rome Established 1699.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q136342801",
    "sources": [
      "https://www.wikidata.org/wiki/Q136342801"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10495,
    "name": "AAMC Foundation Engagement Program for International Curators (EPIC) Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship program for international curators organised by the Association of Art Museum Curators Foundation Established 2018.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.artcurators.org/page/EPIC",
    "sources": [
      "https://www.wikidata.org/wiki/Q136399778"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10496,
    "name": "Cambridge Outstanding International Fellowship Award",
    "provider": "University of Cambridge",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "International academic fellowship awarded by the University of Cambridge recognizing outstanding academic achievements",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.cambridgeinternational.org/Images/698184-outstanding-cambridge-learner-awards-guide-for-schools.pdf",
    "sources": [
      "https://www.wikidata.org/wiki/Q136439552"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10161,
    "name": "Dan Watkins Scholarship in Weed Science",
    "provider": "New Zealand Plant Protection Society",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "New Zealand"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "A scholarship set up in memory of Dan Watkins, a founder of the New Zealand Weeds Conference, to support postgraduate students doing weed science research.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q136769757",
    "sources": [
      "https://www.wikidata.org/wiki/Q136769757"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10162,
    "name": "CH Currey Memorial Fellowship",
    "provider": "State Library of New South Wales",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Australia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Annual award for the writing of Australian history using State Library of New South Wales original sources Established 1974.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q136946466",
    "sources": [
      "https://www.wikidata.org/wiki/Q136946466"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10163,
    "name": "Presidential Scholarship (Azerbaijan)",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship awarded by the President of the Republic of Azerbaijan to 100 highest-achieving students during University Admission Test",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q137273233",
    "sources": [
      "https://www.wikidata.org/wiki/Q137273233"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10497,
    "name": "Andrew Mellon Predoctoral Fellowship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q137382398",
    "sources": [
      "https://www.wikidata.org/wiki/Q137382398"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10498,
    "name": "Artist Fellowship of the Illinois Arts Council",
    "provider": "Illinois Arts Council",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship to encourage development of the arts throughout Illinois, United States",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q137704793",
    "sources": [
      "https://www.wikidata.org/wiki/Q137704793"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10164,
    "name": "Charles Martyn Elliott and Kathleen Mead Elliott Award for Travel Fellowships in Education",
    "provider": "Queen's University",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Canada"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Travel fellowship award at Queen's University (Faculty of Education)",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q137712106",
    "sources": [
      "https://www.wikidata.org/wiki/Q137712106"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10499,
    "name": "James Harrison Steedman Fellowship in Architecture",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Architecture fellowship in Rome in honor of James Harrison Steedman Established 1926.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q137778360",
    "sources": [
      "https://www.wikidata.org/wiki/Q137778360"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10500,
    "name": "Creative Renewal Arts Fellowship",
    "provider": "Indy Arts Council",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fellowship for artists and arts administrators to have sabbatical-like experiences Established 1999.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://indyarts.org/grants/creative-renewal-arts-fellowship/",
    "sources": [
      "https://www.wikidata.org/wiki/Q138205948"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10165,
    "name": "David Lee Nelson Scholarship for Outstanding Work in Theater",
    "provider": "Fine Arts Center of Greenville County",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Theater scholarship awarded by the Fine Arts Center of Greenville County",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q138771423",
    "sources": [
      "https://www.wikidata.org/wiki/Q138771423"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10166,
    "name": "Prix Suau",
    "provider": "http://www.wikidata.org/.well-known/genid/0e58db5a46aee45a7e715001032c2496",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "France"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "19th‑century art award of the École des Beaux-Arts de Toulouse Established 1870.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q139596942",
    "sources": [
      "https://www.wikidata.org/wiki/Q139596942"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10167,
    "name": "Lennart Hellsing-stipendiet",
    "provider": "Rabén & Sjögren",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 2020.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140063967",
    "sources": [
      "https://www.wikidata.org/wiki/Q140063967"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10438,
    "name": "Monbukagakusho Scholarship",
    "provider": "Ministry of Education, Culture, Sports, Science and Technology",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Academic scholarship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q45131",
    "sources": [
      "https://www.wikidata.org/wiki/Q45131"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10439,
    "name": "Mandela Rhodes Scholarship",
    "provider": "Mandela Rhodes Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship for postgraduate study for African citizens Established 2002.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.mandelarhodes.org",
    "sources": [
      "https://www.wikidata.org/wiki/Q6747957"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10440,
    "name": "National Merit Scholarship Program",
    "provider": "National Merit Scholarship Corporation",
    "type": "Private",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American academic scholarship competition Established 1955.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q6974311",
    "sources": [
      "https://www.wikidata.org/wiki/Q6974311"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10441,
    "name": "Overseas Research Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award for foreign country nationals to undertake research in the United Kingdom Established 1979.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7113929",
    "sources": [
      "https://www.wikidata.org/wiki/Q7113929"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10442,
    "name": "Pitt Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7199085",
    "sources": [
      "https://www.wikidata.org/wiki/Q7199085"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10443,
    "name": "Queen's Scholar",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7270103",
    "sources": [
      "https://www.wikidata.org/wiki/Q7270103"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10444,
    "name": "Robert C. Byrd Honors Scholarship Program",
    "provider": "Office of Postsecondary Education",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Federally funded and state-administered merit-based scholarship program in the United States Established 1985.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7342586",
    "sources": [
      "https://www.wikidata.org/wiki/Q7342586"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10445,
    "name": "Ronald E. McNair Post-Baccalaureate Achievement Program",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "McNair Scholars: PhD access for underrepresented Established 1989.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://mcnairscholars.com/",
    "sources": [
      "https://www.wikidata.org/wiki/Q7364815"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10446,
    "name": "Singapore Armed Forces Merit Scholarship",
    "provider": "Singapore Armed Forces",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Singapore"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Singapore Ministry of Defence scholarship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7522889",
    "sources": [
      "https://www.wikidata.org/wiki/Q7522889"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10447,
    "name": "Singapore Armed Forces (SAF) Scholarship",
    "provider": "Public Service Commission",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Singapore"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7522893",
    "sources": [
      "https://www.wikidata.org/wiki/Q7522893"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10448,
    "name": "Sydney eScholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7660234",
    "sources": [
      "https://www.wikidata.org/wiki/Q7660234"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10449,
    "name": "Vanier Canada Graduate Scholarships",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Canada"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "International Postgraduate Award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://vanier.gc.ca/en/home-accueil.html",
    "sources": [
      "https://www.wikidata.org/wiki/Q7914897"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10450,
    "name": "Vinerian Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United Kingdom"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship awarded by the University of Oxford",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q7932458",
    "sources": [
      "https://www.wikidata.org/wiki/Q7932458"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10451,
    "name": "Albin Hagström Memorial Award",
    "provider": "Royal Swedish Academy of Music",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Sweden"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 1997.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q10404350",
    "sources": [
      "https://www.wikidata.org/wiki/Q10404350"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10452,
    "name": "Asa Kitok Award",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q10419080",
    "sources": [
      "https://www.wikidata.org/wiki/Q10419080"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10453,
    "name": "John Marshall Scholars",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Academic scholarship program",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q6246912",
    "sources": [
      "https://www.wikidata.org/wiki/Q6246912"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10454,
    "name": "John Monash Scholars",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Australia"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Postgraduate scholarship in Australia Established 2001.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.johnmonash.com",
    "sources": [
      "https://www.wikidata.org/wiki/Q6249132"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10455,
    "name": "Jérôme Lohez 9/11 Scholarship Foundation",
    "provider": "Dening Wu-Lohez",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Non-profit organization in the United States",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q6320218",
    "sources": [
      "https://www.wikidata.org/wiki/Q6320218"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10456,
    "name": "Oak scholarship",
    "provider": "Planning and Budgeting Committee",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Israel"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://che.org.il/%D7%97%D7%91%D7%A8%D7%99-%D7%95%D7%A2%D7%93%D7%AA-%D7%9E%D7%9C%D7%92%D7%95%D7%AA-%D7%90%D7%9C%D7%95%D7%9F/",
    "sources": [
      "https://www.wikidata.org/wiki/Q6628654"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10467,
    "name": "Encode: AI for Science Fellowship",
    "provider": "Advanced Research & Invention Agency",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "UK research fellowship pairing AI researchers with scientists, funded by ARIA and delivered by Pillar VC",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://encode.pillar.vc/",
    "sources": [
      "https://www.wikidata.org/wiki/Q141672105"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10468,
    "name": "Fairmont Firefighters Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship awarded through Fairmont Dollars for Scholars in Minnesota, United States",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q141783677",
    "sources": [
      "https://www.wikidata.org/wiki/Q141783677"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10295,
    "name": "Sapp Family University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997251",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997251"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10297,
    "name": "Stanford Alumni University Fellow in Undergraduate Education",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Endowed award and administrative appointment for faculty at Stanford University",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q94997254",
    "sources": [
      "https://www.wikidata.org/wiki/Q94997254"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10475,
    "name": "IBM Fellow",
    "provider": "IBM",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q45924",
    "sources": [
      "https://www.wikidata.org/wiki/Q45924"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10171,
    "name": "Cassandra Toroian Scholarship",
    "provider": "Cassandra Toroian",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Annual academic scholarship program for undergraduate and graduate students in the United States",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140160854",
    "sources": [
      "https://www.wikidata.org/wiki/Q140160854"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10172,
    "name": "Curtis Edmark Scholarship",
    "provider": "Curtis Edmark",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American annual academic scholarship program",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140176109",
    "sources": [
      "https://www.wikidata.org/wiki/Q140176109"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10173,
    "name": "Jinhee Wilde Edu Fund",
    "provider": "Jinhee Wilde",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American educational scholarship fund",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140176828",
    "sources": [
      "https://www.wikidata.org/wiki/Q140176828"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10174,
    "name": "The Marc Kalter Scholarship",
    "provider": "Marc Kalter",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Academic financial assistance fund providing $1,000 awards to students",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140234671",
    "sources": [
      "https://www.wikidata.org/wiki/Q140234671"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10175,
    "name": "Yitz Stern Scholarship",
    "provider": "Yitz Stern",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "A student scholarship funded by Yitz Stern",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140250031",
    "sources": [
      "https://www.wikidata.org/wiki/Q140250031"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10176,
    "name": "Jeffrey Hammel Grant",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American academic financial assistance and student scholarship program",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140266960",
    "sources": [
      "https://www.wikidata.org/wiki/Q140266960"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10177,
    "name": "Jeffrey Wendel Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "A $1,000 academic financial assistance award program from Jeffrey Wendel",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140267260",
    "sources": [
      "https://www.wikidata.org/wiki/Q140267260"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10178,
    "name": "Jim DePalma Grant",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American academic financial assistance and student scholarship program Established 2024.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140285523",
    "sources": [
      "https://www.wikidata.org/wiki/Q140285523"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10179,
    "name": "Jake Fruge Jr Grant",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American academic financial assistance and student grant program",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140285587",
    "sources": [
      "https://www.wikidata.org/wiki/Q140285587"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10180,
    "name": "Dan Moscatiello Grant",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American academic financial assistance and student grant program",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140285886",
    "sources": [
      "https://www.wikidata.org/wiki/Q140285886"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10181,
    "name": "Brian C. Jensen Grant",
    "provider": "Brian C Jensen",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American academic financial assistance and student grant program",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140309209",
    "sources": [
      "https://www.wikidata.org/wiki/Q140309209"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10182,
    "name": "Berel Farkas Grant",
    "provider": "Berel Farkas",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American academic financial assistance and student grant program",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140309471",
    "sources": [
      "https://www.wikidata.org/wiki/Q140309471"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10183,
    "name": "Menachem Silber Scholarship",
    "provider": "Menachem Silber",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American academic financial assistance and student scholarship program",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140309609",
    "sources": [
      "https://www.wikidata.org/wiki/Q140309609"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10184,
    "name": "Suneet Singal Giving",
    "provider": "Suneet Singal",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "American academic financial assistance and student grant program",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140315468",
    "sources": [
      "https://www.wikidata.org/wiki/Q140315468"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10501,
    "name": "SEEKCommons Fellowship",
    "provider": "SEEKCommons",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Research fellowship awarded in 2024 and 2025 by SEEKCommons",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://seekcommons.org/fellowship-application.html",
    "sources": [
      "https://www.wikidata.org/wiki/Q140679650"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10185,
    "name": "Premio Poletti (Modena)",
    "provider": "Accademia Atestina di Belle Arti",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Italy"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Former art award and scolarship given by the Accademia Atestina di Belle Arti (Modena) Established 1866.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140936963",
    "sources": [
      "https://www.wikidata.org/wiki/Q140936963"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10186,
    "name": "Paul E. Hirshon Byline Award",
    "provider": "Northeastern University",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship award",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140988734",
    "sources": [
      "https://www.wikidata.org/wiki/Q140988734"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10187,
    "name": "Higher Education Student Merit Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Portugal"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Portuguese merit scholarship for higher education students",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.dges.gov.pt/pt/pagina/informacoes-bolsa-por-merito",
    "sources": [
      "https://www.wikidata.org/wiki/Q141175442"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10470,
    "name": "March scholarship",
    "provider": "Fundación Juan March",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Spain"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship listed on Wikidata. Established 1957.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.march.es/es/coleccion/becas-march",
    "sources": [
      "https://www.wikidata.org/wiki/Q141215381"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10471,
    "name": "Austrian State Scholarship for Fine Arts, Photography and Media Art",
    "provider": "Federal Ministry for Arts, Culture, the Civil Service and Sport",
    "type": "Government",
    "scope": "International",
    "hostCountries": [
      "Austria"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Austrian federal scholarship for visual artists",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.bmwkms.gv.at/themen/kunst-und-kultur/sparten/bildende-kunst-design-mode-fotografie-medienkunst/foerderungen/stipendien.html",
    "sources": [
      "https://www.wikidata.org/wiki/Q141276263"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10472,
    "name": "Plácido Domingo Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Mexico"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship for young Mexican opera singers awarded by SIVAM",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q141347667",
    "sources": [
      "https://www.wikidata.org/wiki/Q141347667"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10469,
    "name": "Robert Harvey Honor Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship for students at Vanderbilt University from Arkansas Established 2000.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q141401096",
    "sources": [
      "https://www.wikidata.org/wiki/Q141401096"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10457,
    "name": "ARVO Foundation Collaborative Research Fellowship",
    "provider": "ARVO Foundation for Eye Research",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "International ophthalmic research fellowship established in 2009 by the ARVO Foundation Established 2009.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q141438316",
    "sources": [
      "https://www.wikidata.org/wiki/Q141438316"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10458,
    "name": "RRF Helmerich International Fellowship",
    "provider": "Retina Research Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Ophthalmology subspecialty training fellowship funded by the Retina Research Foundation",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://retinaresearchfnd.org/research-programs/international-fellowships/icohelmerich/",
    "sources": [
      "https://www.wikidata.org/wiki/Q141438317"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10459,
    "name": "Squire Scholarship",
    "provider": "University of Cambridge",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship of the Faculty of Law, University of Cambridge",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q141451420",
    "sources": [
      "https://www.wikidata.org/wiki/Q141451420"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10460,
    "name": "Pembroke College Foundation Scholarship",
    "provider": "Pembroke College",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Scholarship of Pembroke College, University of Cambridge",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q141451423",
    "sources": [
      "https://www.wikidata.org/wiki/Q141451423"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10461,
    "name": "Pembroke College Scholarship",
    "provider": "Pembroke College",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "College scholarship of Pembroke College, University of Cambridge",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q141451424",
    "sources": [
      "https://www.wikidata.org/wiki/Q141451424"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10462,
    "name": "Henry Arthur Thomas Travel Exhibition",
    "provider": "University of Cambridge",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Travel award of the University of Cambridge",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q141451430",
    "sources": [
      "https://www.wikidata.org/wiki/Q141451430"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10463,
    "name": "Limburg Beeldende Kunst Stipendium",
    "provider": "Jan van Eyck Academie",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Limburg Art Stipend",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://janvaneyck.nl/residency/fellowships-and-other-funded-residencies",
    "sources": [
      "https://www.wikidata.org/wiki/Q141491233"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10464,
    "name": "Mahammadali Ibrahimli Scholarship Program (MISP)",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Azerbaijan"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "A scholarship program supporting the education of Azerbaijanis around the world",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://mischolarship.com/",
    "sources": [
      "https://www.wikidata.org/wiki/Q141612016"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10465,
    "name": "Lester B. Pearson International Scholarship",
    "provider": "University of Toronto",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "Canada"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "International undergraduate award for students to study at the University of Toronto Established 2017.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://future.utoronto.ca/pearson-scholarships",
    "sources": [
      "https://www.wikidata.org/wiki/Q141634147"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10466,
    "name": "Robert Noyce Teacher Scholarship",
    "provider": "National Science Foundation",
    "type": "Foundation",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "National Science Foundation scholarship for future STEM teachers",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q141635989",
    "sources": [
      "https://www.wikidata.org/wiki/Q141635989"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10502,
    "name": "British Academy Global Professorship",
    "provider": "British Academy",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "British Academy fellowship grant bringing researchers based outside the UK to UK universities",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q141641598",
    "sources": [
      "https://www.wikidata.org/wiki/Q141641598"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10371,
    "name": "Minority Postdoctoral Fellowship",
    "provider": "Columbia University",
    "type": "University",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Award given to a scholar from a historically underrepresented group, presenting the opportunity for the scholar to participate and develop their own research program Established 1996.",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q124695874",
    "sources": [
      "https://www.wikidata.org/wiki/Q124695874"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10170,
    "name": "Nirdosh Jagota Scholarship",
    "provider": "Nirdosh Jagota",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Annual academic scholarship program for undergraduate and graduate students in the United States",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://nirdoshjagotascholarship.com/",
    "sources": [
      "https://www.wikidata.org/wiki/Q140157582"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10168,
    "name": "Frankopan Fund",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "Not specified"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Fund for academic advencement of Croatian students abroad",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "http://www.sfct.org.uk/staples-trust/frankopan-fund",
    "sources": [
      "https://www.wikidata.org/wiki/Q140088913"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  },
  {
    "id": 10169,
    "name": "Trevor L. Taylor Scholarship",
    "provider": "Not specified",
    "type": "Other",
    "scope": "International",
    "hostCountries": [
      "United States"
    ],
    "currency": "INR",
    "amountOriginal": null,
    "amount": null,
    "amountNote": "Not provided by this data source - see the official page",
    "amountPeriod": "Annual",
    "awards": null,
    "deadline": null,
    "deadlineNote": "Not provided by this data source",
    "educationLevel": [],
    "fields": [
      "All Fields"
    ],
    "states": [
      "All India"
    ],
    "nationalities": [
      "Any country"
    ],
    "maxIncome": null,
    "minimumPercentage": null,
    "category": "Other",
    "socialCategories": [],
    "specialEligibility": "",
    "requires": null,
    "gender": "All",
    "description": "Annual scholarship program funded by the Trevor L. Taylor Foundation",
    "documents": [],
    "process": "See the official page for how to apply.",
    "officialUrl": "https://www.wikidata.org/wiki/Q140141331",
    "sources": [
      "https://www.wikidata.org/wiki/Q140141331"
    ],
    "lastVerified": null,
    "dataSource": "wikidata",
    "fetchedAt": "2026-10-23T07:49:55Z"
  }
];

const CATEGORIES = ["Merit", "Financial Need", "STEM", "Women in Education", "Social Welfare", "Disability Support", "Research", "Government", "Study Abroad", "Other"];

const CURRENCY_SYMBOLS = {"INR": "₹", "USD": "$", "GBP": "£", "EUR": "€", "JPY": "¥", "CHF": "CHF ", "KRW": "₩", "CAD": "C$", "SEK": "kr ", "AUD": "A$", "SGD": "S$", "BDT": "৳", "LKR": "Rs ", "KES": "KSh ", "NGN": "₦"};

const DATA_LAST_VERIFIED = "2026-10-18";

/* When the APIs were last synced (null = never) */
const DATA_LAST_SYNCED = "2026-10-23T07:49:55Z";

/* All Indian states & union territories (for profile forms) */
const INDIAN_STATES = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
