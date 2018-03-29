var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    requrired: true,
  },
});
var Model = mongoose.model('User', userSchema);
module.exports = Model;
