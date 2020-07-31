import React from 'react'
import { Form, Row } from 'react-bootstrap'

export const CheckBox = ({ field, form, ...props }) => {
  console.log(`Rednering Checkbox ${field.name}`)
  return (
    <Row className="checkbox-row">
      <Form.Check inline={true}>
        <Form.Check.Input
          {...field}
          value={props.value}
          type="checkbox"
          className="checkbox"
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
