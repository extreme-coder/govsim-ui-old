import React from 'react';

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
    Link,
    withRouter
  } from "react-router-dom";

import EditStudent from './EditStudent';
import Students from './Students';

const Routes = ({ location }) => {
    return (
        <Switch>    
          <Route path="/signup">
            <SignupPage />
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
    )
}

export default withRouter(Routes);