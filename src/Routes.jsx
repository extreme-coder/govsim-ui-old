import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AddClass from './AddClass';
import AddFamily from './addFamily';
import AddLevel from './AddLevel';
import AddRoom from './AddRoom';
import AddTeacher from './AddTeacher';
import Classes from './Classes';
import AddEmail from './editEmail';
import EditStudent from './EditStudent';
import Emails from './emails';
import Families from './families';
import DashboardRoute from './layout/DashboardRoute';
import PublicPageRoute from './layout/PublicPageRoute';
import Levels from './levels';
import Login from './login';
import Logout from './logout';
import Dashboard from './pages/DashboardHome';
import SignupPage from './pages/SignupPage';
import TeacherAllocations from './pages/TeacherAllocations';
import Rooms from './Rooms';
import SchoolForm from './SchoolForm';
import SchoolSignup from './pages/SchoolSignup';
import Students from './Students';
import Teachers from './teachers';


const Routes = () => (

  <Switch>
    <Route path="/signup">
      <SignupPage />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/logout" component={Logout} />

    <PublicPageRoute path="/SchoolSignup/:id" component={SchoolSignup} />


    <DashboardRoute path="/families/:id" component={AddFamily} />
    <DashboardRoute path="/families/new" component={AddFamily} />
    <DashboardRoute path="/families" component={Families} />

    <DashboardRoute path="/rooms/:id" component={AddRoom} />
    <DashboardRoute path="/rooms/new" component={AddRoom} />
    <DashboardRoute path="/rooms" component={Rooms} />

    <DashboardRoute path="/levels/:id" component={AddLevel} />
    <DashboardRoute path="/levels/new" component={AddLevel} />
    <DashboardRoute path="/levels" component={Levels} />

    <DashboardRoute path="/teachers/:id" component={AddTeacher} />
    <DashboardRoute path="/teachers/new" component={AddTeacher} />
    <DashboardRoute path="/teachers" component={Teachers} />

    <DashboardRoute path="/students/:id" component={EditStudent} />
    <DashboardRoute path="/students/new" component={EditStudent} />
    <DashboardRoute path="/students" component={Students} />

    <DashboardRoute path="/schools/:id" component={SchoolForm} />
    <DashboardRoute path="/schools/new" component={SchoolForm} />

    <DashboardRoute path="/classes/:id" component={AddClass} />
    <DashboardRoute path="/classes/new" component={AddClass} />
    <DashboardRoute path="/classes" component={Classes} />

    <DashboardRoute path="/email_messages/:id" component={AddEmail} />
    <DashboardRoute path="/email_messages/new" component={AddEmail} />
    <DashboardRoute path="/email_messages" component={Emails} />

    <DashboardRoute path="/teacher_allocations" component={TeacherAllocations} />

    <DashboardRoute path="/dashboard" component={Dashboard} />

  </Switch>

)

export default withRouter(Routes);
