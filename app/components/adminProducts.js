import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import store from "../store";
import { loadAllProducts } from "../reducers/allProducts";

import axios from 'axios';

class AdminProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      status: null
    }
    this.updateProducts = this.updateProducts.bind(this);
    this.deleteProducts = this.deleteProducts.bind(this);
  }

  // componentDidMount() {
  //  // console.log("this.setState", this.setState);
  //   const setState2 = this.setState.bind(this);
  //   axios.get('/api/users')
  //   .then( function(res) {
  //     // console.log("res.data", res.data)
  //     setState2({users: res.data});
  //   })
  //   .catch( (err) => console.error(err) );
  // }

  // Inside onSubmit:  (e) => this.props.updateUser(e, user.id)

  deleteProducts(productId) {
    // console.log("updateUser is RUNNING")
     // console.log("evt", evt);
     // console.log(`/api/users/${userId}`);
     // console.log("userInfo", userInfo)
    axios.delete(`/api/products/${productId}`)
    .then( (res) => {

    // console.log("res.data", res.data)
    // this.setState({status: `${res.status} ${res.statusText} / Product deleted!`})
    })
    .catch( (err) => {
      this.props.reloadAllProducts();  // THIS IS NOT AN ACCEPTABLE METHOD!!! but it works [shrug]

      console.log("this.props", this.props);
      console.log("this.props.reloadAllProducts", this.props.reloadAllProducts);

      console.log(err) });

  }

  updateProducts(evt, productId) {
     // console.log("updateUser is RUNNING")

     var productInfo = {
      name: evt.target.name.value,
      proof: evt.target.proof.value,
      size: evt.target.size.value,
      description: evt.target.description.value,
      price: evt.target.price.value,
      inventory: evt.target.inventory.value,
      photoUrl: evt.target.photoUrl.value,
     }
     evt.preventDefault();
     // console.log("evt", evt);
     // console.log(`/api/users/${userId}`);
     // console.log("userInfo", userInfo)
     axios.put(`/api/products/${productId}`, productInfo)
    .then( (res) => {

      // console.log("res.data", res.data)
      this.props.reloadAllProducts();
      this.setState({status: "Product updated!"})
    })
    .catch( (err) => console.log(err) );
  }

  render() {

    return(
      <div>
        <br />
        <h2>God Mode: Products (Admin)</h2>
        <h4>Current Status: { this.state.status ? `${this.state.status}` : <span>Normal</span>}</h4>
          {

              this.props.allProducts && this.props.allProducts.map( product =>
                (
                  <div className="row" key={product.id} >

                    <form onSubmit={ (evt) => this.updateProducts(evt, product.id)}>
                    {product.id}
                      <input name="name" type="text" placeholder="Name" defaultValue={`${product.name}`}/>
                      <input name="proof" type="text" placeholder="Proof" defaultValue={`${product.proof}`}/>
                      <input name="size" type="text" placeholder="Size" defaultValue={`${product.size}`}/>
                      <input name="description" type="text" placeholder="Description" defaultValue={`${product.description}`}/>
                      <input name="price" type="number" placeholder="Price" defaultValue={`${product.price}`}/>
                      <input name="inventory" type="number" placeholder="Inventory" defaultValue={`${product.inventory}`}/>
                      <input name="photoUrl" type="text" placeholder="Photo URL" defaultValue={`${product.photoUrl}`}/>
                      <div>Categories: { product.categories && product.categories.map( category =>
                          <span id={category.name}>{`${category.name} `}</span> )

                        }
                      </div>
                      <button className="right btn waves-effect light-blue accent-2 modal-trigger" type="submit" name="action">Update
                        <i className="material-icons right">send</i>
                      </button>
                    </form>
                    <button onClick={(e) => this.deleteProducts(product.id)} className="right btn waves-effect light-blue accent-2 modal-trigger" type="button" name="action">Delete
                      <i className="material-icons right">send</i>
                    </button>
                 </div>
                ))
            }
            {
              this.state.status && Materialize.toast(this.state.status, 8000)
            }
      </div>

    );
  }
}

/*
<th data-field="name">Name</th>
              <th data-field="email">Email</th>
              <th data-field="password">Password</th>
              <th data-field="address">Address</th>
              <th data-field="isAdmin">Admin Status</th>
              <th data-field="remove-btn"></th>
*/


const mapStateToProps = ({allProducts}) => ({
  allProducts
});

const mapDispatchToProps = (dispatch) => ({
  reloadAllProducts: function() {
    dispatch(loadAllProducts());
  }
  // submitNewUser: function (evt) {
  //   evt.preventDefault();
  //   // console.log("evt.target.name.value", evt.target.name.value)
  //   let user = {
  //     name: evt.target.name.value,
  //     email: evt.target.email.value,
  //     address: evt.target.address.value,
  //     password: evt.target.password.value,
  //     password_confirmation: evt.target.password_confirmation.value
  //   }
  //   dispatch(createNewUser(user));

  // }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProducts);
