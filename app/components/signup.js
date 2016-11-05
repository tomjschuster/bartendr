import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        { this.props.auth ? (
          <div className="row">
            <div className="col s3">
            </div>
            <div className="col s6">
              <table className="table">
                  <tr>
                    <td><Link to="/products"><button style={{width: '100%', maxWidth: '250px'}} className="btn">Keep Shopping</button></Link></td>
                    <td><Link to="/cart"><button style={{width: '100%', maxWidth: '250px'}} className="btn">Go to Cart</button></Link></td>
                  </tr>
              </table>
            </div>
            <div className="col s3">
            </div>
          </div>
          ) : (
            <div>
              <h3>Sign Up</h3>
              <form>
                <input name="name" type="text" placeholder="Name"/>
                <input name="email" type="email" placeholder="Email"/>
                <input name="address" rows="4" placeholder="Address" />
                <input name="password" type="password" placeholder="Password"/>
                <input name="password-confirmation" type="password" placeholder="Confirm Password"/>
                <button type="submit" className="btn">Sign Up</button>
              </form>
            </div>
        )}
      </div>
    );
  }
}


const mapStateToProps = ({auth}) => ({
  auth
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
