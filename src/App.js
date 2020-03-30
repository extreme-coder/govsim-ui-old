import React from 'react';
import logo from './logo.svg';
import EditStudent from './EditStudent';
import Users from './Students';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Classes from './Classes';
import Rooms from './Rooms';
import Login from './login';
import AddTeacher from './AddTeacher';
import AddClass from './AddClass';
import AddRoom from './AddRoom';
import Teachers from './teachers';
import SchoolSignUp from './SchoolSignUp';
import SignupPage from './pages/SignupPage';
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
              <Link to="/editstudent" style ={{color: "Black"}}>Add Student</Link>
            </li>
            <li>
              <Link to="/teachers/new" style ={{color: "Black"}}>Add Teacher</Link>
            </li>
            <li>
              <Link to="/addclass" style ={{color: "Black"}}>Add Class</Link>
            </li>
            <li>
              <Link to="/users" style ={{color: "Black"}}>Students</Link>
            </li>
            <li>
              <Link to="/teachers" style ={{color: "Black"}}>Teachers</Link>
            </li>
            <li>
              <Link to="/classes" style ={{color: "Black"}}>Classes</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/classes">
            <Classes />
          </Route>
          <Route path="/rooms">
            <Rooms />
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

                              

          <Route path="/addclass">
            <AddClass />
          </Route>
          <Route path="/addroom">
            <AddRoom />
          </Route>

          <Route path="/teachers/:id" component={AddTeacher}/>
          <Route path="/teachers/new" component={AddTeacher}/>    
          <Route path="/teachers" component={Teachers} />
            
            
          <Route path="/schoolsignup">
            <SchoolSignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
