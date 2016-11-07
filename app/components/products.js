import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadAllProducts } from '../reducers/allProducts'
import {loadAllCategories } from '../reducers/allCategories'
import FilterBar from './filterBar';
import ProductItem from './productItem';
import { find } from 'lodash';

//export default
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: null,
      maxPrice: null,
      minStars: null
    };
    this.setCurrentCategory = this.setCurrentCategory.bind(this);
    this.setMaxPrice = this.setMaxPrice.bind(this);
    this.setMinStars = this.setMinStars.bind(this);
  }

  setCurrentCategory(currentCategory) {
    this.setState({currentCategory})
  }

  setMaxPrice(maxPrice) {
    this.setState({maxPrice})
  }

  setMinStars(minStars) {
    this.setState({minStars})
  }

  render() {
    let {allProducts} = this.props;
    let { currentCategory, maxPrice, minStars } = this.state;
    return(
      <div>
        <div className="row">
          <FilterBar setCurrentCategory={this.setCurrentCategory}
                     setMaxPrice={this.setMaxPrice}
                     setMinStars={this.setMinStars}/>
        </div>
        <div className="row all-products">
          { allProducts.filter((prod) =>
              prod.inventory &&
                (!currentCategory || find(prod.categories, {id: currentCategory})) &&
                (!maxPrice || prod.price <= maxPrice) &&
                (!minStars || Math.round(prod.avgStars) >= minStars)
                )
            .map(function(product) {
            return (
              <div key={product.id} className="product-item col s12 m6 l4">
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
  loadAllProducts: () => dispatch(loadAllProducts()),
  loadAllCategories: () => dispatch(loadAllCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
