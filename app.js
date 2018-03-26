const app = require('./server.js').app
const PORT = require('./port.js').PORT
const mongoose = require('mongoose');
const credentials = require('./temp/credentials.js').mlabLogin;



mongoose.connect(`mongodb://${credentials.username}:${credentials.password}@ds211309.mlab.com:11309/sociungo`)
.then(function() {
    console.log('database connected')
})
.catch(function(err) {
    console.log(err)
})



app.listen(PORT);

