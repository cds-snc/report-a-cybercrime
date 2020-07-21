/** @jsx jsx **/
import { jsx } from '@emotion/core'
import { Icon } from '@chakra-ui/core'
import { LinkButton } from '../link'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Trans } from '@lingui/macro'

export const BackButton = ({ variant, variants, variantColor, ...props }) => (
  <Route
    render={({ history }) => (
      <LinkButton
        d="inline-flex"
        alignItems="center"
        onClick={e => {
          e.preventDefault()
          history.goBack()
        }}
        href="#"
        tabindex="0"
        {...props}
      >
        <Icon name="chevron-left" />
        <Trans id="backButton.text" />
      </LinkButton>
    )}
  />
)

BackButton.propTypes = {
  route: PropTypes.string,
  children: PropTypes.any,
}
