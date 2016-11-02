'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('review', {
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1, max: 5
    }
  },

  content: {
    type: Sequelize.TEXT,
    validate: {
      len: [0, 500]
    }
  }

}, {
  // nake a hook to set the date.

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

module.exports = Review;
