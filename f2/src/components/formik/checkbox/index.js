import React from 'react'
import { Form, Row } from 'react-bootstrap'

export const CheckBox = ({ field, form, ...props }) => {
  console.log(`Rendering checkbox ${props.id}`)
  return (
    <Row className="form-row">
      <Form.Check
        inline={true}
        id={props.id}
        type="checkbox"
        {...field}
        value={props.value}
        label={props.label}
        custom
      />
      {field.checked && props.children}
    </Row>
  )
}
