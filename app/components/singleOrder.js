import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateQuantity, removeCartItem } from '../reducers/cart.js';
import store from '../store';
import ShippingForm from './shippingForm';
import { Input, Collapsible, CollapsibleItem } from 'react-materialize';
import { Link } from 'react-router';

//current sessions cart; not pulling data from model backend

class SingleOrder extends Component {
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
    console.log("STATE:", this.props)
    const { cart, auth } = this.props;
    return(

        cart.length ? (
        <div>
          <br />
          <table className="responsive-table striped">
           <thead>
             <tr>
                 <th data-field="id">Product</th>
                 <th data-field="name">Name</th>
                 <th data-field="name">Quantity</th>
                 <th data-field="price">Price</th>
                 <th data-field="remove-btn"></th>
             </tr>
           </thead>

           <tbody>
             {
              cart && cart.map( item =>
                (
                 <tr key={item.product.id} >
                   <td><img src={item.product.photoUrl} height="55" width="55"></img></td>
                   <td>{item.product.name}</td>
                   <td>
                     <input onChange={(e) => this.props.updateQuantity(e.target.value, item.product.id)} type="number" name="quantity" min="1" max={item.product.inventory} defaultValue={item.quantity} width="20%"/>
                   </td>
                   <td>{(item.purchase_price * item.quantity).toFixed(2)}</td>
                   <td>
                    <a href="#" onClick={() => this.props.removeCartItem(item.product.id)}>
                      <i className="material-icons">delete_forever</i>
                    </a>
                   </td>
                 </tr>
                ))
             }
             <tr>
              <td></td>
              <td></td>
              <td><strong>TOTAL</strong></td>
              <td>
                {
                  this.total()
                }
              </td>
              <td></td>
             </tr>
           </tbody>
         </table>
         </div>


       ) : (<img src="/media/cart_empty_grey.png" height="100%"></img>)

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
)(SingleOrder);
