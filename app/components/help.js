import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Help extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="row">
        <div className="col s12">
          <br /><br />
          <h3>FAQ</h3>
          <hr />
          <h5>Your questions answered here:</h5>

          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
            </div>
            <div className="card-content" height="300px">
              <span className="card-title activator grey-text text-darken-4">Where is my shipment?<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
              <p>If you've recieved your order confirmation, please allow for at least 7 business days before sending in inquiries about your shipment.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
            </div>
            <div className="card-content" height="300px">
              <span className="card-title activator grey-text text-darken-4">What delivery system do you use?<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
              <p>United States Postal Service (USPS). Please understand their limitations and that shipments will typically take at least 7 business days to arrive.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
            </div>
            <div className="card-content" height="300px">
              <span className="card-title activator grey-text text-darken-4">Can I change my shipping address?<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
              <p>Unfortunately, orders cannot be changed after they are submitted. You can reach out to USPS to try and change the shipping address on their end but all charges have already been applied.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
            </div>
            <div className="card-content" height="300px">
              <span className="card-title activator grey-text text-darken-4">My shipment says delivered but it never arrived.<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
              <p>All orders that have been marked as delivered must be dealt directly with <a href="https://www.usps.com/help/contact-us.htm">USPS customer service</a>.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
            </div>
            <div className="card-content" height="300px">
              <span className="card-title activator grey-text text-darken-4">Who are the sellers?<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
              <p>All items are sold here at Bartendrs LLC.</p>
            </div>
          </div>

        </div>

        <div className="col s12 center">
        <br /><br />
          <div className="col s12">
          <img src="/meet_the_team/1609react.png" height="60px"/>
          </div>

          <div className="col s12">
          <img src="/meet_the_team/fa-logo.png" height="100px"/>
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
)(Help);
