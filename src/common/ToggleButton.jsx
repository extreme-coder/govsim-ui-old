import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field } from 'formik';
import React from 'react';

export default function ToggleButton({ id, name, className, label }) {
  return (
    <>
      <Field
        name={name}
        render={
                ({ field, form }) => (

                  <label className={`mr-2 btn btn-secondary ${(field.value) ? 'active' : ''}`}>
                    <input
                      style={{ display: 'none' }}
                      type="checkbox"
                      id={id}
                      className={className}
                      checked={
                            field.value
                        }
                      {...field}
                    />
                    {(field.value) && <FontAwesomeIcon icon={faCheck} size="sm" />}
                    {' '}
                    {label}
                  </label>


                )
            }
      />
    </>
  );
}
