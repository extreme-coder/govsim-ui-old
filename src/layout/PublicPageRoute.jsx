import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Sidebar from './Sidebar'

class PublicPageLayout extends React.Component {
  render() {
    return this.renderContent()
  }

  renderContent() {
    return (
      <div className="container">

        <div className="row justify-content-center">

          <div className="col-xl-10 col-lg-12 col-md-9">

            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">

                      { this.props.children }

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    );
  }
}


const PublicPageRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <PublicPageLayout>
        <Component {...matchProps} />
      </PublicPageLayout>
    )}
  />
);

export default PublicPageRoute;
