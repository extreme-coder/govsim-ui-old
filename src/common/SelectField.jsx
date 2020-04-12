import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Field } from "formik";
import Select from "react-select";

const SelectField = ({
  as,
  md,
  controlId,
  label,
  name,
  type,
  inputGroupPrepend,
  children
}) => {
  return (
    <Field
      name={name}
      render={({ field, form }) => {
        const isValid = !form.errors[field.name];
        const isInvalid = form.touched[field.name] && !isValid;

        return (
          <Form.Group as={as} md={md} controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <InputGroup>
              {inputGroupPrepend}
              <Select options={children} />
              <Form.Control.Feedback type="invalid">
                {form.errors[field.name]}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        );
      }}
    />
  );
};

SelectField.defaultProps = {
  type: "select",
  inputGroupPrepend: null
};

export default SelectField;
