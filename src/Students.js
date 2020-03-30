import React from 'react';
import DataTable from './common/DataTable'
import * as actions from './actions/students';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Students extends React.Component {
   

  get columns()
  {
    return [{
      name: "First Name",
      accessor: "first_name"
    },{
      name: "Last Name",
      accessor: "last_name"
    },{
        name: "Email",
        accessor: "email"
    },{
        name: "Birth Date",
        accessor: "date_of_birth"
    },{
        id: "edit",
        name: "Edit",
        accessor: function(row){
          let link = "/editstudent/" + row.id
          return <Link to= {link} style ={{color: "Black"}}>Edit</Link>
        }
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
      <DataTable data={this.props.students} columns={this.state.columns} />
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
