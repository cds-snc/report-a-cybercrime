import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { Paragraph, P, Lead } from '..'

describe('Paragraph', () => {
  const example = 'example'
  const wrapper = (
    <ThemeProvider theme={theme}>
      <Paragraph color="black">{example}</Paragraph>
    </ThemeProvider>
  )

  it('Renders a Paragraph component, P and Lead presets without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(wrapper, div)
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <P>{example}</P>
      </ThemeProvider>,
      div,
    )
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Lead>{example}</Lead>
      </ThemeProvider>,
      div,
    )
  })
})
