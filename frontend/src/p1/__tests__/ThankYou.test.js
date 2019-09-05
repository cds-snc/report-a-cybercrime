import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MockedProvider } from 'react-apollo/test-utils'
import { ThemeProvider } from 'emotion-theming'
import { ThankYou } from '../ThankYou'
import { I18nProvider } from '@lingui/react'
import en from '../../../locale/en/messages.js'
import theme from '../../theme'
import { GET_LANGUAGE_QUERY } from '../../utils/queriesAndMutations'

let mocks = [
  {
    request: { query: GET_LANGUAGE_QUERY },
    result: { data: { language: 'en' } },
  },
]

describe('<ThankYou />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={mocks}>
          <I18nProvider language={'en'} catalogs={{ en }}>
            <ThankYou />
          </I18nProvider>
        </MockedProvider>
      </ThemeProvider>,
    )
  })
})
