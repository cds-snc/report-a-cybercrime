import React from 'react'
import { Form, Row } from 'react-bootstrap'
import { Trans } from '@lingui/macro'

export const DatePicker = (props) => {
  return (
    <Row className="form-row">
      <Form.Label>{props.label}</Form.Label>
      <Form.Text className="input-help-text">{props.helpText}</Form.Text>

      <Form.Group controlId={props.id}>
        <Form.Label>{<Trans id="whenDidItStart.startDay" />}</Form.Label>
        <Form.Control
          className="input-field-control"
          type="input"
          placeholder={props.placeholder}
        />
      </Form.Group>

      <Form.Group controlId={props.id}>
        <Form.Label>{<Trans id="whenDidItStart.startMonth" />}</Form.Label>
        <Form.Control
          className="input-field-control"
          type="input"
          placeholder={props.placeholder}
        />
      </Form.Group>

      <Form.Group controlId={props.id}>
        <Form.Label>{<Trans id="whenDidItStart.startYear" />}</Form.Label>
        <Form.Control
          className="input-field-control"
          type="input"
          placeholder={props.placeholder}
        />
      </Form.Group>
    </Row>
  )
}
