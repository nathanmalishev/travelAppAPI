var express      = require('express');
var app          = express();
var config       = require('./config/config');
var defaultRoute = require('./api/defaultRoute');
var travelRoute  = require('./api/travelRoute');
require('mongoose').connect(config.db.url);


/* The server will serve all/any files in 'public' */
app.use(express.static('public'));


app.use('/', defaultRoute);
app.use('/travel', travelRoute);



module.exports = app;