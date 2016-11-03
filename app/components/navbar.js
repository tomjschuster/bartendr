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
          <a href="#!" className="brand-logo"><img src="/media/bartendr_logo.png" height="55px"></img></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html"><i className="material-icons">search</i></a></li>
            <li><a href="badges.html"><i className="material-icons">perm_identity</i></a></li>
            <li><a href="mobile.html"><i className="material-icons">shopping_cart</i></a></li>
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
