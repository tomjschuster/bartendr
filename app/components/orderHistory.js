import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import OrderHistoryItem from './OrderHistoryItem';

class OrderHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { orderHistory } = this.props;
    return(
      <div>
        <br />
        <h3 className="center">Order History</h3>
        {orderHistory && orderHistory.map(historyItem => {
          return (
            <div className="col s12 m6">
              <div className="card horizontal">
                <div className="card-stacked">
                  <div className="card-content">
                    <h5>{historyItem.created_at.slice(0, 10)}</h5>
                    <p>NAme of first product and how many more</p>
                  </div>
                  <div className="card-action light-blue-text text-accent-2 push-s7">
                    <Link to={`/orderHistory/${historyItem.id}`}href="#" className="light-blue-text text-accent-2">see details</Link>
                  </div>
                </div>
              </div>
            </div>

          )
        }

          )}

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
