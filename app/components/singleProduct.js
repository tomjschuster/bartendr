import React, { Component } from 'react';
import FilterBar from './filterBar';

export default class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      <FilterBar/>
      </div>
    );
  }
}
