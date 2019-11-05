/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types'

const phasebanner = css`
  background-color: #f4f4f4;
  font-family: robotoregular, sans-serif;
  padding: 1.2rem 0.9rem;

  span:first-of-type {
    padding: 2px 8px;
    border: 2px solid;
    font-size: 0.8rem;
    margin-right: 0.5rem;
  }

  span:last-of-type {
    font-size: 0.85rem;
    margin-right: 0.6rem;
  }
`

export const PhaseBanner = props => (
  <div css={phasebanner}>
    <span>{props.phase}</span>
    <span>{props.children}</span>
  </div>
)

PhaseBanner.propTypes = {
  phase: PropTypes.node.isRequired,
  children: PropTypes.node,
}
