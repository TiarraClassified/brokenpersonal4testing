UPDATE survey
SET ("iq", "educationlvl", "certifications", "skills", "maritalstatus", "children", "fertility", "heart", "seizures", "bloodpressure", "medications", "mars") = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
WHERE userid = $13
RETURNING *;
