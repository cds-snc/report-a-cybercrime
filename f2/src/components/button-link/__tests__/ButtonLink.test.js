import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../theme'
import { ButtonLink } from '..'

describe('<ButtonLink />', () => {
  afterEach(cleanup)

  it('properly renders child components', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonLink>
          <em>foo</em>
        </ButtonLink>
      </ThemeProvider>,
    )
    expect(getAllByText(/foo/)).toHaveLength(1)
  })
})
