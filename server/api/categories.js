'use strict'
const Category = require('../../db/models/category')
const db = require('APP/db')
const router = module.exports = require('express').Router()

/*----------  SINGLE CATEGORIES  ----------*/
router.get('/:id', (req, res, next) => {
 Category.findOne(req.params.id)
  .then(category => res.json(category))
  .catch(next);
})

/*----------  ALL CATEGORIES  ----------*/
router.get('/', (req, res, next) => {
  Category.findAll()
  .then(categories => res.json(categories))
  .catch(next);
})
