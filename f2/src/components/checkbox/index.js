/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Input } from '../input'
import { Container } from '../container'
import { Text } from '../text'
import { UniqueID } from '../unique-id'
import { Checkbox as ChakraCheckbox } from '@chakra-ui/core'

export const Checkbox = ({ label, ...props }) => {
  return (
    <UniqueID>
      {id => {
        return (
          <ChakraCheckbox {...props} id={id}>
            <Text htmlFor={id}>{props.children}</Text>
          </ChakraCheckbox>
        )
      }}
    </UniqueID>
  )
}

Checkbox.defaultProps = {}

Checkbox.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.any,
}
