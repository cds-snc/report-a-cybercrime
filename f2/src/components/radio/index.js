/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Text } from '../text'
import { UniqueID } from '../unique-id'
import { Box, VisuallyHidden, ControlBox, Flex } from '@chakra-ui/core'

export const Radio = ({ label, isChecked, ...props }) => {
  return (
    <UniqueID>
      {id => {
        return (
          <Box as="label" {...props} id={id}>
            <Flex align="center">
              <VisuallyHidden
                as="input"
                type="radio"
                name={props.name}
                value={props.value}
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
          </Box>
        )
      }}
    </UniqueID>
  )
}

Radio.defaultProps = {}

Radio.propTypes = {
  children: PropTypes.any,
}
