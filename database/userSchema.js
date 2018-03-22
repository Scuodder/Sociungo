const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : String,
    lastName : String,
    emailAddress : {
        type : String,
        required : true,
        unique : true,
    },
    birthday : String,
    password : String,
    secretToken : String,
    active : Boolean,


});


const User = mongoose.model('user', userSchema);

exports = module.exports = User