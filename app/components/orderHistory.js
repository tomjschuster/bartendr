import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class OrderHistory extends Component {
  constructor(props) {
    super(props);
  }

  moreThanOne(orderItems){
    var howManyMore = orderItems.reduce( (prev, item) => {
      return prev + item.quantity
    }, 0 )
    return howManyMore-1;
  }

  render() {
    let { orderHistory } = this.props;
    return(
      <div>
        <br />
        <h3 className="center">Order History</h3>
        { orderHistory && orderHistory.reverse().map(historyItem => {
          return (
            <div className="col s12 m6">
              <div className="card horizontal">
                <div className="card-stacked">
                  <div className="card-content ">
                    <ul>
                      <li><h5>{`Order # ${historyItem.id}`}</h5></li>
                      <li>{`Placed on: ${historyItem.created_at.slice(0, 10)}`}</li>
                      <li>{ this.moreThanOne(historyItem.order_items) ?`${historyItem.order_items[0].product.name} and ${this.moreThanOne(historyItem.order_items)} more items` : `${historyItem.order_items[0].product.name}`}</li>
                      <li>{`Status: ${historyItem.status}`}</li>
                    </ul>
                  </div>
                  <div className="card-action light-blue accent-1 push-s7">
                    <Link to={`/orderHistory/${historyItem.id}`}href="#" className="white-text ">see details</Link>
                  </div>
                </div>
              </div>
            </div>

          )
        }

          )}
       <br />
      </div>
    );
  }
}

const mapStateToProps = ({orderHistory}) => ({
 orderHistory
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderHistory);
