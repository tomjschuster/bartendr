import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="row">
        <div className="col s12">
          <br /><br />
          <h3>About The Bartendrs</h3>
          <hr />
          <h5>Created only seven days ago, we are a for-profit company on a mission: we want to help people drink more, feel better, and party hardy!</h5>

          <div className="col 2"></div>
          <div className="col s10">
            <div className="col s10 m2">
            <img src="/meet_the_team/about_splash.png" height="300px" align="right"/>
            </div>

            <div className="col m2">
            </div>

            <div className="col s10 m6">
            <p>
            Today there are still millions of people who want to drink. But in this day and age, we should have everything available at our fingertips. At Bartendrs, we try our best to provide this service.
            </p>

            <p>
            We are dedicated and committed to providing you a wide array of products, so more people can benefit, no matter where they are in the United States.
            </p>

            <p>
            And, if you can believe it, this company was built a mere week ago. Put together by some crazy algorithm, <Link to="/meetTheTeam">this team of people</Link> worked like mad to provide all of you a seamless shopping experience while meeting your alcoholic needs.
            </p>

            <p>
            There was little sleep to be had and lots of work that was done but we all hope you enjoy your time here with us.
            </p>

            <p>
            Best wishes from the team at Bartendrs and from the 1609 cohort of Fullstack Academy!
            </p>

            <p>
            And remember, keep drinking (and paying our bills)!
            </p>
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
)(AboutUs);
