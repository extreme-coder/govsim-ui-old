import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Formik } from "formik";
import TextField from './common/TextField';
import SelectField from './common/SelectField';
import * as actions from './actions/families';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

class AddFamily extends React.Component {
  saveFamily = (values) => {  
    values.address.country = this.state.country
    values.address.state = this.state.region   
    if (this.props.match.params.id == 'new') {        
      this.props.addFamily(values)          
    } else {
      this.props.updateFamily(values)
    }        
  }

  componentDidMount() {      
    if (this.props.match.params.id!= 'new') {
      this.props.getFamily(this.props.match.params.id);
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
            <h3>Add A Family</h3>
            <Formik enableReinitialize onSubmit={this.saveFamily}  initialValues={this.props.family}>
        {(props) => (
          <Form noValidate onSubmit={props.handleSubmit}>            
            <Form.Group controlId="formBasicName">
                    
                    <TextField name="family_name" label="Name" placeholder="Enter Name" />

                    <TextField name="address.street" label="Street" placeholder="Enter Street" />
                    <TextField name="address.city" label="City" placeholder="Enter City" />
                    <h6>Country</h6>
                    <CountryDropdown
                        value={this.state.country}
                        onChange={(val) => this.selectCountry(val)} />
                    <h6>State</h6>
                    <RegionDropdown
                        country={this.state.country}
                        value={this.state.region}
                        onChange={(val) => this.selectRegion(val)} />
                    <TextField name="address.postal_code" label="Postal Code" placeholder="Enter Postal Code" />
                
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                  </Form.Group>
          </Form> 
        )}
        </Formik>
        </div>

      );
    }
}

const mapStateToProps = state => {
  return {
    family: state.families.family
  }
}

export default connect(
  mapStateToProps, actions
)(AddFamily);