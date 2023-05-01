import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import {
  UilCarSideview,
  UilPlus,
  UilBook,
  UilPlusCircle,
  UilTrashAlt, UilSignout, UilFacebook, UilInstagram, UilLinkedin, UilSlack, UilTwitter,
} from '@iconscout/react-unicons';

const Header = () => {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowDimension < 768) {
    return (
      <div className="header">
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item mb-1">
              <NavLink to="/" className="nav-link active p-3">
                Home
              </NavLink>
            </li>
            <li className="nav-item mb-1">
              <NavLink to="/cars" className="nav-link p-3">
                <UilCarSideview />
              </NavLink>
            </li>
            <li className="nav-item mb-1">
              <NavLink to="/addcars" className="nav-link p-3">
                <UilPlusCircle />
              </NavLink>
            </li>
            <li className="nav-item mb-1">
              <NavLink to="/reservedCars" className="nav-link p-3">
                <UilBook />
              </NavLink>
            </li>
            <li className="nav-item mb-1">
              <NavLink to="/new_reservations" className="nav-link p-3">
                <UilPlus />
              </NavLink>
            </li>

            <li className="nav-item mb-1">
              <NavLink to="/new_reservations" className="nav-link p-3">
                <UilTrashAlt />
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/new_reservations" className="nav-link p-3">
                <UilSignout />
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
    );
  }
  return (
    <div className="header">
      <nav className="navbar">
        <h1>
          <NavLink to="/" className="logo">
            Tecarena
          </NavLink>
        </h1>
        <ul className="navbar-nav">
          <li className="nav-item mb-1">
            <NavLink to="/" className="nav-link active p-3">
              Home
            </NavLink>
          </li>
          <li className="nav-item mb-1">
            <NavLink to="/cars" className="nav-link p-3">
              <UilCarSideview />
              <span> Cars</span>
            </NavLink>
          </li>
          <li className="nav-item mb-1">
            <NavLink to="/addcars" className="nav-link p-3">
              <UilPlusCircle />
              <span> Add Cars</span>
            </NavLink>
          </li>
          <li className="nav-item mb-1">
            <NavLink to="/reservedCars" className="nav-link p-3">
              <UilBook />
              <span>My Reservations</span>
            </NavLink>
          </li>
          <li className="nav-item mb-1">
            <NavLink to="/new_reservations" className="nav-link p-3">
              <UilPlus />
              <span>New Reservation</span>
            </NavLink>
          </li>

          <li className="nav-item mb-1">
            <NavLink to="/new_reservations" className="nav-link p-3">
              <UilTrashAlt />
              <span>Delete Car</span>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/new_reservations" className="nav-link p-3">
              <UilSignout />
              <span>Log Out</span>
            </NavLink>
          </li>

        </ul>
        <div className="media">
          <ul className="media-ul">
            <li><UilFacebook /></li>
            <li><UilInstagram /></li>
            <li><UilLinkedin /></li>
            <li><UilSlack /></li>
            <li><UilTwitter /></li>
          </ul>
          <p>Copyright &copy;. All rights reserved</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
