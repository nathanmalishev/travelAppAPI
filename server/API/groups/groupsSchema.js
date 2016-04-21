var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  /*do no store as plain text must hash first */
  password: {
    type: String,
    required: true,
  },
});


//TODO: Add pre save to hash password

//TODO: add authentication methods on UserSchema method


module.exports = mongoose.model('user', UserSchema);