import { combineReducers } from 'redux'
import allProducts from "./allProducts";
import allUsers from "./allUsers";
import cart from "./cart";
import currentUser from "./currentUser";
import orderHistory from "./orderHistory";
import selectedOrder from "./selectedOrder";
import selectedProduct from "./selectedProduct";
import selectedUser from "./selectedUser";

export default combineReducers({
  allProducts,
  allUsers,
  cart,
  currentUser,
  orderHistory,
  selectedOrder,
  selectedProduct,
  selectedUser
});
