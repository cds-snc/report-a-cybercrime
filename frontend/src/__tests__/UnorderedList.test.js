import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'
import {
  UnorderedList,
  Ul,
  UlNone,
  UlSquare,
} from '../components/unordered-list'

describe('Unordered List', () => {
  const example = 'example'
  const wrapper = (
    <ThemeProvider theme={theme}>
      <UnorderedList
        fontSize={[1, null, 2]}
        lineHeight={[1, null, 2]}
        pl={[5, null, 6]}
        mb={4}
      >
        <li>{example}</li>
      </UnorderedList>
    </ThemeProvider>
  )

  it('renders an UnorderedList, Ul, UlNone & UlSquare component without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(wrapper, div)
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Ul>{example}</Ul>
      </ThemeProvider>,
      div,
    )
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <UlNone>{example}</UlNone>
      </ThemeProvider>,
      div,
    )
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <UlSquare>{example}</UlSquare>
      </ThemeProvider>,
      div,
    )
  })
})
