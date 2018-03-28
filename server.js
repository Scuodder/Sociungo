const express = require('express');
const path = require('path');
const newAccountRoute = require('./backend/createAccount.js').route ;
const loginRoute = require('./backend/login.js').route;
const session = require('express-session');
const credentials = require('./temp/credentials.js');
const passport = require('./backend/passportConfig.js').passport


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret : credentials.sessionSecret.secret,
    resave : false,
    saveUninitialized : false 
}))

app.use(passport.initialize())
app.use(passport.session())

app.engine('html', require('ejs').renderFile );
app.set('view engine', 'ejs')
app.set('views', __dirname + '/frontend/public')


app.use('/cr', newAccountRoute)
// authentication handler
app.use('/cr', loginRoute)


// loading user's account if user has already logged in  
app.get('/', function(req, res, next) {
    if (req.user !== undefined) {
        res.redirect('/cr/loginAccn')
    } else {
        next()
    }
} )

// requesting login page --------->
app.use('/', express.static(__dirname + '/frontend/public'))


module.exports = {
    app 
}

