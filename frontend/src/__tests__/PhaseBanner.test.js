import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'
import { PhaseBanner } from '../components/phase-banner'

describe('Text', () => {
  const example = 'example'

  it('Renders a PhaseBanner component preset without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <PhaseBanner phase="test" message="test message" phaseColor="blue">
          {example}
        </PhaseBanner>
      </ThemeProvider>,
      div,
    )
  })
})
