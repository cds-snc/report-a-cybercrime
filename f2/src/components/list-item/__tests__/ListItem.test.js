import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { ListItem, Li } from '..'

//these are just the same base tests as govuk package

describe('ListItem', () => {
  const example = 'example'
  const wrapper = (
    <ThemeProvider theme={theme}>
      <ListItem
        fontSize={[1, null, 2]}
        lineHeight={[1, null, 2]}
        mb={[0, null, 1]}
      >
        {example}
      </ListItem>
    </ThemeProvider>
  )

  it('renders a ListItem and Li component without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(wrapper, div)
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Li>{example}</Li>
      </ThemeProvider>,
      div,
    )
  })
})
