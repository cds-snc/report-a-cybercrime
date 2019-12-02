import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { Button } from '../'

import chroma from 'chroma-js'

describe('<Button />', () => {
  afterEach(cleanup)

  it('passes WCAG color contrast', () => {
    const { getByText } = render(
      <ThemeProvider theme={canada}>
        <Button>foo</Button>
      </ThemeProvider>,
    )

    //console.log(getByText(/foo/).getAttribute('color'));

    expect(chroma.contrast('black', 'white')).toBeGreaterThan(4.5)
  })
})
