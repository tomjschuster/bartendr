import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderHistoryItem from './OrderHistoryItem';

class OrderHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <br />
        <h3 className="center">Order History</h3>

        <OrderHistoryItem />

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
)(OrderHistory);
