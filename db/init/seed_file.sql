CREATE TABLE IF NOT EXISTS users (userid INT SERIAL PRIMARY KEY, username VARCHAR(100), email TEXT DEFAULT '', authid TEXT NOT NULL, usertype TEXT);

--test users

INSERT INTO users (username, email, authid) 
VALUES ('ThunderThighs9000', 'thunderthighs9000@hotmail.com', '0523489wediosadp98', 'basic');

INSERT INTO users (username, email, authid)
VALUES ('Toast', 'slicedbread@gmail.com', 'asdof8734jnfdald', 'basic');

INSERT INTO users (username, email, authid)
VALUES ('ElonMusk', 'billionaire@spacex.org', 'asd;oifu89734ihgasadf9', 'basic');

--survey table

CREATE TABLE IF NOT EXISTS survey (surveyid SERIAL PRIMARY KEY, userid INT , iq INT, educationlvl TEXT, certifications TEXT, skills TEXT, maritalstatus TEXT, children INT, fertility BOOLEAN, heart BOOLEAN, seizures BOOLEAN, bloodpressure BOOLEAN, medications BOOLEAN, mars TEXT, FOREIGN KEY (userid) REFERENCES users(userid));

INSERT INTO survey (userid, iq, educationlvl, certifications, skills, maritalstatus, children, fertility, heart, seizures, bloodpressure, medications, mars)
VALUES (4, 170, 'doctorate', 'Certified billionaire eccentric who probably has anger issues.', 'making money, being useful, using flamethrowers', 'single', 6, true, true, false, true, true, 'Earth is doomed and we need a new dream for the future.')

INSERT INTO survey (userid, iq, educationlvl, certifications, skills, maritalstatus, children, fertility, heart, seizures, bloodpressure, medications, mars)
VALUES (3, 115, 'highschool', 'web dev', 'being covered in butter', 'single', 0, true, false, false, true, false, 'I am always looking for the next adventure.')

INSERT INTO survey (userid, iq, educationlvl, certifications, skills, maritalstatus, children, fertility, heart, seizures, bloodpressure, medications, mars)
VALUES (2, 97, 'highschool', 'massage therapy', 'I am good with my hands and know how to tell jokes.', 'married', 2, true, false, true, false, false, 'I want to be the first massage therapist on Mars.')

--admin table

CREATE TABLE IF NOT EXISTS admin (adminid SERIAL PRIMARY KEY, username VARCHAR(100), email TEXT DEFAULT '', authid TEXT NOT NULL, usertype TEXT);

--interview table

CREATE TABLE IF NOT EXISTS interviews (interviewid SERIAL PRIMARY KEY, adminid INT, userid INT, contacted VARCHAR(180), FOREIGN KEY (adminid) REFERENCES admin(adminid), FOREIGN KEY (userid) REFERENCES users(userid));