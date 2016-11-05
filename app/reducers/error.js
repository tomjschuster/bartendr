/*----------  INITIAL STATE  ----------*/
const initialState = null;

/*----------  ACTION TYPES  ----------*/
const NEW_ERROR = 'NEW_ERROR';

/*----------  ACTION CREATORS  ----------*/
export const newError = message => ({
  type: NEW_ERROR,
  message
});

/*----------  THUNKS  ----------*/
// export const loadStationStatus = () => dispatch => {

// };


/*----------  REDUCER  ----------*/
export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_ERROR: return action.message;
    default: return state;
  }
};
