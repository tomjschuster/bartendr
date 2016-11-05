const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

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

/* THUNK */

export const createNewUser = (user) =>
  dispatch =>
    axios.post("/api/users", user)
      .then(response => {
        console.log("response", response);
        if(response.status === 201) {
          dispatch(login(user.email, user.password));
        } else
        {
          alert(JSON.stringify(response));
          // dispatch(setError(response.data));
        }
      })
      .catch(console.error);


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

export default reducer
