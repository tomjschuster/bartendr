'use strict';

const epilogue = require('./epilogue');
const db = require('APP/db');

const customUserRoutes = require('express').Router();

// Custom routes go here.

module.exports = customUserRoutes;

// Epilogue will automatically create standard RESTful routes
const users = epilogue.resource({
  model: db.model('users'),
  endpoints: ['/users', '/users/:id']
});

/* epilogue info: https://www.npmjs.com/package/epilogue

CONTROLLER          ACTION              DESCRIPTION

userResource.create POST    /users      Create a user
userResource.list   GET     /users      Get a listing of users
userResource.read   GET     /users/:id  Get details about a user
userResource.update PUT     /users/:id  Update a user
userResource.delete DELETE  /users/:id  Delete a user
*/


const {mustBeLoggedIn, selfOnlyOrAdmin, adminOnly, forbidden} = epilogue.filters;
users.delete.auth(mustBeLoggedIn);
users.delete.auth(adminOnly);
users.list.auth(adminOnly);
users.read.auth(selfOnlyOrAdmin);
users.update.auth(adminOnly);
// users.delete.auth(selfOnly)
// users.read.auth(mustBeLoggedIn);


// {"name": "Tommy Dave", "email": "tom@tom.com", "password": "1234", "address": "1600 Pennsylvania Ave NW, Washington, DC 20500", "isAdmin": "false"}
