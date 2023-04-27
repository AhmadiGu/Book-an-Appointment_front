import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Header from './components/Header';
import ReservationAdd from './components/Reservation/ReservationAdd';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/reservations" element={<ReservationAdd />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
