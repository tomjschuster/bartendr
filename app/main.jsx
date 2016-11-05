'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute, IndexRedirect } from 'react-router';
import App from "./components/app";

import Products from "./components/products"
import SingleProduct from "./components/singleProduct"
import Login from './components/Login.jsx'
import Root from './components/Root'
import Home from './components/home'
import SingleOrder from "./components/singleOrder";
import Signup from "./components/signup";

import {loadSingleProduct} from './reducers/selectedProduct';
import {receiveCart, hardCodedData } from "./reducers/cart";


import store from './store';

// BONES UPDATE: ADDED Login.jsx
// render (
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={Root} />
//       <Route path="/login" component={Login} />
//     </Router>
//   </Provider>
const onSingleProductEnter = function(nextRouterState){
  const productId = nextRouterState.params.productId;
  const thunk = loadSingleProduct(productId);
  store.dispatch(thunk);

}

const onAppEnter = function () {
  let cart = localStorage.cart && JSON.parse(localStorage.cart)
  if(cart) {
    store.dispatch(receiveCart(cart));
  } else {
    localStorage.cart = JSON.stringify(hardCodedData);
  }
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>
        <Route path="/products" component={Products} />
        <Route path="/products/:productId" component={SingleProduct} onEnter={onSingleProductEnter} />
        <Route path="/orderHistory" component={Root} />
        <Route path="/orderHistory/:orderId" component={Root} />
        <Route path="/cart" component={SingleOrder} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/checkout" component={Root} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
