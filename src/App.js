import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Header from './components/Nav/Header';
import Login from './components/Login/Login';
import ReservationNew from './components/Reservation/ReservationNew';
import ReservedCars from './components/Reservation/ReservedCars';
import CarDetails from './components/Car/Detials/CarsDetails';
import Cars from './components/Car/Cars';
import AddCar from './components/Car/AddCars';
import Home from './components/Home/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div className="App row">
        {isLoggedIn ? (
          <>
            <div className="menu fixed left-0 top-0 bottom-0 h-screen w-52 shadow-lg py-10 px-4 fade-in col-2">
              <Header />
            </div>
            <div className="content col-10">
              <Routes>
                <Route exact path="/cars" element={<Cars />} />
                <Route exact path="/new_reservations" element={<ReservationNew />} />
                <Route exact path="/reservedCars" element={<ReservedCars />} />
                <Route exact path="/addcars" element={<AddCar />} />
                <Route exact path="/cars/:id" element={<CarDetails />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
