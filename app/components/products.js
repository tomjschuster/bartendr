import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadAllProducts } from '../reducers/allProducts'
import {loadAllCategories } from '../reducers/allCategories'
import FilterBar from './filterBar';
import ProductItem from './productItem';
import _ from 'lodash';

//export default
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: null,
      maxPrice: null
    }
    this.setCurrentCategory = this.setCurrentCategory.bind(this);
    this.setMaxPrice = this.setMaxPrice.bind(this);
  }

  addCategory(category) {
    let categories = [...this.state.categories, category]
    this.setState({categories});
  }

  setCurrentCategory(id) {
    this.setState({currentCategory: id})
  }
  setMaxPrice(max) {
    this.setState({maxPrice: max})
  }

  componentDidMount() {
    this.props.loadAllProducts();
    this.props.loadAllCategories();
  }

  render() {
    let {allProducts} = this.props;
    let { currentCategory, maxPrice } = this.state;
    return(
      <div>
        <div className="row">
          <FilterBar setCurrentCategory={this.setCurrentCategory}
                     setMaxPrice={this.setMaxPrice}/>
        </div>
        <div className="row">
          { allProducts.filter((prod) =>
              prod.inventory &&
                (!currentCategory || _.find(prod.categories, {id: currentCategory})) &&
                (!maxPrice || prod.price <= maxPrice)
                )
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
  loadAllProducts: () => dispatch(loadAllProducts()),
  loadAllCategories: () => dispatch(loadAllCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
