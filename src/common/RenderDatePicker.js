import React from 'react';
import DatePicker from "react-datepicker";
import { Field, reduxForm } from 'redux-form';
import { FormLabel, FormGroup} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";



const renderDatePicker = ({input, label, placeholder, defaultValue, meta: {touched, error} }) => (
    <div>
        <FormGroup >
        <FormLabel>{label}</FormLabel>
        <div>
            <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? Date.parse(input.value) : null} />
            {touched && error && <span>{error}</span>}
        </div>
        </FormGroup>
    </div>
);

export default renderDatePicker