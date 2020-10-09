import React from 'react'
import styled from '@emotion/styled'
import { Form } from 'react-bootstrap'
import { FormRow } from '../row'
import { ConditionalField } from '../conditionalField'
import { checkboxRadio } from '../theme'
import { cleanProps } from '../../../utils/cleanProps'

const conditionalFieldStyle = (props) => {
  if (props.checked && props.helpText) {
    return `${checkboxRadio.HELP_TEXT_CHECKED}`
  }
}

const HelpText = styled(Form.Text, {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  ${checkboxRadio.HELP_TEXT}
  ${conditionalFieldStyle}
`

const Label = styled(Form.Check.Label, {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  ${checkboxRadio.LABEL}
  ${conditionalFieldStyle}
`

const Input = styled(Form.Check.Input)`
  ${checkboxRadio.INPUT}
`
export const Radio = ({ field, form, ...props }) => {
  const paddingBottom = props.helpText ? `0rem` : `1rem`

  return (
    <FormRow paddingBottom={paddingBottom} paddingLeft="1rem">
      <Form.Check id={props.id} type="radio" custom>
        <Input type="radio" {...field} value={props.value} />
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
