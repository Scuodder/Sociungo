const User = require('./userSchema.js');
const bcrypt = require('bcrypt')
const saltRounds = 10;

module.exports = {

    createAccount : function (data, callback) {
        bcrypt.hash(data.password, saltRounds, function(err, hash) {
            if (err) { throw err }
           
            const newUser = new User ({
            firstName : data.firstName,
            lastName : data.lastName,
            emailAddress : data.emailAddress,
            birthday : data.birthday,
            password : hash,
            secretToken : data.secretToken,
            active : data.active,
           })

        newUser.save(function (err) {
            if (err) throw err ;
            let confirm;
            callback(confirm);
        })  
        })
         
    },

    existingUser : async function (data, callback) {
        
        
       const found = await User.findOne({
           emailAddress: data.emailAddress
        })
      
      callback(found)
       

    }
    
}
