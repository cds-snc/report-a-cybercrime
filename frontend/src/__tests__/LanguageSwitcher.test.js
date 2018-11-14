import { mount } from 'enzyme'
import { ApolloProvider } from 'react-apollo'
import { LanguageSwitcher, LanguageSwitcherBase } from '../LanguageSwitcher'
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
})

describe('<LanguageSwitcherBase />', () => {
  it('switches the language if needed', () => {
    Object.defineProperty(navigator, 'language', {
      configurable: true,
      value: 'fr-CA',
    })
    const switchLanguage = jest.fn()
    mount(
      <LanguageSwitcherBase language={'en'} switchLanguage={switchLanguage} />,
    )
    expect(switchLanguage).toBeCalled()
  })

  it('does not switch the language if not needed', () => {
    Object.defineProperty(navigator, 'language', {
      configurable: true,
      value: 'en-CA',
    })
    const switchLanguage = jest.fn()
    mount(
      <LanguageSwitcherBase language={'en'} switchLanguage={switchLanguage} />,
    )
    expect(switchLanguage).not.toBeCalled()
  })
})
