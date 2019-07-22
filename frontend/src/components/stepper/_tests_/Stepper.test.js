import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
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
            <Steps activeStep={2}>
              <div>foo</div>
              <div>foo 2</div>
            </Steps>
          </I18nProvider>
        </MockedProvider>
      </ThemeProvider>,
    )
  })

  it('Uses the step prop appropriately  ', () => {
    const steps = [{ title: 'test step' }, { title: 'another step' }]
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={[]} addTypename={false}>
          <I18nProvider language={'en'} catalogs={catalogs}>
            <Steps steps={steps} activeStep={1}></Steps>
          </I18nProvider>
        </MockedProvider>
      </ThemeProvider>,
    )
    const test = getAllByText(/test step/)
    expect(test).toHaveLength(1)
  })
})
