import React from 'react';
import {Form, Button} from 'react-bootstrap';
import DataTable from './common/DataTable'
import * as actions from './actions/families';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

class Families extends React.Component {
   

  get columns()
  {
    return [{
      name: "Name",
      accessor: "family_name"
    },{
      id: "edit",
      name: "Edit",
      accessor: function(row){
        let link = "/families/" + row.id
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
    this.props.getFamilies();
  }

  render()
  {
    return (
      <DataTable data={this.props.families} columns={this.state.columns} title="Family" addNewLink="/families/new" />
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.families
  };
}

export default connect(
  mapStateToProps, actions
)(Families);