/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Text } from '../text'
import { UniqueID } from '../unique-id'
import { VisuallyHidden, ControlBox, Icon, Flex } from '@chakra-ui/core'
import { useField } from 'react-final-form'
import { ConditionalForm } from '../container'

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
      isChecked={checked}
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
            <Flex as="label" {...props} id={id} align="center">
              <VisuallyHidden
                {...input}
                as="input"
                type="checkbox"
                defaultChecked={isChecked ? 'true' : ''}
              />

              <ControlBox
                borderWidth="2px"
                borderColor="black"
                size={10}
                _hover={{
                  boxShadow: 'outlineHover',
                  borderColor: 'black',
                }}
                _checked={{
                  borderColor: 'black',
                  border: '3px',
                }}
                _checkedAndHover={{
                  boxShadow: 'outlineHover',
                }}
                _focus={{
                  outline: 'none',
                  bg: 'white',
                  boxShadow: 'outline',
                  borderColor: 'black',
                }}
              >
                <Icon name="check" size="24px" />
              </ControlBox>

              <Text ml={2} htmlFor={id}>
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
