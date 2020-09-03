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
  return (
    <Container fluid>
      <Row>
        <Form.Label>{props.label}</Form.Label>
      </Row>
      <Row>
        <Form.Text className="input-help-text">{props.helpText}</Form.Text>
      </Row>
      <Row className="date-group">
        <ErrorMessage name={field.name + 'Day'} component={Error} />
        <ErrorMessage name={field.name + 'Month'} component={Error} />
        <ErrorMessage name={field.name + 'Year'} component={Error} />
      </Row>
      <Row className="date-group">
        <Field
          name={field.name + 'Day'}
          component={DateEntry}
          id={props.id + 'Day'}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={props.day}
          label={<Trans id="whenDidItStart.startDay" />}
        />
        <Field
          name={field.name + 'Month'}
          component={DateEntry}
          id={props.id + 'Month'}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={props.month}
          label={<Trans id="whenDidItStart.startMonth" />}
        />
        <Field
          name={field.name + 'Year'}
          component={DateEntry}
          id={props.id + 'Year'}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={props.year}
          type="year"
          label={<Trans id="whenDidItStart.startYear" />}
        />
      </Row>
    </Container>
  )
}
