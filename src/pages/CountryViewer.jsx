import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../styles/country-viewer.css'
import * as V from 'victory';
import { VictoryPie, VictoryLabel, VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import * as actions from '../actions/entity_actions';
import * as countryImage from './united-states-map.jpg'

const loaded = false

class CountryViewer extends React.Component {
  componentDidMount() {
    this.props.getEntity('country', this.props.match.params.id);
    this.props.getEntitiesByField('party', 'country', this.props.country.id);
    this.props.getEntities('party-template')
    this.props.getEntitiesByField('promise', 'country', this.props.match.params.id);
  }

  loadColors(p) {
    if (this.props.promises.length > 0) {
      const id = p.party.template
      console.log(id)
      console.log(this.props['party-templates'].filter((t) => (t.id === id))[0].color)
      return this.props['party-templates'].filter((t) => (t.id === id))[0].color
    }
    return '#878684'
  }

  render() {
    return (
      <div className="main" style={{ backgroundColor: 'black', height: '100vh' }}>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0, height: '100vh' }}>
          <Row className="height: 10vh">
            <Col>
              {/* <h1>{this.props.country.name}</h1> */}
              <h1>country name</h1>
            </Col>
          </Row>
          <Row className="height: 5vh">
            party stuff
            {/* this.props.parties.map((party) => (<Col xs={4 * party.seats}><div style={{ backgroundColor: party.template.color }}>{party.name}</div></Col>)) */}
          </Row>
          <Row className="height: 65vh">
            <Col xs={3}>
              <h4>Recent Headlines:</h4>
            </Col>
            <Col xs={6}>
              <img src={countryImage} width={window.innerWidth * 0.5} />
            </Col>
            <Col xs={3}>
              something
            </Col>
          </Row>
          <Row className="height: 20vh" id="chartrow">
            <div style={{ textAlign: 'center', width: '20vw' }}>
              <svg width="auto" height="100%" viewBox="0 0 400 400" textAlign="center">
                <VictoryPie
                  standalone={false}

                  data={[
                    { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }
                  ]}
                  innerRadius={0}
                  labelRadius={100}
                  style={{ labels: { fontSize: 20, fill: 'white' } }}
                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 20, fill: 'white' }}
                  x={200}
                  y={200}
                  text="Demographics"
                />
              </svg>
            </div>
            <div style={{ width: '65vw' }} />
            <div style={{ width: '25vw' }}>
              <Container fluid>
                <h5>Bills:</h5>
                {
                  this.props.promises.map((p) => (<Row><button type="button" className="btn btn-block" style={{ backgroundColor: this.loadColors(p), color: 'white' }}>{p.law.name}</button></Row>))
                }
              </Container>
            </div>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  country: state.entities.country,
  ...state.entities
})

export default connect(
  mapStateToProps, actions
)(CountryViewer);
