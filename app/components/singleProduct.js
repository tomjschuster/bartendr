import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadSingleProduct} from '../reducers/selectedProduct';
import { times } from 'lodash';

class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, price, photoUrl, description, reviews } =this.props.selectedProduct;
     return(
      <div className="row" key={id}>
        <h3>{name}</h3>
        <div>
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
                <br />
                <br />
                <li>{description}</li>
              </ul>
        </div>
        </div>
        <div className="col s12">
          <h2>Reviews</h2>
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
                      _.times(review.stars, (index) => (<i key={index} className="tiny material-icons">grade</i>))
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

const mapStateToProps = ({selectedProduct}) => ({
  selectedProduct
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);
