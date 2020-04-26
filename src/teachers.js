import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './actions/entity_actions';
import DataTable from './common/DataTable';


class Teachers extends React.Component {
  get columns() {
    return [{
      name: 'Name',
      accessor: 'name'
    }, {
      id: 'classes',
      name: 'Classes',
      accessor(row) {
        const classNames = row.classes.map((cl) => cl.name)
        return classNames.join(', ')
      }
    }, {
      id: 'edit',
      name: 'Edit',
      accessor(row) {
        const link = `/teachers/${row.id}`
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
    this.props.getEntities('teacher');
  }

  render() {
    return (
      <DataTable data={this.props.teachers} columns={this.state.columns} title="Teacher" addNewLink="/teachers/new" />
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.entities
})

export default connect(
  mapStateToProps, actions
)(Teachers);
