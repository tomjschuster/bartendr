import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';
import { Link } from 'react-router';
import { createNewUser } from "../reducers/auth.jsx";

class ShippingForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let stateStrings = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY', 'AE', 'AA', 'AP'];
    return(
      <div>
        <div className="row">
          <div className="col s12">
            <br /><br />
            <button className="center btn waves-effect light-blue accent-2 modal-trigger" type="submit" name="action">Login
            <i className="material-icons right"></i>
           </button>
          </div>
          <div className="col s12">
            <br /><br />
            <button className="center btn waves-effect light-blue accent-2 modal-trigger" type="submit" name="action">Sign Up
            <i className="material-icons right"></i>
           </button>
          </div>
        </div>
      <div className="row ">
      <br /><br />
      <h3>Continue as a Guest:</h3>

    <form className="col s12" onSubmit={this.props.submitNewUser}>
      <div className="row">
        <div className="input-field col s12">
          <input id="first_name" name="name" type="text" className="validate" />
          <label htmlFor="first_name" className="light-blue-text text-accent-2">Name</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="email" name="email" type="email" className="validate" />
          <label htmlFor="email" data-error="invalid email" data-success="awesome" className="light-blue-text text-accent-2">Email</label>
        </div>
      </div>

       <div className="row">
        <div className="input-field col s12">
          <input id="last_name" name="address" type="text" className="validate" />
          <label htmlFor="last_name" className="light-blue-text text-accent-2">Street Address</label>
        </div>
      </div>

        <button className="right btn waves-effect light-blue accent-2 modal-trigger" type="submit" name="action" onClick={()=> window.location='/checkout'}>Continue
          <i className="material-icons right">send</i>
        </button>

    </form>
  </div>
  </div>

    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  submitNewUser: function (evt) {
    evt.preventDefault();
    console.log("inside submit new user")
    let user = {
      name: evt.target.name.value,
      email: evt.target.email.value,
      address: evt.target.address.value,
      password: null
    }
    dispatch(createNewUser(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShippingForm);

/*
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
*/
