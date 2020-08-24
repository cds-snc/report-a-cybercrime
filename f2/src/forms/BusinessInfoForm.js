/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { useLingui } from '@lingui/react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { formDefaults } from './defaultValues'
import { Input } from '../components/input'
import { Field } from '../components/Field'
import { FormArrayControl } from '../components/FormArrayControl'
import { RadioAdapter } from '../components/radio'

export const BusinessInfoForm = (props) => {
  const [data] = useStateValue()
  const businessInfo = {
    ...formDefaults.businessInfo,
    ...data.formData.businessInfo,
  }
  const { i18n } = useLingui()

  const formOptions = [
    {
      name: 'oneTo99',
      radioLabel: <Trans id="numberOfEmployee.1To99" />,
      radioName: 'numberOfEmployee.1To99',
    },
    {
      name: 'oneHundredTo499',
      radioLabel: <Trans id="numberOfEmployee.100To499" />,
      radioName: 'numberOfEmployee.100To499',
    },
    {
      name: 'fiveHundredMore',
      radioLabel: <Trans id="numberOfEmployee.500More" />,
      radioName: 'numberOfEmployee.500More',
    },
  ]

  return (
    <React.Fragment>
      <Formik
        initialValues={businessInfo}
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
      >
        {({ handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-question">
                <ErrorMessage name="businessInfo" component={Error} />
              </Row>
              <Row className="form-section">
                <FieldArray
                  name="numberOfEmployee"
                  className="form-section"
                  render={() =>
                    formOptionsReq.map((question) => {
                      return (
                        <React.Fragment key={question.name}>
                          <Field
                            name="numberOfEmployee"
                            label={question.checkboxLabel}
                            component={CheckBox}
                            value={question.checkboxValue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="checkbox"
                            id={'checkbox-' + question.name}
                          >
                            <ErrorMessage
                              name={question.name}
                              component={Error}
                            />
                          </Field>
                        </React.Fragment>
                      )
                    })
                  }
                />
              </Row>
              <Row className="form-question">
                <Row className="form-label">
                  <Trans id="informationPage.typeOfInfoObtained" />
                </Row>
                <Row className="form-helper-text">
                  <Trans id="informationPage.typeOfInfoObtainedExample" />
                </Row>
                <ErrorMessage name="informationObtained" component={Error} />
              </Row>
              <Row className="form-section">
                <FieldArray
                  name="typeOfInfoObtained"
                  className="form-section"
                  render={() =>
                    formOptionsObtained.map((question) => {
                      return (
                        <React.Fragment key={question.name}>
                          <Field
                            name="typeOfInfoObtained"
                            label={question.checkboxLabel}
                            component={CheckBox}
                            value={question.checkboxValue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="checkbox"
                            id={'checkbox-' + question.name}
                          >
                            <ErrorMessage
                              name={question.name}
                              component={Error}
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
                  submit={<Trans id="businessInfoPage.nextButton" />}
                  cancel={<Trans id="button.cancelReport" />}
                  label={<Trans id="businessInfoPage.nextPage" />}
                />
              </Row>
            </Container>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}

BusinessInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
