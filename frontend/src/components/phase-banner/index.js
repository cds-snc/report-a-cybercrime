/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'
import { Text } from '../text'

export const PhaseBanner = ({ phase, children, phaseColor, ...rest }) => (
  <div
    css={css`
      margin: 0;
      padding-bottom: 10px;
      border-bottom: 1px solid black;
    `}
    {...rest}
  >
    <Text
      display="inline-block"
      bg={phaseColor}
      p="4px 8px;"
      px={[1, null, 2]}
      color="white"
      fontSize={[1, null, 2]}
      lineHeight={[1, null, 2]}
      mb={[1, null, 2]}
    >
      {phase}
    </Text>
    <Text
      pl={[1, null, 2]}
      display="inline-block"
      fontSize={[1, null, 2]}
      lineHeight={[1, null, 2]}
      mb={[1, null, 2]}
    >
      {children}
    </Text>
  </div>
)

PhaseBanner.propTypes = {
  phase: PropTypes.any.isRequired,
  phaseColor: PropTypes.string.isRequired,
  children: PropTypes.node,
}
