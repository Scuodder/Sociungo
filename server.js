const express = require('express');
const path = require('path');
const route = require('./backend/route.js').route ;




const PORT = process.env.PORT || 2233 ;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))




app.engine('html', require('ejs').renderFile );
app.set('view engine', 'ejs')
app.set('views', __dirname + '/frontend/public')




// requesting login page --------->
app.use('/', express.static(__dirname + '/frontend/public'))

// authentication handler
app.use('/cr', route)









// user login


module.exports = {
    app , PORT
}

