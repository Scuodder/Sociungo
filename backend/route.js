const route = require('express').Router()

route.get('/loginAccn', function(req, res) {
    
    res.render('profile.html')
})



module.exports = {
    route
}