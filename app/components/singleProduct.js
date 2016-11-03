import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Single Order</h1>
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
)(SingleProduct);
