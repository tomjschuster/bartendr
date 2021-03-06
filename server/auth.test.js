const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const User = require('APP/db/models/user')
const app = require('./start')

const alice = {
  username: 'alice@secrets.org',
  password: '12345'
}

xdescribe('/api/auth', () => {
  before('create a user', () =>
    db.didSync
      .then(() =>
        User.create(
          {email: alice.username,
          password: alice.password
        })
      )
  )

  xdescribe('POST /local/login (username, password)', () => {
    xit('succeeds with a valid username and password', () =>
      request(app)
        .post('/api/auth/local/login')
        .send(alice)
        .expect(302)
        .expect('Set-Cookie', /session=.*/)
        .expect('Location', '/')
      )

    xit('fails with an invalid username and password', () =>
      request(app)
        .post('/api/auth/local/login')
        .send({username: alice.username, password: 'wrong'})
        .expect(401)
      )
  })

  xdescribe('GET /whoami', () => {
    xdescribe('when logged in,', () => {
      const agent = request.agent(app)
      before('log in', () => agent
        .post('/api/auth/local/login')
        .send(alice))

      xit('responds with the currently logged in user', () =>
        agent.get('/api/auth/whoami')
          .set('Accept', 'application/json')
          .expect(200)
          .then(res => expect(res.body).to.contain({
            email: alice.username
          }))
      )
    })

    xit('when not logged in, responds with an empty object', () =>
      request(app).get('/api/auth/whoami')
        .expect(200)
        .then(res => expect(res.body).to.eql({}))
    )
  })
})
