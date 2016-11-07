import axios from 'axios';
import { convertProduct } from '../converters';

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
    let products = res.data.map(product => convertProduct(product));
    dispatch(receiveAllProducts(products));
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
