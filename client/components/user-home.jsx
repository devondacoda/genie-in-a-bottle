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
    const { isLoggedIn, user } = this.props;
    return (
      <div>
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
        {
          user.email
          ? <div className="text-center"><h3>Hey, {user.name}</h3></div>
          : <h3 className="text-center"> Welcome, Guest </h3>
        }
        <AllProducts />
      </div>
    );
  }
}


/**
 * CONTAINER
 */
const mapState = state => ({
  user: state.user,
});

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
};
