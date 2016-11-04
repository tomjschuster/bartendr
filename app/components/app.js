import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar';
import Footer from './footer';
import Home from './home';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="row white">
        <Navbar />
        <div className="col s0 m1 l1"></div>

        <div className="col s12 m10 l10">
          {this.props.children}
          <br />
          <br />
          <br />
        </div>

        <Footer />
        <div className="col s0 m1 l1"></div>
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
)(App);
