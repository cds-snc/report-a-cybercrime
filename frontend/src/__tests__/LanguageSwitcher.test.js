import { mount } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { LanguageSwitcher } from '../LanguageSwitcher'
import React from 'react'
import { testClient } from '../utils/createTestClient'
import theme from '../theme'

describe('<LanguageSwitcher />', () => {
  it('displays the correct language name for lang=en', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={testClient({ language: 'en' })}>
          <LanguageSwitcher language="en" />
        </ApolloProvider>
      </ThemeProvider>,
    )
    expect(wrapper.text()).toMatch(/English/)
  })

  it('displays the correct language name for lang=fr', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={testClient({ language: 'en' })}>
          <LanguageSwitcher language="fr" />
        </ApolloProvider>
      </ThemeProvider>,
    )
    expect(wrapper.text()).toMatch(/Français/)
  })

  it(`renders a button and not a link because it doesn't navigate anywhere`, () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={testClient({ language: 'en' })}>
          <LanguageSwitcher language="fr" />
        </ApolloProvider>
      </ThemeProvider>,
    )
    expect(wrapper.find('button')).toHaveLength(1)
  })
})
