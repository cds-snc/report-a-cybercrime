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
        d="flex"
        alignItems="center"
        onClick={() => history.goBack()}
        width= "fit-content"
        // eslint-disable-next-line no-script-url
        href="javascript:;" // otherwise can't navigate to with keyboard
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
