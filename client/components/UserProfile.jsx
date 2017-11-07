import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AllOrders } from './index';


function UserProfile(props) {
  const { isLoggedIn, user } = props;
  return (
    <div className="my-5">
      {isLoggedIn
        ? user.isAdmin 
          ? <div>
              <NavLink to="#">Edit Users</NavLink>
              <NavLink to="#">Edit Orders</NavLink>
              <NavLink to="#">Edit Products</NavLink>         
            </div>
          :<div>
            <h1 className="text-center">{user.name}</h1>
            <div>
              <h2 className="text-center prev-orders my-5">Previous Orders</h2>
              <AllOrders />
            </div>
          </div>
        : <div>
            <h1 className="text-center">Must log in to have a profile</h1>
          </div>
      }
    </div>
  );
}

const mapState = state => ({
  user: state.user,
  isLoggedIn: !!state.user.id,
});

export default connect(mapState)(UserProfile);

UserProfile.propTypes = {
  email: PropTypes.string,
};
