var taskSchema = require('./task/index').taskSchema;
var userSchema = require('./user/index').userSchema;
const mergeSchemas = require('graphql-tools').mergeSchemas;

const schemas = [
    taskSchema,
    userSchema,
];

exports.allSchemas = mergeSchemas({schemas: schemas});