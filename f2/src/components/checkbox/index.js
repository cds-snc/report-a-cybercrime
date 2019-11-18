/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { UniqueID } from '../unique-id'
import { Checkbox as ChakraCheckbox } from '@chakra-ui/core'

export const Checkbox = ({ label, ...props }) => {
  return (
    <UniqueID>
      {id => {
        return (
          <ChakraCheckbox {...props} id={id}>
            {props.children}
          </ChakraCheckbox>
        )
      }}
    </UniqueID>
  )
}

Checkbox.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.any,
}
