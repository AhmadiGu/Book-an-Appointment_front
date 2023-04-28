import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <h1>
      <NavLink to="/" className="logo">
        Tesla Cars Rental
      </NavLink>
    </h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="active">
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="active">
            Log in
          </NavLink>
        </li>
        <li>
          <NavLink to="/addcars" className="active">
            Add Cars
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
