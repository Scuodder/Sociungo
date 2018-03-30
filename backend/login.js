const route = require('express').Router()
const passport = require('./passportConfig.js').passport
const User = require('../database/userSchema.js')

// private page

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


route.post('/fetchUser', function(req, res) {
    res.send(req.user.firstName)
})

// responsing with status when page loads
route.post('/loadStatus', function(req, res) {
    User.findOne({
        emailAddress : req.user.emailAddress
    }).then(function(doc) {
        res.send(doc.status)
        return;
    }).catch(function(err) {
        console.log(err)
    })
})

// status update
route.post('/changeStatus', function (req, res) {
    User.findOne({
        emailAddress : req.user.emailAddress
    }).then(function(doc) {
        doc.status = req.body.status
        doc.save((err) => {
            if (err) throw err;
            res.send(req.body.status)
        })
        return ;
    }).catch(function(err) {
        console.log(err)
    })

})



exports = module.exports = {
    route
}

