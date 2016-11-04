import { combineReducers } from 'redux'
import allProducts from "./allProducts";
import allCategories from "./allCategories";
import allUsers from "./allUsers";
import cart from "./cart";
import currentUser from "./currentUser";
import orderHistory from "./orderHistory";
import selectedOrder from "./selectedOrder";
import selectedProduct from "./selectedProduct";
import selectedUser from "./selectedUser";
import auth from "./auth.jsx";

export default combineReducers({
  allProducts,
  allCategories,
  allUsers,
  cart,
  currentUser,
  orderHistory,
  selectedOrder,
  selectedProduct,
  selectedUser,
  auth
});

// BONES UPDATE: INCLUDED auth.jsx reducer
// const rootReducer = combineReducers({
//   auth: require('./auth').default,
// })

// export default rootReducer
