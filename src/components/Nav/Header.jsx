import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <>
    <h1>
      <NavLink to="/" className="logo">
        Tecarena
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
