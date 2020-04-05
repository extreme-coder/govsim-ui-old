import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './Routes'

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


function App() {
  let loggedInUser = ''
  if (localStorage.getItem('user') != null) {
    loggedInUser = JSON.parse(localStorage.getItem('user')).user.username
  }
  return (
    <Router>
      <div>
      <h1 style={{color: "black"}}>Jack Tiger</h1>
      <h3>Welcome {loggedInUser} </h3>
        <nav>
          <ul>
            <li>
              <Link to="/signup" style ={{color: "Black"}}>Sign Up</Link>
            </li>
            <li>
              <Link to="/login" style ={{color: "Black"}}>Login</Link>
            </li>
            <li>
              <Link to="/students/new" style ={{color: "Black"}}>Add Student</Link>
            </li>
            <li>
              <Link to="/teachers/new" style ={{color: "Black"}}>Add Teacher</Link>
            </li>
            <li>
              <Link to="/classes/new" style ={{color: "Black"}}>Add Class</Link>
            </li>
            <li>
              <Link to="/rooms/new" style ={{color: "Black"}}>Add Room</Link>
            </li>
            <li>
              <Link to="/emails/new" style ={{color: "Black"}}>Compose Email</Link>
            </li>
            <li>
              <Link to="/students" style ={{color: "Black"}}>Students</Link>
            </li>
            <li>
              <Link to="/teachers" style ={{color: "Black"}}>Teachers</Link>
            </li>
            <li>
              <Link to="/classes" style ={{color: "Black"}}>Classes</Link>
            </li>
            <li>
              <Link to="/rooms" style ={{color: "Black"}}>Rooms</Link>
            </li>
            <li>
              <Link to="/emails" style ={{color: "Black"}}>Emails</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes />
      </div>
    </Router>
  );
}

export default App;
