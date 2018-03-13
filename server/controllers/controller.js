const nodemailer = require('nodemailer');
require('dotenv').config();
const user = require('./hide.js');

const transporter =
    nodemailer.createTransport({
    service: 'Gmail',
    auth: {
           user: user.user,
           pass: user.pass
       }
   });

module.exports = {
    email: (req, res, next) => {
        transporter.sendMail(req.body, (error, info) => {
            if (error) {
                return console.log(error);
            }
            transporter.close();
            res.send("Your message has been sent.")
            })
    },

    submitSurvey: (req,res,next) => {
        // console.log('survey', req.body,'sessions', req.session);
        const userid = req.session.passport.user;
        // console.log('userid', userid);
        const {iq, educationlvl, certifications, skills, maritalstatus, children, fertility, heart, seizures, bloodpressure, medications, mars} = req.body;

        const db = req.app.get('db');

        db.surveyPost([userid, iq, educationlvl, certifications, skills, maritalstatus, children, fertility, heart, seizures, bloodpressure, medications, mars]).then(results=>{
            res.status(200).send("successful");
        }).catch(e=>console.log(e))
    },

    getUser: (req,res,next)=>{
        const userid = req.session.passport.user;
        console.log('session body', userid);
        
        req.app.get('db').findUserAdmin([userid]).then(user=>{ //check to see if user is an admin
            console.log("hitting admin");
            if (user[0]!==undefined){
                console.log("hitting if", user[0]);
                res.send(user[0]);
            }
            else { //if not admin, then check to see if user has already taken the survey
                console.log("hitting else statement");

                req.app.get('db').findUserSurvey([userid]).then(user=>{
                    console.log('hitting findusersurvey');
                    if (user[0]!==undefined){ //if user has results in survey DB, send back "currentUser" and name

                        console.log(user[0]);

                        let nuRes = {
                            usertype : "currentUser",
                            username : user[0].username,
                            notified : user[0].notified
                        }
                        res.send(nuRes);
                    }
                    else{// if user has not taken the survey, check the user database to pull their name and email and send back "newUser"
                        req.app.get("db").getUser([userid]).then(user=>{
                            console.log("sending new user")

                            let nuRes = {
                                usertype: "newUser",
                                username: user[0].username,
                                email: user[0].email
                            }
    
                            res.send(nuRes);
                        })
                    }
                }
                )
            }
    
        })
    },

    logout: (req,res,next)=>{
            req.logout();
            res.redirect('https://spacexmars.auth0.com/v2/logout?federated&returnTo=http%3A%2F%2Fchocobocaravan.info%2Fmars')//domain logout
            // res.redirect('https://spacexmars.auth0.com/v2/logout?federated&returnTo=http%3A%2F%2F159.89.139.184%3A3020%2Fmars')//IP logout
            // res.redirect('https://spacexmars.auth0.com/v2/logout?federated&returnTo=http%3A%2F%2Flocalhost%3A3020%2Fmars')
    },

    getSurvey: (req,res,next)=>{
        const userid = req.session.passport.user;

        req.app.get('db').PullSurvey([userid]).then(survey=>{
            res.send(survey);
        })
    },

    updateSurvey: (req,res,next)=>{
        const userid = req.session.passport.user;
        const {iq, educationlvl, certifications, skills, maritalstatus, children, fertility, heart, seizures, bloodpressure, medications, mars} = req.body;

        req.app.get('db').updateSurvey([iq, educationlvl, certifications, skills, maritalstatus, children, fertility, heart, seizures, bloodpressure, medications, mars, userid]).then(results=>{
            res.status(200).send(results);
        }).catch(e=>console.log(e))
    },

    delete: (req,res,next)=>{
        const db = req.app.get("db");
        const userid = req.session.passport.user;
        console.log('hitting delete', userid)

        db.deleteuser([userid]).then(ress=>{//due to foreign key contstraints, I had to delete from each child table one at a time. Need to look up easier way to do this when I have time. 
            console.log('deleted from first table')
            db.deleteuser2([userid]).then(ress=>{
                db.deleteuser3([userid]).then(results=>{
                    res.send("user deleted");
                }).catch(e=>console.log(e))
            }).catch(e=>console.log(e))
        })
    },

    updateUsername: (req,res)=>{
        const username = req.body.username;
        const userType = req.body.userType

        if (userType==='admin'){
            const adminid = req.session.passport.user
            console.log("hitting admin username", adminid)
            req.app.get('db').updateAdminName([username, adminid]).then(results=>{
                res.send(results);
            }).catch(e=>console.log(e))
        }
        else {
            const userid = req.session.passport.user;
            req.app.get('db').updateUsername([username, userid]).then(results=>{
            res.send(results);
        })}
    },

    getSurveys: (req,res)=>{
        req.app.get('db').pullAllSurveys().then(surveys=>{
            res.status(200).send(surveys)
        }).catch(e=>console.log(e))
    },

    notify: (req,res)=>{

        const userid = req.params.userid;
        const adminid = req.session.passport.user;
        console.log(req.session.passport)
        const date = new Date();
        console.log('adminid', adminid, 'date', date);

        req.app.get('db').addInterview([adminid, userid, date]).then(blah=>{
            req.app.get('db').notify([userid]).then(results=>{    
            }).catch(e=>console.log(e))
        })
        req.app.get('db').getUser([userid]).then(results=>{
            res.send(results[0])
        })
    },

    getAdminInterview: (req,res)=>{
        console.log('getting admin data')
        const userid = req.session.passport.user;

        req.app.get('db').joinAdminInterviews([userid]).then(results=>{
            res.send(results);
        }).catch(e=>console.log(e))
    },

    updateEmail: (req,res)=>{
        const userid = req.session.passport.user;
        const email = req.body.email;

        req.app.get('db').updateEmail([email, userid]).then(results=>{
            res.send("updated")
        }).catch(e=>console.log(e))
    }
}