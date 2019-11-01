/** @jsx jsx **/
import { jsx, css } from '@emotion/core'
import { Link } from '../link'
import { Trans } from '@lingui/macro'
import PropTypes from 'prop-types'
import { Anchor, Box } from 'grommet'
import { FormPrevious } from 'grommet-icons'

export const BackButton = ({ route = '', children }) => (
  <Anchor
    color="accent-3"
    href={route}
    icon={<FormPrevious />}
    label={<Trans>Back to {children}</Trans>}
  />
)

BackButton.propTypes = {
  route: PropTypes.string,
  children: PropTypes.any,
}
