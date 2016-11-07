'use strict'

const db = require('APP/db')
const Order = require('../../db/models/order')
const OrderItem = require('../../db/models/orderItem')
const router = module.exports = require('express').Router()


/*----------  ALL ORDERS  ----------*/
router.get('/', (req, res, next) => {
  next();
})

router.post('/', (req, res, next) => {
  Order.create(req.body)
  .then( order => res.json(order))
  .catch(next);
})


router.post('/:id', (req, res, next) => {
  OrderItem.create(req.body)
  .then( orderIt => res.json(orderIt))
  .catch(next);
})
// make a post to /orders
// make post to /orders/id
/*----------  SINGLE ORDERS  ----------*/
router.get('/:id', (req, res, next) => {
  next();
})
