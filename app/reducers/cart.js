import axios from 'axios';

/*----------  INITIAL STATE  ----------*/

/* Data Model
cart: [{product: product, quantity: 1}, {product: product, quantity: 1} ]
*/

export const hardCodedData = [
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

const initialState = []; // N
//hardCodedData;
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
const RECEIVE_CART = "RECEIVE_CART";

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

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart: cart
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product: product
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
      });
      localStorage.cart = JSON.stringify(cart);
      return cart;
    case REMOVE_CART_ITEM:
      var cart = [...state];
      var finalCart = [];
      cart.forEach(item => {
        if (item.product.id !== action.productId) {
          finalCart.push(item);
        }
      });
      localStorage.cart = JSON.stringify(finalCart);
      return finalCart;
    case ADD_TO_CART:
      // N
      // product is attached to action, get its price
      // by default every time a product is added, its quantity is 1
      var cartItem ={ product: action.product, purchase_price: action.product.price, quantity: 1} ;
      var cart = [...state, cartItem];
      localStorage.cart = JSON.stringify(cart);
      return cart;
    case RECEIVE_CART:
      return action.cart;
    default:
      return state;
  }
};

