import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AllOrders } from './index';


function UserProfile(props) {
  const { isLoggedIn, user } = props;
  return (
    <div>
      {isLoggedIn
        ? <div>
          <h1 className="text-center">{user.name}</h1>
          <div>
            <h1>Your Orders</h1>
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
