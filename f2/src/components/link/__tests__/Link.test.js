import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { Link, A, LinkButton, ButtonLink } from '..'

const clickOn = element => fireEvent.click(element)

describe('Links', () => {
  afterEach(cleanup)
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

  it('Renders accessible ButtonLink component without crashing', () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <ButtonLink to="/">buttonlink</ButtonLink>
        </ThemeProvider>
      </MemoryRouter>,
    )

    expect(getByRole('button')).not.toHaveProperty('href', undefined)
  })

  it('Renders accessible LinkButton component without crashing', () => {
    const onClickMock = jest.fn()
    const { getAllByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <LinkButton onClick={onClickMock}>linkbutton</LinkButton>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const button = getAllByText('linkbutton')
    expect(button).toHaveLength(1)

    clickOn(button[0])

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
