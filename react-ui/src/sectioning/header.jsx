import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="y-wrap">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="search">Search</NavLink>
          <NavLink to="teams">My Teams</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;