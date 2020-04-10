import React from 'react';
import { Router, Route, Link, History, withRouter } from 'react-router-dom';

import { Collapse } from 'react-bootstrap';
import '../js/sb-admin-2.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLaughWink, faTachometerAlt, faArrowLeft, faAngleLeft } from '@fortawesome/free-solid-svg-icons'


class Sidebar extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {            
            collapse: {
                sidebar: true,
                singleview: this.routeActive(['singleview']),
                submenu: this.routeActive(['submenu'])
            }
        };
        
    };

    componentDidMount() {
                
    }

    navigator(route) {
        this.props.history.push(route);
    }

    componentWillUnmount() {        
        
    }

    routeActive(paths) {
        paths = Array.isArray(paths) ? paths : [paths];
        if (paths.indexOf(this.props.location.pathname.replace('/','')) > -1)
            return true;
        return false;
    }

    toggleItemCollapse(stateName) {
        var newCollapseState = {};
        for (let c in this.state.collapse) {
            if (this.state.collapse[c] === true && c !== stateName)
                this.state.collapse[c] = false;
        }
        this.setState({
            collapse: {
                [stateName]: !this.state.collapse[stateName]
            }
        });
    }

    render() {
        return (
            <aside >
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                          
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
              <div className="sidebar-brand-icon rotate-n-15">                
                <FontAwesomeIcon icon={faLaughWink} size="lg"/>
              </div>
              <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
                      
            <hr className="sidebar-divider my-0" />
                      
            <li className="nav-item active">
              <a className="nav-link" href="index.html">                
                <FontAwesomeIcon icon={faTachometerAlt} size="lg"/>
                <span>Dashboard</span></a>
            </li>

            <hr className="sidebar-divider"/>
      
            
            <div className="sidebar-heading">
                Student Management
            </div>
            <li className="nav-item">
                <Link className="nav-link" to="/students">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Students </span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/families">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Families </span>
                </Link>
            </li>
                      
            <hr className="sidebar-divider"/>
      
            
            <div className="sidebar-heading">
              Configuration
            </div>
            <li className="nav-item">
              <Link className="nav-link" to="/teachers">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Teachers </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/classes">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Classes </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="rooms">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Rooms </span>
              </Link>
            </li>
                      
            <li className="nav-item">
              <a className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" onClick={ this.toggleItemCollapse.bind(this, 'components')} >
                <i className="fas fa-fw fa-cog"></i>
                <span>Components</span>
              </a>
              <Collapse in={ this.state.collapse.components } timeout={ 100 }>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>
                    <a className="collapse-item" href="buttons.html">Buttons</a>
                    <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
              </Collapse>
            </li>
                      
            
            
            <hr className="sidebar-divider" />
      
            
            <div className="sidebar-heading">
              Communication
            </div>
      
            
            <li className="nav-item">
              <Link className="nav-link" to="/emails/new">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Compose Email </span>
              </Link>
            </li>
      
            
            <li className="nav-item">
              <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span></a>
            </li>
            
            <hr className="sidebar-divider" />

            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                <i className="fas fa-fw fa-table"></i>
                <span>Logout</span>
              </Link>
            </li>
            
            <hr className="sidebar-divider d-none d-md-block" />
      
            
            <div className="text-center d-none d-md-inline">
              <button className="rounded-circle border-0" id="sidebarToggle" >
                <FontAwesomeIcon icon={faAngleLeft} size="lg"/>
              </button>
            </div>
      
          </ul>
          </aside>
        );
    }

}

export default withRouter(Sidebar);

