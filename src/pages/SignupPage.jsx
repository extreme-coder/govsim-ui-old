import React from 'react';
import StepWizard from 'react-step-wizard';
import SchoolSignUp from '../SchoolSignUp';
import Signup from '../Signup';



class SignupPage extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
      return (
        
          <Signup />
        
      );
    }
}

export default SignupPage;
