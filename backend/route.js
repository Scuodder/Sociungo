const route = require('express').Router()

route.get('/createAccount', function(req, res) {
    
    res.render('profile.html')
})


module.exports = {
    route
}