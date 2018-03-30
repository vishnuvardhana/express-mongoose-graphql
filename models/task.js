var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
});
var Model = mongoose.model('Task', taskSchema);
module.exports = Model;
