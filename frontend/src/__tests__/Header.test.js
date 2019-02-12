import React from 'react'
import ReactDOM from 'react-dom'
//import { mount } from 'enzyme'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'
import { Header, H1, H2, H3, H4, H5, H6 } from '../components/header'

//these are just the same base tests as govuk package

describe('Header', () => {
  const example = 'example'
  const wrapper = (
    <ThemeProvider theme={theme}>
      <Header level={1} size={'LARGE'}>
        example
      </Header>
    </ThemeProvider>
  )

  it('renders a Header and all the H-level tags without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(wrapper, div)
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <H1>{example}</H1>
      </ThemeProvider>,
      div,
    )
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <H2>{example}</H2>
      </ThemeProvider>,
      div,
    )
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <H3>{example}</H3>
      </ThemeProvider>,
      div,
    )
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <H4>{example}</H4>
      </ThemeProvider>,
      div,
    )
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <H5>{example}</H5>
      </ThemeProvider>,
      div,
    )
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <H6>{example}</H6>
      </ThemeProvider>,
      div,
    )
  })
})
