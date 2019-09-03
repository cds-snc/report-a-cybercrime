import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { BackButton } from '../'

describe('<Button />', () => {
  afterEach(cleanup)

  it('properly renders child components', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <BackButton route="/p2/confirmation" />
      </ThemeProvider>,
    )
    expect(getAllByText(/Back/)).toHaveLength(1)
    expect(document.querySelector('a').getAttribute('href')).toBe(
      '/p2/confirmation',
    )
  })
})
