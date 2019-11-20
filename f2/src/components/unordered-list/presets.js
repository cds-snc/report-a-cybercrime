/** @jsx jsx **/
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { List } from '@chakra-ui/core'

export const Ul = props => {
  return (
    <List as="ol" styleType="decimal" {...props}>
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
