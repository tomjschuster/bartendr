import axios from 'axios';
import { clearCart } from './cart';
import {newError} from "./error";

/*----------  INITIAL STATE  ----------*/
const initialState =
{

};

// we need a cart and a user
/*----------  ACTION TYPES  ----------*/
const CREATE_ORDER = 'CREATE_ORDER';

/*----------  ACTION CREATORS  ----------*/
export const receiveStationStatus = (cart, user) => ({
  type: CREATE_ORDER,
  cart,
  user
});

/*----------  THUNKS  ----------*/

export const unauthCreateOrderItems = (orderItem) =>
  dispatch => {
    return axios.post(`/api/orders/${orderItem.order_id}`, orderItem)
      .then(response => {
        console.log("response", response);
        if(response.status === 201) {
          console.log("Yeah!!");
        } else
        {
          dispatch(newError(response));
          // dispatch(setError(response.data));
        }
      })
      .catch(error =>
        {
          dispatch(newError(error));
          // console.log(error.message);
         });
}
export const unauthCreateOrder = (order,cart) =>
  dispatch =>
    axios.post("/api/orders", order)
      .then(response => {
        console.log("response", response);
        if(response.status === 201) {
          console.log("responsedata", response.data)
          cart.forEach( (cartItem) => {

              var passObj = {
                purchase_price: cartItem.purchase_price,
                quantity: cartItem.quantity,
                product_id: cartItem.product.id,
                order_id: response.data.id
              };
             dispatch(unauthCreateOrderItems(passObj))
          })
        } else
        {
          dispatch(newError(response));
          // dispatch(setError(response.data));
        }
      })
      .then( () => {
        dispatch(clearCart());
      })
      .catch(error =>
        {
          dispatch(newError(error));
          // console.log(error.message);
         });

// this is the guy who goes to comcponents to call
export const unauthStart = (user, cart) =>
  dispatch => {
     return axios.post("/api/users", user)
      .then(response => {
        console.log("response", response);
        if(response.status === 201) {
          //response.data.id --> newly created userid
          let passObj = {
            ship_name: response.data.name,
            ship_address: response.data.address,
            user_id: response.data.id
          }
          dispatch(unauthCreateOrder(passObj, cart));
        } else
        {
          dispatch(newError(response));
          // dispatch(setError(response.data));
        }
      })
      .catch(error =>
        {
          dispatch(newError(error));
          // console.log(error.message);
         });
  }

export const authStart = (user, userId, cart) =>
  dispatch => {
    let passObj = {
      ship_name: user.name,
      ship_address: user.address,
      user_id: userId
    }
    dispatch(unauthCreateOrder(passObj, cart))
  }


/*----------  REDUCER  ----------*/
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER: return action.stations;
    default: return state;
  }
};
