import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { endSession } from '../reducers/auth';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { auth, logout } = this.props;
    return (
      <nav className="light-blue accent-2">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo"><img src="/media/bartendr_logo_white_trans.png" height="60px"></img></Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse right"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/products"><i className="material-icons">search</i></Link></li>
            <li><Link to="/login"><i className="material-icons">perm_identity</i></Link></li>
            <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
            {auth && <li><Link to="/" onClick={logout}>LOGOUT</Link></li>}
            {auth && <li><Link to="/adminusers">ADMIN: Users</Link></li>}
            {auth && <li><Link to="/adminproducts">ADMIN: Products</Link></li>}
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to="/products"><i className="material-icons">Products</i></Link></li>
            <li><Link to="/login"><i className="material-icons">Login</i></Link></li>
            <li><Link to="/cart"><i className="material-icons">My Cart</i></Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({auth}) => ({
  auth
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(endSession()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
