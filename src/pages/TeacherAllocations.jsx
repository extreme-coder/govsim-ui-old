
import React from 'react';
import { Calendar } from 'react-big-calendar';
import { connect } from 'react-redux';
import * as actions from '../actions/entity_actions';


class TeacherAllocations extends React.Component {
  constructor(props) {
    super(props)
    this.events = this.props.classes.map((cl, i) => ({
      id: i,
      name: cl.name,
      start: cl.start_time,
      end: cl.end_time,
    }))
  }

  componentDidMount() {
    this.props.getEntities('family');
  }

  render() {
    return (
      <Calendar events={this.events} defaultView={Views.DAY} />
    )
  }
}


const mapStateToProps = (state) => ({
  ...state.entities
})

export default connect(
  mapStateToProps, actions
)(TeacherAllocations);
