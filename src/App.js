import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Header from './components/Nav/Header';
import Login from './components/Login/Login';
import Addcars from './components/Car/Addcars';

function App() {
  return (
    <Router>
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
