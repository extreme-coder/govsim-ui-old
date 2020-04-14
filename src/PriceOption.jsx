import React from 'react';
import SelectField from './common/SelectField';
import TextField from './common/TextField';

class PriceOption extends React.Component {
  constructor(props) {
    super(props)

    this.vals = [
      { value: 'weekly', label: 'Weekly' },
      { value: 'monthly', label: 'Monthly' },
      { value: 'yearly', label: 'Yearly' },
      { value: 'monthly_and_yearly', label: 'Monthly and Yearly' },
    ]
  }

  renderYearly() {
    if (this.props.values.rate_frequency === 'yearly' || this.props.values.rate_frequency === 'monthly_and_yearly') {
      return <TextField name={`price_option.${this.props.index}.yearly_rate`} label="Yearly Rate" placeholder="Enter Yearly Rate" />
    }
    return <div />
  }

  renderRegular() {
    if (this.props.values.rate_frequency === 'weekly') {
      return <TextField name={`price_option.${this.props.index}.regular_rate`} label="Weekly Rate" placeholder="Enter Weekly Rate" />
    }
    if (this.props.values.rate_frequency === 'monthly' || this.props.values.rate_frequency === 'monthly_and_yearly') {
      return <TextField name={`price_option.${this.props.index}.regular_rate`} label="Monthly Rate" placeholder="Enter Monthly Rate" />
    }
    return <div />
  }

  render() {
    return (
      <div>
        <h3>{this.props.label}</h3>
        <SelectField name={`price_option.${this.props.index}.rate_frequency`} label="Rate Frequency" placeholder="Enter Rate Frequency">
          {this.vals}
        </SelectField>


        <TextField name={`price_option.${this.props.index}.one_time_charge`} label="One Time Charge" placeholder="Enter One Time Charge" />

        {this.renderYearly()}

        {this.renderRegular()}
      </div>
    )
  }
}

export default PriceOption
