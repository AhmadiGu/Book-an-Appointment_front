import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
