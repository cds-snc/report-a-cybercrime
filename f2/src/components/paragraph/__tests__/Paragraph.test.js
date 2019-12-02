import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { P, Lead } from '..'

describe('<Paragraph />', () => {
  const example = 'example'

  it('Renders P and Lead presets without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ThemeProvider theme={canada}>
        <P>{example}</P>
      </ThemeProvider>,
      div,
    )
    ReactDOM.render(
      <ThemeProvider theme={canada}>
        <Lead>{example}</Lead>
      </ThemeProvider>,
      div,
    )
  })
})
