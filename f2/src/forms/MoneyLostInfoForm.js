/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Input } from '../components/formik/input'
import { useStateValue } from '../utils/state'
import { formDefaults } from './defaultValues'
import { NextCancelButtons } from '../components/formik/button'
import { Formik, FieldArray, Field } from 'formik'
import {
  realTimeValidation,
  createErrorSummary,
} from './MoneyLostInfoFormSchema'
import { Form, Container, Row } from 'react-bootstrap'
import { CheckBox } from '../components/formik/checkbox'
import { DatePicker } from '../components/formik/datePicker'
import { P } from '../components/formik/paragraph'
import { ErrorSummary } from '../components/formik/alert'

export const MoneyLostInfoForm = (props) => {
  const [data] = useStateValue()
  const errorSummary = createErrorSummary

  const moneyLost = {
    ...formDefaults.moneyLost,
    ...data.formData.moneyLost,
  }

  const formOptions = [
    {
      name: 'eTransfer',
      value: 'eTransfer',
      checkboxLabel: <Trans id="methodPayment.eTransfer" />,
      checkboxName: 'methodPayment.eTransfer',
    },
    {
      name: 'creditCard',
      value: 'creditCard',
      checkboxLabel: <Trans id="methodPayment.creditCard" />,
      checkboxName: 'methodPayment.creditCard',
    },
    {
      name: 'giftCard',
      value: 'giftCard',
      checkboxLabel: <Trans id="methodPayment.giftCard" />,
      checkboxName: 'methodPayment.giftCard',
    },
    {
      name: 'cryptocurrency',
      value: 'cryptocurrency',
      checkboxLabel: <Trans id="methodPayment.cryptocurrency" />,
      checkboxName: 'methodPayment.cryptocurrency',
    },
    {
      name: 'other',
      value: 'other',
      checkboxLabel: <Trans id="methodPayment.other" />,
      checkboxName: 'methodPayment.other',
    },
  ]

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="transactionDate.error.notDay" />
          <Trans id="transactionDate.error.notMonth" />
          <Trans id="transactionDate.error.isFuture" />
          <Trans id="transactionDate.error.notYear" />
          <Trans id="transactionDate.error.yearLength" />
          <Trans id="transactionDate.error.hasNoYear" />
          <Trans id="transactionDate.error.hasNoMonth" />
          <Trans id="transactionDate.error.hasNoDay" />
          <Trans id="moneyLostPage.financialTransactions" />
        </div>
      ) : null}
      <Formik
        initialStatus={{ errors: '' }}
        initialValues={moneyLost}
        validate={(values) => {
          return realTimeValidation(values)
        }}
        onSubmit={(values) => props.onSubmit(values)}
      >
        {({ handleSubmit, handleChange, handleBlur, submitCount, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-question">
                {Object.keys(errors).length > 0 && (
                  <ErrorSummary
                    errors={errorSummary(errors)}
                    submissions={submitCount}
                    title={<Trans id="default.hasValidationErrors" />}
                  />
                )}
                <Row className="form-label" id="incidentFrequency">
                  <Trans id="whenDidItHappenPage.question" />
                </Row>
              </Row>
              <Row className="form-section">
                <Field
                  name="demandedMoney"
                  label={<Trans id="moneyLostPage.demandedMoney" />}
                  helpText={<Trans id="moneyLostPage.demandedMoneyExample" />}
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id={'demanded-money'}
                />
                <Field
                  name="moneyTaken"
                  label={<Trans id="moneyLostPage.moneyTaken" />}
                  helpText={<Trans id="moneyLostPage.moneyTakenExample" />}
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id={'money-taken'}
                />
              </Row>

              <Row className="form-question" lg={1}>
                <Row className="form-label">
                  <Trans id="moneyLostPage.methodPayment" />
                </Row>
                <Row className="form-helper-text">
                  <Trans id="moneyLostPage.selectMethod" />
                </Row>
              </Row>
              <Row className="form-section">
                <FieldArray
                  name="methodPayment"
                  className="form-section"
                  render={() =>
                    formOptions.map((question) => {
                      return (
                        <React.Fragment key={question.name}>
                          <Field
                            name="methodPayment"
                            label={question.checkboxLabel}
                            component={CheckBox}
                            value={question.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="checkbox"
                            id={'checkbox-' + question.name}
                          >
                            {question.value === 'other' && (
                              <Field
                                name={question.name}
                                label={question.descriptionLabel}
                                helpText={question.descriptionHelpText}
                                component={Input}
                                onBlur={handleBlur}
                                onChange={handleChange}
                              />
                            )}
                          </Field>
                        </React.Fragment>
                      )
                    })
                  }
                />
              </Row>
              <Row className="form-section">
                <Row className="form-label">
                  <Trans id="moneyLostPage.transactionDate" />
                </Row>
                <Row className="form-helper-text">
                  <Trans id="moneyLostPage.transactionDateExample" />
                </Row>
                {errors && errors.transaction && (
                  <P color="#dc3545" fontSize="1.25rem" marginBottom="0.5rem">
                    {
                      <Trans id="moneyLostPage.transactionDateErrorSummaryMessage" />
                    }
                  </P>
                )}
                <Field
                  name="transaction"
                  component={DatePicker}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  id="transaction"
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

MoneyLostInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
