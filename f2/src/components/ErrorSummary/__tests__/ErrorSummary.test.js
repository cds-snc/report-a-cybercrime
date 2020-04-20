import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import wait from 'waait'
import canada from '../../../theme/canada'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { ErrorSummary } from '../'
import { Form } from 'react-final-form'
import { Field } from '../../Field'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import en from '../../../locales/en.json'

i18n.load('en', { en })
i18n.activate('en')
const clickOn = (element) => fireEvent.click(element)

describe('<ErrorSummary />', () => {
  afterEach(cleanup)

  it('does not render if validation passes', () => {
    const submitMock = jest.fn()

    const validate = (values) => {
      const errors = {}
      //condition for an error to occur: append a lingui id to the list of error
      if (!values.foo) {
        errors.foo = 'bar'
      }
      return errors
    }

    const { queryByText } = render(
      <I18nProvider i18n={i18n}>
        <ThemeProvider theme={canada}>
          <Form
            initialValues=""
            validate={validate}
            onSubmit={(values) => {
              submitMock(values)
            }}
            render={({ handleSubmit, values, errors }) => (
              <form onSubmit={handleSubmit}>
                <ErrorSummary onSubmit={handleSubmit} errors={errors} />
                <Field name="foo" initialValue="baz" />
              </form>
            )}
          />
        </ThemeProvider>
      </I18nProvider>,
    )
    expect(queryByText(/bar/)).toBeNull()
  })

  it('displays an error summary that links to a error message', async () => {
    const submitMock = jest.fn()

    const validate = (values) => {
      const errors = {}
      //condition for an error to occur: append a lingui id to the list of error
      if (values.foo === 'baz') {
        errors.foo = 'bar'
      }
      return errors
    }

    const { queryAllByText, getByText } = render(
      <I18nProvider i18n={i18n}>
        <ThemeProvider theme={canada}>
          <Form
            initialValues=""
            validate={validate}
            onSubmit={(values) => {
              submitMock(values)
            }}
            render={({
              handleSubmit,
              values,
              errors,
              submitFailed,
              hasValidationErrors,
            }) => (
              <form onSubmit={handleSubmit}>
                {submitFailed && hasValidationErrors ? (
                  <ErrorSummary onSubmit={handleSubmit} errors={errors} />
                ) : null}
                <Field
                  name="foo"
                  label="label"
                  helperText="heeeelp"
                  errorMessage="bar"
                  initialValue="baz"
                />
                <button type="submit">Submit</button>
              </form>
            )}
          />
        </ThemeProvider>
      </I18nProvider>,
    )

    //Errors should display on submit. At first expect to have no error message
    expect(queryAllByText(/bar/)).toHaveLength(0)
    await wait(0) // Wait for promises to resolve

    //get the submit button, then click on it. Error summary renders only on submit
    const context = document.querySelector('[type="submit"]').textContent
    const submitButton = getByText(context)
    clickOn(submitButton)
    await wait(0) // Wait for promises to resolve

    expect(queryAllByText(/bar/)).toHaveLength(2)
  })
})
