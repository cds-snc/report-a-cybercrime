import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { Link, A } from '..'

describe('Links', () => {
  const example = 'example'

  it('Renders a Link and A component without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <Link to="/">{example}</Link>
        </ThemeProvider>
      </MemoryRouter>,
      div,
    )
    ReactDOM.render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <A href="http://www.google.com">{example}</A>
        </ThemeProvider>
      </MemoryRouter>,
      div,
    )
  })
})
