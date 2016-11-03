import React, { Component } from 'react';

import { connect } from 'react-redux';
import store from '../store';
//current sessions cart; not pulling data from model backend

const hardCodedData = [
  { purchase_price: 40,
    quantity: 1,
    product: {id: 1, name: 'Grey Goose Vodka', description: null, abv: 40, size: '750 ml', inventory: 5, photoUrl:'/martini-holder.jpg'}
  },
  { purchase_price: 40,
    quantity: 2,
    product: {id: 3, name: 'Tanqueray Gin', description: null, abv: 40, size: '750 ml', inventory: 5, photoUrl:'/martini-holder.jpg'}
  },
  { purchase_price: 30,
    quantity: 1,
    product: {id: 4, name: 'Makers Mark', description: null, abv: 40, size: '750 ml', inventory: 5, photoUrl:'/martini-holder.jpg'}
  },
  { purchase_price: 20,
    quantity: 5,
    product: {id: 5, name: 'Sprite', description: null, abv: 40, size: '750 ml', inventory: 1, photoUrl:'/martini-holder.jpg'}
  }
];

class SingleOrder extends Component {
  constructor(props) {
    super(props);
    // this.state = store.getState();
    // this.state = { purchase_price: 40,
    //   quantity: 1,
    //   product: {id: 1, name: 'Grey Goose Vodka', description: null, abv: 40, size: '750 ml', inventory: 5, photoUrl:'/martini-holder.jpg'}
    // }

    // this.total = this.total.bind(this);
    // this.updateQuantity = this.updateQuantity.bind(this);
  }

  total() {
    var output = 0;
    for (var i = 0; i < this.props.cart.length; i++) {
      output += (this.props.cart[i].purchase_price * this.props.cart[i].quantity);
    }
    return output.toFixed(2);
  }

  // updateQuantity(evt) {
  //   this.setState({quantity: evt.target.value});
  // }


  render() {
    console.log("state", this.state)
    console.log("props", this.props)
    const { cart } = this.props;
    return(
      <div>
        <h1>Your Cart</h1>
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
          {
            cart.length ? <h2></h2> :
                <h2>Buy something.</h2>
          }

           <tbody>
             {
              cart && cart.map( item =>
                (
                 <tr key={item.product.id} >
                   <td><img src={item.product.photoUrl} height="55" width="55"></img></td>
                   <td>{item.product.name}</td>
                   <td>
                     <input onChange={this.updateQuantity} type="number" name="quantity" min="1" max={item.product.inventory} defaultValue={item.quantity} width="20%"/>
                   </td>
                   <td>{(item.purchase_price * item.quantity).toFixed(2)}</td>
                   <td>
                    <a href="sass.html">
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
             </tr>
           </tbody>
         </table>
       </div>
    );
  }
}

const mapStateToProps = ({cart}) => ({
  cart: cart
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleOrder);

// 43c9ff
