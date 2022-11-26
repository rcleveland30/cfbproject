import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {
  return (
    <header>
      <div className="y-wrap">
        <nav className="nav-bar">
          <NavLink className="nav-home" to="/">Home</NavLink>
          <NavLink className="nav-about" to="about">About</NavLink>
          {props.isLoggedIn ? <NavLink className="nav-schedule" to="schedule">Schedule</NavLink> : null }
          {props.isLoggedIn ? <NavLink className="nav-teams" to="teams">My Teams</NavLink> : null }
          <NavLink className="nav-login" to="/login">Login</NavLink>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(Header);