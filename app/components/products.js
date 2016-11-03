import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadAllProducts } from '../reducers/allProducts'
import FilterBar from './filterBar';
import ProductItem from './productItem';

//export default
class Products extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadAllProducts();
  }

  render() {
    let {allProducts} = this.props;
    return(
      <div>
        <div className="row">
          <FilterBar />
        </div>
        <div className="row">
          { allProducts.filter((prod) => prod.inventory)
            .map(function(product) {
            return (
              <div key={product.id} className="col s12 m6 l4">
              <ProductItem product={product} />
              </div>
                    );
          })}
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({allProducts}) => ({
  allProducts
});

const mapDispatchToProps = (dispatch) => ({
  loadAllProducts: function() {
    dispatch(loadAllProducts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
