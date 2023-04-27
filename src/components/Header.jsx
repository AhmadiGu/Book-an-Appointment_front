import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <div>
      <div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/signup">Sign up</NavLink></li>
          <li><NavLink to="reservations">Reservation</NavLink></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
