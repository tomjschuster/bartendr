'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
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

module.exports = Category;
