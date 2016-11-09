import store from './store';
import { loadAllProducts } from './reducers/allProducts';
import { loadAllOrders } from './reducers/orderHistory';
import { loadAllCategories } from './reducers/allCategories';
import { receiveCart, initialState as emptyCart } from './reducers/cart';
import { loadSingleProduct } from './reducers/selectedProduct';
import { loadSingleOrder } from './reducers/selectedOrder';


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
  let auth = store.getState().auth;
  if (auth) {
    const thunk = loadAllOrders(auth.id);
    store.dispatch(thunk);

  }
};

export const onSingleOrderEnter = function(nextRouterState){
  const orderId = nextRouterState.params.orderId;
  const thunk = loadSingleOrder(orderId);
  store.dispatch(thunk);
};
