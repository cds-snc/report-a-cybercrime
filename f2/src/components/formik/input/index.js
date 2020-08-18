import React from 'react'
import PropTypes from 'prop-types'
import { Form, Row } from 'react-bootstrap'

export const Input = ({ field, form, ...props }) => {
  return (
    <Row className="form-row">
      <Form.Group controlId={props.id}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Text className="input-help-text">{props.helpText}</Form.Text>
        <Form.Control
          className="input-field-control"
          type={props.type}
          {...field}
          placeholder={props.placeholder}
        />
      </Form.Group>
    </Row>
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password']),
}

Input.defaultProps = {
  type: 'input',
}
