import React from 'react';
import {Form, Button} from 'react-bootstrap';
import ReactTable from 'reacttable'

class Students extends React.Component {
    get initialData()
  {
    return [{
      first_name: "Aryan",
      last_name: "Singh",
      email: "aryan.singh.lamba@gmail.com",
      birth_date: "06/01/10"
    },
    {
        first_name: "Nirmay",
        last_name: "Singh",
        email: "nirmay.singh.lamba@gmail.com",
        birth_date: "08/03/14"
      }
        ];
  }

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
        accessor: "birth_date"
    }];
  }

  constructor(props)
  {
    super(props);
    this.state = {};
    this.state.data = this.initialData;
    this.state.columns = this.columns;
  }

  render()
  {
    return (
      <ReactTable data={this.state.data} columns={this.state.columns} />
    )
  }
}

export default Students;