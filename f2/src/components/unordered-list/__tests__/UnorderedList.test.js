import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { Ul } from '..'

describe('Unordered List', () => {
  const example = 'example'

  it('renders an Ul component without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ThemeProvider theme={canada}>
        <Ul>{example}</Ul>
      </ThemeProvider>,
      div,
    )
  })

  it('UL accepts a listStyleType prop', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ThemeProvider theme={canada}>
        <Ul listStyleType="square">{example}</Ul>
      </ThemeProvider>,
      div,
    )
  })
})
