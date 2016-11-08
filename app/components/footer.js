import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <footer className="page-footer white">
          <div className="col s12 light-blue accent-2">
          <div className="container">
          <div className="row">
              <br />
              <div className="light-blue accent-2 col s12 center">
                <ul id="footer-inline">
                  <div className="col m3 s12 grey-text text-lighten-3">
                  <li><Link to="/aboutUs">About Us</Link></li>
                  </div>

                  <div className="col m3 s12 grey-text text-lighten-3">
                  <li><Link to="/meetTheTeam">Meet The Team</Link></li>
                  </div>

                  <div className="col m3 s12 grey-text text-lighten-3">
                  <li><Link to="/terms">Terms & Conditions</Link></li>
                  </div>

                  <div className="col m3 s12 grey-text text-lighten-3">
                  <li><Link to="/help">Help</Link></li>
                  </div>
                </ul>
              </div>
          </div>
          </div>
          </div>
          <div className="footer-copyright col s12 light-blue accent-3">
            <div className="container">
            © 2016 Copyright Text
            <img src="/media/bartendr_logo_white_trans.png" height="45px" className="right"/>
            </div>
          </div>
        </footer>
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
)(Footer);
