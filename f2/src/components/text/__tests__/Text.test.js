import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { Text } from '..'

describe('Text', () => {
  const example = 'example'

  it('Renders a Text component preset without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Text>{example}</Text>
      </ThemeProvider>,
      div,
    )
  })
})
