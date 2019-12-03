import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { Li } from '..'

//these are just the same base tests as govuk package

describe('ListItem', () => {
  const example = 'example'

  it('renders a ListItem and Li component without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ThemeProvider theme={canada}>
        <Li>{example}</Li>
      </ThemeProvider>,
      div,
    )
  })
})
