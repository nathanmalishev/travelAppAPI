var express      = require('express');
var app          = express();
var config       = require('./config/config');
var apiRoutes = require('./api/api');

var mongoose = require('mongoose').connect(config.db.url);
var db = mongoose.connection;

db
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', function(){
    console.log('db connnected')
  })


/* The server will serve all/any files in 'public' */
app.use(express.static('public'));


app.use('/api', apiRoutes);


/* Global error handling */
app.use(function(err, req, res, next){
  // if error thrown from jwt validation check
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
    return;
  }

  logger.error(err.stack);
  res.status(500).send('Error caught in API');
})


module.exports = app;