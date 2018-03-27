const route = require('express').Router()
const passport = require('./passportConfig.js').passport


route.get('/loginAccn', function(req, res) {
    
    if(req.user) {
         res.render('profile.html')
    } else {
        res.redirect('/')    
    }
     

})


route.post('/loginAccn', passport.authenticate('local', {
    failureRedirect : '/',
    successRedirect : '/cr/loginAccn'
})
)

exports = module.exports = {
    route
}

