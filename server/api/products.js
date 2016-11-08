'use strict'
const Product = require('../../db/models/product')
const Category = require('../../db/models/category')
const Review = require('../../db/models/review')
const db = require('APP/db')
const router = module.exports = require('express').Router()

/*----------  SINGLE PRODUCTS  ----------*/
router.get('/:id', (req, res, next) => {
  Product.findOne({
    where: {
      id: req.params.id
    },
    include: [Category, Review]
  })
    .then(product => res.json(product))
    .catch(next);
})

/*----------  ALL REVIEWS OF SINGLE PRODUCT  ----------*/
// router.get('/:id/reviews', (req, res, next) => {
//   Review.findAll({
//     where: {
//       product_id: req.params.id
//     }
//   })
//     .then(allReviews => res.json(allReviews))
//     .catch(next);
// })

/*----------  ALL PRODUCTS  ----------*/
router.get('/', (req, res, next) => {
  Product.findAll({include: [Category, Review]})
    .then(products => res.json(products))
    .catch(next);
    // if(req.session.counter) {
  //   req.session.counter++;
  // } else {
  //   req.session.counter = 1;
  // }

  // console.log("req.session.counter", req.session.counter)

})

router.put('/:id', (req, res, next) => {
  if(req.user.isAdmin) {

    Product.findOne({
      where: {
        id: req.params.id
      },
      include: [Category, Review]
    })
      .then(product => {
        console.log("product", product);
        console.log("req.body", req.body);
        return product.update(req.body);
      })
      .catch(next);
    } else {
      res.sendStatus(401);
    }

})

router.delete('/:id', (req, res, next) => {
  if(req.user.isAdmin) {

    Product.destroy({
      where: {
        id: req.params.id
      },
      include: [Category, Review]
    })
      .then( res => {

        console.log("res", res)
        res.sendStatus(202);
      })
      .catch(next);
    } else {
      res.sendStatus(401);
    }
})
