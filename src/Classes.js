import React from 'react';
import {Form, Button} from 'react-bootstrap';
import ReactTable from 'reacttable'
import * as actions from './actions/classes';
import { connect } from 'react-redux';

class Classes extends React.Component {
  get columns()
  {
    return [{
        name: "Start Time",
        accessor: "start_time"
    },{
        name: "End Time",
        accessor: "end_time"
    },{
        name: "Start Date",
        accessor: "start_date"
    },{
        name: "End Date",
        accessor: "end_date"
    },{
        name: "Room",
        accessor: "room_for_class"
    },{
        name: "Teacher",
        accessor: "teacher"
    },{
        name: "Class Days",
        accessor: "days_of_class"
    },];
  }

  constructor(props)
  {
    super(props);
    this.state = {};
    this.state.columns = this.columns; 
  }

  componentDidMount() {
    this.props.getClasses();
  }

  render()
  {
    return (
      <ReactTable data={this.props.classes} columns={this.state.columns} />
    )
  }
}
const mapStateToProps = state => {
  return {
    ...state.classes
  };
}

export default connect(
  mapStateToProps, actions
)(Classes);
