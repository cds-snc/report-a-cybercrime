import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { Link } from '../link'
import { useStateValue } from '../../utils/state'

export const EditButton = (props) => {
  const { i18n } = useLingui()
  const [{ submitted }] = useStateValue()
  const color = props.edited ? '#7834bc' : null

  return submitted ? null : (
    <Link to={props.path} aria-label={i18n._(props.label)} ml={4} color={color}>
      <Trans id="button.edit" />
    </Link>
  )
}

EditButton.propTypes = {
  path: PropTypes.isRequired,
  label: PropTypes.string.isRequired,
}
