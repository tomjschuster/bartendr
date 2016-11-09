'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM("created", "processing", "cancelled", "completed"),
    defaultValue: "created"
  },
  ship_date: {
    type: Sequelize.STRING
  },
  ship_name: {
    type: Sequelize.STRING
  },
  ship_address: {
    type: Sequelize.TEXT
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

module.exports = Order;
