import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Login</h1>
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
)(Login);

