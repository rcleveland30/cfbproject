import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = () => {

  // const handleLogout = () => {
  //   localStorage.clear()
  // };

  return (
    <header>
      <div className="y-wrap">
        <div className="site-header">
          <h1 className='site-name'>American University Football Weekend</h1>
        </div>  
        <nav className="nav-bar">
          <NavLink className="nav-home" to="/">Home</NavLink>
          <NavLink className="nav-about" to="about">About</NavLink>
          <NavLink className="nav-schedule" to="schedule">Schedule</NavLink>
          <NavLink className="nav-teams" to="teams">My Teams</NavLink>
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