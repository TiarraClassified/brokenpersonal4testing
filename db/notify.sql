UPDATE users
SET notified = true
WHERE userid = $1;

SELECT email from users
WHERE userid = $1;


