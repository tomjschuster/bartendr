import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {loadAllProducts } from '../reducers/allProducts';
import {loadAllCategories } from '../reducers/allCategories';
import FilterBar from './filterBar';
import ProductItem from './productItem';
import { find, times } from 'lodash';
import { Input } from 'react-materialize';
import Loading from 'react-loading';

//export default
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: null,
      maxPrice: null,
      minStars: null,
      productList: props.allProducts || [],
      productsFound: 0,
      productsShown: 24,
      hasMore: true,
      loading: false
    };
    this.setCurrentCategory = this.setCurrentCategory.bind(this);
    this.setMaxPrice = this.setMaxPrice.bind(this);
    this.setMinStars = this.setMinStars.bind(this);
    this.showMore = this.showMore.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  updateProductList() {
    let { allProducts } = this.props;
    let { currentCategory, maxPrice, minStars, productsShown } = this.state;
    let products = allProducts.filter(product =>
      product.inventory
        && (!currentCategory || find(product.categories, {id: currentCategory}))
        && (!maxPrice || product.price <= maxPrice)
        && (!minStars || Math.round(product.avgStars) >= minStars));
    let productList = products.filter((product, idx) => idx < productsShown);
    let productsFound = products.length;
    let hasMore = productsShown < productsFound;
    this.setState({productList, productsFound, hasMore});
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

  showMore() {
    let productsShown = this.state.productsShown + 24;
    let hasMore = productsShown < this.state.productsFound;
    this.setState({productsShown, hasMore});
  }

  componentDidUpdate(prevProps, prevState) {
    let { currentCategory, maxPrice, minStars, productsShown, productsFound } = this.state;
    let { allProducts } = this.props;
    if (prevState.currentCategory !== currentCategory
          || prevState.maxPrice !== maxPrice
          || prevState.minStars !== minStars
          || prevState.productsShown !== productsShown
          || prevState.productsFound !== productsFound
          || prevProps.allProducts !== allProducts) {
      this.updateProductList();
    }
  }

  handleScroll() {
    let { allProducts } = this.refs;
    let { bottom } = allProducts.getClientRects()[0];
    let { clientHeight } = document.documentElement;
    let { productsShown, productsFound, loading } = this.state;

    if (!loading && bottom < clientHeight && productsShown < productsFound) {
      // this.setState({productsShown: productsShown + 12})
      this.setState({loading: true});
      this.load();
    }
  }

  load() {
    setTimeout(() => {
      let productsShown = this.state.productsShown + 12;
      let hasMore = productsShown < this.state.productsFound;
      this.setState({productsShown, hasMore, loading: false})
    }, 1250);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    let { setCurrentCategory, setMaxPrice, setMinStars, showMore, onProductsShownChange } = this;
    let { productList, productsShown, productsFound, hasMore, loading } = this.state;
    return (
      <div>
        <div className="row">
          <FilterBar setCurrentCategory={setCurrentCategory}
                     setMaxPrice={setMaxPrice}
                     setMinStars={setMinStars}/>
        </div>
        <div>
          <div className="col s12"><p>{productsFound} products found</p></div>
        </div>
        <div ref="allProducts" className="row all-products">
          { productList.map(product => (
              <div key={product.id} className="product-item col s12 m6 l4">
                <ProductItem product={product} />
              </div> ))}
        </div>
        { loading &&
          <div className="row">
            <div className="col s2 push-s5">
              <Loading id="product-loader" type="spin" color='#40c4ff' />
            </div>
          </div> }
        <div className="row">
          <div className="col s2 push-s5">
            { hasMore && <input type="button" className="btn" value="Show More" onClick={showMore}/> }
          </div>
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
