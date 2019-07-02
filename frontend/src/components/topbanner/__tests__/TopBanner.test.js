import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { TopBanner } from '../'
import { render, cleanup } from '@testing-library/react'
import { testClient } from '../../../utils/createTestClient'
import { ApolloProvider } from 'react-apollo'

describe('<TopBanner />', () => {
  afterEach(cleanup)

  it('renders using the language prop correctly', () => {
    const englishClient = testClient({ language: 'en' })

    const { getByRole } = render(
      <ApolloProvider client={englishClient}>
        <ThemeProvider theme={theme}>
          <TopBanner lang="en" />
        </ThemeProvider>
      </ApolloProvider>,
    )
    const test = getByRole('img')
    expect(test.getAttribute('alt')).toBe('Royal Canadian Mounted Police')
  })

  it('renders using the bg color prop correctly', () => {
    const englishClient = testClient({ language: 'en' })

    const { getByTestId } = render(
      <ApolloProvider client={englishClient}>
        <ThemeProvider theme={{ colors: { blue: '#005ea5' } }}>
          <TopBanner lang="en" bg="blue" />
        </ThemeProvider>
      </ApolloProvider>,
    )
    const test = getByTestId('background-color')
    expect(test).toHaveStyleRule('background-color', '#005ea5')
  })

  it('renders with a black bg if no bg color prop specified', () => {
    const englishClient = testClient({ language: 'en' })

    const { getByTestId } = render(
      <ApolloProvider client={englishClient}>
        <ThemeProvider theme={{ colors: { black: '#000000' } }}>
          <TopBanner lang="en" />
        </ThemeProvider>
      </ApolloProvider>,
    )
    const test = getByTestId('background-color')
    expect(test).toHaveStyleRule('background-color', '#000000')
  })
})
