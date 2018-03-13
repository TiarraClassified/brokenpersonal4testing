UPDATE users
SET "email" = $1
WHERE userid = $2
RETURNING *;