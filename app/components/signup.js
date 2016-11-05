import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {createNewUser} from "../reducers/auth.jsx";

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        { this.props.auth ? (
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
            <div>
              <h3>Sign Up</h3>
              <form onSubmit={this.props.submitNewUser}>
                <input name="name" type="text" placeholder="Name"/>
                <input name="email" type="email" placeholder="Email"/>
                <input name="address" rows="4" placeholder="Address" />
                <input name="password" type="password" placeholder="Password"/>
                <input name="password_confirmation" type="password" placeholder="Confirm Password"/>
                <button type="submit" className="btn">Sign Up</button>
              </form>
            </div>
        )}
      </div>
    );
  }
}


const mapStateToProps = ({auth}) => ({
  auth
});

const mapDispatchToProps = (dispatch) => ({
  submitNewUser: function (evt) {
    evt.preventDefault();
    // console.log("evt.target.name.value", evt.target.name.value)
    let user = {
      name: evt.target.name.value,
      email: evt.target.email.value,
      address: evt.target.address.value,
      password: evt.target.password.value,
      password_confirmation: evt.target.password_confirmation.value
    }
    dispatch(createNewUser(user));

  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
