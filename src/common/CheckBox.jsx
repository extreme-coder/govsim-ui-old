import { Field } from 'formik';
import React from 'react';

export default function Checkbox({ id, name, className }) {
  return (
    <>
      <Field
        name={name}
        render={
                ({ field, form }) => (
                  <input
                    type="checkbox"
                    id={id}
                    className={className}
                    checked={
                            field.value
                        }
                    {...field}
                  />
                )
            }
      />
    </>
  );
}
