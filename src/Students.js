import React from 'react';
import {Form, Button} from 'react-bootstrap';
import ReactTable from 'reacttable'
import * as actions from './actions/students';
import { connect } from 'react-redux';

class Students extends React.Component {
   

  get columns()
  {
    return [{
      name: "First Name",
      accessor: "FirstName"
    },{
      name: "Last Name",
      accessor: "LastName"
    },{
        name: "Email",
        accessor: "Email"
    },{
        name: "Birth Date",
        accessor: "DateOfBirth"
    }];
  }

  constructor(props)
  {
    super(props);
    this.state = {};
    this.state.columns = this.columns;
  }

  componentDidMount() {
    this.props.getStudents();
  }

  render()
  {
    return (
      <ReactTable data={this.props.students} columns={this.state.columns} />
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.students
  };
}

export default connect(
  mapStateToProps, actions
)(Students);
