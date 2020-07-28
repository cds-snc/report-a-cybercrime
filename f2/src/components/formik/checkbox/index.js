import React, { useState } from 'react'
import { Form, Row } from 'react-bootstrap'
import { ErrorMessage } from 'formik'
import { GoCheck } from 'react-icons/go'

const CheckboxSelected = () => {
  return (
    <div className="selected-check">
      <GoCheck className="check-mark" />
    </div>
  )
}

export const CheckBox = ({ field, form, ...props }) => {
  const [checked, setValue] = useState(props.value)

  const icon = checked ? <CheckboxSelected /> : <div className="empty-check" />

  const updateCheckbox = () => {
    setValue(!checked)
    props.handleClick(field)
  }

  return (
    <Row className="checkbox-row">
      <ErrorMessage name={field.name} />
      <div onClick={updateCheckbox}>
        <Form.Check inline={true}>
          <Form.Check.Input
            {...field}
            value={checked}
            type="checkbox"
            className="checkbox"
          />
          {icon}
          <Form.Check.Label className="label form-check-label">
            {props.label}
          </Form.Check.Label>
        </Form.Check>
      </div>
      {checked && props.children}
    </Row>
  )
}
