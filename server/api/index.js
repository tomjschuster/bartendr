'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()
const productsRouter = require('./products')
const ordersRouter = require('./orders')
const categoriesRouter = require('./categories')

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('../auth'))
  .use('/users', require('../users'))

// API Endpoint Routes
api.use('/products', productsRouter);
api.use('/orders', ordersRouter);
api.use('/categories', categoriesRouter);

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
