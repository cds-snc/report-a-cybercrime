import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { TimeFramePage } from '../TimeFramePage'
import theme from '../../theme'
import en from '../../../locale/en/messages.js'

const client = {
  readQuery: () => ({
    timeFrame: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

describe('<TimeFramePage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <I18nProvider language={'en'} catalogs={{ en }}>
            <TimeFramePage />
          </I18nProvider>
        </ApolloProvider>
      </ThemeProvider>,
    )
  })
})
