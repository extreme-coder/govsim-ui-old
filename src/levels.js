import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './actions/entity_actions';
import DataTable from './common/DataTable';

class Levels extends React.Component {
  get columns() {
    return [{
      name: 'Name',
      accessor: 'name'
    }, {
      id: 'edit',
      name: 'Edit',
      accessor(row) {
        const link = `/levels/${row.id}`
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
    this.props.getEntities('level');
  }

  render() {
    return (
      <DataTable data={this.props.levels} columns={this.state.columns} title="Levels" addNewLink="/levels/new" />
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.entities
})

export default connect(
  mapStateToProps, actions
)(Levels);
