import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Form, Row } from 'react-bootstrap'
import { FormRow } from '../row'
import { cleanProps } from '../../../utils/cleanProps'
import { space, border, layout, typography } from 'styled-system'

const HelpText = styled(Form.Text)`
  padding-left: 1.5rem;
  font-size: 0.875rem;
  margin-top: -0.5rem;
  line-height: 1.5;
`

const Label = styled(Form.Check.Label)`
  padding-left: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  padding-top: 0.5rem;
  &:before {
    width: 2.5rem;
    height: 2.5rem;
    top: 0rem;
  }
`

const Input = styled(Form.Check.Input)`
  width: 2.5rem;
  height: 2.5rem;
  z-index: auto;
`

const Check = styled(Form.Check)``

export const CheckBox = ({ field, form, ...props }) => {
  return (
    <FormRow>
      <Form.Check id={props.id} type="checkbox" custom>
        <Input type="checkbox" {...field} value={props.value} />
        <Label>{props.label}</Label>
        <HelpText>{props.helpText}</HelpText>
      </Form.Check>
      {field.checked && props.children && (
        <div className="conditional-field">{props.children}</div>
      )}
    </FormRow>
  )
}
