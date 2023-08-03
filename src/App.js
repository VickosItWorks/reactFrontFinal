import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Expandmovie from './Expandmovie';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import User from './User'
//import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="movie/:imdbID" element={<Expandmovie/>}></Route>
          </Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/user" element={<User/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
