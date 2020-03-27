import React from 'react';
import {Form, Button} from 'react-bootstrap';
import ReactTable from 'reacttable'
import * as actions from './actions/schools';
import { connect } from 'react-redux';

class Schools extends React.Component {
  get columns()
  {
    return [{
      name: "Name",
      accessor: "Name"
    },{
      name: "ID",
      accessor: "ID"
    },{
        name: "Street",
        accessor: "street"
    },{
        name: "City",
        accessor: "city"
    },{
        name: "State",
        accessor: "state"
    },{ 
        name: "Country",
        accessor: "country"
    },{
        name: "Postal Code",
        accessor: "postal_code"
    }];
  }

  constructor(props)
  {
    super(props);
    this.state = {};
    this.state.columns = this.columns; 
  }

  componentDidMount() {
    this.props.getSchools();
  }

  render()
  {
    return (
      <ReactTable data={this.props.schools} columns={this.state.columns} />
    )
  }
}
const mapStateToProps = state => {
  return {
    ...state.schools
  };
}

export default connect(
  mapStateToProps, actions
)(Schools);
