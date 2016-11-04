'use strict'
const Product = require('../../db/models/product')
const Category = require('../../db/models/category')
const db = require('APP/db')
const router = module.exports = require('express').Router()

/*----------  SINGLE PRODUCTS  ----------*/
router.get('/:id', (req, res, next) => {
  console.log(req.params.id);
 Product.findOne(req.params.id).
  then(function(product) {
    res.json(product);
  })
  .catch(next);
})

/*----------  ALL PRODUCTS  ----------*/
router.get('/', (req, res, next) => {
  Product.findAll({include: [Category]}).
  then(function(products) {
    res.json(products);
  })
  .catch(next);
})
