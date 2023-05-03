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
import DeleteCar from './components/Car/DeleteCar/DeleteCar';

function App() {
  return (
    <Router>
      <div className="App row">
        <div className="fixed top-0 bottom-0 left-0 h-screen px-4 py-10 shadow-lg menu w-52 fade-in col-2"><Header /></div>
        <div className="content col-10">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cars" element={<Cars />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/new_reservations" element={<ReservationNew />} />
            <Route exact path="/reservedCars" element={<ReservedCars />} />
            <Route exact path="/addcars" element={<AddCar />} />
            <Route exact path="/deleteCar" component={<DeleteCar />} />
            <Route exact path="cars/:id" element={<CarDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
