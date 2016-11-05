'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  proof : {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0, max: 200
    }
  },

  size : {
    type: Sequelize.STRING
  },

  description: {
    type: Sequelize.TEXT
  },

  price : {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0
    }
  },

  inventory: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    },
    defaultValue : 0,
    allowNull: false
  },

  photoUrl: {
    type: Sequelize.STRING
  }

}, {

    getterMethods :{
      avgStars: function(){
        let final = this.getReviews()
          .then(reviews => {
            console.log("inside avgStars", reviews)
             let sum = reviews.reduce( (prev, curReview) => {
              return prev + curReview.stars
              }, 0 );
             console.log('sum', Math.floor(sum/reviews.length))
              return Math.floor(sum/reviews.length);
            })
          return final;
      },
      numReviews: function(){
        return this.getReviews().length;
      }
    }
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

module.exports = Product;
