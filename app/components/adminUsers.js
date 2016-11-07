import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import axios from 'axios';

export default class AdminUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      status: null
    }
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
   // console.log("this.setState", this.setState);
    const setState2 = this.setState.bind(this);
    axios.get('/api/users')
    .then( function(res) {
      // console.log("res.data", res.data)
      setState2({users: res.data});
    })
    .catch( (err) => console.error(err) );
  }

  // Inside onSubmit:  (e) => this.props.updateUser(e, user.id)

  deleteUser(userId) {
    // console.log("updateUser is RUNNING")
    const setState2 = this.setState.bind(this);

     // console.log("evt", evt);
     // console.log(`/api/users/${userId}`);
     // console.log("userInfo", userInfo)
    axios.delete(`/api/users/${userId}`)
    .then( function(res) {
      console.log("res", res);
      setState2({status: "Delete Status: " + res.data.status + " " + res.data.status.text})

      return axios.get('/api/users');
    })
    .then( function(res) {
        // console.log("res.data", res.data)
      setState2({users: res.data});
    })
    .catch( (err) => console.log(err) );

  }

  updateUser(evt, userId) {
     // console.log("updateUser is RUNNING")
     const setState2 = this.setState.bind(this);

     var userInfo = {
      name: evt.target.name.value,
      email: evt.target.email.value,
      address: evt.target.address.value,
      isAdmin: evt.target.isAdmin.value
     }
     evt.preventDefault();
     // console.log("evt", evt);
     // console.log(`/api/users/${userId}`);
     // console.log("userInfo", userInfo)
     axios.put(`/api/users/${userId}`, userInfo)
    .then( function(res) {
      // console.log("res.data", res.data)
      setState2({users: res.data, status: "Update Status: " + res.data.status + " " + res.data.status.text})
      ;
    })
    .catch( (err) => console.log(err) );
  }

  render() {
    return(
      <div>
        <br />
        <h2>God Mode: Users (Admin)</h2>
        <h4>Current Status: { this.state.status ? `${this.state.status}` : <span>Normal</span>}</h4>
          {

              this.state.users && this.state.users.map( user =>
                (
                  <div className="row" key={user.id} >

                    <form onSubmit={ (evt) => this.updateUser(evt, user.id)}>
                    {user.id}
                      <input name="name" type="text" placeholder="Name" defaultValue={`${user.name}`}/>
                      <input name="email" type="text" placeholder="Email" defaultValue={`${user.email}`}/>
                      <input name="address" type="text" placeholder="Address" defaultValue={`${user.address}`}/>
                      <input name="isAdmin" type="text" id="myCheckbox" placeholder="Admin Status" defaultValue={`${user.isAdmin}`}/>

                        <button className="right btn waves-effect light-blue accent-2 modal-trigger" type="submit" name="action">Update
                          <i className="material-icons right">send</i>
                        </button>
                    </form>
                    <button onClick={(e) => this.deleteUser(user.id)} className="right btn waves-effect light-blue accent-2 modal-trigger" type="button" name="action">Delete
                      <i className="material-icons right">send</i>
                    </button>
                 </div>
                ))
            }
            {
              this.state.status && Materialize.toast(this.state.status, 8000)
            }
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
