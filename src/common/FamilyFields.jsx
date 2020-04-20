import React from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import TextField from './TextField';

class FamilyFields extends React.Component {
  render() {
    return (
      <div>
        <TextField name="family_name" label="Name" placeholder="Enter Name" />
        <TextField name="address.street" label="Street" placeholder="Enter Street" />
        <TextField name="address.city" label="City" placeholder="Enter City" />
        <h6>Country</h6>
        <CountryDropdown
          value={this.props.parent.state.country}
          onChange={(val) => this.props.parent.selectCountry(val)}
        />
        <h6>State</h6>
        <RegionDropdown
          country={this.props.parent.state.country}
          value={this.props.parent.state.region}
          onChange={(val) => this.props.parent.selectRegion(val)}
        />
        <TextField name="address.postal_code" label="Postal Code" placeholder="Enter Postal Code" />
      </div>
    )
  }
}

export default FamilyFields
