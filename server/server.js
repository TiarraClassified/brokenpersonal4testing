require('dotenv').config();

const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , port = process.env.SERVERPORT
    , app = express()
    , controller = require('./controllers/controller.js')
    , passport = require('passport')
    , Auth0strat = require('passport-auth0')
    , path = require('path')

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SECRET, 
    resave: false, 
    saveUninitialized: true
}))
// app.use( express.static( `${__dirname}/../build` ) );

app.use(passport.initialize());
app.use(passport.session());

//passport and auth:

passport.use(new Auth0strat({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: process.env.CALLBACKURL,
    scope: "openid profile"
}, function(accessToken, refreshToken, extraParams, profile, done ){
        const db = app.get("db");
        let authid = profile.user_id;
        let {displayName, email} = profile
        // console.log('profile', profile);

        db.getAdmin([authid]).then(users=>{
            console.log("hitting admin");
            if (users[0]!==undefined){
                return done(null, users[0])
            }
            else {
                db.getUsers([authid]).then(users=>{
                    if (!users[0]){ 
                        db.register([displayName, email, authid]).then(user=>{
                            // console.log(user);
                            return done(null, user[0]);
                        })
                    }
                    else {
                        // console.log('user',users)
                       return done(null, users[0])
                    }
                    })
                }
            })
        }))


passport.serializeUser((user, done)=>{
    // console.log('serilize', user.userid);
    if (user.usertype==='admin')
        {return done(null, user.adminid)}
    return done(null, user.userid)
})

passport.deserializeUser((user, done)=>{
    // console.log('deserialize', user);
    if (user.usertype==='admin')
        {return done(null, user.adminid)}   
    return done(null, user); 
})

//endpoints

app.get('/api/login', passport.authenticate('auth0', {
        successRedirect: '/profile',
        failureRedirect: '/mars'
    }));

app.post('/api/email', controller.email);
app.post('/api/survey', controller.submitSurvey);
app.post('/api/notify:userid', controller.notify);
app.get('/api/user', controller.getUser);
app.get('/api/surveyresults', controller.getSurvey);
app.get('/api/getsurveys', controller.getSurveys);
app.get('/api/getAdminInterview', controller.getAdminInterview);
app.put('/api/updateSurvey', controller.updateSurvey);
app.put('/api/username', controller.updateUsername);
app.put('/api/email', controller.updateEmail);
app.get('/api/logout', controller.logout);
app.delete('/api/delete', controller.delete);
// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });


//listen
massive(process.env.CONNECTION).then(db => {
    app.set('db', db);
    app.listen(port, () => console.log(`Big Brother is listening on port ${port}`));
})
