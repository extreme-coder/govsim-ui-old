import React from 'react';
import logo from './logo.svg';
import EditStudent from './EditStudent';
import Users from './Students';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Schools from './Schools';
import Classes from './Classes';
import Login from './login';
import AddTeacher from './AddTeacher';
import AddClass from './AddClass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
      <h3>Welcome {loggedInUser} </h3>
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
            <li>
              <Link to="/addteacher" style ={{color: "Black"}}>Add Teacher</Link>
            </li>
            <li>
              <Link to="/addclass" style ={{color: "Black"}}>Add Class</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/schools">
            <Schools />
          </Route>
          <Route path="/classes">
            <Classes />
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
          <Route path="/addteacher">
            <AddTeacher />
          </Route>
          <Route path="/addclass">
            <AddClass />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
