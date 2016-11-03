'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Category = require('./category');
const Cocktail = require('./cocktail');
const Order = require('./order');
const OrderItem = require('./orderItem');
const Product = require('./product');
const Review = require('./review');

// Associations:
Order.belongsTo(User);
User.hasMany(Order);

Review.belongsTo(User);
Review.belongsTo(Product);
Product.hasMany(Review);

Order.belongsToMany(Product, {through: OrderItem});
Product.belongsToMany(Order, {through: OrderItem});

Category.belongsToMany(Product, {through: 'product_category'});
Product.belongsToMany(Category, {through: 'product_category'});

Cocktail.belongsToMany(Category, {through: 'cocktail_category'});
Category.belongsToMany(Cocktail, {through: 'cocktail_category'});

module.exports = {User, Category, Cocktail, Order, OrderItem, Product, Review}
