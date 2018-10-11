const express = require('express')
const app = express();
var ejs = require('ejs')
var path = require('path')
var mongoose = require('mongoose')
const bodyParser = require('body-parser');
var config = require('./config.js')
var options = { useNewUrlParser: true }
var constring = config.db.protocol+"://"+config.db.username+":"+config.db.password+"@"+config.db.host+":"+config.db.port+"/"+config.db.database;
console.log(constring)
 mongoose.connect(constring,options)
 mongoose.connection.on('connected', () => {    
    console.log('mongoose connection open to' ); 
 });
 
 mongoose.connection.on('error', (err) => {    
   console.log(`mongoose connection err: `, err); 
 });
app.set('view engine','ejs')
app.use( express.static( "public" ) );
app.use(bodyParser.urlencoded({ extended: false }));

const db = require('./dbconfig.js')
require('./routes.js')(app,db);
app.listen(process.env.PORT || 2018, function () {
    console.log('server is started')
    
})


