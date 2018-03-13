INSERT INTO interviews (adminid, userid, contacted)
VALUES ($1, $2, $3)
RETURNING *;