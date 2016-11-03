import axios from 'axios';
/*----------  INITIAL STATE  ----------*/
const initialState = [];

/*----------  ACTION TYPES  ----------*/
const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';

/*----------  ACTION CREATORS  ----------*/
export const receiveAllProducts = products => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

/*----------  THUNKS  ----------*/
export const loadAllProducts = () => dispatch => {
   axios.get('/api/products')
   .then( function(res) {
    dispatch(receiveAllProducts(res.data))
   })
   .catch( (err) => console.error(err) );

};


/*----------  REDUCER  ----------*/
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS: return action.products;
    default: return state;
  }
};
