import React from 'react';
import {Form, Button} from 'react-bootstrap';
import DataTable from './common/DataTable'
import * as actions from './actions/rooms';
import { connect } from 'react-redux';

class Rooms extends React.Component {
   

  get columns()
  {
    return [{
      name: "Name",
      accessor: "name"
    }];
  }

  constructor(props)
  {
    super(props);
    this.state = {};
    this.state.columns = this.columns;
  }

  componentDidMount() {
    this.props.getRooms();
  }

  render()
  {
      debugger;
    return (
      <DataTable data={this.props.rooms} columns={this.state.columns} />
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.rooms
  };
}

export default connect(
  mapStateToProps, actions
)(Rooms);