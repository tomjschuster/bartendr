import React, { Component } from 'react';
import { connect } from 'react-redux';

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Sign Up</h1>
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
)(Signup);
