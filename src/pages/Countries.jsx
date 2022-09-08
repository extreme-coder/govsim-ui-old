/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import React from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../actions/entity_actions';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel'
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { showLoading } from 'react-redux-loading-bar';
import swal from 'sweetalert'
import { Redirect } from 'react-router-dom';
import * as actions from '../actions/entity_actions';

class Countries extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.state.redirecting = false
    this.gameStartPopup = this.gameStartPopup.bind(this);
  }

  componentDidMount() {
    debugger;
    this.props.getEntities('country');
  }

  gameStartPopup(ctx) {
    const countryId = ctx.target.getAttribute('countryid')
    const countryName = ctx.target.getAttribute('countryname')
    swal(`Are you sure you want to open ${countryName}?`, { buttons: ['Cancel', 'OK'] }).then((val) => {
      if (val) { window.location = `http://localhost:3000/countries/${countryId}` }
    })
  }

  render() {
    debugger;
    return (
      <div>
        <div />
        <div>
          <Carousel>
            {
                this.props.countries.map((country) => (
                  <div>
                    <button onClick={this.gameStartPopup} countryId={country.id} countryName={country.name}>
                      <img src={`http://localhost:1337${country.country_template.map.url}`} alt="image" />
                    </button>
                    <h1>{country.name}</h1>
                  </div>
                ))
            }
          </Carousel>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.entities
})

export default connect(
  mapStateToProps, actions
)(Countries);
