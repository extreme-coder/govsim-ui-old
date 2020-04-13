import React from 'react';
import TextField from './common/TextField';
import SelectField from './common/SelectField';

class PriceOption extends React.Component {
    constructor(props) {
        super(props)

        this.vals = [
            { name: "weekly", label: "Weekly" },
            { name: "monthly", label: "Monthly" },
            { name: "yearly", label: "Yearly" },
            { name: "monthly_and_yearly", label: "Monthly and Yearly" },
        ]
    }

    regularRate () {
        return (<TextField name="regular_rate" label="Regular Rate" placeholder="Enter Regular Rate" />)
    }

    yearlyRate () {
        return (<TextField name="yearly_rate" label="Yearly Rate" placeholder="Enter Yearly Rate" />)
        
    }

    render() {
        debugger;
        return(
            <div>
                    <SelectField name="rate_frequency" label="Rate Frequency" placeholder="Enter Rate Frequency">
                        {this.vals}
                    </SelectField>

                    <TextField name="one_time_charge" label="One Time Charge" placeholder="Enter One Time Charge" />

                    {this.yearlyRate()}

                    {this.regularRate()}
            </div>
        )      
    }
    
}

export default PriceOption