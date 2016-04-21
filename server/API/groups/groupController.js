var Group = require('./groupModel');

exports.get = function (req, res, next) {
  Group.find()
    .populate('users destinations.hotels.users destinations.flights.users', 'username')
    .exec()
    .then(function (groups) {
      res.json(groups);
    }, function (err) {

      next(err);
    });
};

exports.delete = function (req, res, next) {
  res.json({
    username: 'nathan',
  });
};

exports.put = function (req, res, next) {
  res.json({
    username: 'nathan',
  });
};

exports.post = function (req, res, next) {
  var newGroup = new Group(req.body);
  newGroup.save(function (err, group) {
      if (err) {next(err);}

      res.json({ group: group });
    });
};
