const passport = require('passport')
const User = require('../database/userSchema.js')
const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

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
        return done(null, {
            firstName : user.firstName,
            emailAddress : user.emailAddress,
            birthday: user.birthday,
            active: user.active
        });
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
            
         bcrypt.compare(password, user.password, function(err, res) {
            if(err) throw err;
            
            if (!res) {
                return done(null, false, {message : 'Wrong password'})
            }
            if (user.active === false) {
                return done(null, false, {message : 'You need to activate your account.'}); 
            }
            return done(null, user);
        })
        
        
        
    }).catch(function(err) {
        return done(err);
    })
}
))


exports = module.exports = {
    passport
}

