var User = require('./userModel');


exports.get = function(req,res,next){
  console.log(req.body)
  res.send({
    "name":"nathan",
    "email":"nathan.malishev@gmail.com"
  })
}

exports.delete = function(req,res,next){
  res.json(req.body);
}

exports.put = function(req,res,next){
  res.json(req.body);
}

exports.post = function(req,res,next){
  res.json(req.body);
}