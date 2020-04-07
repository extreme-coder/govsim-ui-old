import React from 'react';
import ReactQuill from 'react-quill';
import { Form, InputGroup } from 'react-bootstrap';
import { useField, useFormikContext } from "formik";
import 'react-quill/dist/quill.snow.css';

const RichField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    debugger;
    return (
        <Form.Group as={props.as} md={props.md} controlId={props.controlId}>
        <Form.Label>{props.label}</Form.Label>
        <InputGroup>
            {props.inputGroupPrepend}
            <ReactQuill 
                theme={'snow'}
                value={field.value || ''}
                onChange={html=>{
                    setFieldValue(field.name, html);
                }}
                modules={field.modules}
                formats={field.formats}
                bounds={'.app'}
                placeholder={''}
            />

        </InputGroup>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </Form.Group>

      
    );
  };


export default RichField;