import React from 'react';
import { Route, Switch, withRouter, Redirect, NavLink } from 'react-router-dom';
import DashboardRoute from './layout/DashboardRoute';
import PublicPageRoute from './layout/PublicPageRoute';
import Login from './login';
import Logout from './logout';
import Dashboard from './pages/DashboardHome';
import SignupPage from './pages/SignupPage';
import SchoolSignup from './pages/SchoolSignup';
import Countries from './pages/Countries';
import CountryViewer from './pages/CountryViewer';


const Routes = () => (

  <Switch>
    <Route path="/signup">
      <SignupPage />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/countries/:id" component={CountryViewer} />

    <Route path="/users/:id/countries" component={Countries} />

    <Route path="/countries">
      <Countries />
    </Route>

    <Route path="/logout" component={Logout} />

    <PublicPageRoute path="/SchoolSignup/:id" component={SchoolSignup} />

    <DashboardRoute path="/dashboard" component={Dashboard} />

  </Switch>

)

export default withRouter(Routes);
