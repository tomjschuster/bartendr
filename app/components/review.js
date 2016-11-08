import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';

class Review extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Review</h1>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="col s8">
                <i className="left material-icons prefix">grade</i>
                  <Input s={10} type='select'>
              <option value='0' disabled selected>Rating</option>
              <option value='1'>
                <i className="tiny material-icons">grade</i>
                </option>
              <option value='2'>
                <i className="tiny material-icons">grade</i>
                <i className="tiny material-icons">grade</i>
              </option>
              <option value='3'>
                <i className="tiny material-icons">grade</i>
                <i className="tiny material-icons">grade</i>
                <i className="tiny material-icons">grade</i>
              </option>
              <option value='4'>
                <i className="tiny material-icons">grade</i>
                <i className="tiny material-icons">grade</i>
                <i className="tiny material-icons">grade</i>
                <i className="tiny material-icons">grade</i>
              </option>
              <option value='5'>
                <i className="tiny material-icons">grade</i>
                <i className="tiny material-icons">grade</i>
                <i className="tiny material-icons">grade</i>
                <i className="tiny material-icons">grade</i>
                <i className="tiny material-icons">grade</i>
              </option>
            </Input>
                </div>
                <div className="col s4">
                </div>
              </div>
              <div className="row">
                <div className="input-field col s7">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                  <label for="icon_prefix2">Leave Your Review Here:</label>
                  <button className="right btn waves-effect light-blue accent-2 modal-trigger" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>

            </form>
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
)(Review);

