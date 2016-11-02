import React, { Component } from 'react';
import Navbar from './navbar';
import Home from './home';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
