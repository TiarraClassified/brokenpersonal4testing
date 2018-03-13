SELECT * FROM interviews
JOIN admin ON admin.adminid = interviews.adminid
WHERE userid = $1;