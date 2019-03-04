import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { OrderedList, Ol } from '..'

describe('Ordered List', () => {
  const example = 'example'
  const wrapper = (
    <ThemeProvider theme={theme}>
      <OrderedList
        fontSize={[1, null, 2]}
        lineHeight={[1, null, 2]}
        pl={[5, null, 6]}
        mb={4}
      >
        <li>{example}</li>
      </OrderedList>
    </ThemeProvider>
  )

  it('renders an OrderedList and Ol without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(wrapper, div)
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Ol>{example}</Ol>
      </ThemeProvider>,
      div,
    )
  })

  it('OL accepts a listStyleType prop', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Ol listStyleType="lower-roman">{example}</Ol>
      </ThemeProvider>,
      div,
    )
  })
})
