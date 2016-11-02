import React, { Component } from 'react';
import Navbar from './navbar';
import Home from './home';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="row">
        <Navbar />
        <div className="col s0 m1 l1"></div>

        <div className="col s12 m10 l10">
          {this.props.children}
        </div>

        <div className="col s0 m1 l1"></div>
      </div>
    );
  }
}
