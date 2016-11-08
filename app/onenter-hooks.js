import store from './store';
import { loadAllProducts } from './reducers/allProducts';
import { loadAllOrders } from './reducers/orderHistory';
import { loadAllCategories } from './reducers/allCategories';
import { receiveCart, initialState as emptyCart } from './reducers/cart';
import { loadSingleProduct } from './reducers/selectedProduct';


export const onAppEnter = () => {
  store.dispatch(loadAllProducts());
  store.dispatch(loadAllCategories());
  const cart = localStorage.cart && JSON.parse(localStorage.cart);
  if (cart) {
    store.dispatch(receiveCart(cart));
  } else {
    localStorage.cart = JSON.stringify(emptyCart);
  }
};

export const onSingleProductEnter = function(nextRouterState){
  const productId = nextRouterState.params.productId;
  const thunk = loadSingleProduct(productId);
  store.dispatch(thunk);
};


export const onOrdersEnter = function(nextRouterState){
 // const productId = nextRouterState.params.productId;
  const thunk = loadAllOrders(2);
  store.dispatch(thunk);
};
