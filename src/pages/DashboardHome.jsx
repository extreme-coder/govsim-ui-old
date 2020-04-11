import React from 'react';

class DashboardHome extends React.Component{
    render(){
        let loggedInUser = ''
        if (localStorage.getItem('user') != null) {
            loggedInUser = JSON.parse(localStorage.getItem('user')).user.school.name
        }
        return(
            <h1>
                Welcome to Classik, {loggedInUser}.
            </h1>
        )
    }
}

export default DashboardHome