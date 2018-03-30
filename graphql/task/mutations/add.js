
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var taskType = require('../types/task');
var TaskModel = require('../../../models/task');

exports.add = {
  type: taskType.taskType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    const tModel = new TaskModel(params);
    const newTask = tModel.save();
    if (!newTask) {
      throw new Error('Error');
    }
    return newTask
  }
}