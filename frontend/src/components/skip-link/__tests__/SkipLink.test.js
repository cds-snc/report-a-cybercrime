import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { render, cleanup } from 'react-testing-library'
import theme from '../../../theme'
import { SkipLink } from '..'

describe('SkipLinks', () => {
  afterEach(cleanup)

  it('Renders a SkipLink without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <SkipLink to="#top">skip to top</SkipLink>
      </ThemeProvider>,
    )
  })
})
