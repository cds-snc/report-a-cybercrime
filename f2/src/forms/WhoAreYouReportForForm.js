import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field, ErrorMessage } from 'formik'
import { Error } from '../components/formik/alert'
import { CheckBoxRadio } from '../components/formik/checkboxRadio'
import { TextArea } from '../components/formik/textArea'
import { P } from '../components/formik/paragraph'
import { NextCancelButtons } from '../components/formik/button'
import { formDefaults } from './defaultValues'
import { WhoAreYouReportForFormSchema } from './WhoAreYouReportForFormSchema'

export const WhoAreYouReportForForm = (props) => {
  const [data] = useStateValue()
  const whoAreYouReportFor = {
    ...formDefaults.whoAreYouReportFor,
    ...data.formData.whoAreYouReportFor,
  }

  const optionsList = [
    {
      name: 'someoneDescription',
      value: 'whoAreYouReportForPage.options.someone',
      label: <Trans id="whoAreYouReportForPage.someone.label" />,
      hint: <Trans id="whoAreYouReportForPage.someone.helperText" />,
    },
    {
      name: 'businessDescription',
      value: 'whoAreYouReportForPage.options.business',
      label: <Trans id="whoAreYouReportForPage.business.label" />,
      hint: <Trans id="whoAreYouReportForPage.business.helperText" />,
    },
  ]

  return (
    <React.Fragment>
      <Formik
        initialValues={whoAreYouReportFor}
        onSubmit={(values) => {
          optionsList.forEach((question) => {
            if (values.whoYouReportFor !== question.value) {
              values[question.name] = ''
            }
          })
          props.onSubmit(values)
        }}
        validationSchema={WhoAreYouReportForFormSchema()}
      >
        {({ handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-question">
                <ErrorMessage name="whoYouReportFor" component={Error} />
              </Row>
              <Row className="form-section">
                <React.Fragment key="myselfDescription">
                  <Field
                    name="whoYouReportFor"
                    label={<Trans id="whoAreYouReportForPage.options.myself" />}
                    component={CheckBoxRadio}
                    value="whoAreYouReportForPage.options.myself"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="radio"
                    id={'radio-myselfDescription'}
                  />
                </React.Fragment>
                <React.Fragment key="Or">
                  <P ml="0.5rem" mb="0.5rem" fontSize="1.25rem">
                    <Trans id="whoAreYouReportForPage.or" />
                  </P>
                </React.Fragment>
                <FieldArray
                  name="whoYouReportFor"
                  className="form-section"
                  render={() =>
                    optionsList.map((question) => {
                      return (
                        <React.Fragment key={question.name}>
                          <Field
                            name="whoYouReportFor"
                            label={<Trans id={question.value} />}
                            component={CheckBoxRadio}
                            value={question.value}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="radio"
                            id={'radio-' + question.name}
                          >
                            <ErrorMessage
                              name={question.name}
                              component={Error}
                            />
                            <Field
                              name={question.name}
                              label={question.label}
                              helpText={question.hint}
                              component={TextArea}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                          </Field>
                        </React.Fragment>
                      )
                    })
                  }
                />
              </Row>
              <Row>
                <NextCancelButtons
                  submit={<Trans id="whoAreYouReportForPage.nextButton" />}
                  cancel={<Trans id="button.cancelReport" />}
                  label={<Trans id="whoAreYouReportForPage.nextPage" />}
                />
              </Row>
            </Container>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}

WhoAreYouReportForForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
