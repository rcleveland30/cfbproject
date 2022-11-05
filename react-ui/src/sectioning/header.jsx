import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import week9 from '../mocks/week9.json'
import week10 from '../mocks/week10.json'
import week11 from '../mocks/week11.json'

// import { SearchBar } from '../components/search'

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