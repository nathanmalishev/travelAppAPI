var User = require('./userModel');
var signToken = require('../auth/auth').signToken;

exports.getOne = function (req, res, next) {
  var user = req.user;
  User.findOne({_id: user.id})
  .then(function (users) {
      res.json(users);
    }, function (err) {

      next(err);
    });
};

exports.delete = function (req, res, next) {
  var user = req.user;
  User.findOneAndRemove({ _id: user.id })
    .then(function (user) {
      res.json(user);
    }, function (err) {

      next(err);
    });

};

exports.put = function (req, res, next) {
  var user = req.user;
  res.json(req.body)
  User.findOneAndUpdate({ _id: req.user.id} , req.body)
    .then(function(user){
        res.json(user)
    }, function(err){
      next(err);
    })
};

exports.post = function (req, res, next) {
  var newUser = new User(req.body);

  newUser.save(function (err, user) {
    if (err) { return next(err);}

    var token = signToken(user._id);
    res.json({ token: token });
  });
};

exports.notUniqueError = function (err, req, res, next) {
  res.json({
    success: false,
    message: 'User not created. Username already in use',
  });
};