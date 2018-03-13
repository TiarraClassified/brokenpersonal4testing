UPDATE admin
SET "username" = $1
WHERE adminid = $2
RETURNING *;