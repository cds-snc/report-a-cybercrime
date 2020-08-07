import React from 'react'
import { Form, Row, Col, Container } from 'react-bootstrap'
import { Trans } from '@lingui/macro'
import { Field } from 'formik'

const DateEntry = ({ field, form, ...props }) => {
  return (
    <Col sm="auto" className="date-picker">
      <Form.Group controlId={props.id}>
        <Form.Label className="date-label">
          {<Trans id="whenDidItStart.startDay" />}
        </Form.Label>
        <Form.Control
          className="day-month date-input"
          type="input"
          {...field}
        />
      </Form.Group>
    </Col>
  )
}

const MonthEntry = ({ field, form, ...props }) => {
  return (
    <Col sm="auto" className="date-picker">
      <Form.Group controlId={props.id}>
        <Form.Label className="date-label">
          {<Trans id="whenDidItStart.startMonth" />}
        </Form.Label>
        <Form.Control
          className="day-month date-input"
          type="input"
          {...field}
        />
      </Form.Group>
    </Col>
  )
}

const YearEntry = ({ field, form, ...props }) => {
  return (
    <Col sm="auto" className="date-picker">
      <Form.Group controlId={props.id}>
        <Form.Label className="date-label">
          {<Trans id="whenDidItStart.startYear" />}
        </Form.Label>
        <Form.Control className="year date-input" type="input" {...field} />
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
        />
        <Field
          name={props.name + 'Month'}
          component={MonthEntry}
          onChange={props.onChange}
          id={props.id + 'Month'}
          value={props.month}
        />
        <Field
          name={props.name + 'Year'}
          component={YearEntry}
          onChange={props.onChange}
          id={props.id + 'Year'}
          value={props.year}
        />
      </Row>
    </Container>
  )
}
