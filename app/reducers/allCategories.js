import axios from 'axios';
/*----------  INITIAL STATE  ----------*/
const initialState = [];

/*----------  ACTION TYPES  ----------*/
const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

/*----------  ACTION CREATORS  ----------*/
export const receiveAllCategories = categories => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
});

/*----------  THUNKS  ----------*/
export const loadAllCategories = () => dispatch => {
   axios.get('/api/categories')
   .then(res => dispatch(receiveAllCategories(res.data)))
   .catch( (err) => console.error(err));

};


/*----------  REDUCER  ----------*/
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES: return action.categories;
    default: return state;
  }
};
