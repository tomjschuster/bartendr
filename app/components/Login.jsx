import React from 'react'
import { Link } from 'react-router';

export const Login = ({ login, auth }) => {return auth ?
  (
    <div className="row">
        <div className="col s3">
        </div>
        <div className="col s6">
          <table className="table">
              <tr>
                <td><Link to="/products"><button style={{width: '100%', maxWidth: '250px'}} className="btn">Keep Shopping</button></Link></td>
                <td><Link to="/cart"><button style={{width: '100%', maxWidth: '250px'}} className="btn">Go to Cart</button></Link></td>
              </tr>
          </table>
        </div>
        <div className="col s3">
        </div>
      </div>
  ) : (
    <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
    } }>
      <input name="username" placeholder="Email"/>
      <input name="password" placeholder="Password" type="password" />
      <input type="submit" value="Login" />
    </form>)
}

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({auth}) => ({auth}),
  dispatch => ({
    login(username, password) {
      return dispatch(login(username, password))
    }
  })
)(Login)
