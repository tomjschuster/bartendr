import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Terms extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="row">
        <div className="col s12">
          <br /><br />
          <h3>Terms & Conditions</h3>
          <hr />
          <h5>Each item in your order is sold by Bartendr LLC</h5>

          <p>
          All orders will have additional shipping and handling charges applied as well as any additional taxes.
          </p>

          <p>
          In the case of gifts or other purchases made on behalf of another recipient, you also agree to grant the foregoing authorizations on behalf of the recipient designated in your order.
          </p>

          <p>
          To obtain details regarding the Actual Import Fees, or to obtain documentation or receipts in connection with customs clearance, you may contact the Designated Carrier specified in your shipment confirmation.
          </p>

          <p>
          Pursuant to these terms, title and risk of loss for the items transfer to the recipient upon delivery to the common carrier in the United States.
          </p>

          <p>
          <strong>Limitations</strong>
          </p>

          <p>
          Please note that we do not ship internationally and if you have provided an inaccurate address outside of the US, then we are not liable for those items. You are responsible for ensuring the correct address is entered as the shipping address.
          </p>

          <p>
          <strong>Privacy</strong>
          </p>

          <p>
          Your privacy is important to us, and we know that you care about how information about your order is used and shared. We would like our international customers and customers shipping products internationally to be aware that cross-border shipments are subject to opening and inspection by customs and/or postal authorities.
          </p>

          <p>
          Also, we may provide certain order, shipment, and product information, such as titles, to our domestic carriers, and such information may be communicated by the carriers to customs and/or postal authorities in order to facilitate customs clearance and comply with local laws.
          </p>

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
)(Terms);
