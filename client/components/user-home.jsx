import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AllProducts } from './index';


/**
 * COMPONENT
 */
export class UserHome extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        {
          this.props.email
          ? <div className="text-center"> Hey, {this.props.email}</div>
          : <div className="text-center"> Welcome, Guest </div>
        }
        <div className="py-1 bg-dark">
          <div className="container">
            <div className="row">
              <NavLink to="/products">
                <div className="col-md-6">
                  <h3 className="text-center text-white">Browse</h3>
                </div>
              </NavLink>
              <div className="col-md-6">
                <h3 className="text-center text-white">Sell
                  <br />
                </h3>
              </div>
            </div>
          </div>
        </div>
        <AllProducts />
      </div>
    );
  }
}


/**
 * CONTAINER
 */
const mapState = state => ({
  email: state.user.email,
});

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
};