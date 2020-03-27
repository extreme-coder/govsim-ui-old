import React from 'react';
import logo from './logo.svg';
import './App.css';
import EditStudent from './EditStudent';
import Users from './Students';
import 'bootstrap/dist/css/bootstrap.min.css';
import Schools from './Schools';

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
      <h1>Jack Tiger</h1>
        <nav>
          <ul>
            <li>
              <Link to="/editstudent">Create new student</Link>
            </li>
            <li>
              <Link to="/schools">Schools</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
