import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../styles/country-viewer.css'
import * as V from 'victory';
import { VictoryPie, VictoryLabel, VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import Popup from 'reactjs-popup';
import { io } from 'socket.io-client'
import * as actions from '../actions/entity_actions';
import * as countryImage from './united-states-map.jpg'
import 'reactjs-popup/dist/index.css';
import FocusViewer from '../common/FocusViewer'
import BillCreator from '../common/BillCreator'

let socket;
let socketLoaded = false;

class CountryViewer extends React.Component {
  constructor() {
    super()
    this.state = {
      voting: false,
      v: {},
      upForVote: {
        law: { name: '' },
        party: { name: '' }
      }
    }
  }

  componentDidMount() {
    this.props.getEntity('country', this.props.match.params.id);
    this.props.getEntitiesByField('party', 'country', this.props.country.id);
    this.props.getEntities('party-template')
    this.props.getEntitiesByField('promise', 'country', this.props.match.params.id);
  }

  loadColors(p) {
    if (this.props.promises.length > 0) {
      const id = p.party.template
      socket = io('http://localhost:1337')
      socket.emit('joinGame', this.props.country.id)
      socketLoaded = true
      return this.props['party-templates'].filter((t) => (t.id === id))[0].color
    }
    return '#878684'
  }

  render() {
    if (socketLoaded) {
      socket.on('newVote', (data) => {
        console.log(data)
        debugger;
        this.setState({ v: data })
        this.setState({ upForVote: data.promise })
        this.setState({ voting: true })
      });
    }
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
              <FocusViewer name="test" />
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
                  this.props.promises.map((p) => (
                    <Row>
                      <Popup trigger={<button type="button" className="btn btn-block" style={{ backgroundColor: this.loadColors(p), color: 'white' }}>{p.law.name}</button>} position="right center" modal nested>
                        {(close) => (
                          <div className="cvpopup">
                            <button className="close" onClick={close}>
                              &times;
                            </button>
                            <div className="header">
                              {' '}
                              {p.law.name}
                              {' '}
                            </div>
                            <div className="content">
                              {' '}
                              Introduced by:
                              {' '}
                              {p.party.name}
                            </div>
                            <div className="actions">
                              <button
                                className="button"
                                onClick={() => {
                                  this.props.addEntity('vote', { country: this.props.country.id, datetime: new Date(), promise: p });
                                  close();
                                }}
                              >
                                Call Vote
                              </button>
                              <button
                                className="button"
                                onClick={() => {
                                  close();
                                }}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        )}
                      </Popup>
                      <Popup open={this.state.voting} onClose={() => { this.setState({ voting: false }) }} position="right center" modal nested>
                        {(close) => (
                          <div className="cvpopup">
                            <button className="close" onClick={close}>
                              &times;
                            </button>
                            <div className="header">
                              {' '}
                              Voting begins for
                              {' '}
                              {this.state.upForVote.law}
                            </div>
                            <div className="content">
                              {' '}
                              Introduced by
                              {' '}
                              {this.state.upForVote.party}
                            </div>
                            <div className="actions">
                              <button
                                className="button"
                                onClick={() => {
                                  this.props.addEntity('ballot', { for: true, vote: this.state.v.id, country: this.props.country.id });
                                  close();
                                }}
                              >
                                Yay
                              </button>
                              <button
                                className="button"
                                onClick={() => {
                                  this.props.addEntity('ballot', { for: false, vote: this.state.v.id, country: this.props.country.id });
                                  close();
                                }}
                              >
                                Nay
                              </button>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </Row>
                  ))
                }
                <Row>
                  <BillCreator />
                </Row>
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
