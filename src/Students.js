import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './actions/entity_actions';
import DataTable from './common/DataTable';

class Students extends React.Component {
  get columns() {
    return [{
      name: 'First Name',
      accessor: 'first_name'
    }, {
      name: 'Last Name',
      accessor: 'last_name'
    }, {
      name: 'Email',
      accessor: 'email'
    }, {
      name: 'Birth Date',
      accessor: 'date_of_birth'
    }, {
      name: 'Level',
      accessor: 'level.name'
    }, {
      id: 'edit',
      name: 'Edit',
      accessor(row) {
        const link = `/students/${row.id}`
        return <Link to={link} style={{ color: 'Black' }}>Edit</Link>
      }
    }];
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.state.columns = this.columns;
  }

  componentDidMount() {
    this.props.getEntities('student');
  }

  render() {
    return (
      <DataTable data={this.props.students} columns={this.state.columns} title="Student" addNewLink="/students/new" />
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.entities
})

export default connect(
  mapStateToProps, actions
)(Students);
