import React from 'react'
import { Form, Row, Col, Container } from 'react-bootstrap'
import { Trans } from '@lingui/macro'
import { Field, ErrorMessage } from 'formik'
import { Error } from '../alert'

const DateEntry = ({ field, form, ...props }) => {
  let length = 2
  let dateClass = 'day-month'
  const error = form.errors[`${field.name}`]

  if (props.type === 'year') {
    length = 4
    dateClass = 'year'
  }

  return (
    <Col sm="auto" className="date-picker">
      <Form.Group controlId={props.id}>
        <Form.Label className="date-label">{props.label}</Form.Label>
        <Form.Control
          className={'date-input ' + dateClass + (error ? ' field-error' : '')}
          type="text"
          {...field}
          maxLength={length}
        />
      </Form.Group>
    </Col>
  )
}

export const DatePicker = ({ field, form, ...props }) => {
  console.log(JSON.stringify(form, null, 2))

  return (
    <Container fluid>
      <Row>
        <Form.Label>{props.label}</Form.Label>
      </Row>
      <Row>
        <Form.Text className="input-help-text">{props.helpText}</Form.Text>
      </Row>

      <Row>
        {(form.errors[field.name + 'Day'] ||
          form.errors[field.name + 'Month'] ||
          form.errors[field.name + 'Year'] ||
          form.status.errors[field.name + 'Error']) && (
          <Error>Invalid date</Error>
        )}
      </Row>

      <Row className="date-group">
        <Field
          name={field.name + 'Day'}
          component={DateEntry}
          onChange={props.onChange}
          id={props.id + 'Day'}
          value={props.day}
          label={<Trans id="whenDidItStart.startDay" />}
        />
        <Field
          name={field.name + 'Month'}
          component={DateEntry}
          onChange={props.onChange}
          id={props.id + 'Month'}
          value={props.month}
          label={<Trans id="whenDidItStart.startMonth" />}
        />
        <Field
          name={field.name + 'Year'}
          component={DateEntry}
          onChange={props.onChange}
          id={props.id + 'Year'}
          value={props.year}
          type="year"
          label={<Trans id="whenDidItStart.startYear" />}
        />
      </Row>
    </Container>
  )
}
