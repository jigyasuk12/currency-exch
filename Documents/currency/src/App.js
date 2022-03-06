import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Homepage from "./Homepage"
import Signup from './Signup';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router><Routes>
                 <Route exact path='/' element={< Homepage />}></Route>
                 <Route exact path='/signup' element={< Signup />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
          </Routes></Router>
    </div>
  );
}

export default App;
