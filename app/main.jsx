'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory, Route, IndexRoute, IndexRedirect } from 'react-router'
import App from "./containers/app"
import Login from './components/Login.jsx'
import Root from './components/Root'

import store from './store'

// BONES UPDATE: ADDED Login.jsx
// render (
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={Root} />
//       <Route path="/login" component={Login} />
//     </Router>
//   </Provider>

render (
  <Provider store={store}>
  <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <Route path="/products" component={Root} />
        <Route path="/products/:productId" component={Root} />
        <Route path="/orderHistory" component={Root} />
        <Route path="/orderHistory/:orderId" component={Root} />
        <Route path="/cart" component={Root} />
        <Route path="/signup" component={Root} />
        <Route path="/login" component={Login} />
        <Route path="/checkout" component={Root} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
