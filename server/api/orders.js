'use strict'

const db = require('APP/db')
const Order = require('../../db/models/order')
const Product = require('../../db/models/product')
const OrderItem = require('../../db/models/orderItem')
const router = module.exports = require('express').Router()


/*----------  ALL ORDERS  ----------*/
router.get('/byuser/:userId', (req, res, next) => {
  Order.findAll({
      where: {user_id: +req.params.userId},
      include: [
       {model: OrderItem, include: [Product]}
      ]
      })
    .then(orders => {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!", orders);
      res.json(orders);
    })
    .catch(next);
})

router.get('/:orderId', (req, res, next) => {
  Order.findOne({
      where: {id: +req.params.orderId},
      include: [
       {model: OrderItem, include: [Product]}
      ]
      })
    .then(orders => {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!", orders);
      res.json(orders);
    })
    .catch(next);
})

router.post('/', (req, res, next) => {
  Order.create(req.body)
  .then( order => {
    console.log("Are you correct?", order)
    res.status(201).json(order)
  })
  .catch(next);
})


router.post('/:id', (req, res, next) => {
  OrderItem.create(req.body)
  .then( orderIt => res.status(201).json(orderIt))
  .catch(next);
})

// make a post to /orders
// make post to /orders/id
/*----------  SINGLE ORDERS  ----------*/
