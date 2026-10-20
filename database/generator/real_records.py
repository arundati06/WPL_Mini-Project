# REAL scholarships, researched 18 Oct 2026. Every record carries an official URL and the
# page(s) it was checked against. Amounts/deadlines are for the current/most recent cycle.
# None for minimumPercentage / maxIncome / amount / deadline = not applicable or not fixed.
NSP = "https://scholarships.gov.in"
R = []
def add(**k): R.append(k)

# ============================ CENTRAL GOVERNMENT ============================
add(name="Central Sector Scheme of Scholarships for College and University Students", provider="Department of Higher Education, Ministry of Education",
    ptype="Government", currency="INR", amountOriginal=12000, amountNote="₹12,000/year (UG, first 3 years); ₹20,000/year (PG)",
    levels=["Undergraduate", "Postgraduate"], fields=["All Fields"], states=["All India"], maxIncome=450000, minPct=None,
    special="Above 80th percentile of successful candidates in Class 12 (own board & stream)", category="Merit", awards=82000,
    description="Merit-cum-means scholarship for students in the top 20 percentile of their Class 12 board who are in regular UG/PG courses. 50% of slots are for girls; SC/ST/OBC reservation applies.",
    documents=["Class 12 Marksheet", "Income Certificate", "Aadhaar-seeded Bank Account", "Bonafide Certificate", "Caste Certificate (if applicable)"],
    process="Apply (fresh or renewal) on the National Scholarship Portal; institute and board verify. Renewal needs 50% marks and 75% attendance.",
    url=NSP, sources=["https://nitkkr.ac.in/wp-content/uploads/2025/04/Central-Sector-Scheme-Of-Scholarships-For-College-And-University-Students.pdf",
                      "https://www.indiascholarships.in/scholarships/central-sector-scheme-of-scholarship-for-college-and-university-students"],
    deadline="2026-10-31", deadlineNote="NSP 2026-27 cycle (verify on NSP)")

add(name="Post-Matric Scholarship for Scheduled Caste Students", provider="Ministry of Social Justice and Empowerment",
    ptype="Government", currency="INR", amountOriginal=None, amountNote="Tuition & non-refundable fees reimbursed + monthly academic allowance (rate depends on course group)",
    levels=["Class 11-12", "Diploma", "Undergraduate", "Postgraduate", "Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=250000, minPct=None,
    social=["SC"], category="Social Welfare", awards=None,
    description="Centrally sponsored scheme that funds SC students for any recognised post-matric course, from Class 11 to PhD. Implemented through state SC welfare departments.",
    documents=["Caste Certificate", "Income Certificate", "Previous Marksheet", "Bonafide / Admission Proof", "Aadhaar-seeded Bank Account"],
    process="Apply on NSP or your state's scholarship portal (e.g. MahaDBT); funds are paid by DBT.",
    url=NSP, sources=["https://www.indiascholarships.in/guides/sc-postmatric-scholarship-income-rules"],
    deadline=None, deadlineNote="Set by each state; usually Oct–Dec")

for nm, special, extra in [
    ("AICTE Pragati Scholarship for Girl Students", "Girl students; up to two girls per family", dict(gender="Female", category="Women in Education")),
    ("AICTE Saksham Scholarship for Specially-Abled Students", "Benchmark disability of 40% or more", dict(category="Disability Support", requires="Disability")),
    ("AICTE Swanath Scholarship", "Orphans, wards of parents who died of COVID-19, or wards of martyred armed forces / CAPF personnel", dict(category="Financial Need", requires="Orphan / Ward of Armed Forces")),
]:
    add(name=nm, provider="All India Council for Technical Education (AICTE)", ptype="Government", currency="INR", amountOriginal=50000,
        amountNote="₹50,000/year (degree: up to 4 years; diploma: up to 3 years)",
        levels=["Diploma", "Undergraduate"], fields=["Engineering", "Computer Science", "Information Technology", "Architecture", "Pharmacy"],
        states=["All India"], maxIncome=800000, minPct=None, special=special + "; first year (or lateral-entry second year) of an AICTE-approved technical course",
        awards=None, description=f"AICTE scheme for students in AICTE-approved technical degree or diploma courses. {special}.",
        documents=["Class 10/12 Marksheet", "Income Certificate", "Admission Letter", "Tuition Fee Receipt", "Aadhaar-seeded Bank Account"],
        process="Apply on the National Scholarship Portal; the institute verifies the application.",
        url=NSP, sources=["https://www.indiascholarships.in/news/aicte-scholarships-and-fellowships-complete-guide-for-students-researchers-and-f"],
        deadline="2026-10-31", deadlineNote="Tentative, NSP 2026-27", **extra)

add(name="AICTE PG Scholarship (GATE / GPAT / CEED)", provider="All India Council for Technical Education (AICTE)", ptype="Government",
    currency="INR", amountOriginal=148800, amountNote="₹12,400/month for up to 24 months", period="Monthly",
    levels=["Postgraduate"], fields=["Engineering", "Computer Science", "Information Technology", "Architecture", "Pharmacy", "Design"],
    states=["All India"], maxIncome=None, minPct=None, special="Valid GATE, GPAT or CEED score; admitted to an AICTE-approved M.E./M.Tech/M.Arch/M.Pharm/M.Des",
    category="Merit", awards=None,
    description="Monthly stipend for GATE/GPAT/CEED-qualified students in AICTE-approved full-time postgraduate programmes.",
    documents=["GATE / GPAT / CEED Scorecard", "Admission Letter", "Aadhaar-seeded Bank Account"],
    process="The institute registers eligible students on AICTE's PG scholarship portal; stipend paid monthly by DBT.",
    url="https://aicte.gov.in", sources=["https://www.indiascholarships.in/news/aicte-scholarships-and-fellowships-complete-guide-for-students-researchers-and-f"],
    deadline=None, deadlineNote="Portal usually opens around September")

add(name="National Overseas Scholarship for SC Students", provider="Ministry of Social Justice and Empowerment", ptype="Government",
    scope="International", host=["Any country"], currency="USD", amountOriginal=15400,
    amountNote="Full tuition + US$15,400/yr maintenance (UK: £9,900) + contingency, airfare, visa and insurance",
    levels=["Postgraduate", "Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=800000, minPct=60,
    social=["SC"], special="Unconditional offer from a QS top-500 university; age 35 or under; 30% of awards for women",
    category="Study Abroad", awards=125,
    description="Government of India scholarship for SC (also denotified/nomadic tribes and landless labourer families) students pursuing a master's or PhD abroad.",
    documents=["Caste Certificate", "Income Certificate", "Unconditional Offer Letter", "Degree Marksheets", "Passport"],
    process="Apply online at nosmsje.gov.in in one of two rounds; selection on merit within category quotas.",
    url="https://nosmsje.gov.in", sources=["https://nosmsje.gov.in/nosmsje/public/images/Scheme-guidelines-2025-26.pdf"],
    deadline=None, deadlineNote="Round 1 Feb–Mar, Round 2 Sep–Oct (40 days each)")

add(name="INSPIRE Scholarship for Higher Education (SHE)", provider="Department of Science and Technology", ptype="Government",
    currency="INR", amountOriginal=80000, amountNote="₹80,000/year", levels=["Undergraduate", "Postgraduate"],
    fields=["Physics", "Chemistry", "Mathematics", "Biology", "Earth Sciences", "Statistics"], states=["All India"], maxIncome=None, minPct=None,
    special="Top 1% in Class 12 board, or JEE-Advanced/NEET top 10,000, or admission to IISER/NISER/CEBS; age 17–22",
    category="STEM", awards=10000,
    description="DST scholarship with mentorship for talented students pursuing BSc/MSc (or integrated MS) in the natural and basic sciences.",
    documents=["Class 12 Marksheet", "Eligibility Proof (board top-1% certificate or rank card)", "Endorsement from Principal", "Bank Details"],
    process="Apply on the online-inspire.gov.in portal once the annual call is announced.",
    url="https://online-inspire.gov.in", sources=["https://www.indiascienceandtechnology.gov.in/nurturing-minds/scholarships/post-graduation/inspire-she-innovation-science-pursuit-inspired"],
    deadline=None, deadlineNote="Annual call, usually Oct–Dec")

add(name="Top Class Education Scheme for SC Students", provider="Ministry of Social Justice and Empowerment", ptype="Government",
    currency="INR", amountOriginal=286000, amountNote="Full tuition (capped at ₹2 lakh/yr in private institutes) + ₹86,000 first-year allowance (₹41,000 later years)",
    levels=["Undergraduate", "Postgraduate"], fields=["All Fields"], states=["All India"], maxIncome=800000, minPct=None,
    social=["SC"], special="Admission to a notified premier institution (IITs, IIMs, NITs, AIIMS, NLUs etc.); 30% slots for girls",
    category="Social Welfare", awards=None,
    description="Covers full fees and living, book and computer costs for SC students who secure admission to notified top-class institutions.",
    documents=["Caste Certificate", "Income Certificate", "Admission Letter", "Fee Receipt", "Aadhaar-seeded Bank Account"],
    process="Apply on the National Scholarship Portal; the institution verifies.",
    url=NSP, sources=["https://www.indiascholarships.in/scholarships/top-class-education-scheme-for-sc-students"],
    deadline="2026-10-31", deadlineNote="NSP 2026-27 cycle")

add(name="Prime Minister's Scholarship Scheme (PMSS) for Wards of Ex-Servicemen", provider="Kendriya Sainik Board, Ministry of Defence", ptype="Government",
    currency="INR", amountOriginal=36000, amountNote="₹3,000/month for girls, ₹2,500/month for boys (paid annually)",
    levels=["Undergraduate"], fields=["Engineering", "Medicine", "Pharmacy", "Business Administration", "Computer Science", "Architecture", "Law", "Nursing"],
    states=["All India"], maxIncome=None, minPct=60, special="Dependent wards/widows of ex-servicemen and ex-Coast Guard personnel; first year of a professional/technical course (MBA/MCA also allowed)",
    category="Government", awards=None, requires="Orphan / Ward of Armed Forces",
    description="Scholarship for wards and widows of ex-servicemen and ex-Coast Guard personnel pursuing professional degree courses.",
    documents=["Ex-Serviceman Discharge Book / PPO", "Class 12 Marksheet", "Admission Proof", "Bank Details"],
    process="Apply online on the Kendriya Sainik Board portal; verified by the Zila Sainik Board.",
    url="https://desw.gov.in/prime-ministers-scholarship-scheme-pmss", sources=["https://www.indiascholarships.in/scholarships/prime-ministers-scholarship-scheme-pmss-for-wardswidows-of-ex-servicemen-and-ex-coast-guar"],
    deadline="2026-12-31", deadlineNote="Fresh applications 2026-27")

add(name="Prime Minister's Research Fellowship (PMRF)", provider="Ministry of Education", ptype="Government",
    currency="INR", amountOriginal=840000, amountNote="₹70,000/month (yrs 1–2), ₹75,000 (yr 3), ₹80,000 (yrs 4–5) + ₹2 lakh/yr research grant", period="Monthly",
    levels=["Doctoral"], fields=["Engineering", "Computer Science", "Physics", "Chemistry", "Mathematics", "Biology"], states=["All India"],
    maxIncome=None, minPct=None, special="PhD admission at a PMRF granting institution (IITs, IISc, IISERs, NITs, select central universities); CGPA 8.0+ (direct entry)",
    category="Research", awards=None,
    description="India's flagship doctoral fellowship for top students joining PhD programmes at premier institutes in science and technology.",
    documents=["Degree Transcripts", "PhD Admission Letter", "Research Proposal", "Recommendation Letters"],
    process="Get admitted to a PhD at a granting institute, which nominates you; complete the application on the PMRF portal.",
    url="https://www.pmrf.in", sources=["https://www.indiascholarships.in/scholarships/prime-ministers-research-fellowship-pmrf"],
    deadline="2026-10-31", deadlineNote="Current cycle; cycles run twice a year")

add(name="Post-Matric Scholarship for Scheduled Tribe Students", provider="Ministry of Tribal Affairs", ptype="Government",
    currency="INR", amountOriginal=12000, amountNote="Course fees (GoI cap ₹2.5 lakh engg / ₹6 lakh MBBS at private institutes) + stipend up to ₹1,200/month (hostellers, professional courses)",
    levels=["Class 11-12", "Diploma", "Undergraduate", "Postgraduate", "Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=250000, minPct=None,
    social=["ST"], category="Social Welfare", awards=None,
    description="Funds ST students in any recognised post-matric course from Class 11 to postgraduate level; extra allowance for students with disabilities.",
    documents=["ST Certificate", "Income Certificate", "Previous Marksheet", "Fee Receipt", "Aadhaar-seeded Bank Account"],
    process="Apply on your state/UT scholarship portal (or NSP where the state has none); tracked on dbttribal.gov.in.",
    url="https://tribal.nic.in/ScholarshiP.aspx", sources=["https://www.chowgules.ac.in/wp-content/uploads/2026/07/NSP-Scholarship-2026-27-Circular-and-Guidelines-for-ST-students.pdf"],
    deadline=None, deadlineNote="State portals; suggested registration window 1 Apr–30 Sep")

add(name="PM YASASVI Post-Matric Scholarship for OBC, EBC and DNT Students", provider="Ministry of Social Justice and Empowerment", ptype="Government",
    currency="INR", amountOriginal=None, amountNote="Tuition/non-refundable fees + academic allowance (varies by course and state)",
    levels=["Class 11-12", "Diploma", "Undergraduate", "Postgraduate"], fields=["All Fields"], states=["All India"], maxIncome=250000, minPct=None,
    social=["OBC"], special="Also open to Economically Backward Classes (EBC) and De-notified Tribes (DNT)", category="Social Welfare", awards=None,
    description="Umbrella scheme (PM YASASVI) supporting OBC, EBC and DNT students in post-matric education.",
    documents=["Caste Certificate", "Income Certificate", "Previous Marksheet", "Aadhaar-seeded Bank Account"],
    process="Apply on NSP or the state scholarship portal.",
    url=NSP, sources=["https://www.indiascholarships.in/scholarships/pm-yasasvi-jk-obc/eligibility"],
    deadline="2026-10-31", deadlineNote="NSP 2026-27 cycle")

add(name="National Means-cum-Merit Scholarship (NMMSS)", provider="Department of School Education & Literacy, Ministry of Education", ptype="Government",
    currency="INR", amountOriginal=12000, amountNote="₹12,000/year (₹1,000/month) from Class 9 to 12",
    levels=["Class 9-10", "Class 11-12"], fields=["All Fields"], states=["All India"], maxIncome=350000, minPct=55,
    special="Class 8 student of a government / aided / local-body school; must clear the state NMMS exam (MAT + SAT)",
    category="Merit", awards=100000,
    description="Prevents drop-out after Class 8 by supporting meritorious students from low-income families until Class 12.",
    documents=["Class 8 Marksheet", "Income Certificate", "NMMS Exam Result", "Aadhaar-seeded Bank Account"],
    process="Qualify the state-level NMMS exam, then apply on NSP; renew each year (55% in Class 9/11, 60% in Class 10).",
    url=NSP, sources=["https://www.indiascholarships.in/scholarships/national-means-cum-merit-scholarship"],
    deadline="2026-11-30", deadlineNote="Application deadline; state exam usually Nov–Dec")

add(name="Post-Matric Scholarship for Minorities", provider="Ministry of Minority Affairs", ptype="Government",
    currency="INR", amountOriginal=12000, amountNote="Admission & tuition fees + maintenance allowance up to ₹1,200/month for hostellers",
    levels=["Class 11-12", "Diploma", "Undergraduate", "Postgraduate", "Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=200000, minPct=50,
    special="Minority Community (Muslim, Christian, Sikh, Buddhist, Jain, Parsi); 30% for girls", category="Social Welfare", awards=None, requires="Minority Community",
    description="Supports students from notified minority communities from Class 11 to PhD, including ITI and vocational courses.",
    documents=["Minority Community Self-Declaration", "Income Certificate", "Previous Marksheet", "Fee Receipt", "Aadhaar-seeded Bank Account"],
    process="Apply on the National Scholarship Portal.",
    url=NSP, sources=["https://www.indiascholarships.in/scholarships/post-matric-scholarship-scheme-for-minorities-nsp"],
    deadline="2026-10-31", deadlineNote="NSP 2026-27 cycle")

add(name="Ishan Uday Special Scholarship for North Eastern Region", provider="University Grants Commission (UGC)", ptype="Government",
    currency="INR", amountOriginal=78000, amountNote="₹5,400/month (general degree) or ₹7,800/month (technical/medical/professional), 10 months a year",
    levels=["Undergraduate"], fields=["All Fields"], states=["Assam", "Arunachal Pradesh", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Sikkim", "Tripura"],
    maxIncome=450000, minPct=None, special="Domicile of a North-Eastern state; regular (not distance/part-time) UG course", category="Financial Need", awards=10000,
    description="UGC scholarship that helps students from the North-Eastern Region pursue general, technical and professional undergraduate degrees.",
    documents=["Domicile Certificate", "Income Certificate", "Class 12 Marksheet", "Admission Proof", "Aadhaar-seeded Bank Account"],
    process="Apply on the National Scholarship Portal; the institute verifies.",
    url=NSP, sources=["https://www.indiascholarships.in/scholarships/ishan-uday-special-scholarship-for-north-eastern-region"],
    deadline="2026-10-31", deadlineNote="NSP 2026-27 cycle")

add(name="UGC Junior Research Fellowship (NET-JRF)", provider="University Grants Commission (UGC)", ptype="Government",
    currency="INR", amountOriginal=444000, amountNote="₹37,000/month (JRF, 2 yrs), ₹42,000/month (SRF, 3 yrs) + HRA + annual contingency", period="Monthly",
    levels=["Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=55,
    special="Qualify UGC-NET with JRF; age 30 or under at exam (relaxation for OBC-NCL/SC/ST/PwD/women)", category="Research", awards=None,
    description="Fellowship for NET-JRF qualified candidates pursuing a PhD in humanities, social sciences and other UGC-NET subjects.",
    documents=["NET-JRF Certificate", "PG Marksheet", "PhD Admission / Joining Report"],
    process="Qualify UGC-NET (held twice a year by NTA), then join a PhD; the university processes the fellowship.",
    url="https://ugcnet.nta.nic.in", sources=["https://www.indiascholarships.in/scholarships/ugc-junior-research-fellowship-jrf"],
    deadline=None, deadlineNote="Via UGC-NET, held June and December")

add(name="National Fellowship for Higher Education of ST Students", provider="Ministry of Tribal Affairs", ptype="Government",
    currency="INR", amountOriginal=372000, amountNote="₹31,000/month (JRF), ₹35,000/month (SRF) + HRA + contingency", period="Monthly",
    levels=["Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=55, social=["ST"],
    category="Research", awards=750,
    description="Fellowship for Scheduled Tribe students pursuing MPhil/PhD at recognised universities.",
    documents=["ST Certificate", "PG Marksheet", "PhD Registration Proof"],
    process="Apply on the national tribal fellowship portal; selection on PG marks if applicants exceed 750.",
    url="https://fellowship.tribal.gov.in", sources=["https://www.indiascholarships.in/scholarships/national-fellowship-scholarship-for-higher-education-of-st-students"],
    deadline="2026-10-31", deadlineNote="Expected; verify on portal")

add(name="National Scholarship for Higher Education of ST Students (Top Class)", provider="Ministry of Tribal Affairs", ptype="Government",
    currency="INR", amountOriginal=286000, amountNote="Full tuition (up to ₹2.5 lakh/yr at private institutes) + ₹3,000/month stipend + ₹5,000 books + ₹45,000 one-time computer",
    levels=["Undergraduate", "Postgraduate"], fields=["All Fields"], states=["All India"], maxIncome=600000, minPct=None, social=["ST"],
    special="Merit admission to a notified premier institution (not management quota)", category="Social Welfare", awards=None,
    description="Covers full costs for ST students admitted on merit to notified top institutions (IITs, IIMs, AIIMS, NITs etc.).",
    documents=["ST Certificate", "Income Certificate", "Admission Letter", "Fee Receipt", "Aadhaar-seeded Bank Account"],
    process="Apply on the National Scholarship Portal.",
    url=NSP, sources=["https://www.indiascholarships.in/scholarships/national-fellowship-scholarship-for-higher-education-of-st-students"],
    deadline="2026-10-31", deadlineNote="Expected; verify on NSP")

# ============================ PRIVATE / CSR (NATIONAL) ============================
add(name="Reliance Foundation Undergraduate Scholarships", provider="Reliance Foundation", ptype="Foundation",
    currency="INR", amountOriginal=200000, amountNote="Up to ₹2 lakh over the degree", period="Over full course",
    levels=["Undergraduate"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=None,
    special="First-year full-time UG students; merit-cum-means with an aptitude test", category="Merit", awards=5000,
    description="Merit-cum-means scholarship for first-year undergraduates in any stream, selected through an online aptitude test.",
    documents=["Class 12 Marksheet", "Income Proof", "Admission Proof", "Aadhaar"],
    process="Apply online and take the aptitude test; no fee at any stage.",
    url="https://scholarships.reliancefoundation.org", sources=["https://www.reliancefoundation.org/media/media-release/Reliance_Foundation_Scholarships_2026-27"],
    deadline=None, deadlineNote="2026-27 applications open; check site for closing date")

add(name="Reliance Foundation Postgraduate Scholarships", provider="Reliance Foundation", ptype="Foundation",
    currency="INR", amountOriginal=600000, amountNote="Up to ₹6 lakh over the degree", period="Over full course",
    levels=["Postgraduate"], fields=["Engineering", "Computer Science", "Information Technology", "Biology", "Biotechnology", "Physics", "Chemistry", "Mathematics"],
    states=["All India"], maxIncome=None, minPct=None, special="First-year full-time PG students in engineering, technology, energy and life sciences",
    category="STEM", awards=100,
    description="Merit-based scholarship for first-year postgraduates in future-ready science and technology disciplines.",
    documents=["UG Marksheets", "Admission Proof", "Statement of Purpose", "Resume"],
    process="Apply online; selection on academic merit, aptitude and interview.",
    url="https://scholarships.reliancefoundation.org", sources=["https://www.reliancefoundation.org/media/media-release/Reliance_Foundation_Scholarships_2026-27"],
    deadline=None, deadlineNote="2026-27 applications open; check site for closing date")

add(name="Kotak Kanya Scholarship", provider="Kotak Education Foundation", ptype="Foundation",
    currency="INR", amountOriginal=150000, amountNote="₹1.5 lakh/year until graduation",
    levels=["Undergraduate"], fields=["Engineering", "Medicine", "Business Administration", "Law", "Architecture", "Design"], states=["All India"],
    maxIncome=600000, minPct=75, gender="Female", special="Admission to an NIRF/NAAC-accredited institution in a professional course",
    category="Women in Education", awards=None,
    description="Supports meritorious girls from low-income families in professional undergraduate degrees at reputed institutions.",
    documents=["Class 12 Marksheet", "Income Certificate", "Admission Letter", "Fee Structure", "Aadhaar"],
    process="Apply online via Buddy4Study; shortlisted students have a telephonic/virtual interview.",
    url="https://www.kotakeducationfoundation.org/kotak-kanya-scholarship", sources=["https://www.indiascholarships.in/scholarships/kotak-kanya-scholarship"],
    deadline=None, deadlineNote="Usually closes around September; 2026-27 cycle expected")

add(name="HDFC Bank Parivartan ECSS Programme", provider="HDFC Bank (Parivartan CSR)", ptype="Private",
    currency="INR", amountOriginal=50000, amountNote="₹15,000–₹18,000 (school/diploma), ₹30,000 (general UG), ₹50,000 (professional UG), ₹35,000–₹75,000 (PG)",
    levels=["Class 9-10", "Class 11-12", "Diploma", "Undergraduate", "Postgraduate"], fields=["All Fields"], states=["All India"],
    maxIncome=250000, minPct=55, special="Preference to students facing a personal/family crisis in the last 3 years", category="Financial Need", awards=None,
    description="Educational Crisis Scholarship Support that keeps students from low-income or crisis-hit families in school and college.",
    documents=["Previous Marksheet", "Income Proof", "Admission / Fee Receipt", "Crisis Proof (if applicable)", "Bank Details"],
    process="Apply online via Buddy4Study; documents verified followed by a telephonic interview.",
    url="https://www.parivartanecss.com", sources=["https://www.indiascholarships.in/scholarships/hdfc-bank-parivartan-ecss-scholarship"],
    deadline=None, deadlineNote="Usually July–August")

add(name="ONGC Foundation Scholarship", provider="ONGC Foundation", ptype="Foundation",
    currency="INR", amountOriginal=48000, amountNote="₹48,000/year",
    levels=["Undergraduate", "Postgraduate"], fields=["Engineering", "Medicine", "Business Administration", "Earth Sciences"], states=["All India"],
    maxIncome=450000, minPct=60, social=["SC", "ST", "OBC", "EWS"], special="Income limit ₹4.5 lakh for SC/ST, ₹2 lakh for OBC/EWS; age 30 or under",
    category="Social Welfare", awards=None,
    description="ONGC's scholarship for SC, ST, OBC and EWS students in engineering, MBBS, MBA and master's in geology/geophysics.",
    documents=["Caste / EWS Certificate", "Income Certificate", "Marksheet", "Admission Proof", "Bank Details"],
    process="Apply on the ONGC scholarship portal (NSP registration also required).",
    url="https://www.ongcscholar.org", sources=["https://www.indiascholarships.in/scholarships/ongc-scholarship-csr"],
    deadline="2026-10-31", deadlineNote="Per current cycle; verify on portal")

add(name="Tata Capital Pankh Scholarship", provider="Tata Capital", ptype="Private",
    currency="INR", amountOriginal=18000, amountNote="Up to 80–100% of fees, capped at ₹10,000–₹15,000 (Class 11-12) or ₹12,000–₹18,000 (UG/diploma); higher for professional UG",
    levels=["Class 11-12", "Diploma", "Undergraduate"], fields=["All Fields"], states=["All India"], maxIncome=250000, minPct=60,
    category="Financial Need", awards=None,
    description="Tata Capital's CSR scholarship covering most of the course fee for students from low-income families.",
    documents=["Previous Marksheet", "Income Proof", "Fee Receipt", "Admission Proof", "Bank Details"],
    process="Apply online via Buddy4Study.",
    url="https://www.tatacapital.com/corporate-sustainability/education-uninterrupted.html", sources=["https://www.indiascholarships.in/scholarships/tata-capital-pankh-scholarship"],
    deadline=None, deadlineNote="Around Oct–Nov 2026 (sources differ)")

add(name="Santoor Women's Scholarship", provider="Wipro Consumer Care & Wipro Cares", ptype="Private",
    currency="INR", amountOriginal=30000, amountNote="₹30,000/year for the 3-year degree",
    levels=["Undergraduate"], fields=["All Fields"], states=["Andhra Pradesh", "Telangana", "Karnataka", "Chhattisgarh"],
    maxIncome=None, minPct=None, gender="Female", special="Studied Class 10 and 12 in government schools; joined UG straight after Class 12",
    category="Women in Education", awards=1000,
    description="Supports young women from government schools in four states to pursue full-time undergraduate degrees.",
    documents=["Class 10 & 12 Marksheets", "Government School Proof", "Admission Proof", "Aadhaar", "Bank Details"],
    process="Apply online on the Santoor scholarship portal.",
    url="https://www.santoorscholarships.com", sources=["https://www.indiascholarships.in/news/santoor-womens-scholarship-2026-27-registration-dates"],
    deadline=None, deadlineNote="Late November 2026")

add(name="LIC Golden Jubilee Scholarship", provider="Life Insurance Corporation of India (Golden Jubilee Foundation)", ptype="Government",
    currency="INR", amountOriginal=40000, amountNote="₹40,000/yr medicine, ₹30,000/yr engineering, ₹20,000/yr other UG/diploma/ITI, ₹15,000 special (after Class 10)",
    levels=["Class 11-12", "Diploma", "Undergraduate"], fields=["All Fields"], states=["All India"], maxIncome=450000, minPct=60,
    special="First-year students; passed Class 10/12/diploma in last 3 years", category="Financial Need", awards=None,
    description="LIC's scholarship for students from low-income families entering medicine, engineering, other degrees, diplomas or ITI.",
    documents=["Marksheet", "Income Certificate", "Admission Proof", "Bank Details"],
    process="Apply on LIC's Golden Jubilee scholarship portal; selection by divisional office.",
    url="https://licindia.in", sources=["https://www.indiascholarships.in/scholarships/lic-golden-jubilee-scholarship"],
    deadline="2026-12-15", deadlineNote="Applications usually open late October")

add(name="Sitaram Jindal Foundation Scholarship", provider="Sitaram Jindal Foundation", ptype="Foundation",
    currency="INR", amountOriginal=38400, amountNote="₹500–₹3,200/month depending on course (+₹1,000–1,200 for hostellers)", period="Monthly",
    levels=["Class 11-12", "Diploma", "Undergraduate", "Postgraduate"], fields=["All Fields"], states=["All India"], maxIncome=400000, minPct=None,
    special="Minimum marks vary by course and gender (e.g. Class 11-12: boys 60–65%, girls 55–60%)", category="Financial Need", awards=None,
    description="Long-running monthly scholarship for students from Class 11 to PG from modest-income families.",
    documents=["Previous Marksheet", "Income Certificate", "Fee Receipt", "Bank Details"],
    process="Apply online on the foundation's portal.",
    url="https://www.sitaramjindalfoundation.org", sources=["https://www.indiascholarships.in/scholarships/sitaram-jindal-foundation-scholarship"],
    deadline=None, deadlineNote="Rolling / verify on site")

# ============================ STATE GOVERNMENTS ============================
add(name="Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojana", provider="Directorate of Higher Education, Government of Maharashtra", ptype="Government",
    currency="INR", amountOriginal=None, amountNote="Tuition fee reimbursement: 100% (non-professional, income ≤ ₹8 lakh); professional courses 100% (≤ ₹2.5 lakh) or 50% (₹2.5–8 lakh)",
    levels=["Diploma", "Undergraduate", "Postgraduate"], fields=["All Fields"], states=["Maharashtra"], maxIncome=800000, minPct=None,
    social=["General", "EWS"], special="Admission through CAP to a government/aided/approved institution; regular courses only", category="Financial Need", awards=None,
    description="Maharashtra fee reimbursement scheme (EBC) for open-category and EWS students in higher education.",
    documents=["Domicile Certificate", "Income Certificate", "CAP Allotment Letter", "Fee Receipt", "Previous Marksheet"],
    process="Apply on the MahaDBT portal; the college and directorate verify.",
    url="https://mahadbt.maharashtra.gov.in", sources=["https://www.indiascholarships.in/hi/scholarships/maharashtra-rajarshi-shahu"],
    deadline=None, deadlineNote="2026-27 cycle expected; previous cycle closed 30 Sep")

add(name="Swami Vivekananda Merit-cum-Means Scholarship (SVMCM)", provider="Higher Education Department, Government of West Bengal", ptype="Government",
    currency="INR", amountOriginal=96000, amountNote="₹1,000–₹8,000/month depending on course and level",
    levels=["Class 11-12", "Diploma", "Undergraduate", "Postgraduate"], fields=["All Fields"], states=["West Bengal"], maxIncome=250000, minPct=60,
    special="Study in a recognised West Bengal institution; 60% for HS/UG (53–55% for PG)", category="Merit", awards=None,
    description="West Bengal's merit-cum-means scholarship for meritorious students from low-income families, Class 11 to PG.",
    documents=["Domicile Certificate", "Income Certificate", "Previous Marksheet", "Admission Receipt", "Bank Details"],
    process="Apply on the SVMCM portal; institute and department verify.",
    url="https://svmcm.wbhed.gov.in", sources=["https://www.indiascholarships.in/scholarships/swami-vivekananda-merit-cum-means-scholarship-svmcm"],
    deadline="2026-10-31", deadlineNote="Verify on portal")

add(name="Mukhyamantri Yuva Swavalamban Yojana (MYSY)", provider="Education Department, Government of Gujarat", ptype="Government",
    currency="INR", amountOriginal=200000, amountNote="50% fee support up to ₹2 lakh/yr (medical), ₹50,000 (engineering), ₹25,000 (diploma), ₹10,000 (other UG) + hostel ₹12,000/yr + books",
    levels=["Diploma", "Undergraduate"], fields=["All Fields"], states=["Gujarat"], maxIncome=600000, minPct=80,
    special="80 percentile/marks in Class 10 (for diploma) or Class 12 (for degree)", category="Merit", awards=None,
    description="Gujarat scheme covering half the fees, hostel and book costs for meritorious students from families earning up to ₹6 lakh.",
    documents=["Domicile Certificate", "Income Certificate", "Class 10/12 Marksheet", "Admission Letter", "Fee Receipt"],
    process="Apply on the MYSY portal, then verify documents at a help centre.",
    url="https://mysy.gujarat.gov.in", sources=["https://www.indiascholarships.in/scholarships/mukhyamantri-yuva-swavalamban-yojana-mysy"],
    deadline="2026-10-31", deadlineNote="Applications open from July")

add(name="Pudhumai Penn Scheme", provider="Social Welfare and Women Empowerment Department, Government of Tamil Nadu", ptype="Government",
    currency="INR", amountOriginal=12000, amountNote="₹1,000/month until the course is completed",
    levels=["Diploma", "Undergraduate"], fields=["All Fields"], states=["Tamil Nadu"], maxIncome=None, minPct=None, gender="Female",
    special="Studied Class 6–12 in a government school (or govt-aided Tamil-medium school); first higher-education course", category="Women in Education", awards=None,
    description="Monthly support for girls from government schools who go on to college, diploma or ITI in Tamil Nadu.",
    documents=["School Study Certificate (Class 6–12)", "Admission Proof", "Aadhaar", "Bank Details"],
    process="Applied through the college's nodal officer on the penkalvi portal.",
    url="https://penkalvi.tn.gov.in", sources=["https://www.indiascholarships.in/scholarships/legacy-pudhumai-penn-scheme"],
    deadline="2026-10-31", deadlineNote="Applications June–October")

add(name="Vidyasiri Food and Accommodation Scholarship", provider="Backward Classes Welfare Department, Government of Karnataka", ptype="Government",
    currency="INR", amountOriginal=15000, amountNote="₹1,500/month for 10 months + ₹1,200 book grant",
    levels=["Diploma", "Undergraduate", "Postgraduate"], fields=["All Fields"], states=["Karnataka"], maxIncome=250000, minPct=55,
    social=["OBC"], special="Not staying in a government hostel; Category-1 limits shown (stricter for 2A/3A/3B)", category="Social Welfare", awards=None,
    description="Karnataka support for food and accommodation costs of backward-class students who could not get a government hostel seat.",
    documents=["Caste & Income Certificate", "Previous Marksheet", "Admission Proof", "Aadhaar-seeded Bank Account"],
    process="Apply on Karnataka's State Scholarship Portal (SSP).",
    url="https://ssp.postmatric.karnataka.gov.in", sources=["https://www.indiascholarships.in/scholarships/vidyasiri-food-and-accommodation-scholarship-for-obc-students-karnataka"],
    deadline=None, deadlineNote="2026-27 cycle expected; previous cycle closed 31 Aug")

# ============================ INTERNATIONAL ============================
ABROAD = ["Passport", "Degree Transcripts", "Statement of Purpose", "Recommendation Letters", "CV / Resume"]

add(name="Fulbright-Nehru Master's Fellowships", provider="United States-India Educational Foundation (USIEF)", ptype="International Body",
    scope="International", host=["United States"], currency="USD", amountOriginal=None,
    amountNote="Fully funded: tuition, monthly living stipend, round-trip airfare, J-1 visa support, accident & sickness cover",
    levels=["Postgraduate"], fields=["Economics", "Environmental Science", "Public Policy", "Law", "Journalism", "Public Health", "Sustainability Studies", "Urban Planning", "Social Sciences"],
    states=["All India"], maxIncome=None, minPct=55, special="3+ years of relevant full-time work experience; Indian citizen resident in India; no prior US degree",
    category="Study Abroad", awards=None,
    description="Fully funded master's study in the US for Indian professionals with leadership potential in fields such as public policy, public health, economics and urban planning.",
    documents=ABROAD + ["Work Experience Letters", "English Test Score (if required)"],
    process="Apply online to USIEF; shortlisted candidates are interviewed in India.",
    url="https://www.usief.org.in", sources=["https://www.indiascholarships.in/scholarships/fulbright-nehru-masters-fellowships"],
    deadline=None, deadlineNote="Usually closes mid-May (next: ~May 2027 for 2028-29)")

add(name="Chevening Scholarships", provider="UK Foreign, Commonwealth & Development Office (FCDO)", ptype="Government",
    scope="International", host=["United Kingdom"], currency="GBP", amountOriginal=None,
    amountNote="Fully funded one-year master's: tuition, monthly living allowance, return economy flight, visa fee",
    levels=["Postgraduate"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=None,
    special="2,800+ hours (~2 years) of work experience; must return home for 2 years after the degree", category="Study Abroad", awards=None,
    description="The UK government's global scholarship for future leaders to do a one-year master's at any UK university.",
    documents=ABROAD + ["Three UK Course Applications", "Leadership & Networking Essays"],
    process="Apply online with four essays and three UK course choices; interviews at the British High Commission.",
    url="https://www.chevening.org", sources=["https://www.businesstoday.in/nri/story/chevening-scholarship-opens-for-2027-28-who-can-apply-what-it-covers-key-deadline-for-indians-555345-2026-09-14"],
    deadline=None, deadlineNote="2027-28 round closed 6 Oct 2026; next opens ~Aug 2027")

add(name="Commonwealth Master's Scholarships", provider="Commonwealth Scholarship Commission in the UK", ptype="International Body",
    scope="International", host=["United Kingdom"], currency="GBP", amountOriginal=20544,
    amountNote="Full tuition + £1,712/month stipend (£2,000 in London) + return airfare + study travel grant",
    levels=["Postgraduate"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=None,
    nationalities=["India", "Bangladesh", "Sri Lanka", "Kenya", "Nigeria"],
    special="Upper-second-class (2:1) degree; cannot afford UK study otherwise; nominated by national agency (no MBA)", category="Study Abroad", awards=None,
    description="Fully funded one-year taught master's at a UK university for talented candidates from eligible Commonwealth countries, including India.",
    documents=ABROAD + ["Nomination from National Agency", "Two References"],
    process="Apply through your national nominating agency (Ministry of Education for India), then on the CSC portal.",
    url="https://cscuk.fcdo.gov.uk/masters", sources=["https://cscuk.fcdo.gov.uk/masters"],
    deadline="2026-10-20", deadlineNote="CSC portal deadline; India's nominating agency closes earlier")

add(name="Rhodes Scholarship (India)", provider="Rhodes Trust", ptype="Foundation",
    scope="International", host=["United Kingdom"], currency="GBP", amountOriginal=None,
    amountNote="Fully funded postgraduate study at the University of Oxford (fees, stipend, flights, visa)",
    levels=["Postgraduate", "Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=None,
    special="Exceptional academics, character and leadership; age/eligibility per India constituency rules", category="Study Abroad", awards=5,
    description="The world's oldest international graduate scholarship; five awards each year for Indian candidates to study at Oxford.",
    documents=ABROAD + ["Personal Statement", "Academic Statement", "Five Reference Letters"],
    process="Apply online; shortlisted candidates attend regional and final interviews.",
    url="https://www.rhodeshouse.ox.ac.uk/scholarships/apply/india", sources=["https://www.rhodeshouse.ox.ac.uk/scholarships/apply/india"],
    deadline=None, deadlineNote="Opens 1 June, closes ~23 July each year")

add(name="Inlaks Shivdasani Foundation Scholarship", provider="Inlaks Shivdasani Foundation", ptype="Foundation",
    scope="International", host=["United States", "United Kingdom", "Germany", "France", "Netherlands", "Switzerland"], currency="USD", amountOriginal=120000,
    amountNote="Up to US$120,000 for the course: tuition, living, one-way airfare, health allowance", period="Over full course",
    levels=["Postgraduate", "Doctoral"], fields=["Humanities", "Social Sciences", "Law", "Fine Arts", "Design", "Architecture", "Physics", "Chemistry", "Mathematics", "Biology", "Economics"],
    states=["All India"], maxIncome=None, minPct=65, special="Admission to a top university in the US, UK or Europe; not for engineering, computer science, medicine or MBA",
    category="Study Abroad", awards=None,
    description="Merit scholarship for outstanding Indian graduates to study at top universities in the US, UK and Europe (excludes engineering, CS, medicine, MBA).",
    documents=ABROAD + ["Admission Offer (or application proof)"],
    process="Apply online; shortlisted candidates are interviewed.",
    url="https://www.inlaksfoundation.org", sources=["https://www.indiascholarships.in/bn/scholarships/inlaks-shivdasani-foundation-scholarship"],
    deadline=None, deadlineNote="Usually opens Jan, closes ~31 March")

add(name="Gates Cambridge Scholarship", provider="Gates Cambridge Trust", ptype="Foundation",
    scope="International", host=["United Kingdom"], currency="GBP", amountOriginal=23152,
    amountNote="Full cost: tuition + £23,152/yr maintenance + visa, health surcharge, airfares",
    levels=["Postgraduate", "Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=None,
    nationalities=["Any country"],
    special="Non-UK citizens applying for a full-time PhD, MLitt or one-year master's at Cambridge (not MBA)", category="Study Abroad", awards=70,
    description="Full-cost scholarships for outstanding applicants from outside the UK to pursue a postgraduate degree at the University of Cambridge.",
    documents=ABROAD + ["Gates Cambridge Statement"],
    process="Apply via the Cambridge Applicant Portal and tick the Gates Cambridge box.",
    url="https://www.gatescambridge.org", sources=["https://propakistani.pk/2026/09/15/fully-funded-gates-cambridge-scholarship-2027-for-masters-and-phd-in-the-uk-is-now-open/"],
    deadline="2026-12-08", deadlineNote="International round: 8 Dec 2026 or 6 Jan 2027 depending on course")

add(name="Eiffel Excellence Scholarship", provider="French Ministry for Europe and Foreign Affairs (via Campus France)", ptype="Government",
    scope="International", host=["France"], currency="EUR", amountOriginal=14400,
    amountNote="€1,200/month (master's) or €2,000/month (PhD) + travel, insurance, cultural activities",
    levels=["Postgraduate", "Doctoral"], fields=["Engineering", "Biology", "Mathematics", "Computer Science", "Law", "Economics", "Business Administration", "Humanities", "Social Sciences"],
    states=["All India"], maxIncome=None, minPct=None, special="Age 29 or under (master's) / 35 or under (PhD); nominated by a French institution",
    category="Study Abroad", awards=None,
    description="French government scholarship to attract top international students to master's and PhD programmes in France.",
    documents=ABROAD + ["Nomination by French Institution"],
    process="Apply to the French institution, which nominates you to Campus France.",
    url="https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence", sources=["https://u-paris.fr/language/en/eiffel-excellence-scholarship-2027/"],
    deadline=None, deadlineNote="Institution deadlines Oct–Nov 2026; Campus France closes Jan 2027")

add(name="Swiss Government Excellence Scholarships", provider="Swiss Confederation (SERI / FCS)", ptype="Government",
    scope="International", host=["Switzerland"], currency="CHF", amountOriginal=29400,
    amountNote="CHF 2,450/month (PhD up to 36 months; research fellowship 6–12 months)",
    levels=["Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=None,
    special="Master's completed by Jul 2027; born after 31 Dec 1991; support letter from a Swiss supervisor", category="Research", awards=None,
    description="Swiss government PhD scholarships and research fellowships at Swiss universities for graduates from abroad, including India.",
    documents=["Passport", "Master's Transcripts", "Research Proposal", "Swiss Supervisor's Letter & CV", "Two Recommendation Letters"],
    process="Apply on the GO ESKAS portal via the Swiss embassy channel for India.",
    url="https://www.sbfi.admin.ch/en/swiss-government-excellence-scholarships-at-a-glance", sources=["https://educationpost.in/news/education/scholarship/swiss-government-excellence-scholarships-open-for-202728"],
    deadline="2026-11-10", deadlineNote="India deadline, 2027-28")

add(name="MEXT (Monbukagakusho) Japanese Government Scholarship", provider="Ministry of Education, Culture, Sports, Science and Technology, Japan", ptype="Government",
    scope="International", host=["Japan"], currency="JPY", amountOriginal=1728000,
    amountNote="≈¥143,000–145,000/month (research students), ≈¥117,000 (undergraduate) + full tuition + airfare",
    levels=["Undergraduate", "Postgraduate", "Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=None,
    special="Embassy recommendation route: written test and interview", category="Study Abroad", awards=None,
    description="Japanese government scholarship covering tuition, a monthly stipend and airfare for research, undergraduate and other programmes in Japan.",
    documents=ABROAD + ["Research Plan", "Medical Certificate"],
    process="Apply through the Embassy of Japan in India (written exam and interview) or via a Japanese university.",
    url="https://www.in.emb-japan.go.jp/education/japanese_government_scholarships.html", sources=["https://www.indiascholarships.in/scholarships/mext-scholarship-japan"],
    deadline=None, deadlineNote="Embassy route usually opens ~April; exams May–June")

add(name="Global Korea Scholarship (GKS)", provider="National Institute for International Education (NIIED), Korea", ptype="Government",
    scope="International", host=["South Korea"], currency="KRW", amountOriginal=10800000,
    amountNote="≈KRW 900,000/month + tuition (up to KRW 5 million), airfare, settlement, language and completion grants, insurance",
    levels=["Undergraduate", "Postgraduate", "Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=80,
    special="80% CGPA or top 20% of class; age under 25 (UG) / under 40 (graduate); 78 seats reserved for India",
    category="Study Abroad", awards=78,
    description="Korean government scholarship for undergraduate and graduate degrees in Korea, including a year of Korean language training.",
    documents=ABROAD + ["Study Plan", "Medical Assessment"],
    process="Apply via the embassy track or directly to a Korean university (university track).",
    url="https://www.studyinkorea.go.kr", sources=["https://studyabroad.careers360.com/articles/gks-global-korea-scholarship"],
    deadline=None, deadlineNote="Embassy track ~Feb–Mar; university track ~Sep–Oct")

add(name="J.N. Tata Endowment Loan Scholarship", provider="J.N. Tata Endowment for the Higher Education of Indians", ptype="Foundation",
    scope="International", host=["Any country"], currency="INR", amountOriginal=1000000,
    amountNote="Loan scholarship of ₹1–10 lakh (some sources say up to ₹20 lakh) at 2% simple interest; travel grant possible", period="One-time",
    levels=["Postgraduate", "Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=60,
    special="Indian graduates with an admission offer abroad; partly loan (repayable)", category="Study Abroad", awards=None,
    description="Century-old Tata endowment providing low-interest loan scholarships to Indian graduates for postgraduate study abroad.",
    documents=ABROAD + ["Admission Offer", "Financial Statement"],
    process="Apply online, followed by a test and interview.",
    url="https://www.jntataendowment.org", sources=["https://www.indiascholarships.in/scholarships/jn-tata-endowment-for-higher-education"],
    deadline=None, deadlineNote="Opens January, closes around end-January / March each year")

add(name="Holland Scholarship", provider="Dutch Ministry of Education, Culture and Science & Dutch universities (Nuffic)", ptype="Government",
    scope="International", host=["Netherlands"], currency="EUR", amountOriginal=5000, amountNote="€5,000 one-time in the first year", period="One-time",
    levels=["Undergraduate", "Postgraduate"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=None,
    special="Non-EEA students starting a bachelor's or master's at a participating Dutch institution; country list set by each university",
    category="Study Abroad", awards=None,
    description="One-time grant for talented non-EEA students starting a full-time degree at a participating Dutch university or university of applied sciences.",
    documents=["Passport", "Transcripts", "Motivation Letter", "Admission Application"],
    process="Apply through the Dutch institution's own scholarship procedure after applying for admission.",
    url="https://www.studyinnl.org", sources=["https://www.wur.nl/en/article/holland-scholarship-international-students.htm"],
    deadline=None, deadlineNote="Usually 1 Feb or 1 May, set by each university")

add(name="Government of Ireland International Education Scholarship (GOI-IES)", provider="Higher Education Authority (HEA), Ireland", ptype="Government",
    scope="International", host=["Ireland"], currency="EUR", amountOriginal=10000, amountNote="€10,000 stipend + full tuition waiver for one year", period="One-time",
    levels=["Undergraduate", "Postgraduate", "Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=None,
    special="Non-EU/EEA students accepted at an Irish higher education institution (final-year UG, master's, PhD); confirm current eligible-country list",
    category="Study Abroad", awards=None,
    description="Irish government scholarship offering a stipend and fee waiver for one year of study in Ireland.",
    documents=["Passport", "Transcripts", "Offer Letter", "Personal Statement", "Reference Letters"],
    process="Apply online to the HEA; institutions confirm admission.",
    url="https://hea.ie/policy/internationalisation/goi-ies/", sources=["https://www.scholarshipscentral.com/blog/government-of-ireland-international-education-scholarship-2027"],
    deadline=None, deadlineNote="Call usually opens ~Feb, closes ~Mar")

add(name="K.C. Mahindra Scholarships for Post-Graduate Studies Abroad", provider="K.C. Mahindra Education Trust", ptype="Foundation",
    scope="International", host=["Any country"], currency="INR", amountOriginal=1000000,
    amountNote="Interest-free loan scholarship: up to ₹10 lakh (top 3 Fellows) / up to ₹5 lakh (others)", period="One-time",
    levels=["Postgraduate", "Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=None,
    special="First-class degree; admission (or application) to a reputed foreign university; repayable interest-free",
    category="Study Abroad", awards=None,
    description="Interest-free loan scholarships from the Mahindra group's education trust for Indian graduates pursuing postgraduate study abroad.",
    documents=ABROAD + ["Admission Offer / Application Proof"],
    process="Apply online; shortlisted candidates are interviewed.",
    url="https://www.kcmet.org", sources=["https://www.indiascholarships.in/scholarships/kc-mahindra-scholarship-for-post-graduate-studies-abroad"],
    deadline="2026-10-31", deadlineNote="Per current cycle; verify on site")

add(name="Aga Khan Foundation International Scholarship Programme", provider="Aga Khan Foundation", ptype="Foundation",
    scope="International", host=["Any country"], currency="USD", amountOriginal=None,
    amountNote="Tuition and living expenses: 50% grant + 50% loan (5% annual service charge)",
    levels=["Postgraduate", "Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=None,
    nationalities=["India", "Bangladesh", "Kenya"], special="Outstanding students with no other means of financing; preference for under-30s; resident in India",
    category="Study Abroad", awards=None,
    description="Need-based scholarship-loan for postgraduate study abroad for outstanding students from select developing countries, including India.",
    documents=ABROAD + ["Financial Need Statement"],
    process="Apply to the Aga Khan Foundation office in India.",
    url="https://the.akdn/en/what-we-do/developing-human-capacity/education/international-scholarships", sources=["https://www.indiascholarships.in/scholarships/aga-khan-foundation-international-scholarship-programme"],
    deadline=None, deadlineNote="Usually 31 March")

add(name="Erasmus Mundus Joint Master's Scholarships", provider="European Commission (EACEA)", ptype="International Body",
    scope="International", host=["Any EU country"], currency="EUR", amountOriginal=16800,
    amountNote="€1,400/month + full tuition + up to €3,000/yr travel & installation + insurance",
    levels=["Postgraduate"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=None,
    nationalities=["Any country"], special="Study in at least two European countries; apply to each joint programme separately",
    category="Study Abroad", awards=None,
    description="EU-funded scholarships for joint master's programmes run by consortia of universities across two or more European countries.",
    documents=ABROAD + ["English Test Score (IELTS/TOEFL)"],
    process="Choose programmes from the Erasmus Mundus catalogue and apply on each programme's own portal.",
    url="https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en", sources=["https://www.indiascholarships.in/scholarships/erasmus-mundus-joint-masters-scholarships", "https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en"],
    deadline=None, deadlineNote="Programme deadlines mostly Dec 2026 – Feb 2027")

add(name="Mitacs Globalink Research Internship (AICTE)", provider="Mitacs & AICTE", ptype="International Body",
    scope="International", host=["Canada"], currency="CAD", amountOriginal=None,
    amountNote="Fully funded 12-week research internship: airfare, housing, food stipend, insurance", period="One-time",
    levels=["Undergraduate"], fields=["Engineering", "Computer Science", "Information Technology"], states=["All India"], maxIncome=None, minPct=70,
    special="Full-time BE/BTech student with 1–3 semesters remaining; age 18+", category="STEM", awards=300,
    description="Summer research internship at Canadian universities for senior Indian engineering undergraduates, under the Mitacs–AICTE partnership.",
    documents=["Passport", "Transcripts", "Professor's Reference Letter", "CV"],
    process="Apply to 3–10 projects across at least three Canadian provinces.",
    url="https://www.mitacs.ca", sources=["https://news.careers360.com/aicte-mitacs-globalink-research-internship-2027-application-deadline-september-16"],
    deadline=None, deadlineNote="2027 round closed 16 Sep 2026; next opens ~Aug 2027")

add(name="GREAT Scholarships – India", provider="British Council & UK universities (GREAT Britain campaign)", ptype="International Body",
    scope="International", host=["United Kingdom"], currency="GBP", amountOriginal=10000, amountNote="At least £10,000 towards tuition for a one-year master's", period="One-time",
    levels=["Postgraduate"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=None,
    special="Indian citizens; offer from a participating UK university (list changes each year)", category="Study Abroad", awards=12,
    description="Tuition scholarships from participating UK universities for Indian students on one-year postgraduate courses.",
    documents=["Passport", "Degree Transcripts", "UK University Offer", "English Test Score", "Personal Statement"],
    process="Apply for admission to a participating university, then apply for its GREAT scholarship.",
    url="https://study-uk.britishcouncil.org/scholarships-funding/great-scholarships/india", sources=["https://www.businesstoday.in/nri/study/story/want-to-study-in-uk-indian-students-can-apply-for-ps10000-great-scholarships-561647-2026-10-15"],
    deadline=None, deadlineNote="Set by each university")

add(name="Knight-Hennessy Scholars", provider="Stanford University", ptype="University",
    scope="International", host=["United States"], currency="USD", amountOriginal=None,
    amountNote="Full funding for up to 3 years of Stanford graduate study: tuition, living & academic stipend, annual travel",
    levels=["Postgraduate", "Doctoral"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=None,
    nationalities=["Any country"], special="Apply to a full-time Stanford graduate programme; open to all nationalities", category="Study Abroad", awards=None,
    description="Stanford's flagship graduate scholarship providing full funding and leadership development to scholars from around the world.",
    documents=ABROAD + ["Video Statement"],
    process="Submit the Knight-Hennessy application and a separate Stanford graduate programme application.",
    url="https://knight-hennessy.stanford.edu", sources=["https://www.scholarshipscentral.com/knight-hennessy-scholars-2027"],
    deadline=None, deadlineNote="2027 cohort closed 6 Oct 2026; usually opens June")

add(name="Charpak Master's Scholarship", provider="Embassy of France in India (Campus France India)", ptype="Government",
    scope="International", host=["France"], currency="EUR", amountOriginal=10320,
    amountNote="€860/month + visa and Campus France fee waiver + health insurance + housing priority",
    levels=["Postgraduate"], fields=["All Fields"], states=["All India"], maxIncome=None, minPct=None,
    special="Indian citizen or OCI; age 30 or under; admitted to a full-time master's in France", category="Study Abroad", awards=None,
    description="French government scholarship for Indian students pursuing a full-time master's degree in France.",
    documents=["Passport", "CV", "French Admission Letter", "Marksheets", "Recommendation Letters"],
    process="Apply on the Institut Français India scholarship portal; shortlisted candidates have an online interview.",
    url="https://inde.campusfrance.org", sources=["https://inde.campusfrance.org/node/88"],
    deadline=None, deadlineNote="Usually early in the year; interviews in April")

add(name="DAAD WISE (Working Internships in Science and Engineering)", provider="German Academic Exchange Service (DAAD)", ptype="Government",
    scope="International", host=["Germany"], currency="EUR", amountOriginal=2802,
    amountNote="€934/month for 2–3 months + travel subsidy (~€1,075) + health insurance", period="One-time",
    levels=["Undergraduate"], fields=["Engineering", "Computer Science", "Physics", "Chemistry", "Mathematics", "Biology"], states=["All India"],
    maxIncome=None, minPct=85, special="85% aggregate / 8.5 CGPA; invitation from a German professor at a public university or research institute",
    category="STEM", awards=None,
    description="Summer research internship in Germany for top Indian undergraduate science and engineering students.",
    documents=["Passport", "Transcripts", "Invitation Letter from German Host", "CV", "Recommendation Letter"],
    process="Secure a host professor, then apply on the DAAD portal.",
    url="https://www2.daad.de/deutschland/stipendium/datenbank/en/", sources=["https://www.indiascholarships.in/scholarships/daad-wise-research-internship-germany"],
    deadline="2026-11-05", deadlineNote="DAAD portal deadline")

add(name="Fulbright-Nehru Doctoral Research Fellowships", provider="United States-India Educational Foundation (USIEF)", ptype="International Body",
    scope="International", host=["United States"], currency="USD", amountOriginal=None,
    amountNote="6–9 months in the US: monthly stipend, round-trip airfare, J-1 visa support, health cover, affiliation fees",
    levels=["Doctoral"], fields=["Engineering", "Computer Science", "Data Science", "Physics", "Earth Sciences", "Electronics"], states=["All India"],
    maxIncome=None, minPct=None, special="Registered for a PhD at an Indian institution; not a government employee; priority fields change yearly",
    category="Research", awards=None,
    description="Lets Indian PhD scholars spend 6–9 months doing research at a US institution.",
    documents=["PhD Registration Proof", "Research Proposal", "Supervisor Recommendation", "CV", "Passport"],
    process="Apply online via USIEF/IIE portal; shortlisted candidates interviewed.",
    url="https://www.usief.org.in/fulbright-fellowships/fellowships-for-indian-citizen/fulbright-nehru-doctoral-research-fellowships", sources=["https://www.usief.org.in/fulbright-fellowships/fellowships-for-indian-citizen/fulbright-nehru-doctoral-research-fellowships"],
    deadline=None, deadlineNote="Usually closes ~July (2027-28 round closed)")
