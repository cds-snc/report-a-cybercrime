import React from 'react'
import { Form } from 'react-bootstrap'

export const TextArea = ({ field, form, ...props }) => {
  return (
    <Form.Group controlId={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Text className="help-text-label">{props.helpText}</Form.Text>
      <Form.Control
        {...field}
        as="textarea"
        className={'open-text-entry'}
        rows={props.rows}
        onChange={props.onChange}
      />
    </Form.Group>
  )
}
