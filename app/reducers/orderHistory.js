import axios from 'axios';

/*----------  INITIAL STATE  ----------*/
const initialState = [];

/*----------  ACTION TYPES  ----------*/
const RECEIVE_ALL_ORDERS = 'RECEIVE_ALL_ORDERS';

/*----------  ACTION CREATORS  ----------*/
export const receiveAllOrders = orders => ({
  type: RECEIVE_ALL_ORDERS,
  orders
});

/*----------  THUNKS  ----------*/
export const loadAllOrders = (userId) => dispatch => {
   axios.get(`/api/orders/${userId}`)
   .then( function(res) {
    console.log("++++++++++++++++++");
    console.log(res.data);
    dispatch(receiveAllOrders(res.data));
   })
   .catch( (err) => console.error(err) );

};


/*----------  REDUCER  ----------*/
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_ORDERS: return action.orders;
    default: return state;
  }
};
