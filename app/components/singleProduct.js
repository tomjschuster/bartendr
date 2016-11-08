import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { times, find } from 'lodash'; //N
import { addToCart, updateQuantity } from '../reducers/cart'; //N


class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, price, photoUrl, description, reviews, avgStars, size, categories } = this.props.selectedProduct;
    const { cart, updateQuantity, selectedProduct, add } = this.props; //N
    let inCart = find(cart, item => item.product.id === id) ?
      find(cart, item => item.product.id === id).quantity : 0;

     return (
      <div className="row" key={id}>
        <br />
        <br />

        <div>
        <div className="col s12 m6"> <img src={photoUrl || '/media/default-bottle.jpg'} />
        </div>
        <div className="col s12 m6">
          <ul>

                <li>{name} - {size}</li>
                <li>{`$${price}`}</li>

                <li>
                  <div className="stars">
                    { times(Math.round(avgStars), idx => <i key={idx} className="tiny material-icons">grade</i>)}
                  </div>
                </li>
                <br />
                 <li>
                   { categories && categories.map( categ => (
                   <div className="light-blue accent-1 chip">{categ.name}</div>
                    ))
                   }
                </li>
                <br />
                <li>
                  <a onClick={() => {
                      Materialize.toast(`${selectedProduct.name} added to cart`, 4000);
                      _.find(cart, item => item.product.id === selectedProduct.id) ?
                 updateQuantity(_.find(cart, item => item.product.id === selectedProduct.id).quantity + 1, selectedProduct.id) : add(selectedProduct)} }
                 className="waves-effect light-blue accent-2 waves-light btn" ><i className="material-icons">add_shopping_cart</i>  Add to cart</a>

                </li>
                { inCart !== 0 && <li><span>{inCart} in your <Link to="/cart">cart</Link></span></li>}
                <br />
                <br />
                <li>{description}</li>
              </ul>
        </div>
        </div>





        <div id="reviews" className="col s12">
          <br />
          <h4>Reviews</h4>
          <hr />
          {
            reviews && reviews.map(review => (
            <div key={review.id}>
              <div>
                <ul>
                  <li>Username</li>
                  <li>{review.created_at.slice(0, 10)}
                    <div className="stars">
                    {
                      times(review.stars, (index) => (<i key={index} className="tiny material-icons">grade</i>))
                    }
                    </div>
                  </li>
                  <li>{review.content}</li>
                </ul>
                <hr />
              </div>
            </div>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({selectedProduct, cart}) => ({
  selectedProduct,
  cart
});

const mapDispatchToProps = (dispatch) => ({
  add: product => dispatch(addToCart(product)), // N
  updateQuantity: (newQuantity, productId) => dispatch(updateQuantity(newQuantity, productId)) // N
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);
