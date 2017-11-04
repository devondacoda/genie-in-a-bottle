import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from '../store'; 
import { SearchBar } from '../components';


function NavBar(props) {
  const { handleClick, isLoggedIn } = props;
  return (
    <nav className="navbar navbar-expand-md bg-primary navbar-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <b className="">Genie in a Bottle</b>
        </NavLink>
        <SearchBar />
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />{""}
        </button>
        <div className="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
          <ul className="navbar-nav">
            {isLoggedIn 
              ? <div /> 
              : <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Sign Up
                </NavLink>
              </li>}
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>
          </ul>
          {isLoggedIn 
            ? <NavLink to="/" 
              className="btn navbar-btn ml-2 text-white btn-secondary"
              onClick={handleClick}>
              <i className="fa d-inline fa-lg fa-user-circle-o"/> Sign Out
            </NavLink> 
            : <NavLink to="/login" className="btn navbar-btn ml-2 text-white btn-secondary">
              <i className="fa d-inline fa-lg fa-user-circle-o" /> Sign in
            </NavLink>}
        </div>
      </div>
    </nav>
  );
}


/**
 * CONTAINER
 */
const mapState = (state) => ({
    isLoggedIn: !!state.user.id
  });

const mapDispatch = (dispatch) => ({
    handleClick () {
      dispatch(logout());
    }
  });

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(NavBar));

/**
 * PROP TYPES
 */
NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
