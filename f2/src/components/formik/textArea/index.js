import React from 'react'
import { Form } from 'react-bootstrap'

export const TextArea = ({ field, form, ...props }) => {
  const largeTextArea = props.size === 'large'
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Text className="help-text-label">{props.helpText}</Form.Text>
      <Form.Control
        {...field}
        as="textarea"
        className={
          'open-text-entry' + (largeTextArea ? ' large-text-area' : '')
        }
        id={props.id}
        onChange={props.onChange}
      />
    </Form.Group>
  )
}
