/** @jsx jsx **/
import { jsx, css } from '@emotion/core'
import { Link } from '../link'
import { Trans } from '@lingui/macro'
import PropTypes from 'prop-types'

export const BackButton = ({ route = '' }) => (
  <div
    css={css`
      margin-bottom: 1.5rem;

      a {
        text-decoration: none;
        border-bottom: 1px solid;
        padding-bottom: 3px;

        span {
          font-size: 0.9rem;
        }
      }
    `}
  >
    <Link type="button" to={route} textAlign="left">
      <Trans>
        <span>&#9664;</span> Back{' '}
      </Trans>
    </Link>
  </div>
)

BackButton.propTypes = {
  route: PropTypes.string,
}
