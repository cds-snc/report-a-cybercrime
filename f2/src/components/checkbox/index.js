/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Text } from '../text'
import { UniqueID } from '../unique-id'
import { VisuallyHidden, ControlBox, Icon, Flex } from '@chakra-ui/core'
import { useField } from 'react-final-form'
import { ConditionalForm } from '../container'
import canada from '../../theme/canada'

export const CheckboxAdapter = ({
  name,
  value,
  defaultIsChecked,
  children,
  ...props
}) => {
  const {
    input: { checked, ...input },
    meta: { error, touched },
  } = useField(name, {
    type: 'checkbox', // important for RFF to manage the checked prop
    value, // important for RFF to manage list of strings
    defaultIsChecked,
  })

  return (
    <Checkbox
      input={input}
      isChecked={checked || defaultIsChecked}
      isInvalid={error && touched}
      conditionalField={props.conditionalField}
    >
      {children}
    </Checkbox>
  )
}

export const Checkbox = ({ input, label, isChecked, ...props }) => {
  const isCheckedAndHasCondition = isChecked && props.conditionalField

  return (
    <UniqueID>
      {id => {
        return (
          <React.Fragment>
            <Flex as="label" id={id} align="start" d="inline-flex"> 
              <VisuallyHidden
                as="input"
                type="checkbox"
                defaultChecked={isChecked ? 'true' : ''}
                {...input}
              />

              <ControlBox {...canada.variants.inputs.checkboxes}>
                <Icon name="check" size="24px" />
              </ControlBox>

              <Text as="div" ml={2} pt={2} htmlFor={id} lineHeight="1.5rem">
                {props.children}
              </Text>
            </Flex>

            {isCheckedAndHasCondition && (
              <ConditionalForm>{props.conditionalField}</ConditionalForm>
            )}
          </React.Fragment>
        )
      }}
    </UniqueID>
  )
}

Checkbox.propTypes = {
  conditionalField: PropTypes.any,
  children: PropTypes.any,
}
CheckboxAdapter.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  defaultIsChecked: PropTypes.bool,
  conditionalField: PropTypes.any,
  children: PropTypes.any,
}
