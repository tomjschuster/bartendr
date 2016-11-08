import React, { Component } from 'react';
import { connect } from 'react-redux';

class MeetTheTeam extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="row">
        <div className="col s12">
          <br /><br />
          <h3>Meet Our Bartendrs</h3>
          <h5>They put the "magic" in automagically</h5>
          <br />
          <div className="col s12 m3 center">
            <img src="/meet_the_team/tom.jpg" height="250px"/>
            <p>Meet Tom!</p>
            <p>
            Along with working endlessly on his hours long train ride to and from home, he's our SQL and Sequelize expert.
            </p>
          </div>

          <div className="col s12 m3 center">
            <img src="/meet_the_team/nikki.jpg" height="250px"/>
            <p>Meet Nikki!</p>
            <p>
            A badass with React and Redux, she makes magic happen from the back-end to front-end.
            </p>
          </div>

          <div className="col s12 m3 center">
            <img src="/meet_the_team/david.jpg" height="250px"/>
            <p>Meet David!</p>
            <p>
            Our resident doc is in the house giving you godly admin privileges if you need.
            </p>
          </div>

          <div className="col s12 m3 center">
            <img src="/meet_the_team/sophia.jpg" height="250px"/>
            <p>Meet Sophia!</p>
            <p>
            Busting out the moves for your most epic UI experience.
            </p>
          </div>
        </div>

        <div className="col s12">
        <br /><br />
        <br /><br />
          <h3>Honorable Mentions</h3>
          <div className="col s12 m6 center">
            <img src="/meet_the_team/ben.png" height="250px"/>
            <p>Meet Ben!</p>
            <p>
            Our code reviewer extraordinaire; also bringing our team fun commentary on ridiculous Doom code comments.
            </p>
          </div>

          <div className="col s12 m6 center">
            <img src="/meet_the_team/claire.png" height="250px"/>
            <p>Meet Claire!</p>
            <p>
            Our mysterious fellow that appears out of nowhere to provide us chapters of knowledge from the hitchhiker's guide to Grace Shopper.
            </p>
          </div>
        </div>


        <div className="col s12 center">
        <br /><br />
        <br /><br />
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
)(MeetTheTeam);
