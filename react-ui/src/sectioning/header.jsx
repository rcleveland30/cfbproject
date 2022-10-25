import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="y-wrap">
        <nav className="nav-bar">
          <NavLink className="nav-home" to="/">Home</NavLink>
          <NavLink className="nav-schedule" to="schedule">Schedule</NavLink>
          <NavLink className="nav-teams" to="teams">My Teams</NavLink>
          <NavLink className="nav-about" to="about">About</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;