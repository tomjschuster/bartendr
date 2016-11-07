import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';
import { Link } from 'react-router';
import SingleOrder from './singleOrder';
import ShippingForm from './shippingForm';
import { createNewUser } from "../reducers/auth.jsx";
import { unauthStart } from "../reducers/orderSummary";

class OrderSummary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {auth, postOrderForUnauth, cart,  submitNewUser } = this.props;
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    console.log(this.props);
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    return (
      <div>
        <h4>Order Summary:</h4>
        <SingleOrder />
        <br /><br />
        <h5>Shipping Details:</h5>
        <form className="col s12" onSubmit={auth ? submitNewUser : postOrderForUnauth }>
      <div className="row">
        <div className="input-field col s12">
          <input id="first_name" name="name" type="text" className="validate" placeholder="Name" defaultValue={auth ? auth.name : ""}/>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="email" name="email" type="email" className="validate" placeholder="Email" defaultValue={auth ? auth.email : ""}/>
        </div>
      </div>

       <div className="row">
        <div className="input-field col s12">
          <input id="last_name" name="address" type="text" className="validate" placeholder="Address" defaultValue={auth ? auth.address : ""}/>
        </div>
      </div>
    </form>

        <div className="row">
          <div className="col s12">
            <br /><br />
            <button className="center btn waves-effect light-blue accent-2 modal-trigger" type="submit" name="action">Place Order
            <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = ({auth,cart}) => ({
   auth,
   cart
});

const mapDispatchToProps = (dispatch) => ({
  submitNewUser: function (evt) {
    evt.preventDefault();
    console.log("inside submit new user")
    let user = {
      name: evt.target.name.value,
      email: evt.target.email.value,
      address: evt.target.address.value,

    }
    dispatch(createNewUser(user));
  },

  postOrderForUnauth: (evt) => {
    evt.preventDefault();
    let user = {
      name: evt.target.name.value,
      email: evt.target.email.value,
      address: evt.target.address.value,

    }
    console.log("=====================================");
    console.log("WE ARE IN POST ORDER!!!!!!!!!!!!!!!!!");
        console.log("=====================================");

    dispatch(unauthStart(user,cart))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSummary);
