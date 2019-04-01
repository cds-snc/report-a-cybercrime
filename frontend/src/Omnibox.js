import React from 'react'
import { findNumbers } from 'libphonenumber-js'
import linkifyIt from 'linkify-it'
import { Input } from './components/input'
import PropTypes from 'prop-types'

const linkify = linkifyIt()

// We are consuming any onChange prop and doing nothing with it, so it doesn't
// get passed on.
export const Omnibox = ({
  onUrl,
  onEmail,
  onPhoneNumber,
  onChange, // eslint-disable-line no-unused-vars
  ...rest
}) => {
  return (
    <Input
      {...rest}
      onChange={e => {
        let phoneNumbers = findNumbers(e.target.value)
        if (phoneNumbers.length === 1) onPhoneNumber(phoneNumbers[0])
        let urls = linkify.match(e.target.value)
        if (urls) {
          if (urls[0].schema === 'mailto:') {
            onEmail(urls[0])
          } else {
            onUrl(urls[0])
          }
        }
      }}
      type="text"
    />
  )
}

Omnibox.propTypes = {
  onUrl: PropTypes.func.isRequired,
  onEmail: PropTypes.func.isRequired,
  onPhoneNumber: PropTypes.func.isRequired,
  onChange: PropTypes.func,
}
