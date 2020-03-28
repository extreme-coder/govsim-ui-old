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
        accessor: "StartTime"
    },{
        name: "End Time",
        accessor: "Endtime"
    },{
        name: "Start Date",
        accessor: "StartDate"
    },{
        name: "End Date",
        accessor: "EndDate"
    },{
        name: "Room",
        accessor: "RoomForClass"
    },{
        name: "Teacher",
        accessor: "Teacher"
    },{
        name: "Class Days",
        accessor: "DaysOfClass"
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
