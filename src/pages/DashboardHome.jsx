import React from 'react';

class DashboardHome extends React.Component{
    render(){
        let loggedInUser = ''
        if (localStorage.getItem('user') != null) {
            loggedInUser = JSON.parse(localStorage.getItem('user')).user.username
        }
        return(
            <div>
                Welcome to Classic, {loggedInUser}
            </div>
        )
    }
}

export default DashboardHome