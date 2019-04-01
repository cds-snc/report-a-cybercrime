import React from 'react'
import wait from 'waait'
import { render, fireEvent, cleanup } from 'react-testing-library'
import { Omnibox } from '../Omnibox'
import { I18nProvider } from '@lingui/react'
import en from '../../locale/en/messages.js'
const catalogs = { en }

const fillIn = (element, { with: value }) =>
  fireEvent.change(element, { target: { value } })

describe('<Omnibox/>', () => {
  afterEach(cleanup)

  it('calls a function when it recognizes a URL', async () => {
    const urlMock = jest.fn()
    const phoneMock = jest.fn()
    const emailMock = jest.fn()

    const { getByLabelText } = render(
      <I18nProvider language={'en'} catalogs={catalogs}>
        <label>
          Identifier
          <Omnibox
            onUrl={urlMock}
            onEmail={emailMock}
            onPhoneNumber={phoneMock}
          />
        </label>
      </I18nProvider>,
    )

    const inputNode = getByLabelText('Identifier')

    fillIn(inputNode, { with: 'example.com' })
    await wait(0) // Wait for promises to resolve

    expect(urlMock).toHaveBeenCalledTimes(1)
    expect(urlMock).toHaveBeenCalledWith({
      index: 0,
      lastIndex: 11,
      raw: 'example.com',
      schema: '',
      text: 'example.com',
      url: 'http://example.com',
    })
  })

  it('calls a function when it recognizes a phone number', async () => {
    const urlMock = jest.fn()
    const phoneMock = jest.fn()
    const emailMock = jest.fn()

    const { getByLabelText } = render(
      <I18nProvider language={'en'} catalogs={catalogs}>
        <label>
          Identifier
          <Omnibox
            onUrl={urlMock}
            onEmail={emailMock}
            onPhoneNumber={phoneMock}
          />
        </label>
      </I18nProvider>,
    )

    const inputNode = getByLabelText('Identifier')

    fillIn(inputNode, { with: '+12133734253' })
    await wait(0) // Wait for promises to resolve

    expect(phoneMock).toHaveBeenCalledTimes(1)
    expect(phoneMock).toHaveBeenCalledWith({
      country: 'US',
      endsAt: 12,
      phone: '2133734253',
      startsAt: 0,
    })
  })

  it('calls a function when it recognizes an email', async () => {
    const urlMock = jest.fn()
    const phoneMock = jest.fn()
    const emailMock = jest.fn()

    const { getByLabelText } = render(
      <I18nProvider language={'en'} catalogs={catalogs}>
        <label>
          Identifier
          <Omnibox
            onUrl={urlMock}
            onEmail={emailMock}
            onPhoneNumber={phoneMock}
          />
        </label>
      </I18nProvider>,
    )

    const inputNode = getByLabelText('Identifier')

    fillIn(inputNode, { with: 'foo@example.com' })
    await wait(0) // Wait for promises to resolve

    expect(emailMock).toHaveBeenCalledTimes(1)
    expect(emailMock).toHaveBeenCalledWith({
      index: 0,
      lastIndex: 15,
      raw: 'foo@example.com',
      schema: 'mailto:',
      text: 'foo@example.com',
      url: 'mailto:foo@example.com',
    })
  })
})
