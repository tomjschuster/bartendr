import {newError} from "./error";

/*----------  INITIAL STATE  ----------*/
const initialState = null;

/*----------  ACTION TYPES  ----------*/

const AUTHENTICATED = 'AUTHENTICATED'
const LOGOUT = 'LOGOUT'

/*----------  ACTION CREATORS  ----------*/

export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const logout = () => ({
  type: LOGOUT
})

/*----------  THUNKS  ----------*/

import axios from 'axios'

export const login = (username, password) =>
  dispatch => {
    const body = {username, password}
    console.log('req body=', body)
    return axios.post('/api/auth/local/login', body)
      .then(() => dispatch(whoami()))
  }

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        if (!Object.keys(user).length) {
          return dispatch(authenticated(null))
        }
        dispatch(authenticated(user))
      })


// export const setCurrentUser = (user) =>
//   dispatch =>



/* THUNK */
export const createNewUser = (user) =>
  dispatch =>
    axios.post("/api/users", user)
      .then(response => {
        console.log("response", response);
        if(response.status === 201) {
          user.password && dispatch(login(user.email, user.password));
        } else
        {
          dispatch(newError(response));
          // dispatch(setError(response.data));
        }
      })
      .catch(error =>
        {
          dispatch(newError(error));
          // console.log(error.message);
         });

/////// WTF!!!!!!!!!!!!!!!!!!!!!!!! (the destroy session logout thing...Getting 500 status error on logout)
export const endSession = () =>
  dispatch =>
    axios.get("api/logout")
      // .then(() => dispatch(logout())) THIS IS NOT AN ACCEPTABLE WORK AROUND!
      .catch(() => dispatch(logout()))

/*----------  REDUCER  ----------*/

export default (state = initialState, action) => {
  switch (action.type) {
  case AUTHENTICATED:
    return action.user;
  case LOGOUT:
    return null;
  default: return state;
  }
};


/* api/users POST request response body

// unsuccessful post of new user, response body, status 400
{
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "email must be unique"
    }
  ]
}

// successful post of new user, response body, status 201
{
  "id": 1,
  "name": "Dave",
  "email": "dave@dave.com",
  "password": "1234",
  "address": "1600 Pennsylvania Ave NW, Washington, DC 20500",
  "isAdmin": false,
  "updated_at": "2016-11-05T20:08:32.982Z",
  "created_at": "2016-11-05T20:08:32.982Z",
  "password_digest": "$2a$10$z2QjkkCUDFBAUyJWNm9AguDUD7f6RWv9UwfQiuENQykCGauO0n5c."
}



*/

