import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../styles/country-viewer.css'
import * as V from 'victory';
import { VictoryPie, VictoryLabel, VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import * as actions from '../actions/entity_actions';
import * as countryImage from './united-states-map.jpg'

class CountryViewer extends React.Component {
  componentDidMount() {
    this.props.getEntity('country', this.props.match.params.id);
    debugger;
    this.props.getEntitiesByField('party', 'country', this.props.country.id);
    this.props.getEntities('party_template')
    this.props.getEntitiesByField('bill', 'country', this.props.match.params.id);
  }

  render() {
    debugger;
    return (
      <div className="main" style={{ backgroundColor: 'black' }}>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Row>
            <Col />
          </Row>
          <Row>
            <Col>
              <h1>{this.props.country.name}</h1>
            </Col>
          </Row>
          <Row>
            {this.props.parties.map((party) => (<Col xs={4 * party.seats}><div style={{ backgroundColor: party.template.color }}>{party.name}</div></Col>))}
          </Row>
          <Row>
            <Col />
          </Row>
          <Row className="h-100">
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
          <Row>
            <Col style={{ textAlign: 'center' }} xs={3}>
              <svg width="100%" height="100%" viewBox="0 0 400 400" textAlign="center">
                <VictoryPie
                  standalone={false}
                  width={400}
                  height={400}
                  data={[
                    { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }
                  ]}
                  innerRadius={75}
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
            </Col>
            <Col xs={6}>
              <VictoryChart
                height={200}
                width={600}
                theme={VictoryTheme.grayscale}
                domainPadding={{ x: 45 }}
              >
                <VictoryBar
                  barRatio={1}
                  style={{ data: { fill: '#c43a31' } }}
                  data={[
                    { x: 'GDP', y: 100 },
                    { x: 'Employment', y: 50 },
                    { x: 'Inequality', y: 70 },
                    { x: 'Approval Rating', y: 70 },
                  ]}
                />

                <VictoryAxis style={{}} />
              </VictoryChart>
            </Col>
            <Col xs={3}>
              <Container fluid>
                <h5>Bills:</h5>
                {this.props.bills.filter((bill) => (!bill.is_passed)).map((bill) => (<Row><button type="button" className="btn btn-block" style={{ backgroundColor: this.props.party_templates[bill.sponsors[0].template], color: 'white' }}>{bill.name}</button></Row>))}
              </Container>
            </Col>
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
