import React from 'react';
import DataTable from './common/DataTable'
import * as actions from './actions/entity_actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Classes extends React.Component {
  get columns() {
    return [{
      name: "Name",
      accessor: "name"
    }, {
      name: "Start Time",
      accessor: "start_time"
    }, {
      name: "End Time",
      accessor: "end_time"
    }, {
      name: "Start Date",
      accessor: "start_date"
    }, {
      name: "End Date",
      accessor: "end_date"
    }, {
      name: "Room",
      accessor: "room_for_class"
    }, {
      name: "Teacher",
      accessor: "teacher.name"
    }, {
      name: "Assistant",
      accessor: "assistant.name"
    }, {
      name: "Class Days",
      accessor: "days_of_class"
    }, {
      id: "edit",
      name: "Edit",
      accessor: function (row) {
        let link = "/classes/" + row.id
        return <Link to={link} style={{ color: "Black" }}>Edit</Link>
      }
    }];
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.state.columns = this.columns;
  }

  componentDidMount() {
    this.props.getEntities('class');
  }

  render() {
    return (
      <DataTable data={this.props.classes} columns={this.state.columns} title="Class" addNewLink="/classes/new" />
    )
  }
}
const mapStateToProps = state => {
  return {
    ...state.entities
  };
}

export default connect(
  mapStateToProps, actions
)(Classes);
