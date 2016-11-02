'use strict'

const db = require('APP/db')
const router = module.exports = require('express').Router()

/*----------  SINGLE ORDERS  ----------*/
router.get('/:id', (req, res, next) => {
  next();
})

/*----------  ALL ORDERS  ----------*/
router.get('/', (req, res, next) => {
  next();
})
