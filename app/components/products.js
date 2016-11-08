import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterBar from './filterBar';
import ProductItem from './productItem';
import { find } from 'lodash';

const initialProductsShown = 24;
const productsShownIncrement = 24;

//export default
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentCategory: null,
      maxPrice: null,
      minStars: null,
      productList: props.allProducts || [],
      productsFound: 0,
      productsShown: initialProductsShown,
      hasMore: false,
    };
    this.setCurrentCategory = this.setCurrentCategory.bind(this);
    this.setMaxPrice = this.setMaxPrice.bind(this);
    this.setMinStars = this.setMinStars.bind(this);
    this.showMore = this.showMore.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  updateProductList() {
    let { products } = this.props;
    let { currentCategory, maxPrice, minStars, productsShown } = this.state;
    let filteredProducts = products.filter(product =>
      product.inventory
        && (!currentCategory || find(product.categories, {id: currentCategory}))
        && (!maxPrice || product.price <= maxPrice)
        && (!minStars || Math.round(product.avgStars) >= minStars));
    let productList = filteredProducts.filter((product, idx) => idx < productsShown);
    let productsFound = products.length;
    let hasMore = productsShown < filteredProducts.length;
    this.setState({productList, productsFound, hasMore});
  }

  setCurrentCategory(currentCategory) {
    this.setState({currentCategory});
  }

  setMaxPrice(maxPrice) {
    this.setState({maxPrice});
  }

  setMinStars(minStars) {
    this.setState({minStars});
  }

  showMore() {
    let productsShown = this.state.productsShown + productsShownIncrement;
    let hasMore = productsShown < this.state.productsFound;
    this.setState({productsShown, hasMore});
  }

  showAll() {
    let productsShown = this.state.productsFound;
    let hasMore = false;
    this.setState({productsShown, hasMore});
  }

  componentDidUpdate(prevProps, prevState) {
    let { currentCategory, maxPrice, minStars, productsShown, productsFound } = this.state;
    let { products } = this.props;
    if (prevState.currentCategory !== currentCategory
          || prevState.maxPrice !== maxPrice
          || prevState.minStars !== minStars
          || prevState.productsShown !== productsShown
          || prevState.productsFound !== productsFound
          || prevProps.products !== products) {
      this.updateProductList();
    }
  }

  componentDidMount() {
    this.setState(this.props.router.location.state);
    this.updateProductList();
  }

  render() {
    let { setCurrentCategory, setMaxPrice, setMinStars, showMore, showAll } = this;
    let { productList, productsFound, hasMore } = this.state;
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
        <div className="row all-products">
          { productList.map(product => (
              <div key={product.id} className="product-item col s12 m6 l4">
                <ProductItem product={product} />
              </div> ))}
        </div>
        <div className="row">
          <div className="col s2 push-s4">
            { hasMore && <input type="button" className="btn" value={`Show ${productsShownIncrement} More`} onClick={showMore}/> }
          </div>
          <div className="col s2 push-s4">
            { hasMore && <input type="button" className="btn" value={`Show All ${productsFound}`} onClick={showAll}/> }
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({allProducts, cart}) => {
  let products = allProducts.map(product => {
    let cartItem = find(cart, item => product.id === item.product.id);
    product.inCart = cartItem ? cartItem.quantity : 0;
    return product
  });
  return {
    products,
    cart
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
