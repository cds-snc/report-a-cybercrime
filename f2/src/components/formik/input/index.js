import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import { FormRow } from '../row'
import styled from '@emotion/styled'

const HelpText = styled(Form.Text)`
  line-height: 1.25;
  font-size: 1rem;
  max-width: 600px;
`

const Label = styled(Form.Label)`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  line-height: 1;
  margin-left: 0px;
  max-width: 600px;
`

const InputField = styled(Form.Control)`
  margin-top: 0.75rem;
  max-width: 300px;
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

export const Input = ({ field, form, ...props }) => {
  return (
    <FormRow marginLeft="0rem">
      <Form.Group controlId={props.id}>
        <Label>{props.label}</Label>
        <HelpText>{props.helpText}</HelpText>
        <InputField
          type={props.type}
          {...field}
          placeholder={props.placeholder}
        />
      </Form.Group>
    </FormRow>
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password']),
}

Input.defaultProps = {
  type: 'text',
}
