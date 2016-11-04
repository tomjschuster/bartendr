import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className="light-blue accent-2">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo"><img src="/media/bartendr_logo_white_trans.png" height="60px"></img></a>
          <a href="#" data-activates="mobile-demo" className="button-collapse right"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html"><i className="material-icons">search</i></a></li>
            <li><a href="badges.html"><i className="material-icons">perm_identity</i></a></li>
            <li><a href="mobile.html"><i className="material-icons">shopping_cart</i></a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="sass.html">Search</a></li>
            <li><a href="badges.html">Login</a></li>
            <li><a href="mobile.html">My Cart</a></li>
          </ul>
        </div>
      </nav>
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
)(Navbar);
