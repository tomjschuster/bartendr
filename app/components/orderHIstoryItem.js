import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderHistoryItem extends Component {
  constructor(props) {
    super(props);
  }

  total() {
    var output = 0;
    for (var i = 0; i < this.props.selectedOrder.order_items.length; i++) {
      output += (this.props.selectedOrder.order_items[i].purchase_price * this.props.selectedOrder.order_items[i].quantity);
    }
    return output.toFixed(2);
  }

  render() {
    let { selectedOrder } = this.props;
    let order_items = selectedOrder && selectedOrder.order_items;
    return(
           <div>
           {selectedOrder && (
            <div>
              <h3 className="center">{`Order # ${selectedOrder.id}`}</h3>
             <ul className="center">
               <li>{`Placed on: ${selectedOrder.created_at.slice(0, 10)}`}</li>
                <li>{`Status: ${selectedOrder.status}`}</li>
             </ul>


       <div>
        <br />
          <table className=" striped">
           <thead>
             <tr>
                 <th data-field="id">Product</th>
                 <th data-field="name">Name</th>
                 <th data-field="name">Quantity</th>
                 <th data-field="price">Price</th>
                 <th data-field="remove-btn"></th>
             </tr>
           </thead>

           <tbody>
             {
              order_items && order_items.map( item =>
                (
                 <tr key={item.product.id} >
                   <td><img src={item.product.photoUrl} height="55" width="55"></img></td>
                   <td>{item.product.name}</td>
                   <td> {item.quantity}</td>
                   <td>{(item.purchase_price * item.quantity).toFixed(2)}</td>
                 </tr>
                ))
             }
             <tr>
              <td></td>
              <td></td>
              <td><strong>TOTAL</strong></td>
              <td>
                {
                  this.total()
                }
              </td>
              <td></td>
             </tr>
           </tbody>
         </table>
         </div>
         </div>

             )}
           </div>



     )
  }
}


const mapStateToProps = ({selectedOrder}) => ({
  selectedOrder
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderHistoryItem);
