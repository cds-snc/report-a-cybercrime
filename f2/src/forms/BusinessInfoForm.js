/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field, ErrorMessage } from 'formik'
import { Radio } from '../components/formik/radio'
import { Input } from '../components/formik/input'
import { useStateValue } from '../utils/state'
import { formDefaults } from './defaultValues'
import { NextCancelButtons } from '../components/formik/button'

export const BusinessInfoForm = (props) => {
  const [data] = useStateValue()
  const businessInfo = {
    ...formDefaults.businessInfo,
    ...data.formData.businessInfo,
  }

  const formOptions = [
    {
      name: 'oneTo99',
      radioLabel: <Trans id="numberOfEmployee.1To99" />,
      radioName: 'numberOfEmployee.1To99',
      radioValue: 'numberOfEmployee.1To99',
    },
    {
      name: 'oneHundredTo499',
      radioLabel: <Trans id="numberOfEmployee.100To499" />,
      radioName: 'numberOfEmployee.100To499',
      radioValue: 'numberOfEmployee.100To499',
    },
    {
      name: 'fiveHundredMore',
      radioLabel: <Trans id="numberOfEmployee.500More" />,
      radioName: 'numberOfEmployee.500More',
      radioValue: 'numberOfEmployee.500More',
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
                <Field
                  name="nameOfBusiness"
                  label={<Trans id="businessPage.nameOfBusiness" />}
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id={'name-of-business'}
                />
              </Row>
              <Row className="form-section">
                <Field
                  name="industry"
                  label={<Trans id="businessPage.industry" />}
                  helpText={<Trans id="businessPage.industryExample" />}
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id={'type-of-industry'}
                />
              </Row>
              <Row className="form-section">
                <Field
                  name="role"
                  label={<Trans id="businessPage.role" />}
                  helpText={<Trans id="businessPage.roleExample" />}
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id={'role-of-industry'}
                />
              </Row>
              <Row className="form-question" lg={1}>
                <Row className="form-label">
                  <Trans id="numberOfEmployee.label" />
                </Row>
                <Row className="form-helper-text">
                  <Trans id="numberOfEmployee.labelExample" />
                </Row>
              </Row>
              <Row className="form-section">
                <FieldArray
                  name="numberOfEmployee"
                  className="form-section"
                  render={() =>
                    formOptions.map((question) => {
                      return (
                        <React.Fragment key={question.name}>
                          <Field
                            name="numberOfEmployee"
                            label={question.radioLabel}
                            component={Radio}
                            value={question.radioValue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="radio"
                            id={'radio-' + question.name}
                          />
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
