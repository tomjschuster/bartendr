import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';
import { Link } from 'react-router';
import SingleOrder from './singleOrder';
import ShippingForm from './shippingForm';
import { createNewUser } from "../reducers/auth.jsx";
import { unauthStart, authStart } from "../reducers/orderSummary";

class OrderSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completedOrder: false
    }

    this.passToUnauthWrapper = this.passToUnauthWrapper.bind(this);
    this.passToAuthWrapper = this.passToAuthWrapper.bind(this);
  }

  passToUnauthWrapper(evt) {
    evt.preventDefault();
    let user = {
      name: evt.target.name.value,
      email: evt.target.email.value,
      address: evt.target.address.value,
    }
    let {cart, postOrderForUnauth} = this.props;

    this.setState({completedOrder: true});
    postOrderForUnauth(user, cart);
  }

  passToAuthWrapper(evt) {
    evt.preventDefault();
    let user = {
      name: evt.target.name.value,
      email: evt.target.email.value,
      address: evt.target.address.value,
    }
    let {auth, cart, postOrderForAuth} = this.props;

    this.setState({completedOrder: true});
    console.log(this.state)
    postOrderForAuth(user, auth.id, cart);
  }

  render() {
    console.log("&&&&&&&&HELOLODLSJ&&&&&&&&&&&&&&&&&&&&&");
    console.log(this.state.completedOrder);
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

    let {auth, postOrderForUnauth, cart } = this.props;

    return (
      <div>
        {
          this.state.completedOrder ?
          (
           <div className="col s12 m12">
             <br />
              <br />
              <br />
              <br />
             <img src="/media/thank_you_for_shopping.png" className="responsive-img"/>
              <br /><br />
              <br /><br />
              <br /><br />
              <Link to="/products">
              <button className="center btn waves-effect light-blue accent-2 " type="submit" name="action">Keep Shopping
              <i className="material-icons right" required>send</i>
              </button>
              </Link>
              <br /><br />
              <br /><br />
           </div>
           ) :
          ( cart.length ? (
           <div>
           <br />
            <h4>Order Summary:</h4>
            <br />
          <SingleOrder />


        <br /><br />
        <h5>Shipping Details:</h5>
        <form className="col s12" onSubmit={auth ? this.passToAuthWrapper : this.passToUnauthWrapper }>
      <div className="row">
        <div className="input-field col s12">
          <input id="first_name" name="name" type="text" className="validate" placeholder="Name" defaultValue={auth ? auth.name : ""}/>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="email" name="email" type="email" className="validate" placeholder="Email" defaultValue={auth ? auth.email : ""} required/>
        </div>
      </div>

       <div className="row">
        <div className="input-field col s12">
          <input id="last_name" name="address" type="text" className="validate" placeholder="Address" defaultValue={auth ? auth.address : ""} required/>
        </div>
      </div>

        <div className="row">
          <div className="col s12">
            <br /><br />
            <button className="center btn waves-effect light-blue accent-2 modal-trigger" type="submit" name="action">Place Order
            <i className="material-icons right" required>send</i>
            </button>
          </div>
        </div>
    </form>
    </div> ) : (<div>{this.props.router.push('/cart')}</div>)
    )
    }
    </div>

    );
  }
}

const mapStateToProps = ({auth,cart}) => ({
   auth,
   cart
});

const mapDispatchToProps = (dispatch) => ({
  postOrderForUnauth: (user, cart) => {
    dispatch(unauthStart(user,cart))
  },

  postOrderForAuth: (user, userId, cart) => {
    dispatch(authStart(user, userId, cart))
  }


});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSummary);
