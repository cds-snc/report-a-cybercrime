import React from 'react'
import { Form, Row } from 'react-bootstrap'

export const CheckBox = ({ field, form, ...props }) => {
  return (
    <Row className="form-row">
      <Form.Check
        id={props.id}
        type="checkbox"
        {...field}
        value={props.value}
        custom
      >
        <Form.Check.Input type="checkbox" />
        <Form.Check.Label>{props.label}</Form.Check.Label>
        <Form.Text className="help-text-label">{props.helpText}</Form.Text>
        {field.checked && (
          <div className="conditional-field">{props.children}</div>
        )}
      </Form.Check>
    </Row>
  )
}
