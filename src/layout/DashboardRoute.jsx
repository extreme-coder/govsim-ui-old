import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Sidebar from './Sidebar'

class DashboardLayout extends React.Component {
  isAuthenticated(role) {
    let user = localStorage.getItem('user');
    if (user != null) {
      user = JSON.parse(user).user
      // if (user != null && (role == -1 || user.roles.includes(role)) ) {
      return true;
      // }
    }
    return false;
  }

  render() {
    return this.isAuthenticated(1) ? (
      this.renderContent()
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: this.props.location }
        }}
      />
    )
  }

  renderContent() {
    return (
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              { this.props.children }
            </div>
          </div>
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Classik 2020</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}


const DashboardRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <DashboardLayout>
        <Component {...matchProps} />
      </DashboardLayout>
    )}
  />
);

export default DashboardRoute;
