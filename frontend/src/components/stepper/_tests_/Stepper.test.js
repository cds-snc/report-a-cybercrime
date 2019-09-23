import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import theme from '../../../theme'
import { render } from '@testing-library/react'
import { Steps } from '../'
import en from '../../../../locale/en/messages.js'

const catalogs = { en }

describe('<Steps />', () => {
  it('Render without crashing - 2 steps', () => {
    render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={[]} addTypename={false}>
          <I18nProvider language={'en'} catalogs={catalogs}>
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
          <I18nProvider language={'en'} catalogs={catalogs}>
            <Steps activeStep={1} totalSteps={6}></Steps>
          </I18nProvider>
        </MockedProvider>
      </ThemeProvider>,
    )
    const test = getAllByText(/Step 1 of 6/)
    expect(test).toHaveLength(1)
  })
})
