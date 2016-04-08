var travelRoute = require('express').Router();


/* send users details from an api */
travelRoute.get('/', (req,res)=>{
  res.send("Welcome to the travel route");
});


module.exports = travelRoute;