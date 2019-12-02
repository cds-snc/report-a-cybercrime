import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { OrderedList, Ol } from '..'

describe('Ordered List', () => {
  const example = 'example'

  it('renders an Ol without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Ol>{example}</Ol>
      </ThemeProvider>,
      div,
    )
  })

  it('OL accepts a listStyleType prop', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Ol listStyleType="lower-roman">{example}</Ol>
      </ThemeProvider>,
      div,
    )
  })
})
