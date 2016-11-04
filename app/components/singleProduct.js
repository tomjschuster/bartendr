import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadSingleProduct} from '../reducers/selectedProduct';

class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("STATE!!!!!! ", this.props);
    const {name,price, photoUrl} =this.props.selectedProduct;
     return(
      <div className="row">
        <h1>Single Order</h1>
        <div className="col s12 m6"> <img src={photoUrl} />
        </div>
        <div className="col s12 m6">
          <ul>
                <li>{name}</li>
                <li>{`$${price}`}</li>
                <li>
                  <div className="stars">
                    <i className="tiny material-icons">grade</i>
                    <i className="tiny material-icons">grade</i>
                    <i className="tiny material-icons">grade</i>
                    <i className="tiny material-icons">grade</i>
                    <i className="tiny material-icons">grade</i>
                  </div>
                </li>
                <li>
                    <a className="waves-effect light-blue accent-2 waves-light btn"><i className="material-icons">add_shopping_cart</i></a>
                </li>
              </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({selectedProduct}) => ({
  selectedProduct
});

const mapDispatchToProps = () => ({
  // loadSingleProduct: product => dispatch(loadSingleProduct(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);
