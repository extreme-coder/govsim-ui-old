import React from 'react'
import Popup from 'reactjs-popup'
import { Form, Button } from 'react-bootstrap';
import { Formik, Field } from 'formik'
import { connect } from 'react-redux';
import TextField from './TextField';
import SelectField from './SelectField';

import * as actions from '../actions/entity_actions'

class BillCreator extends React.Component {
  constructor() {
    super()
    this.state = {
      lawTypes: [],
      laws: [],
      ltField: false,
      lawField: false,
      nameField: false,
      done: false
    }
  }

  saveBill = (vals) => {
    debugger;
    this.props.addEntity('promise', vals)
  }

  getDepartments() {
    if (this.props.departments.length > 0) {
      return this.props.departments.map((dp) => ({ value: dp.id, label: dp.name }))
    }
    return []
  }

  getLawTypes(dept) {
    if (this.props['law-types'].length > 0) {
      return this.props['law-types'].map((lt) => {
        if (dept === lt.department.id) {
          return { value: lt.id, label: lt.name }
        }
      }).filter((lt) => (lt !== undefined))
    }
    return []
  }

  getLaws(lt) {
    if (this.props.laws.length > 0) {
      return this.props.laws.map((law) => {
        if (lt === law.law_type.id) {
          return { value: law.id, label: law.name }
        }
      }).filter((law) => (law !== undefined))
    }
    return []
  }

  handleOnChange(name, value) {
    switch (name) {
      case 'department':
        this.setState({ lawTypes: this.getLawTypes(value), ltField: true })
        break;
      case 'law-type':
        this.setState({ laws: this.getLaws(value), lawField: true })
        break;
      case 'law':
        this.setState({ laws: this.getLaws(value), nameField: true })
        break;
      default:
    }
  }

  componentDidMount() {
    this.props.getEntities('department')
    this.props.getEntities('law-type')
    this.props.getEntities('law')
  }

  ltRender() {
    if (this.state.ltField) {
      return (
        <SelectField name="law-type" label="Then, choose which type of law you want to change." onChange={this.handleOnChange.bind(this)}>
          {this.state.lawTypes}
        </SelectField>
      )
    }
  }

  lawRender() {
    if (this.state.lawField) {
      return (
        <SelectField name="law" label="Now pick the new law which your party will support. If you want to keep things the way they are, pick the current law." onChange={this.handleOnChange.bind(this)}>
          {this.state.laws}
        </SelectField>
      )
    }
  }

  nameRender() {
    if (this.state.nameField) {
      return (<TextField name="name" label="Finally, give your campaign promise a catchy name; something that will stick in your voters' minds." onChange={this.handleOnChange.bind(this)} />)
    }
  }

  render() {
    return (
      <Popup trigger={<button type="button" className="btn btn-block" style={{ backgroundColor: 'gray', color: 'white' }}>+</button>} position="right center" modal nested>
        {(close) => (
          <div className="cvpopup">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">
              {' '}
              Add Campaign Promise
              {' '}
            </div>

            <Formik onSubmit={this.saveBill} initialValues={{ }}>
              {(props) => (
                <Form noValidate onSubmit={props.handleSubmit}>
                  <Form.Group controlId="formBasicName">
                    <div className="content">
                      <SelectField name="department" label="First,  figure out which department your proposed policy will fall under." onChange={this.handleOnChange.bind(this)}>
                        {this.getDepartments()}
                      </SelectField>

                      {this.ltRender()}

                      {this.lawRender()}

                      {this.nameRender()}
                    </div>
                    <div className="actions">
                      <Button
                        type="submit"
                      >
                        Save
                      </Button>
                      <Button
                        className="button"
                        onClick={() => {
                          close();
                        }}
                      >
                        Exit
                      </Button>
                    </div>

                  </Form.Group>
                </Form>
              )}
            </Formik>


          </div>
        )}
      </Popup>
    )
  }
}

const mapStateToProps = (state) => ({
  promise: state.entities.promise,
  ...state.entities
})

export default connect(
  mapStateToProps, actions
)(BillCreator);
