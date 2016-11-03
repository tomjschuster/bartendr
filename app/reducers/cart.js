import axios from 'axios';

/*----------  INITIAL STATE  ----------*/

/* Data Model
cart: [{product: product, quantity: 1}, {product: product, quantity: 1} ]
*/

const hardCodedData = [
  { purchase_price: 40,
    quantity: 1,
    product: {id: 1, name: 'Grey Goose Vodka', description: null, abv: 40, size: '750 ml', inventory: 5, photoUrl:'/media/martini-holder.jpg'}
  },
  { purchase_price: 40,
    quantity: 2,
    product: {id: 3, name: 'Tanqueray Gin', description: null, abv: 40, size: '750 ml', inventory: 5, photoUrl:'/media/martini-holder.jpg'}
  },
  { purchase_price: 30,
    quantity: 1,
    product: {id: 4, name: 'Makers Mark', description: null, abv: 40, size: '750 ml', inventory: 5, photoUrl:'/media/martini-holder.jpg'}
  },
  { purchase_price: 20,
    quantity: 5,
    product: {id: 5, name: 'Sprite', description: null, abv: 40, size: '750 ml', inventory: 1, photoUrl:'/media/martini-holder.jpg'}
  }
];

// function findItem(cart, id) {
//   return cart.find(item => item.product && item.product.id === id)
// }

const initialState = hardCodedData;
// [
//   { purchase_price: 0,
//     quantity: 0,
//     product: {}
//   }
// ]

/*----------  ACTION TYPES  ----------*/
const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
const ADD_TO_CART = 'ADD_TO_CART';

/*----------  ACTION CREATORS  ----------*/
export const updateQuantity = (newQuantity, productId) => ({
  type: UPDATE_CART_QUANTITY,
  productId: productId,
  quantity: newQuantity
});

export const removeCartItem = (productId) => ({
  type: REMOVE_CART_ITEM,
  productId: productId
});

export const addToCart = (productId) => ({
  type: ADD_TO_CART,
  productId: productId
});

/*----------  THUNKS  ----------*/
export const loadStationStatus = () => dispatch => {

};


/*----------  REDUCER  ----------*/
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART_QUANTITY:
      var cart = [...state];
      cart.forEach(item => {
        if (item.product.id === action.productId) {
          item.quantity = action.quantity;
        }
      })
      return cart;
    case REMOVE_CART_ITEM:
      var cart = [...state];
      var finalCart = [];
      cart.forEach(item => {
        if (item.product.id !== action.productId) {
          finalCart.push(item);
        }
      })
      return finalCart;
    case ADD_TO_CART:
      var cart = [...state];
      // needs further fetching with single product
      return cart;
    default:
      return state;
  }
};

