var addUser = require('./add').add;
var removeUser = require('./remove').remove;
var updateUser = require('./update').update;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var queryType = require('../../queries/user').queryType;
var GraphQLSchema = require('graphql').GraphQLSchema;

exports.userSchema = new GraphQLSchema({
  query: queryType,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      addUser,
      removeUser,
      updateUser
    }
  })
})
