-- ============================================================
-- ScholarConnect - SCHOLARSHIP CONTENT schema
-- Real national + international scholarships (hand-verified + API imports).
-- This file is re-run on every data sync: it rebuilds ONLY the content tables.
-- User accounts live in accounts.sql and are never dropped by this file.
-- Order: schema.sql -> seed.sql -> accounts.sql   (or: cd server && npm run db:init)
-- Compatible with MySQL 8.0+ and MariaDB 10.4+ (XAMPP / WAMP).
-- ============================================================

CREATE DATABASE IF NOT EXISTS scholarconnect CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE scholarconnect;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS scholarship_documents;
DROP TABLE IF EXISTS scholarship_sources;
DROP TABLE IF EXISTS scholarship_statistics;
DROP TABLE IF EXISTS scholarship_social_categories;
DROP TABLE IF EXISTS scholarship_nationalities;
DROP TABLE IF EXISTS scholarship_host_countries;
DROP TABLE IF EXISTS scholarship_states;
DROP TABLE IF EXISTS scholarship_fields;
DROP TABLE IF EXISTS scholarship_levels;
DROP TABLE IF EXISTS scholarships;
DROP TABLE IF EXISTS providers;
DROP TABLE IF EXISTS document_types;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS fields_of_study;
DROP TABLE IF EXISTS education_levels;
DROP TABLE IF EXISTS states;
DROP TABLE IF EXISTS countries;
DROP TABLE IF EXISTS currencies;
SET FOREIGN_KEY_CHECKS = 1;

-- ------------------------------------------------------------
-- 1. Reference / lookup tables
-- ------------------------------------------------------------
CREATE TABLE currencies (
  currency_code   CHAR(3)        PRIMARY KEY,
  symbol          VARCHAR(8)     NOT NULL,
  inr_rate        DECIMAL(12,4)  NULL COMMENT '1 unit of this currency in INR (approximate)',
  rate_as_of      DATE           NULL
);

CREATE TABLE countries (
  country_id      INT            AUTO_INCREMENT PRIMARY KEY,
  iso_code        CHAR(2)        NULL UNIQUE,
  name            VARCHAR(120)   NOT NULL UNIQUE,
  currency_code   CHAR(3)        NULL,
  region          VARCHAR(40)    NOT NULL,
  FOREIGN KEY (currency_code) REFERENCES currencies(currency_code)
);

CREATE TABLE states (
  state_id        INT            AUTO_INCREMENT PRIMARY KEY,
  country_id      INT            NOT NULL,
  code            VARCHAR(4)     NOT NULL,
  name            VARCHAR(80)    NOT NULL,
  kind            ENUM('State','UT') NOT NULL DEFAULT 'State',
  UNIQUE KEY uq_state (country_id, name),
  FOREIGN KEY (country_id) REFERENCES countries(country_id)
);

CREATE TABLE education_levels (
  level_id        INT            AUTO_INCREMENT PRIMARY KEY,
  name            VARCHAR(40)    NOT NULL UNIQUE,
  sort_order      TINYINT        NOT NULL
);

CREATE TABLE fields_of_study (
  field_id        INT            AUTO_INCREMENT PRIMARY KEY,
  name            VARCHAR(80)    NOT NULL UNIQUE
);

CREATE TABLE categories (
  category_id     INT            AUTO_INCREMENT PRIMARY KEY,
  name            VARCHAR(60)    NOT NULL UNIQUE
);

CREATE TABLE document_types (
  document_id     INT            AUTO_INCREMENT PRIMARY KEY,
  name            VARCHAR(120)   NOT NULL UNIQUE
);

-- ------------------------------------------------------------
-- 2. Providers (organisations that offer scholarships)
-- ------------------------------------------------------------
CREATE TABLE providers (
  provider_id     INT            AUTO_INCREMENT PRIMARY KEY,
  name            VARCHAR(160)   NOT NULL UNIQUE,
  provider_type   ENUM('Government','Private','Foundation','NGO','University','International Body','Other') NOT NULL,
  country_id      INT            NULL,
  state_id        INT            NULL COMMENT 'only for Indian providers',
  city            VARCHAR(80)    NULL,
  address         VARCHAR(255)   NULL,
  website         VARCHAR(255)   NULL,
  contact_person  VARCHAR(120)   NULL,
  email           VARCHAR(160)   NULL,
  phone           VARCHAR(30)    NULL,
  is_verified     TINYINT(1)     NOT NULL DEFAULT 0,
  created_at      DATETIME       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (country_id) REFERENCES countries(country_id),
  FOREIGN KEY (state_id)   REFERENCES states(state_id)
);

-- ------------------------------------------------------------
-- 3. Scholarships - the unified national + international table
-- ------------------------------------------------------------
CREATE TABLE scholarships (
  scholarship_id      INT            AUTO_INCREMENT PRIMARY KEY,
  slug                VARCHAR(160)   NOT NULL UNIQUE,
  name                VARCHAR(255)   NOT NULL,
  provider_id         INT            NOT NULL,
  scope               ENUM('National','International') NOT NULL,
  category_id         INT            NOT NULL,
  currency_code       CHAR(3)        NOT NULL DEFAULT 'INR',
  amount_original     DECIMAL(14,2)  NULL COMMENT 'in currency_code; NULL = fully funded / varies (see amount_note)',
  amount_inr          DECIMAL(14,2)  NULL COMMENT 'approximate INR value for search/sort',
  amount_note         VARCHAR(255)   NOT NULL COMMENT 'what the award actually covers, in words',
  amount_period       VARCHAR(60)    NOT NULL DEFAULT 'Annual',
  num_awards          INT            NULL,
  deadline            DATE           NULL COMMENT 'NULL = no fixed date this cycle (see deadline_note)',
  deadline_note       VARCHAR(160)   NULL,
  all_fields          TINYINT(1)     NOT NULL DEFAULT 0 COMMENT '1 = open to every field (no rows in scholarship_fields)',
  all_india           TINYINT(1)     NOT NULL DEFAULT 0 COMMENT '1 = open to every Indian state (no rows in scholarship_states)',
  host_any            TINYINT(1)     NOT NULL DEFAULT 0 COMMENT '1 = can study in any country / any EU country (see host_note)',
  host_note           VARCHAR(80)    NULL,
  open_to_all_nationalities TINYINT(1) NOT NULL DEFAULT 0,
  max_income_inr      DECIMAL(14,2)  NULL COMMENT 'NULL = no income limit',
  min_percentage      DECIMAL(5,2)   NULL COMMENT 'NULL = no fixed percentage (see special_eligibility)',
  gender_eligibility  ENUM('All','Female','Male') NOT NULL DEFAULT 'All',
  special_eligibility VARCHAR(255)   NULL,
  required_profile_flag VARCHAR(60) NULL COMMENT 'Disability, or a students.special_category value the applicant must have',
  description         TEXT           NOT NULL,
  application_process TEXT           NOT NULL,
  official_url        VARCHAR(255)   NOT NULL COMMENT 'official page / application portal',
  status              ENUM('Draft','Open','Closed') NOT NULL DEFAULT 'Open',
  last_verified       DATE           NULL COMMENT 'set for hand-verified records',
  data_source         VARCHAR(30)    NOT NULL DEFAULT 'manual' COMMENT 'manual | wikidata | kaggle',
  external_id         VARCHAR(100)   NULL COMMENT 'id in the source API (e.g. Wikidata Q-id)',
  fetched_at          DATETIME       NULL COMMENT 'when the API record was pulled',
  UNIQUE KEY uq_source_ext (data_source, external_id),
  created_at          DATETIME       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at          DATETIME       NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT chk_pct CHECK (min_percentage BETWEEN 0 AND 100),
  CONSTRAINT chk_amt CHECK (amount_original >= 0 AND amount_inr >= 0),
  INDEX idx_scope (scope),
  INDEX idx_deadline (deadline),
  INDEX idx_amount (amount_inr),
  FOREIGN KEY (provider_id)   REFERENCES providers(provider_id) ON DELETE CASCADE,
  FOREIGN KEY (category_id)   REFERENCES categories(category_id),
  FOREIGN KEY (currency_code) REFERENCES currencies(currency_code)
);

-- Many-to-many eligibility tables -----------------------------
CREATE TABLE scholarship_levels (
  scholarship_id INT NOT NULL, level_id INT NOT NULL,
  PRIMARY KEY (scholarship_id, level_id),
  FOREIGN KEY (scholarship_id) REFERENCES scholarships(scholarship_id) ON DELETE CASCADE,
  FOREIGN KEY (level_id)       REFERENCES education_levels(level_id)
);

CREATE TABLE scholarship_fields (
  scholarship_id INT NOT NULL, field_id INT NOT NULL,
  PRIMARY KEY (scholarship_id, field_id),
  FOREIGN KEY (scholarship_id) REFERENCES scholarships(scholarship_id) ON DELETE CASCADE,
  FOREIGN KEY (field_id)       REFERENCES fields_of_study(field_id)
);

-- Where the applicant must be from (Indian state of domicile)
CREATE TABLE scholarship_states (
  scholarship_id INT NOT NULL, state_id INT NOT NULL,
  PRIMARY KEY (scholarship_id, state_id),
  FOREIGN KEY (scholarship_id) REFERENCES scholarships(scholarship_id) ON DELETE CASCADE,
  FOREIGN KEY (state_id)       REFERENCES states(state_id)
);

-- Where the student will study (India for national; abroad for international)
CREATE TABLE scholarship_host_countries (
  scholarship_id INT NOT NULL, country_id INT NOT NULL,
  PRIMARY KEY (scholarship_id, country_id),
  FOREIGN KEY (scholarship_id) REFERENCES scholarships(scholarship_id) ON DELETE CASCADE,
  FOREIGN KEY (country_id)     REFERENCES countries(country_id)
);

-- Which nationalities may apply
CREATE TABLE scholarship_nationalities (
  scholarship_id INT NOT NULL, country_id INT NOT NULL,
  PRIMARY KEY (scholarship_id, country_id),
  FOREIGN KEY (scholarship_id) REFERENCES scholarships(scholarship_id) ON DELETE CASCADE,
  FOREIGN KEY (country_id)     REFERENCES countries(country_id)
);

-- Reserved social categories (no rows = open to all)
CREATE TABLE scholarship_social_categories (
  scholarship_id  INT NOT NULL,
  social_category ENUM('General','OBC','SC','ST','EWS') NOT NULL,
  PRIMARY KEY (scholarship_id, social_category),
  FOREIGN KEY (scholarship_id) REFERENCES scholarships(scholarship_id) ON DELETE CASCADE
);

-- Official statistics pulled from the data.gov.in OGD API (one row per API record)
CREATE TABLE scholarship_statistics (
  stat_id        INT AUTO_INCREMENT PRIMARY KEY,
  resource_id    VARCHAR(80)  NOT NULL,
  resource_title VARCHAR(300) NULL,
  organisation   VARCHAR(300) NULL,
  row_json       JSON         NOT NULL,
  scholarship_id INT          NULL COMMENT 'matched scheme, if the dataset title matches one',
  source_url     VARCHAR(255) NULL,
  fetched_at     DATETIME     NULL,
  INDEX idx_res (resource_id),
  FOREIGN KEY (scholarship_id) REFERENCES scholarships(scholarship_id) ON DELETE SET NULL
);

-- Pages each record was checked against
CREATE TABLE scholarship_sources (
  source_id      INT AUTO_INCREMENT PRIMARY KEY,
  scholarship_id INT NOT NULL,
  source_url     VARCHAR(500) NOT NULL,
  checked_on     DATE NOT NULL,
  FOREIGN KEY (scholarship_id) REFERENCES scholarships(scholarship_id) ON DELETE CASCADE
);

CREATE TABLE scholarship_documents (
  scholarship_id INT NOT NULL, document_id INT NOT NULL, sort_order TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (scholarship_id, document_id),
  FOREIGN KEY (scholarship_id) REFERENCES scholarships(scholarship_id) ON DELETE CASCADE,
  FOREIGN KEY (document_id)    REFERENCES document_types(document_id)
);

-- ------------------------------------------------------------
-- 4. Views
-- ------------------------------------------------------------
-- One row per scholarship, shaped like the objects in js/data.js
CREATE OR REPLACE VIEW v_scholarship_catalog AS
SELECT
  s.scholarship_id                                   AS id,
  s.name,
  p.name                                             AS provider,
  p.provider_type                                    AS type,
  s.scope,
  c.name                                             AS category,
  s.currency_code                                    AS currency,
  s.amount_original,
  s.amount_inr                                       AS amount,
  s.amount_note,
  s.amount_period,
  s.num_awards,
  s.deadline,
  s.deadline_note,
  (SELECT GROUP_CONCAT(l.name ORDER BY l.sort_order SEPARATOR ', ')
     FROM scholarship_levels sl JOIN education_levels l ON l.level_id = sl.level_id
    WHERE sl.scholarship_id = s.scholarship_id)      AS education_levels,
  IF(s.all_fields, 'All Fields',
    (SELECT GROUP_CONCAT(f.name ORDER BY f.name SEPARATOR ', ')
       FROM scholarship_fields sf JOIN fields_of_study f ON f.field_id = sf.field_id
      WHERE sf.scholarship_id = s.scholarship_id))   AS fields,
  IF(s.all_india, 'All India',
    (SELECT GROUP_CONCAT(st.name ORDER BY st.name SEPARATOR ', ')
       FROM scholarship_states ss JOIN states st ON st.state_id = ss.state_id
      WHERE ss.scholarship_id = s.scholarship_id))   AS states,
  IF(s.host_any, s.host_note,
    (SELECT GROUP_CONCAT(co.name ORDER BY co.name SEPARATOR ', ')
       FROM scholarship_host_countries hc JOIN countries co ON co.country_id = hc.country_id
      WHERE hc.scholarship_id = s.scholarship_id))   AS host_countries,
  IF(s.open_to_all_nationalities, 'Any country',
    (SELECT GROUP_CONCAT(co.name ORDER BY co.name SEPARATOR ', ')
       FROM scholarship_nationalities sn JOIN countries co ON co.country_id = sn.country_id
      WHERE sn.scholarship_id = s.scholarship_id))   AS nationalities,
  (SELECT GROUP_CONCAT(sc.social_category SEPARATOR ', ')
     FROM scholarship_social_categories sc
    WHERE sc.scholarship_id = s.scholarship_id)      AS social_categories,
  s.max_income_inr                                   AS max_income,
  s.min_percentage                                   AS minimum_percentage,
  s.gender_eligibility                               AS gender,
  s.special_eligibility,
  s.description,
  (SELECT GROUP_CONCAT(d.name ORDER BY sd.sort_order SEPARATOR ' | ')
     FROM scholarship_documents sd JOIN document_types d ON d.document_id = sd.document_id
    WHERE sd.scholarship_id = s.scholarship_id)      AS documents,
  s.application_process                              AS process,
  s.official_url,
  (SELECT GROUP_CONCAT(src.source_url SEPARATOR ' | ')
     FROM scholarship_sources src
    WHERE src.scholarship_id = s.scholarship_id)     AS sources,
  s.last_verified,
  s.data_source,
  s.fetched_at,
  s.status
FROM scholarships s
JOIN providers  p ON p.provider_id = s.provider_id
JOIN categories c ON c.category_id = s.category_id;

-- Scholarships not yet past their deadline (NULL deadline = rolling / check official page)
CREATE OR REPLACE VIEW v_open_scholarships AS
SELECT *, DATEDIFF(deadline, CURDATE()) AS days_left
FROM v_scholarship_catalog
WHERE status = 'Open' AND (deadline IS NULL OR deadline >= CURDATE());

-- Account tables, the eligibility procedure and account views are in accounts.sql
