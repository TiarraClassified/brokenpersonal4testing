INSERT INTO survey (userid, iq, educationlvl, certifications, skills, maritalstatus, children, fertility, heart, seizures, bloodpressure, medications, mars) 
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
RETURNING *;