const express = require('express')
const app = express()
const path = require('path')
const route = require('./backend/route.js').route

const PORT = process.env.PORT || 2233



app.engine('html', require('ejs').renderFile );
app.set('views', __dirname + '/frontend/public')
app.set('view engine', 'ejs')


// requesting login page --------->
app.use('/', express.static(__dirname + '/frontend/public'))



// requesting create account page ---------->
app.use('/cr', route)









// user login


module.exports = {
    app , PORT
}

