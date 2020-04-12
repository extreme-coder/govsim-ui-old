import React from 'react';

import Classes from './Classes';
import Emails from './emails';
import Rooms from './Rooms';
import Families from './families';
import AddFamily from './addFamily';
import Login from './login';
import Logout from './logout';
import AddTeacher from './AddTeacher';
import AddClass from './AddClass';
import AddEmail from './editEmail';
import AddRoom from './AddRoom';
import Teachers from './teachers';
import SchoolSignUp from './SchoolSignUp';
import SignupPage from './pages/SignupPage';
import DashboardHome from "./pages/DashboardHome"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

import EditStudent from './EditStudent';
import Students from './Students';
import DashboardRoute from './layout/DashboardRoute'

const Routes = ({ location }) => {

    return (

        <Switch>
            <Route path="/signup">
                <SignupPage />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/logout" component={Logout} />

            <Route path="/schoolsignup/:id" component={SchoolSignUp} />


            <DashboardRoute path="/families/:id" component={AddFamily} />
            <DashboardRoute path="/families/new" component={AddFamily} />
            <DashboardRoute path="/families" component={Families} />

            <DashboardRoute path="/rooms/:id" component={AddRoom} />
            <DashboardRoute path="/rooms/new" component={AddRoom} />
            <DashboardRoute path="/rooms" component={Rooms} />

            <DashboardRoute path="/teachers/:id" component={AddTeacher} />
            <DashboardRoute path="/teachers/new" component={AddTeacher} />
            <DashboardRoute path="/teachers" component={Teachers} />

            <DashboardRoute path="/students/:id" component={EditStudent} />
            <DashboardRoute path="/students/new" component={EditStudent} />
            <DashboardRoute path="/students" component={Students} />

            <DashboardRoute path="/schools/:id" component={SchoolSignUp} />
            <DashboardRoute path="/schools/new" component={SchoolSignUp} />

            <DashboardRoute path="/classes/:id" component={AddClass} />
            <DashboardRoute path="/classes/new" component={AddClass} />
            <DashboardRoute path="/classes" component={Classes} />

            <DashboardRoute path="/email_messages/:id" component={AddEmail} />
            <DashboardRoute path="/email_messages/new" component={AddEmail} />
            <DashboardRoute path="/email_messages" component={Emails} />



            <DashboardRoute path="/dashboard" component={DashboardHome} />

        </Switch>

    )
}

export default withRouter(Routes);