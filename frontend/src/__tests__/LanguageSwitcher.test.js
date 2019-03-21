import { mount } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import { LanguageSwitcher } from '../LanguageSwitcher'
import React from 'react'
import { testClient } from '../utils/createTestClient'

describe('<LanguageSwitcher />', () => {
  it('displays the correct language name for lang=en', () => {
    const wrapper = mount(
      <ApolloProvider client={testClient({ language: 'en' })}>
        <LanguageSwitcher language="en" />
      </ApolloProvider>,
    )
    expect(wrapper.text()).toMatch(/English/)
  })

  it('displays the correct language name for lang=fr', () => {
    const wrapper = mount(
      <ApolloProvider client={testClient({ language: 'en' })}>
        <LanguageSwitcher language="fr" />
      </ApolloProvider>,
    )
    expect(wrapper.text()).toMatch(/Français/)
  })

  it(`renders a button and not a link because it doesn't navigate anywhere`, () => {
    const wrapper = mount(
      <ApolloProvider client={testClient({ language: 'en' })}>
        <LanguageSwitcher language="fr" />
      </ApolloProvider>,
    )
    expect(wrapper.find('button')).toHaveLength(1)
  })
})
