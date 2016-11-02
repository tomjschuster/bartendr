'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory, Route, IndexRoute, IndexRedirect } from 'react-router'
import App from "./containers/app"

import store from './store'
// import Root from './components/Root'

render (
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/products" component={} />
      <Route path="/products/:productId" component={} />
      <Route path="/orderHistory" component={} />
      <Route path="/orderHistory/:orderId" component={} />
      <Route path="/cart" component={} />
      <Route path="/signup" component={} />
      <Route path="/login" component={} />
      <Route path="/checkout" component={} />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('main')
)
