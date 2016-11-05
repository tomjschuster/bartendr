import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';
import { Link } from 'react-router';

class OrderSummary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
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
