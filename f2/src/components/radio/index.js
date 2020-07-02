/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Text } from '../text'
import { UniqueID } from '../unique-id'
import { Box, VisuallyHidden, ControlBox, Flex } from '@chakra-ui/core'
import { useField } from 'react-final-form'
import { ConditionalForm } from '../container'
import canada from '../../theme/canada'

export const RadioAdapter = ({
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
    type: 'radio',
    value,
    defaultIsChecked,
  })

  return (
    <Radio
      input={input}
      isChecked={checked}
      isInvalid={error && touched}
      conditionalField={props.conditionalField}
    >
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
  const isCheckedAndHasCondition = isChecked && conditionalField

  return (
    <UniqueID>
      {(id) => {
        return (
          <React.Fragment>
            <Flex as="label" id={id} align="start" d="inline-flex">
              <VisuallyHidden
                {...input}
                as="input"
                type="radio"
                defaultChecked={isChecked ? 'true' : ''}
                {...input}
              />

              <ControlBox type="radio" {...canada.variants.inputs.radios}>
                <Box size="20px" bg="black" rounded="full" />
              </ControlBox>

              <Text ml={2} pt={2} htmlFor={id} lineHeight="1.5rem">
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
