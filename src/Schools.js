import React from 'react';
import {Form, Button} from 'react-bootstrap';
import ReactTable from 'reacttable'

class Schools extends React.Component {
    get initialData()
  {
    return [{
      school_name: "Red Tiger",
      ID: "172254836",
      street: "RedTiger Street",
      city: "burnaby",
      state: "B.C.",
      country: "Canada",
      postal_code: "146vh8"
    }
        ];
  }

  get columns()
  {
    return [{
      name: "Name",
      accessor: "school_name"
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
export default Schools;