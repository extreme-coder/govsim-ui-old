import React from 'react';
import {Link} from "react-router-dom";


class Header extends React.Component {

    componentDidMount() {}


    render() {
        let loggedInUser = ''
        let currentSchool = ''
        if (localStorage.getItem('user') != null) {
            loggedInUser = JSON.parse(localStorage.getItem('user')).user.username
            currentSchool = JSON.parse(localStorage.getItem('user')).user.school

        }

        return (
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                </button>


                <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div class="input-group">
                        <h3>{
                            currentSchool.name
                        }</h3>
                    </div>
                </form>


                <ul class="navbar-nav ml-auto">
                    <div class="topbar-divider d-none d-sm-block"></div>
                    <li class="nav-item dropdown no-arrow">
                        <Link to={
                                '/schools/' + currentSchool.id
                            }
                            style={
                                {color: "Black"}
                        }>
                            <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                                {loggedInUser}</span>
                            <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60"/>
                        </Link>

                    </li>

                </ul>

            </nav>
        );
    }

}

export default Header;
