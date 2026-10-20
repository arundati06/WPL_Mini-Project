-- ScholarConnect - handy queries against the real scholarship database
USE scholarconnect;

-- 1. Full catalogue with official links
SELECT id, name, provider, scope, category, amount_note, deadline, deadline_note, official_url
FROM v_scholarship_catalog ORDER BY scope, name;

-- 2. National vs international summary
SELECT scope, COUNT(*) AS scholarships,
       SUM(amount_inr IS NULL) AS fully_funded_or_varies,
       SUM(deadline IS NOT NULL) AS with_fixed_deadline
FROM scholarships GROUP BY scope;

-- 3. Study-abroad options by destination
SELECT COALESCE(co.name, s.host_note) AS destination, COUNT(*) AS scholarships
FROM scholarships s
LEFT JOIN scholarship_host_countries hc ON hc.scholarship_id = s.scholarship_id
LEFT JOIN countries co ON co.country_id = hc.country_id
WHERE s.scope = 'International'
GROUP BY destination ORDER BY scholarships DESC;

-- 4. Fixed deadlines in the next 45 days
SELECT id, name, deadline, days_left, official_url FROM v_open_scholarships
WHERE deadline IS NOT NULL AND days_left <= 45 ORDER BY days_left;

-- 5. Scholarships reserved for SC students
SELECT s.name, s.scope, s.amount_note
FROM scholarships s JOIN scholarship_social_categories sc ON sc.scholarship_id = s.scholarship_id
WHERE sc.social_category = 'SC';

-- 6. Open to a Maharashtra undergraduate in Computer Science
SELECT DISTINCT s.scholarship_id, s.name, s.scope, s.amount_inr
FROM scholarships s
JOIN scholarship_levels sl       ON sl.scholarship_id = s.scholarship_id
JOIN education_levels l          ON l.level_id = sl.level_id AND l.name = 'Undergraduate'
LEFT JOIN scholarship_states ss  ON ss.scholarship_id = s.scholarship_id
LEFT JOIN states st              ON st.state_id = ss.state_id
LEFT JOIN scholarship_fields sf  ON sf.scholarship_id = s.scholarship_id
LEFT JOIN fields_of_study f      ON f.field_id = sf.field_id
WHERE (s.all_india = 1 OR st.name = 'Maharashtra')
  AND (s.all_fields = 1 OR f.name = 'Computer Science')
ORDER BY s.amount_inr DESC;

-- 7. Where each record was checked
SELECT s.name, src.source_url, src.checked_on
FROM scholarship_sources src JOIN scholarships s ON s.scholarship_id = src.scholarship_id;

-- 8. Registered accounts (grows as people sign up on the website)
SELECT user_id, full_name, email, role, created_at, last_login_at, login_count, has_profile, saved_count
FROM v_registered_users ORDER BY created_at DESC;

-- 9. Sign-ups per day
SELECT DATE(created_at) AS day, role, COUNT(*) AS signups FROM users GROUP BY day, role ORDER BY day DESC;

-- 10. Institution submissions waiting for review
SELECT s.submission_id, i.name AS institution, s.name, s.amount_inr, s.deadline, s.status
FROM scholarship_submissions s JOIN institutions i ON i.institution_id = s.institution_id
WHERE s.status = 'Pending';

-- 11. Most-saved scholarships
SELECT sc.name, COUNT(*) AS saves FROM saved_scholarships ss
JOIN scholarships sc ON sc.scholarship_id = ss.scholarship_id GROUP BY sc.name ORDER BY saves DESC LIMIT 10;

-- 12. Personalised matches for a student with a saved profile
-- CALL sp_match_scholarships(<user_id>);
