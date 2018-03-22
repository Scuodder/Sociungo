const route = require('express').Router()



route.get('/loginAccn', function(req, res) {
    
    res.render('profile.html')
})


exports = module.exports = {
    route
}