SELECT * FROM survey
JOIN users on users.userid = survey.userid
WHERE survey.userid = $1;