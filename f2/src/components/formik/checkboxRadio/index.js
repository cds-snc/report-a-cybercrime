import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Form } from 'react-bootstrap'
import { FormRow } from '../row'
import { ConditionalField } from '../conditionalField'
import { cleanProps } from '../../../utils/cleanProps'

const conditionalFieldStyle = (props) => {
  if (props.checked && props.hasChildren) {
    return `
      border-left-width: 0.25rem;
      border-left-color: #aeaeae;
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
  &:active {
    &:before {
      border-color: black;
      box-shadow: rgba(99, 179, 237, 0.6) 0px 0px 4px 1px;
    }
  }
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

export const CheckBoxRadio = ({ field, form, ...props }) => {
  const paddingBottom = props.helpText ? '0rem' : '1rem'
  const hasChildren = props.children

  return (
    <FormRow paddingBottom={paddingBottom} paddingLeft="1rem">
      <Form.Check id={props.id} type={props.type} custom>
        <Input type={props.type} {...field} value={props.value} />
        <Label hasChildren={hasChildren}>{props.label}</Label>
        <HelpText hasChildren={hasChildren}>{props.helpText}</HelpText>
      </Form.Check>
      {field.checked && hasChildren && (
        <ConditionalField>{props.children}</ConditionalField>
      )}
    </FormRow>
  )
}

CheckBoxRadio.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radio']),
}
