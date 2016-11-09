import axios from 'axios';
import { convertProduct } from '../converters';

/*----------  INITIAL STATE  ----------*/
const initialState = null;

/*----------  ACTION TYPES  ----------*/
const RECEIVE_SINGLE_ORDER = 'RECEIVE_SINGLE_ORDER';
// const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';


/*----------  ACTION CREATORS  ----------*/

export const receiveSingleOrder = selectedOrder => ({
  type: RECEIVE_SINGLE_ORDER,
  selectedOrder
});

// export const setSelectedOrder = productId => ({
//   type: SET_SELECTED_PRODUCT,
//   productId
// });


/*----------  THUNKS  ----------*/
export const loadSingleOrder = (id) => dispatch => {
  axios.get(`/api/orders/${id}`)
   .then( function(res) {
    dispatch(receiveSingleOrder(res.data));
   })
   .catch( (err) => console.error(err) );

};


/*----------  REDUCER  ----------*/
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_ORDER:
      return action.selectedOrder;
    default: return state;
  }
};
