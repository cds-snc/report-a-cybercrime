import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
import { ThemeProvider } from 'emotion-theming'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import theme from '../../../theme'
import { render } from '@testing-library/react'
import { Steps } from '../'
import en from '../../../locales/en.js'

i18n.load('en', { en })
i18n.activate('en')

describe('<Steps />', () => {
  it('Render without crashing - 2 steps', () => {
    render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={[]} addTypename={false}>
          <I18nProvider i18n={i18n}>
            <Steps activeStep={2} totalSteps={6} />
          </I18nProvider>
        </MockedProvider>
      </ThemeProvider>,
    )
  })

  it('Uses step props correctly', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={[]} addTypename={false}>
          <I18nProvider i18n={i18n}>
            <Steps activeStep={1} totalSteps={6}></Steps>
          </I18nProvider>
        </MockedProvider>
      </ThemeProvider>,
    )
    const test = getAllByText(/Step 1 of 6/)
    expect(test).toHaveLength(1)
  })
})
