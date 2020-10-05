import React from 'react'
import { Form, Row } from 'react-bootstrap'
import { FormRow } from '../row'

export const CheckBox = ({ field, form, ...props }) => {
  return (
    <FormRow>
      <Form.Check id={props.id} type="checkbox" custom>
        <Form.Check.Input type="checkbox" {...field} value={props.value} />
        <Form.Check.Label>{props.label}</Form.Check.Label>
        <Form.Text className="check-help-text">{props.helpText}</Form.Text>
      </Form.Check>
      {field.checked && props.children && (
        <div className="conditional-field">{props.children}</div>
      )}
    </FormRow>
  )
}
