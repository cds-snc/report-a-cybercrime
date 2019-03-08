import PropTypes from 'prop-types'
import { UnorderedList } from '.'
/** @jsx jsx **/
import { jsx, css } from '@emotion/core'

export const Ul = props => {
  const { listStyleType, ...rest } = props
  var paddingValue

  if (listStyleType === 'none') paddingValue = 0
  else paddingValue = [5, null, 6]

  return (
    <UnorderedList
      fontSize={[2, null, 3]}
      lineHeight={[2, null, 3]}
      pl={paddingValue}
      mb={4}
      css={css`
        list-style-type: ${listStyleType};
      `}
      {...rest}
    >
      {props.children}
    </UnorderedList>
  )
}

Ul.defaultProps = {
  listStyleType: 'disc',
}

Ul.propTypes = {
  listStyleType: PropTypes.string,
  children: PropTypes.any,
}
