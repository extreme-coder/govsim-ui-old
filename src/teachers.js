import React from 'react';
import DataTable from './common/DataTable'
import * as actions from './actions/teachers';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";


class Teachers extends React.Component {
   

  get columns()
  {
    return [{
      name: "Name",
      accessor: "name"
    },{
      id: "classes",
      name: "Classes",
      accessor: function(row)
      {
        let classNames =row.classes.map((cl) => {
          return cl.id;
        })
        return classNames.join(', ')
      }
    },{
      id: "edit",
      name: "Edit",
      accessor: function(row){
        let link = "/teachers/" + row.id 
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
    this.props.getTeachers();
  }

  render()
  {
    return (
      <DataTable data={this.props.teachers} columns={this.state.columns} />
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