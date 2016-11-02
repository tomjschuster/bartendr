import React, { Component } from 'react';
// import Sidebar from './sidebar';

export default class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('in products.js')
    return(
      <div className="row">
        <div className="col s3">
          <h1>Needs fixing, not working</h1>
        </div>

        <div className="col s9">
          <div className="col s3">
            <img src="martini-holder.jpg" />
          </div>
          <div className="col s3">
            <img src="" />
          </div>
          <div className="col s3">
            <img src="" />
          </div>
        </div>
      </div>
    );
  }
}
