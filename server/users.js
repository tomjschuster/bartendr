'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')

const customUserRoutes = require('express').Router()

// Custom routes go here.

module.exports = customUserRoutes

// Epilogue will automatically create standard RESTful routes
const users = epilogue.resource({
  model: db.model('users'),
  endpoints: ['/users', '/users/:id']
})

const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
users.delete.auth(mustBeLoggedIn)
users.delete.auth(selfOnly)
users.list.auth(forbidden)
users.read.auth(mustBeLoggedIn)


// {"name": "Tommy Dave", "email": "tom@tom.com", "password": "1234", "address": "1600 Pennsylvania Ave NW, Washington, DC 20500", "isAdmin": "false"}
