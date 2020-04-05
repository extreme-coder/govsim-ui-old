import React from 'react';
import logo from './logo.svg';
import EditStudent from './EditStudent';
import Students from './Students';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Classes from './Classes';
import Emails from './emails';
import Rooms from './Rooms';
import Login from './login';
import AddTeacher from './AddTeacher';
import AddClass from './AddClass';
import AddEmail from './editEmail';
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
              <Link to="/students/new" style ={{color: "Black"}}>Add Student</Link>
            </li>
            <li>
              <Link to="/teachers/new" style ={{color: "Black"}}>Add Teacher</Link>
            </li>
            <li>
              <Link to="/classes/new" style ={{color: "Black"}}>Add Class</Link>
            </li>
            <li>
              <Link to="/addroom" style ={{color: "Black"}}>Add Room</Link>
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
        <Switch>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/rooms">
            <Rooms />
          </Route>
         
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/rooms/:id" component={AddRoom}/>
          <Route path="/rooms/new" component={AddRoom}/>    
          <Route path="/rooms" component={Rooms} />

          <Route path="/teachers/:id" component={AddTeacher}/>
          <Route path="/teachers/new" component={AddTeacher}/>    
          <Route path="/teachers" component={Teachers} />
            
          <Route path="/students/:id" component={EditStudent}/>
          <Route path="/students/new" component={EditStudent}/>    
          <Route path="/students" component={Students} />

          <Route path="/schools/:id" component={SchoolSignUp}/>
          <Route path="/schools/new" component={SchoolSignUp}/>    
          <Route path="/classes/:id" component={AddClass}/>
          <Route path="/classes/new" component={AddClass}/>    
          <Route path="/classes" component={Classes} />

          <Route path="/emails/:id" component={AddEmail}/>
          <Route path="/emails/new" component={AddEmail}/>    
          <Route path="/emails" component={Emails} />

          <Route path="/schoolsignup">
            <SchoolSignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
