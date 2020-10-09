import React from 'react'
import styled from '@emotion/styled'
import { Form } from 'react-bootstrap'
import { FormRow } from '../row'
import { ConditionalField } from '../conditionalField'
import { checkboxRadio } from '../theme'
import { cleanProps } from '../../../utils/cleanProps'

const helperTextStyle = (props) => {
  if (props.checked) {
    return `${checkboxRadio.HELP_TEXT_CHECKED}`
  }
}
const HelpText = styled(Form.Text, {
  shouldForwardProp: (prop) => cleanProps(prop),
})`
  ${checkboxRadio.HELP_TEXT}
  ${helperTextStyle}
`
const Label = styled(Form.Check.Label)`
  ${checkboxRadio.LABEL}
`

const Input = styled(Form.Check.Input)`
  ${checkboxRadio.INPUT}
`

export const CheckBox = ({ field, form, ...props }) => {
  const paddingBottom = props.helpText ? `0rem` : `1rem`

  return (
    <FormRow
      height="fit-content"
      paddingBottom={paddingBottom}
      paddingLeft="1rem"
    >
      <Form.Check id={props.id} type="checkbox" custom>
        <Input type="checkbox" {...field} value={props.value} />
        <Label>{props.label}</Label>
        <HelpText checked={field.checked}>{props.helpText}</HelpText>
      </Form.Check>
      {field.checked && props.children && (
        <ConditionalField>{props.children}</ConditionalField>
      )}
    </FormRow>
  )
}
