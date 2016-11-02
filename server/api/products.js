'use strict'

const db = require('APP/db')
const router = module.exports = require('express').Router()

/*----------  SINGLE PRODUCTS  ----------*/
router.get('/:id', (req, res, next) => {
  next();
})

/*----------  ALL PRODUCTS  ----------*/
router.get('/', (req, res, next) => {
  next();
})
