import React from 'react';
import DatePicker from "react-datepicker";
import { Form, InputGroup } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { useField, useFormikContext } from "formik";

const DateField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <Form.Group as={props.as} md={props.md} controlId={props.controlId}>
      <Form.Label>{props.label}</Form.Label>
      <InputGroup>
        {props.inputGroupPrepend}
        <DatePicker
          {...field}
          {...props}
          selected={(field.value && new Date(field.value)) || null}
          onChange={val => {
            setFieldValue(field.name, val);
          }}
        />
      </InputGroup>
    </Form.Group>
  );
};


export default DateField;