/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Container } from '../container'
import { Text } from '../text'
import { UniqueID } from '../unique-id'
import { Checkbox as CC } from '@chakra-ui/core'

export const Checkbox = ({ label, ...props }) => {
  return (
    <UniqueID>
      {id => {
        return (
          <CC {...props} id={id}>
            <Trans>{label}</Trans>
          </CC>
        )
      }}
    </UniqueID>
  )
}

Checkbox.propTypes = {
  label: PropTypes.node.isRequired,
}
