import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShippingPayment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Shipping Payment</h1>
      </div>
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShippingPayment);

