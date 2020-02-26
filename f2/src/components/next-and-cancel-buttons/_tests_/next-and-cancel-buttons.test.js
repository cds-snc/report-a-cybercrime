import React from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { MemoryRouter } from 'react-router-dom'
import { NextAndCancelButtons } from '../'
import en from '../../../locales/en.json'
import { screen } from '@testing-library/dom'

i18n.load('en', { en })
i18n.activate('en')

describe('<NextAndCancelButtons />', () => {
  afterEach(cleanup)

  it('properly renders next button with cancel button beside', () => {
    const { getAllByText, getAllByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <NextAndCancelButtons button="Next: Confirm information" />
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    //Expect to find 2 buttons
    expect(getAllByRole('button')).toHaveLength(2)

    const submitButton = getAllByRole('button')[0]
    const cancelButton = getAllByRole('button')[1]

    //There is only one next and one cancel button
    expect(getAllByText(/Next/)).toHaveLength(1)
    expect(getAllByText(/button.cancelReport/)).toHaveLength(1)

    //expect these properties to exist
    expect(submitButton).toHaveProperty('type', 'submit')
    expect(cancelButton).toHaveProperty('type', 'button')
  })
})
