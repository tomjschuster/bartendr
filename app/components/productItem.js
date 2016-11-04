import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {loadSingleProduct} from '../reducers/selectedProduct';

class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let { id, name, photoUrl, price } = this.props.product;
    return(
          <div className="card">
            <div className="card-image">
              <Link to={`/products/${id}`}><img src={photoUrl}/></Link>
              <span className="card-title"></span>
            </div>
            <div className="card-content">
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
              </ul>
            </div>
            <div className="card-action">
               <a className="waves-effect light-blue accent-2 waves-light btn"><i className="material-icons">add_shopping_cart</i></a>
            </div>
          </div>
    );
  }
}


const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  loadSingleProduct: product => {console.log("inside dispatch") ;
                       dispatch(loadSingleProduct(product) )}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem);

