import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <>
    <h1>
      <NavLink to="/" className="logo">Tesla Cars Rental</NavLink>
    </h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="active">Sign up</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">Log in</NavLink>
        </li>
        <li>
          <NavLink to="reservations">Reservation</NavLink>
        </li>
        <li>
          <NavLink to="reservedCars">My Reservations</NavLink>
        </li>

        <li>
          <NavLink to="new_reservations">New Reservation</NavLink>
        </li>

      </ul>
    </nav>
  </>
);

export default Header;
