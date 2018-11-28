import React from 'react'
import { cx, css } from 'react-emotion'
import PropTypes from 'prop-types'

const h1Style = css`
  font-family: Arial, sans-serif;
  font-size: 48px;
  line-height: 1.0416666666666667;
  font-weight: bold;
  margin: 0;
  margin-bottom: 30px;
`
const h3Style = css`
  font-family: Arial, sans-serif;
  font-size: 24px;
  line-height: 1.25;
  font-weight: bold;
  margin: 0;
  margin-bottom: 20px;
`
const h4Style = css`
  font-family: Arial, sans-serif;
  font-size: 19px;
  line-height: 1.31579;
  font-weight: bold;
`

export const H1 = props => (
  <h1 className={cx(h1Style, props.className)}>{props.children}</h1>
)

H1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.Array, PropTypes.object]),
  className: PropTypes.object,
}

export const H3 = props => (
  <h3 className={cx(h3Style, props.className)}>{props.children}</h3>
)

H3.propTypes = {
  children: PropTypes.oneOfType([PropTypes.Array, PropTypes.object]),
  className: PropTypes.object,
}

export const H4 = props => (
  <h4 className={cx(h4Style, props.className)}>{props.children}</h4>
)

H4.propTypes = {
  children: PropTypes.oneOfType([PropTypes.Array, PropTypes.object]),
  className: PropTypes.object,
}
