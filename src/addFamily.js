import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Formik } from "formik";
import TextField from './common/TextField';
import FamilyFields from './common/FamilyFields';
import FormWrapper from './common/FormWrapper';
import * as actions from './actions/entity_actions';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

class AddFamily extends React.Component {
  saveFamily = (values) => {
    if (!values.address){
      values.address = {}
    }
    values.address.country = this.state.country
    values.address.state = this.state.region
    if (this.props.match.params.id === 'new') {
      this.props.addEntity('family', values)
    } else {
      this.props.updateEntity('family', values)
    }
  }

  setNew(id) {
    if (id === 'new') {
      this.isNew = true
    } else {
      this.isNew = false
    }
    debugger;
  }

  componentDidMount() {
    if (this.props.match.params.id != 'new') {
      this.props.getEntity('family', this.props.match.params.id);
    }
    this.setNew(this.props.match.params.id)
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
    this.isNew = false
  }

  render() {
    return (
      <FormWrapper title="Family" isNew={this.isNew}>
        <Formik enableReinitialize onSubmit={this.saveFamily} initialValues={this.props.family}>
          {(props) => (
            <Form noValidate onSubmit={props.handleSubmit}>
              <Form.Group controlId="formBasicName">

                <FamilyFields parent={this} />

                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Form.Group>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    family: state.entities.family
  }
}

export default connect(
  mapStateToProps, actions
)(AddFamily);