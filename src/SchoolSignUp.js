import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from './common/TextField';
import * as actions from './actions/schools';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

class SchoolSignUp extends React.Component {
    schoolSignUp = (values) => {
        console.log(values)
        values.address.country = this.state.country
        values.address.state = this.state.region
        if (this.props.match.params.id == 'new') {        
          this.props.addSchool(values)          
        } else {
          this.props.updateSchool(values)
        }  
    }

    componentDidMount() {      
      debugger;
      if (this.props.match.params.id) {
        this.props.getSchool(this.props.match.params.id);
      }
    }  

    selectCountry (val) {
      this.setState({ country: val });
    }

    
  selectRegion (val) {
    this.setState({ region: val });
  }

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
      return (
        <div>
            <h3>Sign Up</h3>
            <form onSubmit={this.props.handleSubmit(this.schoolSignUp)}>
               <Form.Group controlId="formBasicName">
                    
                <Field name="name" component={TextField} label="Name Of School" placeholder="Enter Name" />
                <Field name="address.street" component={TextField} label="Street" placeholder="Enter Street" />
                <h6>Country</h6>
                <CountryDropdown
                value={this.state.country}
                onChange={(val) => this.selectCountry(val)} />
                <h6>State</h6>
                <RegionDropdown
                country={this.state.country}
                value={this.state.region}
                onChange={(val) => this.selectRegion(val)} />
                <Field name="address.city" component={TextField} label="City" placeholder="Enter City" />
                <Field name="address.postal_code" component={TextField} label="Postal Code" placeholder="Enter Postal Code" />
            
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
              </Form.Group>
            </form>
        </div>

      );
    }
}

const mapStateToProps = state => {
  return {
    initialValues: state.schools.school
  }
}

SchoolSignUp = reduxForm({form: 'school_sign_up_form', enableReinitialize: true})(SchoolSignUp);

export default  connect(
  mapStateToProps, actions
)(SchoolSignUp);