import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <footer className="page-footer white">
          <div className="col s12 light-blue accent-2">
          <div className="container">
              <div className="center">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="light-blue accent-2 center">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
          </div>
          </div>
          <div className="footer-copyright col s12 light-blue accent-3">
            <div className="container">
            © 2016 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
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
