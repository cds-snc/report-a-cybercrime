/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { Error, Info } from '../components/formik/alert'
import { A } from '../components/formik/link'
import { P } from '../components/formik/paragraph'
import { formDefaults } from './defaultValues'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, FieldArray, Field, ErrorMessage } from 'formik'
import { CheckBox } from '../components/formik/checkbox'
import { Input } from '../components/formik/input'
import { NextCancelButtons } from '../components/formik/button'

export const InformationForm = (props) => {
  const [data] = useStateValue()
  const information = {
    ...formDefaults.personalInformation,
    ...data.formData.personalInformation,
  }
  const { i18n } = useLingui()

  const formOptionsReq = [
    {
      name: 'creditCardReq',
      checkboxLabel: <Trans id="typeOfInfoReq.creditCard" />,
      checkboxValue: 'typeOfInfoReq.creditCard',
    },
    {
      name: 'dobReq',
      checkboxLabel: <Trans id="typeOfInfoReq.dob" />,
      checkboxValue: 'typeOfInfoReq.dob',
    },
    {
      name: 'homeAddressReq',
      checkboxLabel: <Trans id="typeOfInfoReq.homeAddress" />,
      checkboxValue: 'typeOfInfoReq.homeAddress',
    },
    {
      name: 'sinReq',
      checkboxLabel: <Trans id="typeOfInfoReq.sin" />,
      checkboxValue: 'typeOfInfoReq.sin',
    },
    {
      name: 'otherReq',
      checkboxLabel: <Trans id="typeOfInfoReq.other" />,
      checkboxValue: 'typeOfInfoReq.other',
    },
  ]

  const formOptionsObtained = [
    {
      name: 'creditCardObtained',
      checkboxLabel: <Trans id="typeOfInfoObtained.creditCard" />,
      checkboxValue: 'typeOfInfoObtained.creditCard',
    },
    {
      name: 'dobObtained',
      checkboxLabel: <Trans id="typeOfInfoObtained.dob" />,
      checkboxValue: 'typeOfInfoObtained.dob',
    },
    {
      name: 'homeAddressObtained',
      checkboxLabel: <Trans id="typeOfInfoObtained.homeAddress" />,
      checkboxValue: 'typeOfInfoObtained.homeAddress',
    },
    {
      name: 'sinObtained',
      checkboxLabel: <Trans id="typeOfInfoObtained.sin" />,
      checkboxValue: 'typeOfInfoObtained.sin',
    },
    {
      name: 'otherObtained',
      checkboxLabel: <Trans id="typeOfInfoObtained.other" />,
      checkboxValue: 'typeOfInfoObtained.other',
    },
  ]

  return (
    <React.Fragment>
      <Formik
        initialValues={information}
        onSubmit={(values) => {
          if (!values.typeOfInfoReq.includes('typeOfInfoReq.other')) {
            values.infoReqOther = ''
          }
          if (!values.typeOfInfoObtained.includes('typeOfInfoObtained.other')) {
            values.infoObtainedOther = ''
          }
          props.onSubmit(values)
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-question" lg={1}>
                <Row className="form-label">
                  <Trans id="informationPage.typeOfInfoReq" />
                </Row>
                <Row className="form-helper-text">
                  <Trans id="informationPage.typeOfInfoReqExample" />
                </Row>
                <ErrorMessage name="informationReq" component={Error} />
              </Row>
              <Row className="form-section">
                <FieldArray
                  name="typeOfInfoReq"
                  className="form-section"
                  render={() =>
                    formOptionsReq.map((question) => {
                      return (
                        <React.Fragment key={question.name}>
                          <Field
                            name="typeOfInfoReq"
                            label={question.checkboxLabel}
                            component={CheckBox}
                            value={question.checkboxValue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="checkbox"
                            id={'checkbox-' + question.name}
                          >
                            {question.checkboxValue === 'typeOfInfoReq.other' &&
                              values.typeOfInfoReq.includes(
                                'typeOfInfoReq.other',
                              ) && (
                                <Field
                                  name="infoReqOther"
                                  component={Input}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  id={'input-infoReqOther'}
                                />
                              )}

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
              <Row className="form-question" lg={1}>
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
                            {question.checkboxValue ===
                              'typeOfInfoObtained.other' &&
                              values.typeOfInfoObtained.includes(
                                'typeOfInfoObtained.other',
                              ) && (
                                <Field
                                  name="infoObtainedOther"
                                  component={Input}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  id={'input-infoObtainedOther'}
                                />
                              )}

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
                <Info>
                  <P fontSize="md" mb={0}>
                    <Trans id="informationPage.tip">
                      <A
                        color="#0000ff"
                        target="_blank"
                        href={
                          i18n.locale === 'en'
                            ? 'https://www.consumer.equifax.ca/fr/c/portal/update_language?p_l_id=23&redirect=%2Ffr%2Fpersonnel%2F&languageId=en_US'
                            : 'https://www.consumer.equifax.ca/en/c/portal/update_language?p_l_id=23&redirect=%2Fen%2Fpersonal%2F&languageId=fr_FR'
                        }
                      />
                      <A
                        color="#0000ff"
                        target="_blank"
                        href={
                          i18n.locale === 'en'
                            ? 'https://www.transunion.ca/'
                            : 'https://www.transunion.ca/fr'
                        }
                      />
                    </Trans>
                  </P>
                </Info>
              </Row>
              <Row>
                <NextCancelButtons
                  submit={<Trans id="informationPage.nextButton" />}
                  cancel={<Trans id="button.cancelReport" />}
                  label={<Trans id="informationPage.nextStep" />}
                />
              </Row>
            </Container>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
InformationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
