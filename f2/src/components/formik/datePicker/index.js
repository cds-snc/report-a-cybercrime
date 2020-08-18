import React from 'react'
import { Form, Row, Col, Container } from 'react-bootstrap'
import { Trans } from '@lingui/macro'
import { Field } from 'formik'

const DateEntry = ({ field, form, ...props }) => {
  let length = 2
  let dateClass = 'day-month'

  if (props.type === 'year') {
    length = 4
    dateClass = 'year'
  }

  return (
    <Col sm="auto" className="date-picker">
      <Form.Group controlId={props.id}>
        <Form.Label className="date-label">{props.label}</Form.Label>
        <Form.Control
          className={'date-input ' + dateClass}
          type="text"
          {...field}
          maxLength={length}
        />
      </Form.Group>
    </Col>
  )
}

export const DatePicker = (props) => {
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
          name={props.name + 'Day'}
          component={DateEntry}
          onChange={props.onChange}
          id={props.id + 'Day'}
          value={props.day}
          label={<Trans id="whenDidItStart.startDay" />}
        />
        <Field
          name={props.name + 'Month'}
          component={DateEntry}
          onChange={props.onChange}
          id={props.id + 'Month'}
          value={props.month}
          label={<Trans id="whenDidItStart.startMonth" />}
        />
        <Field
          name={props.name + 'Year'}
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
