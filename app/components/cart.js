import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateQuantity, removeCartItem } from '../reducers/cart.js';
import store from '../store';
import ShippingForm from './shippingForm';
import { Input, Collapsible, CollapsibleItem } from 'react-materialize';
import { Link } from 'react-router';
import SingleOrder from './singleOrder';

//current sessions cart; not pulling data from model backend

export class Cart extends Component {
  constructor(props) {
    super(props);
  }

  total() {
    var output = 0;
    for (var i = 0; i < this.props.cart.length; i++) {
      output += (this.props.cart[i].purchase_price * this.props.cart[i].quantity);
    }
    return output.toFixed(2);
  }

  render() {
    const { cart, auth } = this.props;
    return(
      <div>
        <br />
        {
          cart.length ? <img src="/media/your_cart_blue.png" height="50px"/> : <div></div>
        }
        <br />
        <SingleOrder />
        <br></br>
        {
          cart.length ? (
            <div>
            <Link to={auth ? "/checkout" : "/continue"}>
              <button className="right btn waves-effect light-blue accent-2 modal-trigger" type="submit" name="action">Checkout
                <i className="material-icons right">send</i>
              </button>
            </Link>

            <Link to="/products">
              <button className="right btn waves-effect light-blue accent-2 modal-trigger" type="submit" name="action">Continue Shopping
                <i className="material-icons right">shop</i>
              </button>
            </Link>
            </div>

            ) : (
              <Link to="/products">
              <button className="right btn waves-effect light-blue accent-2 modal-trigger" type="submit" name="action">Go Shopping
                <i className="material-icons right">shop</i>
              </button>
            </Link>
          )
        }
       </div>
    );
  }
}

const mapStateToProps = ({cart, auth}) => ({
  cart: cart,
  auth: auth
});

const mapDispatchToProps = (dispatch) => ({
  updateQuantity: (newQuantity, productId) => dispatch(updateQuantity(newQuantity, productId)),
  removeCartItem: (productId) => dispatch(removeCartItem(productId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
