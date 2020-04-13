import React from 'react';
import {Field} from "formik";

export default function Checkbox({id, name, className}) {
    return (<>
        <Field name={name}
            render={
                ({field, form}) => {
                    return (<input type="checkbox"
                        id={id}
                        className={className}
                        checked={
                            field.value
                        }
                        {...field}/>);
                }
            }/>
    </>);
}
