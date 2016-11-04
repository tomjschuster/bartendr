import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <br/>
        <br/>
        <br/>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="col s1"></div>
              <div className="col s10">
                <img src="/media/martini-drink-with-splash.png" width="100%"/>
              </div>
              <div className="col s1"></div>
              <div className="input-field col s12">
                <i className="material-icons">search
                </i>
                <input type="text" id="autocomplete-input" className="autocomplete">
                </input>
                <label for="autocomplete-input"></label>
              </div>
            </div>
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
)(Home);

