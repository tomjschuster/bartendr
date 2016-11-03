import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderHistoryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Order History Item</h1>
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
)(OrderHistoryItem);
