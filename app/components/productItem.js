import React, { Component } from 'react';

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(


          <div className="card">
            <div className="card-image">
              <img src={this.props.product.photoUrl}/>
              <span className="card-title"></span>
            </div>
            <div className="card-content">
              <ul>
                <li>{this.props.product.name}</li>
                <li>{this.props.product.price}</li>
                <li>
                  <div className="stars">
                    <i className="tiny material-icons">grade</i>
                    <i className="tiny material-icons">grade</i>
                    <i className="tiny material-icons">grade</i>
                    <i className="tiny material-icons">grade</i>
                    <i className="tiny material-icons">grade</i>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-action">

               <a className="waves-effect waves-light btn"><i className="material-icons">add_shopping_cart</i></a>
            </div>
          </div>







    );
  }
}
