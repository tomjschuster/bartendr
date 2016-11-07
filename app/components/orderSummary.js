import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';
import { Link } from 'react-router';
import SingleOrder from './singleOrder';
import ShippingForm from './shippingForm';

class OrderSummary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Order Summary:</h4>
        <SingleOrder />
        <br /><br />
        <h5>Shipping Details:</h5>
        <form className="col s12" onSubmit={this.props.submitNewUser}>
      <div className="row">
        <div className="input-field col s12">
          <input id="first_name" name="name" type="text" className="validate" placeholder="Name" value=""/>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="email" name="email" type="email" className="validate" placeholder="Email" value=""/>
        </div>
      </div>

       <div className="row">
        <div className="input-field col s12">
          <input id="last_name" name="address" type="text" className="validate" placeholder="Address" value=""/>
        </div>
      </div>
    </form>

        <div className="row">
          <div className="col s12">
            <br /><br />
            <button className="center btn waves-effect light-blue accent-2 modal-trigger" type="submit" name="action">Place Order
            <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>

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
)(OrderSummary);
