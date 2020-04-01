import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { Link } from '../link'

export const EditButton = ({ path, label }) => {
  const { i18n } = useLingui()
  return (
    <Link to={path} aria-label={i18n._(label)} ml={4}>
      <Trans id="button.edit" />
    </Link>
  )
}

EditButton.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}
