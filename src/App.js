import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';

import Header from './components/Nav/Header';
import Login from './components/Login/Login';
import ReservationAdd from './components/Reservation/ReservationAdd';
import ReservationNew from './components/Reservation/ReservationNew';
import ReservedCars from './components/Reservation/ReservedCars';
import Addcars from './components/Car/Addcars';

function App() {
  return (
    <Router>
      <div className="App row">
        <div className="menu fixed left-0 top-0 bottom-0 h-screen w-52 shadow-lg py-10 px-4 fade-in col-2"><Header /></div>
        <div className="content col-10">
          <Routes>
            <Route exact path="/signup" element={<Signup />} />

            <Route exact path="/login" element={<Login />} />

            <Route exact path="/reservations" element={<ReservationAdd />} />

            <Route exact path="/new_reservations" element={<ReservationNew />} />

            <Route exact path="/reservedCars" element={<ReservedCars />} />

          </Routes>
        </div>
      </div>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/addcars" element={<Addcars />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
