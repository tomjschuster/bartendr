import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Order History</h1>
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
