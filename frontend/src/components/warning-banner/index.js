/* eslint-disable react/no-unescaped-entities */
/** @jsx jsx **/
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { Container } from '../container'
import { Text } from '../text'

const bannerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const WarningBanner = props => {
  const { bg } = props

  return (
    <Container
      data-testid="background-color"
      css={bannerStyle}
      bg={bg}
      height={[50, null, 60]}
    >
      <Text paddingLeft="10px" paddingRight="10px" textAlign="center">
        <Trans>
          Warning! This is a prototype. It won't actually submit your report to
          the RCMP.
        </Trans>
      </Text>
    </Container>
  )
}

WarningBanner.propTypes = {
  bg: PropTypes.string,
}

WarningBanner.defaultProps = {
  bg: 'yellow',
}
