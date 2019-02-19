import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'
import { Button } from '../components/button'

describe('Button', () => {
  const example = 'example'

  it('Renders a Button component preset without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Button>{example}</Button>
      </ThemeProvider>,
      div,
    )
  })
})
