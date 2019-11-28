/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Text } from '../text'
import { UniqueID } from '../unique-id'
import { Box, VisuallyHidden, ControlBox, Icon, Flex } from '@chakra-ui/core'

export const Checkbox = ({ label, isChecked, ...props }) => {
  return (
    <UniqueID>
      {id => {
        return (
          <Box as="label" {...props} id={id}>
            <Flex align="center">
              <VisuallyHidden
                as="input"
                type="checkbox"
                defaultChecked={isChecked ? 'true' : ''}
              />

              <ControlBox
                borderWidth="2px"
                borderColor="black"
                size="24px"
                _hover={{
                  boxShadow: 'outlineHover',
                  borderColor: 'black',
                }}
                _checked={{
                  bg: 'black',
                  color: 'white',
                  borderColor: 'black',
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
                <Icon name="check" />
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
