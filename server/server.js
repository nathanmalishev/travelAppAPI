var express     = require('express');
var app         = express();
var config      = require('./config/config');
require('mongoose').connect(config.db.url);


/* The server will serve all/any files in 'public' */
app.use(express.static('public'));




module.exports = app;