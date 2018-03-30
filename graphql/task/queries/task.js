
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var TaskModel = require('../../../models/task');
var taskType = require('../types/task').taskType;

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      tasks: {
        type: new GraphQLList(taskType),
        resolve: function () {
          const tasks = TaskModel.find().exec()
          if (!tasks) {
            throw new Error('Error')
          }
          return tasks
        }
      }
    }
  }
});

