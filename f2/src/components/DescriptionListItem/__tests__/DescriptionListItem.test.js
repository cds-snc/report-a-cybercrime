import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { DescriptionListItem } from '../'
import { Stack } from '@chakra-ui/core'
import { mount } from 'enzyme'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import en from '../../../locales/en.json'

i18n.load('en', { en })
i18n.activate('en')

describe('<DescriptionListItem />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <I18nProvider i18n={i18n}>
        <ThemeProvider theme={canada}>
          <DescriptionListItem descriptionTitle="foo" description="bar" />
        </ThemeProvider>
      </I18nProvider>,
    )
  })

  it('contains dt and dd', () => {
    let dl = mount(
      <I18nProvider i18n={i18n}>
        <ThemeProvider theme={canada}>
          <Stack as="dl">
            <DescriptionListItem descriptionTitle="foo" description="bar" />
          </Stack>
        </ThemeProvider>
      </I18nProvider>,
    )

    let dt = dl.find('dt')
    let dd = dl.find('dd')

    expect(dt.is('dt')).toBeTruthy()
    expect(dd.is('dd')).toBeTruthy()
  })
})
