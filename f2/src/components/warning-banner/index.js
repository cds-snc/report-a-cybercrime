/* eslint-disable react/no-unescaped-entities */
/** @jsx jsx **/
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { Container } from '../container'
import { Text } from '../text'
import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/core'

const bannerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const WarningBanner = props => {
  const { bg, status, message } = props

  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}

WarningBanner.propTypes = {
  bg: PropTypes.string,
}

WarningBanner.defaultProps = {
  bg: 'yellow',
  status: 'warning',
  message:
    "Warning! This is a prototype. It won't actually submit your report to the RCMP.",
}
