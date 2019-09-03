/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Trans } from '@lingui/macro'

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

export const PhaseBanner = () => (
  <div css={phasebanner}>
    <span>ALPHA</span>
    <span>
      <Trans>This site will change as we test ideas.</Trans>
    </span>
  </div>
)
