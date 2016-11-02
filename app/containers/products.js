import { connect } from 'react-redux';
import Product from '../components/products'
import {loadAllProducts } from '../reducers/allProducts'

const mapStateToProps = ({allProducts}) => ({
  allProducts
});

const mapDispatchToProps = (dispatch) => ({
  loadAllProducts : function() {
    dispatch(loadAllProducts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

