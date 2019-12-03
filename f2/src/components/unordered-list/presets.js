/** @jsx jsx **/
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { List } from '@chakra-ui/core'

export const Ul = props => {
  const { listStyleType, ...rest } = props

  return (
    <List
      as="ul"
      stylePos="outside"
      styleType={listStyleType}
      ml={4}
      spacing={2}
      {...rest}
    >
      {props.children}
    </List>
  )
}

Ul.defaultProps = {
  listStyleType: 'disc',
}

Ul.propTypes = {
  listStyleType: PropTypes.string,
  children: PropTypes.any,
}
