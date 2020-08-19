import React from 'react'
import { Form, Row } from 'react-bootstrap'

export const Radio = ({ field, form, ...props }) => {
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
      <Form.Text className="help-text-label">{props.helpText}</Form.Text>
      {field.checked && (
        <div className="conditional-field">{props.children}</div>
      )}
    </Row>
  )
}
