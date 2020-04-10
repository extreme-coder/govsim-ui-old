import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'
import pluralize from 'pluralize'
import {Button, Card, Row, Col, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Styles = styled.div`
  padding: 1rem;
  a {
    color: white;
  }
  a:hover {
    text-decoration: none;
  }
  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function DataTable({ columns, data, title, addNewLink }) {
  if (!data) (
    data =[]
  )
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })
  // Render the UI for your table
  return (
    <Styles>      
      <Card>
        <Card.Header>
          <Row>
            <Col>{pluralize(title)}</Col>            
            <Col md="auto"> <Button variant="primary"> <Link  to={addNewLink}>Add new {title}</Link></Button></Col>
          </Row>                
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('name')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>    
    </Styles>
  )
}

export default DataTable;