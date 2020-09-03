import React from 'react'
import { Form, Row, Col, Container } from 'react-bootstrap'
import { Trans } from '@lingui/macro'
import { Field } from 'formik'

const DateEntry = ({ field, form, ...props }) => {
  let length = 2
  let dateClass = 'day-month'
  const error =
    form.errors && form.errors[`${field.name}`] && form.touched[`${field.name}`]

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
  //console.log(JSON.stringify(form, null, 2))
  return (
    <Container fluid>
      <Row>
        <Form.Label>{props.label}</Form.Label>
      </Row>
      <Row>
        <Form.Text className="input-help-text">{props.helpText}</Form.Text>
      </Row>

      <Row className="date-group">
        <Field
          name={field.name + 'Day'}
          component={DateEntry}
          id={props.id + 'Day'}
          value={props.day}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          label={<Trans id="whenDidItStart.startDay" />}
        />
        <Field
          name={field.name + 'Month'}
          component={DateEntry}
          id={props.id + 'Month'}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.month}
          label={<Trans id="whenDidItStart.startMonth" />}
        />
        <Field
          name={field.name + 'Year'}
          component={DateEntry}
          id={props.id + 'Year'}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.year}
          type="year"
          label={<Trans id="whenDidItStart.startYear" />}
        />
      </Row>
    </Container>
  )
}
