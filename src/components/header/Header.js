import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink exact to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
