import styled from '@emotion/styled'
import React from 'react'
import { Form } from 'react-bootstrap'

const HelpText = styled(Form.Text)`
  line-height: 1.25;
  font-size: 1rem;
`

const Label = styled(Form.Label)`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  line-height: 1;
  margin-left: 0px;
  max-width: 600px;
`

const TextField = styled(Form.Control)`
  margin-top: 0.75rem;
  min-height: 80px;
  border-color: rgb(174, 174, 174);
  width: 100%;
  max-width: 600px;
  &:hover {
    box-shadow: rgb(213, 213, 213) 0px 0px 0px 2px;
    border-color: black;
  }
  &:focus {
    box-shadow: rgba(99, 179, 237, 0.6) 0px 0px 4px 1px;
    outline: none;
    border-color: black;
  }
`

export const TextArea = ({ field, form, ...props }) => {
  return (
    <Form.Group controlId={props.id}>
      <Label>{props.label}</Label>
      <HelpText>{props.helpText}</HelpText>
      <TextField
        {...field}
        as="textarea"
        rows={props.rows}
        onChange={props.onChange}
      />
    </Form.Group>
  )
}
