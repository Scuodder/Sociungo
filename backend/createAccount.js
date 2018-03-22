const { check,validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const route = require('express').Router()
const {createAccount, existingUser } = require('../database/usersCollection')
const nodemailer = require('nodemailer');
const credentials = require('../temp/credentials.js').nodemailerLogin;
const randomstring = require('randomstring');
const PORT = require('../port.js').PORT;
const User = require('../database/userSchema.js')


// create account validation + database entry after confirmation link is clicked by the user 
route.post('/createAccn', [
    check('emailAddress').isEmail().withMessage('Invalid email address'),
    check('firstName').not().isEmpty().withMessage('First name field is empty.'),
    check('lastName').not().isEmpty().withMessage('Surname field is empty.'),
    check('birthday').not().isEmpty().withMessage('Enter your birthdate.'),
    check('password').not().isEmpty().withMessage('Enter password.').isLength({
        min: 8
    }).withMessage('Passwords must be at least 8 characters long.'),
    check('confirmPassword').not().isEmpty().withMessage('Confirm password field is empty').custom(function(value, {req}) {
        return ( value === req.body.password )
    } ).withMessage('Your password and confirmation password do not match.')
    
],function(req, res) {
const errors = validationResult(req);

if (!errors.isEmpty()) {
    return res.json({ errors: errors.mapped(), status : '1' });
}

// validation for already existing email address

existingUser(req.body, function(found) {
    console.log(found)
    if(!found) {

// calculating random string and active state of the user is false,
randString = randomstring.generate()
req.body.secretToken = randString ;
req.body.active = false ;


const document = `
<h3>Sociungo - Email confirmation</h3>
<p>Your email was provided for registration on Sociungo.</p>
<h2> Your Details </h2>
<ul>
    <li> Name : ${req.body.firstName} ${req.body.lastName} </li>
    <li> Email-address : ${req.body.emailAddress} </li>
    <li> Password : ${req.body.password} </li>
</ul>
<br/>
To confirm your email please follow the link : <a href="http://localhost:${PORT}/cr/signInAuth/${randString}">http://localhost:${PORT}/cr/signInAuth/${randString}</a>
`

let transporter = nodemailer.createTransport({

service: 'gmail',
auth : {
    user :  credentials.username, 
    pass :  credentials.password 
},
tls : {
    rejectUnauthorized: false
}
})

transporter.sendMail(
{
    from : credentials.username,
    to : req.body.emailAddress ,
    subject : 'Sociungo Account Confirmation',
    html : document 
},
function(err, info) {
    if (err) return console.log(err);

// if no error takes place

console.log('Message sent: %s', info.messageId);

createAccount(req.body, function (confirmation) {
    
    confirmation = 'good to go';
    console.log(confirmation)
    res.json({status : '2', message : "confirmation email has been sent to your account"  });
});
}
)    
    } else {
        res.json({status: '3',
            error : {
                msg : "User with this email already exists" 
            }
        })
    }
    
})
})

route.get('/signInAuth/:secretToken', function(req, res, next) {
    User.findOne({
        secretToken : req.params.secretToken
    }, function (err, doc) {
        if (err) throw err;
        doc.active = true;
        doc.secretToken = '';
        doc.save(function(err) {
            if (err) throw err;
            res.redirect('/cr/loginAccn');
        }) ; 
        
    })
} )

exports = module.exports = {
    route
}