/** @jsx jsx **/
import { jsx } from '@emotion/core'
import { Link, Icon } from '@chakra-ui/core'
import { Trans } from '@lingui/macro'
import PropTypes from 'prop-types'
import { Link as RoutedLink } from 'react-router-dom'

export const BackButton = ({ route = '', children }) => (
  <Link
    as={RoutedLink}
    to={route}
    textAlign="left"
    fontFamily="body"
    fontSize="lg"
  >
    <Icon name="chevron-left" />
    {children}
  </Link>
)

BackButton.propTypes = {
  route: PropTypes.string,
  children: PropTypes.any,
}
