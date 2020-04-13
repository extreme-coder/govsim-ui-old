import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, Field, FieldArray } from 'formik';
import TextField from './common/TextField';
import SelectField from './common/SelectField';

class PriceOption extends React.Component {
    constructor(props) {
        super(props)
        this.state = { fieldNum: 1 }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.vals = [
            { name: "weekly", label: "Weekly" },
            { name: "monthly", label: "Monthly" },
            { name: "yearly", label: "Yearly" },
            { name: "monthly_and_yearly", label: "Monthly and Yearly" },
        ]
    }

    createList() {
        var list = []
        for (var i = 0; i < this.state.fieldNum; i++) {
            let num = i + 1
            list.push(
                <div>
                    <h4>Price Option {num}:</h4>

                    <TextField name="regular_rate" label="Regular Rate" placeholder="Enter Regular Rate" />

                    <TextField name="yearly_rate" label="Yearly Rate" placeholder="Enter Yearly Rate" />

                    <SelectField name="rate_frequency" label="Rate Frequency" placeholder="Enter Rate Frequency">
                        {this.vals}
                    </SelectField>

                    <TextField name="one_time_charge" label="One Time Charge" placeholder="Enter One Time Charge" />
                </div>
            )
        }
        return list
    }

    handleClick() {
        this.setState({ fieldNum: this.state.fieldNum + 1 })
    }

    render() {
        return (
            <div>
                {this.createList()}
                <Button onClick={this.handleClick}>
                    Add Price Option
                </Button>
            </div>
        )
    }
}

export default (PriceOption);
