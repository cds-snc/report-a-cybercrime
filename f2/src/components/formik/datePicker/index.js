import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Form, Row, Col, Container } from 'react-bootstrap'
import { Trans } from '@lingui/macro'
import { Field } from 'formik'
import { FormRow } from '../row'

const hasError = (props) =>
  props.hasError
    ? css`
        border-color: #dc3545;
      `
    : null

const inputLength = (props) =>
  props.dateType === 'year'
    ? css`
        width: 110px;
      `
    : css`
        width: 70px;
      `

const DateLabel = styled(Form.Label)`
  vertical-align: middle;
`

const DateColumn = styled(Col)`
  padding-left: 0rem;
`

const DateInput = styled(Form.Control)`
  margin-top: 0.75rem;
  &:hover {
    box-shadow: rgb(213, 213, 213) 0px 0px 0px 2px;
    border-color: black;
  }
  &:focus {
    box-shadow: rgba(99, 179, 237, 0.6) 0px 0px 4px 1px;
    outline: none;
    border-color: black;
  }
  ${hasError}
  ${inputLength}
`

const HelpText = styled(Form.Text)`
  line-height: 1.25;
  font-size: 1rem;
  max-width: 600px;
  display: block;
  margin-top: 0.25rem;
`

const Label = styled(Form.Label)`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  line-height: 1;
  margin-left: 0px;
  max-width: 600px;
  display: inline-block;
`

const DateEntry = ({ field, form, ...props }) => {
  let length = 2
  let dateType = 'day-month'
  const error =
    form.errors && form.errors[field.name] && form.touched[field.name]

  if (props.type === 'year') {
    length = 4
    dateType = 'year'
  }

  return (
    <DateColumn sm="auto">
      <Form.Group controlId={props.id}>
        <DateLabel>{props.label}</DateLabel>
        <DateInput
          haserror={error}
          datetype={dateType}
          type="text"
          {...field}
          maxLength={length}
        />
      </Form.Group>
    </DateColumn>
  )
}

export const DatePicker = ({ field, form, ...props }) => {
  return (
    <Container fluid>
      <Row>
        <Label>{props.label}</Label>
      </Row>
      <Row>
        <HelpText>{props.helpText}</HelpText>
      </Row>

      <FormRow marginTop="0.75rem">
        <Field
          name={field.name + 'Day'}
          component={DateEntry}
          id={props.id + 'Day'}
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
          label={<Trans id="whenDidItStart.startMonth" />}
        />
        <Field
          name={field.name + 'Year'}
          component={DateEntry}
          id={props.id + 'Year'}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          type="year"
          label={<Trans id="whenDidItStart.startYear" />}
        />
      </FormRow>
    </Container>
  )
}
