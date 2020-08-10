import React from 'react'
import { Form, Row } from 'react-bootstrap'

export const Radio = ({ field, form, ...props }) => {
  console.log(`Rendering radio ${props.id}`)
  return (
    <Row className="form-row">
      <Form.Check
        inline={true}
        id={props.id}
        type="radio"
        {...field}
        value={props.value}
        label={props.label}
        custom
      />
      {field.checked && props.children}
    </Row>
  )
}
