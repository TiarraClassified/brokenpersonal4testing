INSERT INTO users (username, email, authid, usertype)
VALUES ($1, $2, $3, 'basic')
RETURNING *;