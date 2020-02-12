/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Text } from '../text'
import { UniqueID } from '../unique-id'
import { Box, VisuallyHidden, ControlBox, Flex } from '@chakra-ui/core'
import { useField } from 'react-final-form'
import { ConditionalForm } from '../container'

export const RadioAdapter = ({ name, value, defaultIsChecked, children }) => {
  const {
    input: { checked, ...input },
    meta: { error, touched },
  } = useField(name, {
    type: 'radio',
    value,
    defaultIsChecked,
  })

  return (
    <Radio input={input} isChecked={checked} isInvalid={error && touched}>
      {children}
    </Radio>
  )
}

export const Radio = ({
  input,
  label,
  isChecked,
  conditionalField,
  ...props
}) => {
  const isCheckedAndHasCondition = isChecked && props.conditionalField

  return (
    <UniqueID>
      {id => {
        return (
          <React.Fragment>
            <Flex as="label" id={id} align="center">
              <VisuallyHidden
                {...input}
                as="input"
                type="radio"
                defaultChecked={isChecked ? 'true' : ''}
              />

              <ControlBox
                borderWidth="2px"
                borderColor="black"
                size="40px"
                rounded="full"
                type="radio"
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
                <Box size="20px" bg="black" rounded="full" />
              </ControlBox>

              <Text ml={2} htmlFor={id}>
                {props.children}
              </Text>
            </Flex>
            {isCheckedAndHasCondition && (
              <ConditionalForm>{conditionalField}</ConditionalForm>
            )}
          </React.Fragment>
        )
      }}
    </UniqueID>
  )
}

Radio.propTypes = {
  children: PropTypes.any,
  conditionalField: PropTypes.object,
}
