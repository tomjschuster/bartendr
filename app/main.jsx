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
import Cart from "./components/cart";
import Signup from "./components/signup";
import ShippingForm from "./components/shippingForm";
import OrderSummary from "./components/orderSummary";
import Review from "./components/review";
import MeetTheTeam from "./components/meetTheTeam";
import AboutUs from "./components/aboutUs";
import Terms from "./components/terms";
import Help from "./components/help";

import store from './store';
import { onAppEnter, onSingleProductEnter } from './onenter-hooks';

// BONES UPDATE: ADDED Login.jsx
// render (
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={Root} />
//       <Route path="/login" component={Login} />
//     </Router>
//   </Provider>

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>
        <Route path="/products" component={Products} />
        <Route path="/products/:productId" component={SingleProduct} onEnter={onSingleProductEnter} />
        <Route path="/orderHistory" component={Root} />
        <Route path="/orderHistory/:orderId" component={Root} />
        <Route path="/cart" component={Cart} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/continue" component={ShippingForm} />
        <Route path="/checkout" component={OrderSummary} />
        <Route path="/review" component={Review} />
        <Route path="/meetTheTeam" component={MeetTheTeam} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/terms" component={Terms} />
        <Route path="/help" component={Help} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
