import React from 'react'
import { Form, Row } from 'react-bootstrap'

export const CheckBox = ({ field, form, ...props }) => {
  return (
    <Row className="form-row">
      <Form.Check
        inline={true}
        id={props.id}
        type="checkbox"
        {...field}
        value={props.value}
        checked={props.checked}
        label={props.label}
        custom
      />
      {props.checked && props.children}
    </Row>
  )
}
