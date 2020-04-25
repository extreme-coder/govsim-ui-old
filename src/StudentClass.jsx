import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as classActions from './actions/entity_actions';
import SelectField from './common/SelectField';

class StudentClass extends React.Component {
  componentDidMount() {
    this.props.getEntities('class')
  }

  classOptions() {
    return this.props.classes.map((cl) => ({ value: cl.id, label: cl.name }))
  }


  createList() {
    if (this.props.form.values.student_class) {
      return this.props.form.values.student_class.map((obj, i) => (
        <div>
          <SelectField name={`student_class.${i}.class.id`} label={`Class ${i + 1}:`} placeholder="Class">
            {this.classOptions()}
          </SelectField>
          <Button onClick={() => this.props.remove(i)}>
            -
          </Button>
          <h6> </h6>
        </div>
      ))
    }
    return <div />
  }

  render() {
    return (
      <div>
        {this.createList()}
        <Button onClick={() => this.props.push({})}>
          Add Class
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.entities,
})

export default connect(
  mapStateToProps, { ...classActions }
)(StudentClass);
