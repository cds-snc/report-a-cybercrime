/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Text } from '../text'
import { UniqueID } from '../unique-id'
import { Box, VisuallyHidden, ControlBox, Icon, Flex } from '@chakra-ui/core'
import { useField } from 'react-final-form'

export const CheckboxAdapter = ({
  name,
  value,
  defaultIsChecked,
  children,
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
    <Checkbox input={input} isChecked={checked} isInvalid={error && touched}>
      {children}
    </Checkbox>
  )
}

export const Checkbox = ({ input, label, isChecked, ...props }) => {
  return (
    <UniqueID>
      {id => {
        return (
          <Box as="label" {...props} id={id}>
            <Flex align="center">
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
          </Box>
        )
      }}
    </UniqueID>
  )
}

Checkbox.defaultProps = {}

Checkbox.propTypes = {
  children: PropTypes.any,
}
