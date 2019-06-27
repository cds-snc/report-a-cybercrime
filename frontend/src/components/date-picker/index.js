/** @jsx jsx */
import PropTypes from 'prop-types'
import DatePicker, { registerLocale } from 'react-datepicker'
import { css, jsx } from '@emotion/core'
import fr from './locale/fr'
import en from './locale/en-CA'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('fr', fr)
registerLocale('en', en)

export const DateSelector = ({ value, onChange, locale, ...props }) => {
  return (
    <DatePicker
      css={css`
        font-size: 18px;
      `}
      locale={locale}
      selected={value}
      onChange={onChange}
      {...props}
    />
  )
}

DateSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  locale: PropTypes.string,
}
