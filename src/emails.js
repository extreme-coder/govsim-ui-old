import React from 'react';
import DataTable from './common/DataTable'
import * as actions from './actions/emails';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

class Emails extends React.Component {
  get columns()
  {
    return [{
        name: "Subject",
        accessor: "subject"
    },{
        name: "Sent Date",
        accessor: "sent_date"
    },{
        name: "To",
        accessor: "to"
    },{
        name: "Status",
        accessor: "status"
    },{
      id: "edit",
      name: "Edit",
      accessor: function(row){
        let link = "/emails/" + row.id
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
    this.props.getEmails();
  }

  render()
  {
    return (
      <DataTable data={this.props.emails} columns={this.state.columns} title="Email" addNewLink="/emails/new" />
    )
  }
}
const mapStateToProps = state => {
  return {
    ...state.emails
  };
}

export default connect(
  mapStateToProps, actions
)(Emails);