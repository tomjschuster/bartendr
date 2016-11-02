import { connect } from 'react-redux';
import singleOrder from "../components/singleOrder";

const mapStateToProps = ({cart}) => ({
  cart: cart
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(singleOrder);
