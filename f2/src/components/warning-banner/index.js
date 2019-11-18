/* eslint-disable react/no-unescaped-entities */
/** @jsx jsx **/
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/core'

export const WarningBanner = props => {
  const { status, message } = props

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
