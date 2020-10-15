import React from 'react'
import styled from '@emotion/styled'
import { Form } from 'react-bootstrap'
import { FormRow } from '../row'
import { ConditionalField } from '../conditionalField'
import { cleanProps } from '../../../utils/cleanProps'

const conditionalFieldStyle = (props) => {
  if (props.checked && props.helpText) {
    return `border-left-width: 0.25rem;
    border-left-color: rgb(174,174,174);
    margin-left: -0.25rem;
    `
  }
}

const HelpText = styled(Form.Text, {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  padding-left: 1.5rem;
  font-size: 0.875rem;
  margin-bottom: -0.25rem;
  line-height: 1.5;
  margin-top: 0rem;
  ${conditionalFieldStyle}
`
const Label = styled(Form.Check.Label, {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  padding-left: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  padding-top: 0.5rem;
  &:before {
    width: 2.5rem;
    height: 2.5rem;
    top: 0rem;
  }
  ${conditionalFieldStyle}
`

const Input = styled(Form.Check.Input)`
  width: 2.5rem;
  height: 2.5rem;
  z-index: auto;
`

export const CheckBox = ({ field, form, ...props }) => {
  const paddingBottom = props.helpText ? `0rem` : `1rem`

  return (
    <FormRow paddingBottom={paddingBottom} paddingLeft="1rem">
      <Form.Check id={props.id} type="checkbox" custom>
        <Input type="checkbox" {...field} value={props.value} />
        <Label {...field} {...props}>
          {props.label}
        </Label>
        <HelpText {...field} {...props}>
          {props.helpText}
        </HelpText>
      </Form.Check>
      {field.checked && props.children && (
        <ConditionalField>{props.children}</ConditionalField>
      )}
    </FormRow>
  )
}
