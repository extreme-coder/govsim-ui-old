import React from 'react';
import logo from './logo.svg';
import EditStudent from './EditStudent';
import Users from './Students';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Schools from './Schools';
import Login from './login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <h1 style={{color: "black"}}>Jack Tiger</h1>
        <nav>
          <ul>
            <li>
              <Link to="/editstudent" style ={{color: "Black"}}>Create new student</Link>
            </li>
            <li>
              <Link to="/schools" style ={{color: "Black"}}>Schools</Link>
            </li>
            <li>
              <Link to="/users" style ={{color: "Black"}}>Users</Link>
            </li>
            <li>
              <Link to="/login" style ={{color: "Black"}}>Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/schools">
            <Schools />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/editstudent">
            <EditStudent />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
