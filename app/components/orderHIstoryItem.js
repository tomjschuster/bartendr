import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderHistoryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h5> Your Order </h5>
        <div className="col s12 m6">
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a very simple card.
                I am good at containing small bits of information.</p>
                <p>I am a very simple card.
                I am good at containing small bits of information.</p>
              </div>
              <div className="card-action light-blue-text text-accent-2 push-s7">
                <a href="#" className="light-blue-text text-accent-2">see details</a>
              </div>
            </div>
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
)(OrderHistoryItem);
