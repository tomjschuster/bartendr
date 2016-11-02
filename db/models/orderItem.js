'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const OrderItem = db.define('order_item', {
  purchase_price: {
    type: Sequelize.DECIMAL(10, 2)
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  }
}, {
  // indexes: [{fields: ['email'], unique: true,}],
  // hooks: {
  //   beforeCreate: setEmailAndPassword,
  //   beforeUpdate: setEmailAndPassword,
  // },
  // instanceMethods: {
  //   authenticate(plaintext) {
  //     return new Promise((resolve, reject) =>
  //       bcrypt.compare(plaintext, this.password_digest,
  //         (err, result) =>
  //           err ? reject(err) : resolve(result))
  //       )
  //   }
  //}
});

module.exports = OrderItem;
