import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import {Route, Redirect} from 'react-router-dom'

class DashboardLayout extends React.Component {

  isAuthenticated(role) {
    let user = localStorage.getItem('user');
    if (user != null) {
      user = JSON.parse(user).user
      //if (user != null && (role == -1 || user.roles.includes(role)) ) {
      return true;
      //}
    }
    return false;
  }
  render() {    
    return this.isAuthenticated(1) ? (
      this.renderContent()
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: this.props.location }
        }}
      />
    )
  }
  renderContent() {        
      return (            
          <div id="wrapper">                        
            <Sidebar /> 
            <div id="content-wrapper" class="d-flex flex-column">    
              <div id="content">                            
                <Header />
                <div class="container-fluid">                            
                  { this.props.children }     
                </div>         
              </div>
              <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                  <div class="copyright text-center my-auto">
                    <span>Copyright &copy; Your Website 2019</span>
                  </div>
                </div>
              </footer>
            </div>
          </div>                       
      );
  }

}



const DashboardRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <DashboardLayout>  
          <Component {...matchProps} />  
      </DashboardLayout>  
    )} />  
  )  
};  

export default DashboardRoute;  