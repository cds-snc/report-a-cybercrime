import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Text } from '../text'
import tag from 'clean-tag'

export const PhaseBannerContainer = styled(tag.div)`
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`

export const PhaseBanner = ({ phase, message, phaseColor, ...rest }) => (
  <PhaseBannerContainer>
    <Text
      display="inline-block"
      bg={phaseColor}
      px={[1, null, 2]}
      color="white"
      fontSize={[1, null, 2]}
      lineHeight={[1, null, 2]}
      mb={[1, null, 2]}
      {...rest}
    >
      {phase}
    </Text>
    <Text
      pl={[1, null, 2]}
      display="inline-block"
      fontSize={[1, null, 2]}
      lineHeight={[1, null, 2]}
      mb={[1, null, 2]}
      {...rest}
    >
      {message}
    </Text>
  </PhaseBannerContainer>
)

PhaseBanner.propTypes = {
  phase: PropTypes.any.isRequired,
  phaseColor: PropTypes.string.isRequired,
  message: PropTypes.any,
}
