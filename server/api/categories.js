'use strict'

const db = require('APP/db')
const router = module.exports = require('express').Router()

/*----------  SINGLE CATEGORIES  ----------*/
router.get('/:id', (req, res, next) => {
  next();
})

/*----------  ALL CATEGORIES  ----------*/
router.get('/', (req, res, next) => {
  next();
})
