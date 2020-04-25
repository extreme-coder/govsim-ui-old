import { useField, useFormikContext } from 'formik';
import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';

const DateField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <Form.Group as={props.as} md={props.md} controlId={props.controlId}>
      <Form.Label>{props.label}</Form.Label>
      <InputGroup>
        {props.inputGroupPrepend}
        <TimePicker
          {...field}
          {...props}
          selected={(field.value && new Date(field.value)) || null}
          onChange={(val) => {
            setFieldValue(field.name, `${val}:00`);
          }}
        />
      </InputGroup>
    </Form.Group>
  );
};


export default DateField;
