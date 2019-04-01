/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'
import { A } from '../link'

const makeInvisible = css`
  left: -999px;
  position: absolute;
  top: auto;
  overflow: hidden;
  z-index: -999;
  :focus,
  :active {
    left: auto;
    top: auto;
    height: auto;
    overflow: auto;
    z-index: 999;
  }
`
export const SkipLink = props => (
  <A css={props.invisible ? makeInvisible : null} {...props} />
)

SkipLink.defaultProps = {
  invisible: false,
}
SkipLink.propTypes = {
  children: PropTypes.any,
  invisible: PropTypes.bool,
}
