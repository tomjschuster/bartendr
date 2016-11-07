import axios from 'axios';
import { convertProduct } from '../converters';

/*----------  INITIAL STATE  ----------*/
const initialState = {};

/*----------  ACTION TYPES  ----------*/
const RECEIVE_SINGLE_PRODUCT = 'RECEIVE_SINGLE_PRODUCT';
// const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';


/*----------  ACTION CREATORS  ----------*/

export const receiveSingleProduct = selectedProduct => ({
  type: RECEIVE_SINGLE_PRODUCT,
  selectedProduct
});

// export const setSelectedProduct = productId => ({
//   type: SET_SELECTED_PRODUCT,
//   productId
// });


/*----------  THUNKS  ----------*/
export const loadSingleProduct = (id) => dispatch => {
  axios.get(`/api/products/${id}`)
   .then( function(res) {
    dispatch(receiveSingleProduct(convertProduct(res.data)));
   })
   .catch( (err) => console.error(err) );

};


/*----------  REDUCER  ----------*/
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_PRODUCT: {
      let newState = action.selectedProduct;
      return newState;
    }
    default: return state;
  }
};
