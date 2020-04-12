import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Formik } from "formik";
import TextField from './common/TextField';
import * as actions from './actions/entity_actions';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

class SchoolSignUp extends React.Component {
  schoolSignUp = (values) => {
    console.log(values)
    values.address.country = this.state.country
    values.address.state = this.state.region
    if (this.props.match.params.id === 'new') {
      this.props.addEntity('school', values, '/dashboard')
    } else {
      this.props.updateEntity('school', values)
    }
  }

  componentDidMount() {
    if (this.props.match && this.props.match.params.id !== 'new') {
      this.props.getEntity('school', this.props.match.params.id);
    }
  }

  selectCountry(val) {
    this.setState({ country: val });
  }


  selectRegion(val) {
    this.setState({ region: val });
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <h3>Edit School</h3>
        <Formik enableReinitialize onSubmit={this.schoolSignUp} initialValues={this.props.school}>
          {(props) => (
            <Form noValidate onSubmit={props.handleSubmit}>
              <Form.Group controlId="formBasicName">
                <TextField name="name" label="Name Of School" placeholder="Enter Name" />
                <TextField name="address.street" label="Street" placeholder="Enter Street" />
                <h6>Country</h6>
                <CountryDropdown
                  value={this.state.country}
                  onChange={(val) => this.selectCountry(val)} />
                <h6>State</h6>
                <RegionDropdown
                  country={this.state.country}
                  value={this.state.region}
                  onChange={(val) => this.selectRegion(val)} />
                <TextField name="address.city" label="City" placeholder="Enter City" />
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
    school: state.entities.school
  }
}

export default connect(
  mapStateToProps, actions
)(SchoolSignUp);