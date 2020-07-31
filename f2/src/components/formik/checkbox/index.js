import React from 'react'
import { Form, Row } from 'react-bootstrap'

export const CheckBox = ({ field, form, ...props }) => {
  return (
    <Row className="checkbox-row">
      <Form.Check inline={true}>
        <Form.Check.Input
          {...field}
          value={props.value}
          type="checkbox"
          className="checkbox"
          onChange={() => props.handleChange(field)}
          checked={props.checked}
        />
        <Form.Check.Label className="label form-check-label">
          {props.label}
        </Form.Check.Label>
      </Form.Check>
      {props.checked && props.children}
    </Row>
  )
}
