const User = require('./userSchema.js');


module.exports = {
    createAccount : function (data, callback) {
        const newUser = new User ({
            firstName : data.firstName,
            lastName : data.lastName,
            emailAddress : data.emailAddress,
            birthday : data.birthday,
            password : data.password
           })

        newUser.save(function (err) {
            if (err) throw err ;
            callback();
        })   
    },

    existingUser : async function (data, callback) {
        
        
       const found = await User.findOne({
           emailAddress: data.emailAddress
        })
      
      callback(found)
       

    } 
}
