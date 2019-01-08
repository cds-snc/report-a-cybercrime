import { mount } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import { LanguageSwitcher } from '../LanguageSwitcher'
import React from 'react'
import { testClient } from '../utils/createTestClient'

describe('<LanguageSwitcher />', () => {
  describe('with {language:"en"} in the client cache', () => {
    it('displays a link to the French version', () => {
      const englishClient = testClient({ language: 'en' })
      const wrapper = mount(
        <ApolloProvider client={englishClient}>
          <LanguageSwitcher />
        </ApolloProvider>,
      )
      expect(wrapper.text()).toMatch(/Français/)
    })
  })

  describe('with {language:"fr"} in the client cache', () => {
    it('displays a link to the English version', () => {
      const wrapper = mount(
        <ApolloProvider client={testClient({ language: 'fr' })}>
          <LanguageSwitcher />
        </ApolloProvider>,
      )
      expect(wrapper.text()).toMatch(/English/)
    })
  })

  it(`renders a button and not a link because it doesn't navigate anywhere`, () => {
    const wrapper = mount(
      <ApolloProvider client={testClient({ language: 'fr' })}>
        <LanguageSwitcher />
      </ApolloProvider>,
    )
    expect(wrapper.find('button')).toHaveLength(1)
  })
})
