-- ============================================================
-- ScholarConnect - ACCOUNTS schema (users, logins, profiles, activity)
-- This is the database that grows as people register on the website.
-- Every statement is "IF NOT EXISTS" / "OR REPLACE", so it is safe to re-run:
-- it NEVER deletes accounts. Data syncs (schema.sql + seed.sql) don't touch these tables.
-- Order on a fresh install: schema.sql -> seed.sql -> accounts.sql  (npm run db:init does this)
-- ============================================================
CREATE DATABASE IF NOT EXISTS scholarconnect CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE scholarconnect;

-- ------------------------------------------------------------
-- 1. Login accounts (student-register.html, institution-form.html, login.html)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
  user_id          INT            AUTO_INCREMENT PRIMARY KEY,
  email            VARCHAR(160)   NOT NULL UNIQUE,
  password_hash    VARCHAR(100)   NOT NULL COMMENT 'bcrypt hash - plain passwords are never stored',
  role             ENUM('student','institution','admin') NOT NULL,
  full_name        VARCHAR(120)   NOT NULL,
  phone            VARCHAR(15)    NULL,
  education_level  VARCHAR(40)    NULL COMMENT 'from the registration form (students)',
  is_active        TINYINT(1)     NOT NULL DEFAULT 1 COMMENT '0 = deactivated by an admin',
  login_count      INT            NOT NULL DEFAULT 0,
  created_at       DATETIME       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_login_at    DATETIME       NULL,
  INDEX idx_role (role)
);

-- ------------------------------------------------------------
-- 2. Institutions that registered on the site (institution-form.html)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS institutions (
  institution_id   INT            AUTO_INCREMENT PRIMARY KEY,
  user_id          INT            NOT NULL UNIQUE,
  name             VARCHAR(160)   NOT NULL,
  institution_type VARCHAR(40)    NOT NULL,
  website          VARCHAR(255)   NULL,
  address          VARCHAR(255)   NOT NULL,
  city             VARCHAR(80)    NOT NULL,
  state            VARCHAR(80)    NOT NULL,
  contact_person   VARCHAR(120)   NOT NULL,
  email            VARCHAR(160)   NOT NULL,
  phone            VARCHAR(15)    NOT NULL,
  is_verified      TINYINT(1)     NOT NULL DEFAULT 0 COMMENT 'set by an admin',
  created_at       DATETIME       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Scholarships submitted by institutions, waiting for admin review
CREATE TABLE IF NOT EXISTS scholarship_submissions (
  submission_id    INT            AUTO_INCREMENT PRIMARY KEY,
  institution_id   INT            NOT NULL,
  name             VARCHAR(200)   NOT NULL,
  amount_inr       DECIMAL(14,2)  NOT NULL,
  num_awards       INT            NOT NULL,
  deadline         DATE           NOT NULL,
  education_level  VARCHAR(40)    NOT NULL,
  fields           VARCHAR(255)   NOT NULL,
  min_percentage   DECIMAL(5,2)   NOT NULL,
  max_income_inr   DECIMAL(14,2)  NOT NULL,
  location         VARCHAR(255)   NULL,
  other_criteria   VARCHAR(255)   NULL,
  documents        VARCHAR(255)   NULL,
  apply_link       VARCHAR(255)   NULL,
  description      TEXT           NOT NULL,
  status           ENUM('Pending','Approved','Rejected') NOT NULL DEFAULT 'Pending',
  reviewer_note    VARCHAR(255)   NULL,
  submitted_at     DATETIME       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  reviewed_at      DATETIME       NULL,
  CONSTRAINT chk_sub_pct CHECK (min_percentage BETWEEN 0 AND 100),
  FOREIGN KEY (institution_id) REFERENCES institutions(institution_id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- 3. Student eligibility profiles (student-form.html, saved when logged in)
--    Stored as text values so they survive scholarship-data rebuilds.
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS students (
  student_id            INT            AUTO_INCREMENT PRIMARY KEY,
  user_id               INT            NOT NULL UNIQUE,
  full_name             VARCHAR(120)   NOT NULL,
  age                   TINYINT        NOT NULL,
  gender                ENUM('Female','Male','Other','Prefer not to say') NOT NULL,
  nationality           VARCHAR(80)    NOT NULL DEFAULT 'India',
  state                 VARCHAR(80)    NOT NULL,
  city                  VARCHAR(80)    NOT NULL,
  domicile_state        VARCHAR(80)    NULL,
  social_category       ENUM('General','OBC','SC','ST','EWS') NOT NULL,
  education_level       VARCHAR(40)    NOT NULL,
  institute_name        VARCHAR(160)   NOT NULL,
  course                VARCHAR(80)    NOT NULL,
  field_of_study        VARCHAR(80)    NOT NULL,
  year_of_study         VARCHAR(20)    NOT NULL,
  percentage            DECIMAL(5,2)   NOT NULL,
  annual_family_income  DECIMAL(14,2)  NOT NULL,
  income_bracket        VARCHAR(40)    NOT NULL,
  needs_financial_aid   TINYINT(1)     NOT NULL DEFAULT 0,
  first_gen_learner     TINYINT(1)     NOT NULL DEFAULT 0,
  has_disability        TINYINT(1)     NOT NULL DEFAULT 0,
  sports_achievement    TINYINT(1)     NOT NULL DEFAULT 0,
  academic_achievement  TINYINT(1)     NOT NULL DEFAULT 0,
  extracurricular       TINYINT(1)     NOT NULL DEFAULT 0,
  parent_govt_employee  TINYINT(1)     NOT NULL DEFAULT 0,
  special_category      VARCHAR(60)    NULL,
  updated_at            DATETIME       NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT chk_student_pct CHECK (percentage BETWEEN 0 AND 100),
  CONSTRAINT chk_student_age CHECK (age BETWEEN 10 AND 80),
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- 4. Activity (heart button, applications). scholarship_id refers to scholarships.scholarship_id;
--    no foreign key on purpose, so rebuilding scholarship data never cascades into accounts.
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS saved_scholarships (
  user_id         INT       NOT NULL,
  scholarship_id  INT       NOT NULL,
  saved_at        DATETIME  NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, scholarship_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS applications (
  application_id  INT       AUTO_INCREMENT PRIMARY KEY,
  user_id         INT       NOT NULL,
  scholarship_id  INT       NOT NULL,
  status          ENUM('Draft','Submitted','Under Review','Shortlisted','Awarded','Rejected') NOT NULL DEFAULT 'Draft',
  match_score     TINYINT   NULL,
  submitted_at    DATETIME  NULL,
  updated_at      DATETIME  NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  reviewer_note   VARCHAR(255) NULL,
  UNIQUE KEY uq_application (user_id, scholarship_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- ------------------------------------------------------------
-- 5. Login sessions (used by the Node server; format of express-mysql-session)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS sessions (
  session_id  VARCHAR(128) COLLATE utf8mb4_bin NOT NULL PRIMARY KEY,
  expires     INT UNSIGNED NOT NULL,
  data        MEDIUMTEXT COLLATE utf8mb4_bin
);

-- ------------------------------------------------------------
-- 6. Views for the admin page
-- ------------------------------------------------------------
CREATE OR REPLACE VIEW v_registered_users AS
SELECT u.user_id, u.full_name, u.email, u.role, u.phone, u.education_level, u.is_active,
       u.created_at, u.last_login_at, u.login_count,
       i.name AS institution_name, i.is_verified AS institution_verified,
       (s.student_id IS NOT NULL) AS has_profile,
       (SELECT COUNT(*) FROM saved_scholarships ss WHERE ss.user_id = u.user_id) AS saved_count
FROM users u
LEFT JOIN institutions i ON i.user_id = u.user_id
LEFT JOIN students s     ON s.user_id = u.user_id;

CREATE OR REPLACE VIEW v_application_overview AS
SELECT a.application_id, u.full_name AS student, u.email AS student_email,
       s.name AS scholarship, s.scope, a.status, a.match_score, a.submitted_at, a.reviewer_note
FROM applications a
JOIN users u        ON u.user_id = a.user_id
JOIN scholarships s ON s.scholarship_id = a.scholarship_id;

-- ------------------------------------------------------------
-- 7. Eligibility engine in SQL (same rules + weights as js/eligibility.js)
--    Education 25 · Field 20 · Income 25 · Location 15 · Other 15
--    CALL sp_match_scholarships(<user_id>);   -- needs a saved student profile
-- ------------------------------------------------------------
DROP PROCEDURE IF EXISTS sp_match_scholarships;
DELIMITER //
CREATE PROCEDURE sp_match_scholarships(IN p_user_id INT)
BEGIN
  SELECT * FROM (
    SELECT x.*,
           (x.edu_ok * 25 + x.field_ok * 20 + x.income_ok * 25 + x.location_ok * 15
            + ROUND((x.pct_ok + x.gender_ok + x.bonus_ok) / 3 * 15)) AS match_score,
           (x.edu_ok AND x.field_ok AND x.income_ok AND x.location_ok AND x.pct_ok
            AND x.gender_ok AND x.social_ok AND x.nationality_ok AND x.profile_ok) AS eligible
    FROM (
      SELECT s.scholarship_id, s.name, s.scope, c.name AS category, s.amount_inr, s.amount_note,
             s.deadline, s.deadline_note, s.official_url,
        EXISTS(SELECT 1 FROM scholarship_levels sl JOIN education_levels l ON l.level_id = sl.level_id
                WHERE sl.scholarship_id = s.scholarship_id AND l.name = st.education_level)       AS edu_ok,
        (s.all_fields OR EXISTS(SELECT 1 FROM scholarship_fields sf JOIN fields_of_study f ON f.field_id = sf.field_id
                WHERE sf.scholarship_id = s.scholarship_id AND f.name = st.field_of_study))       AS field_ok,
        (s.max_income_inr IS NULL OR st.annual_family_income <= s.max_income_inr)              AS income_ok,
        (s.all_india OR EXISTS(SELECT 1 FROM scholarship_states ss JOIN states x2 ON x2.state_id = ss.state_id
                WHERE ss.scholarship_id = s.scholarship_id AND x2.name = st.state))               AS location_ok,
        (s.min_percentage IS NULL OR st.percentage >= s.min_percentage)                       AS pct_ok,
        (s.gender_eligibility = 'All' OR s.gender_eligibility = st.gender)                     AS gender_ok,
        (NOT EXISTS(SELECT 1 FROM scholarship_social_categories sc WHERE sc.scholarship_id = s.scholarship_id)
          OR EXISTS(SELECT 1 FROM scholarship_social_categories sc
                     WHERE sc.scholarship_id = s.scholarship_id AND sc.social_category = st.social_category)) AS social_ok,
        (s.open_to_all_nationalities OR EXISTS(SELECT 1 FROM scholarship_nationalities sn JOIN countries co ON co.country_id = sn.country_id
                WHERE sn.scholarship_id = s.scholarship_id AND co.name = st.nationality))         AS nationality_ok,
        (s.required_profile_flag IS NULL
          OR (s.required_profile_flag = 'Disability' AND st.has_disability = 1)
          OR st.special_category = s.required_profile_flag)                                     AS profile_ok,
        CASE
          WHEN c.name = 'Sports'             AND st.sports_achievement THEN 1
          WHEN c.name = 'Arts'               AND st.extracurricular    THEN 1
          WHEN c.name = 'Financial Need'     AND st.first_gen_learner  THEN 1
          WHEN c.name = 'Women in Education' AND st.gender = 'Female'  THEN 1
          WHEN st.academic_achievement THEN 1
          ELSE 0 END                                                                           AS bonus_ok
      FROM scholarships s
      JOIN categories c ON c.category_id = s.category_id
      CROSS JOIN students st
      WHERE st.user_id = p_user_id AND s.status = 'Open'
        AND s.data_source = 'manual'   -- API records lack eligibility rules, so they are never auto-matched
    ) x
  ) r
  ORDER BY r.eligible DESC, r.match_score DESC, r.deadline IS NULL, r.deadline;
END //
DELIMITER ;
