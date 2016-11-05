import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Collapsible, CollapsibleItem } from 'react-materialize';

class ShippingForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let stateStrings = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY', 'AE', 'AA', 'AP'];
    return(
      <div className="row ">
    <form className="col s12 ">
      <div className="row">
        <div className="input-field col s12">
          <input id="first_name" type="text" className="validate" />
          <label htmlFor="first_name" className="light-blue-text text-accent-2">First Name</label>
        </div>
        <div className="input-field col s12">
          <input id="last_name" type="text" className="validate" />
          <label htmlFor="last_name" className="light-blue-text text-accent-2">Last Name</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label htmlFor="email" data-error="invalid email" data-success="awesome" className="light-blue-text text-accent-2">Email</label>
        </div>
      </div>

       <div className="row">
        <div className="input-field col s12">
          <input id="last_name" type="text" className="validate" />
          <label htmlFor="last_name" className="light-blue-text text-accent-2">Street Address</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s4">
          <input id="last_name" type="text" className="validate" />
          <label htmlFor="last_name" className="light-blue-text text-accent-2">City</label>
        </div>

        <div className="input-field col s4">
          <Input s={12} type='select'>
            <option value="0" disabled selected></option>
            {stateStrings.map((state, index) => {
              return (
                      <option value={index} key={index}>{state}</option>
                      );
            } )}

         </Input>
          <label className="light-blue-text text-accent-2">State</label>
        </div>

        <div className="input-field col s4">
          <input id="last_name" type="text" className="validate" maxLength="5" />
          <label htmlFor="last_name" className="light-blue-text text-accent-2">ZIP</label>
        </div>
      </div>

    </form>
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
)(ShippingForm);
