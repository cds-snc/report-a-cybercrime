import React from 'react'
import { Form, Row } from 'react-bootstrap'

export const Radio = ({ field, form, ...props }) => {
  return (
    <Row className="form-row">
      <Form.Check id={props.id} type="radio" custom>
        <Form.Check.Input type="radio" {...field} value={props.value} />
        <Form.Check.Label>{props.label}</Form.Check.Label>
        <Form.Text className="check-help-text">{props.helpText}</Form.Text>
      </Form.Check>
      {field.checked && (
        <div className="conditional-field">{props.children}</div>
      )}
    </Row>
  )
}
