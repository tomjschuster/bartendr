import React, { Component } from 'react';


//current sessions cart; not pulling data from model backend



export default class SingleOrder extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log("this.props", this.props);
    console.log("this.props.cart", this.props.cart);

    return(
      <div>
        <h1>Your Cart</h1>
        <table className="responsive-table striped">
           <thead>
             <tr>
                 <th data-field="id">Product</th>
                 <th data-field="name">Name</th>
                 <th data-field="name">Quantity</th>
                 <th data-field="price">Price</th>
             </tr>
           </thead>
          {
            this.props.cart.length ? <h2>yo</h2> :
                <h2>Buy something.</h2>
          }

           <tbody>
             {
              this.props.cart && this.props.cart.map( item =>
                (
                 <tr key={item.productId} >
                   <td>Pic</td>
                   <td>{item.name}</td>
                   <td>
                     <input type="number" name="quantity" min="1" max="99" value={item.quantity}  width="50" height="50"/>
                   </td>
                   <td>{item.price}</td>
                 </tr>

                )
                )
             }
           </tbody>
         </table>
       </div>
    );
  }
}

