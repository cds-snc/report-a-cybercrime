/** @jsx jsx */
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import { jsx } from '@emotion/core'

import 'react-datepicker/dist/react-datepicker.css'

export const DateSelector = ({ value, onChange, ...props }) => {
  return <DatePicker selected={value} onChange={onChange} {...props} />
}

DateSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
}
