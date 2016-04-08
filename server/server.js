var express      = require('express');
var app          = express();
var config       = require('./config/config');
var defaultRoute = require('./api/defaultRoute');
var travelRoute  = require('./api/travelRoute');

var mongoose = require('mongoose').connect(config.db.url);
var db = mongoose.connection;

db
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', function(){
    console.log('db connnected')
  })


/* The server will serve all/any files in 'public' */
app.use(express.static('public'));


app.use('/', defaultRoute);
app.use('/travel', travelRoute);



module.exports = app;