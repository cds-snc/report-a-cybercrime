import React from 'react'
import wait from 'waait'
import { i18n } from '@lingui/core'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import en from '../../locales/en.json'
import canada from '../../theme/canada'
import { StateProvider, initialState, reducer } from '../../utils/state'
import { WhoAreYouReportForForm } from '../WhoAreYouReportForForm'


i18n.load('en', { en })
i18n.activate('en')

const clickOn = (element) => fireEvent.click(element)

describe('<WhoAreYouReportForForm />', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <WhoAreYouReportForForm onSubmit={submitMock} />
            </StateProvider>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    // find the next button so we can trigger a form submission
    const nextButton = getByText(/nextButton/)

    // Click the next button to trigger the form submission
    clickOn(nextButton.parentElement)
    await wait(0) // Wait for promises to resolve

    expect(submitMock).toHaveBeenCalledTimes(1)
  })

  it('renders the business description field when A business is selected', async () => {
    const submitMock = jest.fn()

    const { getByText,  getByLabelText} = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <WhoAreYouReportForForm  onSubmit={submitMock} />
            </StateProvider>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const radio = getByLabelText('whoAreYouReportForPage.options.business')
    clickOn(radio)

    // find the "What business are you reporting for?" label
    expect(getByText('whoAreYouReportForPage.business.label')).toBeTruthy();
  })

  it('not render the business description field when someone I know is selected', async () => {
    const submitMock = jest.fn()
    
    const { queryByText,  getByLabelText} = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <WhoAreYouReportForForm  onSubmit={submitMock} />
            </StateProvider>
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const radio = getByLabelText('whoAreYouReportForPage.options.someone')
    clickOn(radio)

    //can not find the "What business are you reporting for?" label
    expect(queryByText('whoAreYouReportForPage.business.label')).toBeFalsy();     
  })
  
})
