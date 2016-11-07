/*----------  INITIAL STATE  ----------*/
const initialState = null;

/*----------  ACTION TYPES  ----------*/
const SET_SHIPPING_INFO = 'SET_SHIPPING_INFO';

/*----------  ACTION CREATORS  ----------*/
export const setShippingInfo = info => ({
  type: SET_SHIPPING_INFO,
  info
});

/*----------  THUNKS  ----------*/
export const loadStationStatus = () => dispatch => {

};


/*----------  REDUCER  ----------*/
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SHIPPING_INFO: return action.info;
    default: return state;
  }
};
