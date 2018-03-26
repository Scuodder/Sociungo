const passport = require('passport')
const User = require('../database/userSchema.js')
const localStrategy = require('passport-local').Strategy

passport.serializeUser(function (user, done) {


    done(null, user.emailAddress)
})

passport.deserializeUser(function(emailAddress, done) {
 
    User.findOne({
        emailAddress : emailAddress
    }).then(function (user) {
     
        if (!user) {
            return done(new Error('User not found'))
        }
        return done(null, user);
    }).catch(function(err) {
        done(err);  // handle error from database
    })
})

passport.use(new localStrategy({
    usernameField : 'emailAddress',
    },
    function(emailAddress, password, done) {

        User.findOne({
            emailAddress : emailAddress
        }).then(function(user) {
        
            if (!user) {
                return done(null, false, {message : "User not found"});
            } 
            if (user.password !== password) {
                return done(null, false, {message : 'Wrong password'})
            }
            if (user.active === false) {
                return done(null, false, {message : 'You need to activate your account.'}); 
            }
            return done(null, user);

        }).catch(function(err) {
            return done(err);
        })
    }
))


exports = module.exports = {
    passport
}

