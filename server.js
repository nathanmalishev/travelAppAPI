var express     = require('express');
var MongoClient = require('mongodb').MongoClient;
var app         = express();
var assert      = require('assert');

var PORT = process.env.PORT || 3000;


var db = require('./config/db');



/* Connect to Server */
MongoClient.connect( db.url, function(err, db){
	assert.equal(err,null);
	console.log('db connected');
	/* Server can run normally now db has connected */

	/* send users to angular app */
	app.get('/', (req,res)=>{
		res.send('Test page');
	});


	app.listen(PORT);
	console.log('Server started on PORT: '+PORT);

});