const epilogue = require('epilogue')
const api = require('./api')
const db = require('APP/db')

// Epilogue can make routes for us
epilogue.initialize({app: api, sequelize: db})

const mustBeLoggedIn = (req, res, context) => {
  if (!req.user) {
    console.log("req.user", req.user);
    res.status(401).send('You must be logged in')
    return context.stop;
  }

  return context.continue;
}

const selfOnlyOrAdmin = (req, res, context) => {
  if (req.params.id !== req.user.id || req.user.isAdmin !== true) {
    res.status(403).send(`You can only ${action} yourself (unless you are God or an admin).`)
    return context.stop;
  }
  return context.continue;
}

const adminOnly = (req, res, context) => {
  if (req.user.isAdmin !== true) {
    console.log("req.user", req.user)
    res.status(403).send(`Sorry, only God or admins can do that ${action}.  And you ain't neither, bro.`);
    return context.stop;
  }
  return context.continue;
}





const forbidden = message => (req, res, context) => {
  res.status(403).send(message)
  return context.stop
}

epilogue.filters = {mustBeLoggedIn, selfOnlyOrAdmin, adminOnly, forbidden}
module.exports = epilogue
