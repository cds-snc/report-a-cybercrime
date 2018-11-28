import React from 'react'
import { css } from 'react-emotion'

const style = css`
  font-size: 30pt;
`

export const H1 = props => <h1 className={style}>{props.children}</h1>
