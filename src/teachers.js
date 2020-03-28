import React from 'react';
import {Form, Button} from 'react-bootstrap';
import ReactTable from 'reacttable'
import * as actions from './actions/teachers';
import { connect } from 'react-redux';

class Teachers extends React.Component {
   

  get columns()
  {
    return [{
      name: "Name",
      accessor: "Name"
    },{
      name: "Classes",
      accessor: "Classes"
    }];
  }

  constructor(props)
  {
    super(props);
    this.state = {};
    this.state.columns = this.columns;
  }

  componentDidMount() {
    this.props.getTeachers();
  }

  render()
  {
    return (
      <ReactTable data={this.props.teachers} columns={this.state.columns} />
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.teachers
  };
}

export default connect(
  mapStateToProps, actions
)(Teachers);