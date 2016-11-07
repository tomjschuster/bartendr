import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {createNewUser} from "../reducers/auth.jsx";

import axios from 'axios';

export default class AdminUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      status: null
    }
  }

  componentDidMount() {
   // console.log("this.setState", this.setState);
    const setState2 = this.setState.bind(this);
    axios.get('/api/users')
    .then( function(res) {
      console.log("res.data", res.data)
      setState2({users: res.data});
    })
    .catch( (err) => console.error(err) );
  }

  updateUser(evt, userId) {
     const setState2 = this.setState.bind(this);

     var userInfo = {
      name: evt.target.name,
      email: evt.target.email,
      address: evt.target.address,
      isAdmin: evet.target.isAdmin
     }
     evt.preventDefault();
     axios.put(`/api/users/${userId}`, userInfo)
    .then( function(res) {
      console.log("res.data", res.data)
      setState2({status: res.data})
      ;
    })
    .catch( (err) => console.error(err) );
  }

  render() {
    return(
      <div>
        <br />
        <h2>God Mode (Admin)</h2>
        <h4>Current Status: {`${this.state.status}`}</h4>
        <table className="responsive-table highlight">
          <thead>
            <tr>
              <th data-field="id">User ID  / Name  / Email  / Address  / Admin Status </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.users && this.state.users.map( user =>
                (
                  <tr key={user.id} >
                    <form onSubmit={(e) => this.props.updateUser(e, user.id)}>
                      <td>{user.id}</td>
                      <td><input name="name" type="text" placeholder="Name" defaultValue={`${user.name}`}/></td>
                      <td><input name="email" type="text" placeholder="Name" defaultValue={`${user.email}`}/></td>
                      <td><input name="address" type="text" placeholder="Name" defaultValue={`${user.address}`}/></td>
                      <td><input name="isAdmin" type="text" placeholder="Name" defaultValue={`${user.isAdmin}`}/></td>
                      <td>
                        <button className="right btn waves-effect light-blue accent-2 modal-trigger" type="submit" name="action">Update
                          <i className="material-icons right">send</i>
                        </button>
                      </td>
                   </form>
                 </tr>
                ))
             }
           </tbody>
         </table>


      </div>

    );
  }
}

/*
<th data-field="name">Name</th>
              <th data-field="email">Email</th>
              <th data-field="password">Password</th>
              <th data-field="address">Address</th>
              <th data-field="isAdmin">Admin Status</th>
              <th data-field="remove-btn"></th>
*/


// const mapStateToProps = ({auth, error}) => ({
//   auth,
//   error
// });

// const mapDispatchToProps = (dispatch) => ({
//   submitNewUser: function (evt) {
//     evt.preventDefault();
//     // console.log("evt.target.name.value", evt.target.name.value)
//     let user = {
//       name: evt.target.name.value,
//       email: evt.target.email.value,
//       address: evt.target.address.value,
//       password: evt.target.password.value,
//       password_confirmation: evt.target.password_confirmation.value
//     }
//     dispatch(createNewUser(user));

//   }
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Signup);
