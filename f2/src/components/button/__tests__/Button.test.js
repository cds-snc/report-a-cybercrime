import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { Button } from '../'

describe('<Button />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={canada}>
        <Button>foo</Button>
      </ThemeProvider>,
    )
  })
})
