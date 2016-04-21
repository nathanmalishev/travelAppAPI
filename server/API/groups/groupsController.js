var User = require('./userModel');


exports.get = function(req,res,next){
  console.log(req.body)
  res.send(req.body)
}

exports.delete = function(req,res,next){
  res.json({
    "username":"nathan"
  })
}

exports.put = function(req,res,next){
  res.json({
    "username":"nathan"
  })
}

exports.post = function(req,res,next){
  console.log('a');
  res.json(req.body);
  next();
}