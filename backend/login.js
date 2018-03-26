const route = require('express').Router()
const passport = require('./passportConfig.js').passport


route.get('/loginAccn', function(req, res) {
    
    console.log(req.user)
    res.render('profile.html', {url : 'cr/loginAccn'})

})


route.post('/loginAccn', passport.authenticate('local', {
    failureRedirect : '/cr/loginAccn',
    successRedirect : '/cr/loginAccn'
})
)

exports = module.exports = {
    route
}