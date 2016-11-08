import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loadSingleProduct} from '../reducers/selectedProduct';
import { addToCart, updateQuantity } from '../reducers/cart';
import _, { times, find } from 'lodash';

class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { id,
          name,
          photoUrl,
          price,
          size,
          avgStars,
          numReviews,
          inCart } = this.props.product;
    let { cart,
          add,
          updateQuantity,
          product } = this.props; // N
    return (
          <div className="card">
            <div className="card-image">
              <Link to={`/products/${id}`}><img src={photoUrl ||  '/media/default-bottle.jpg'} className="product-img"/></Link>
              <span className="card-title"></span>
            </div>
            <div className="card-content">
              <ul>
                <li><Link to={`/products/${id}`}>{name}&nbsp;-&nbsp;{size}</Link></li>
                <li>{`$${price}`}</li>
                <li>
                  <div className="stars">
                    { times(Math.round(avgStars), idx => <i key={idx} className="tiny material-icons">grade</i>)}
                    &nbsp;(<Link to={`/products/${id}#reviews`}>{numReviews}&nbsp;Reviews</Link>)
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-action">
               <a onClick={() => {
              Materialize.toast(`${product.name} added to cart`, 4000)
              find(cart, item => item.product.id === product.id) ?
              updateQuantity(_.find(cart, item => item.product.id === product.id).quantity + 1, product.id) : add(product) }
              } className="waves-effect light-blue accent-2 waves-light btn"><i className="material-icons">add_shopping_cart</i></a>{inCart !== 0 && <span>&nbsp;&nbsp;&nbsp;{inCart} in your <Link to="/cart">cart</Link></span>}
            </div>
          </div>
    );
  }
}


const mapStateToProps = ({cart}) => ({
   cart
});

const mapDispatchToProps = (dispatch) => ({
  loadSingleProduct: product => dispatch(loadSingleProduct(product)),
  add: product => dispatch(addToCart(product)), // N
  updateQuantity: (newQuantity, productId) => dispatch(updateQuantity(newQuantity, productId)) // N
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem);

