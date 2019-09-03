/** @jsx jsx **/
import { jsx, css } from '@emotion/core'
import { Link } from '../link'
import { Trans } from '@lingui/macro'
import PropTypes from 'prop-types'

export const BackButton = ({ route = '', children }) => (
  <div
    css={css`
      margin-bottom: 2.5rem;

      a {
        text-decoration: none;
        border-bottom: 1px solid;
        padding-bottom: 3px;

        span {
          font-size: 19px;
        }

        span:first-of-type {
          font-size: 12px;
          position: relative;
          bottom: 3px;
        }
      }
    `}
  >
    <Link type="button" to={route} textAlign="left">
      <Trans>
        <span>&#9664;</span> <span>Back to</span> <span>{children}</span>
      </Trans>
    </Link>
  </div>
)

BackButton.propTypes = {
  route: PropTypes.string,
  children: PropTypes.any,
}
