var defaultRoute = require('express').Router();


/* send users to angular app */
defaultRoute.get('/', (req,res)=>{
  res.sendFile(__dirname+'/public/index.html');
});


module.exports = defaultRoute;