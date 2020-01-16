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
      ml={5}
      spacing={1}
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
