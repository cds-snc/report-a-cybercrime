/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Input } from '../components/input'
import { useStateValue } from '../utils/state'
import { formDefaults } from './defaultValues'
import { TextArea } from '../components/formik/textArea'
import { NextCancelButtons } from '../components/formik/button'
import { Formik, FieldArray, Field, ErrorMessage } from 'formik'
import { MoneyLostInfoFormSchema } from './MoneyLostInfoFormSchema'
import { Form, Container, Row } from 'react-bootstrap'
import { Radio } from '../components/formik/radio'
import { Error } from '../components/formik/alert'

export const MoneyLostInfoForm = (props) => {
  const [data] = useStateValue()

  const moneyLost = {
    ...formDefaults.moneyLost,
    ...data.formData.moneyLost,
  }

  const formOptions = [
    {
      name: 'eTransfer',
      radioLabel: <Trans id="methodPayment.eTransfer" />,
      radioName: 'methodPayment.eTransfer',
      radioValue: 'methodPayment.eTransfer',
    },
    {
      name: 'creditCard',
      radioLabel: <Trans id="methodPayment.creditCard" />,
      radioName: 'methodPayment.creditCard',
      radioValue: 'methodPayment.creditCard',
    },
    {
      name: 'giftCard',
      radioLabel: <Trans id="methodPayment.giftCard" />,
      radioName: 'methodPayment.giftCard',
      radioValue: 'methodPayment.giftCard',
    },
    {
      name: 'cryptocurrency',
      radioLabel: <Trans id="methodPayment.cryptocurrency" />,
      radioName: 'methodPayment.cryptocurrency',
      radioValue: 'methodPayment.cryptocurrency',
    },
    {
      name: 'other',
      radioLabel: <Trans id="methodPayment.other" />,
      radioName: 'methodPayment.other',
      radioValue: 'methodPayment.other',
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
        initialValues={moneyLost}
        validationSchema={MoneyLostInfoFormSchema()}
        onSubmit={(values) => props.onSubmit(values)}
      >
        {({ handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="form-question">
                <ErrorMessage name="moneyLost" component={Error} />
              </Row>
              <Row className="form-section">
                <Field
                  name="demandedMoney"
                  label={<Trans id="moneyLostPage.demandedMoney" />}
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id={'demanded-money'}
                />
              </Row>
              <Row className="form-section">
                <Field
                  name="moneyTaken"
                  label={<Trans id="moneyLostPage.moneyTaken" />}
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id={'money-taken'}
                />
              </Row>
              <Row className="form-section">
                <FieldArray
                  name="methodsOfPayment"
                  className="form-section"
                  render={() =>
                    formOptions.map((question) => {
                      return (
                        <React.Fragment key={question.name}>
                          <Field
                            name="methodsOfPayment"
                            label={question.radioLabel}
                            component={Radio}
                            value={question.radioValue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="radio"
                            id={'radio-' + question.name}
                          />
                          <Field
                            name={question.name}
                            label={question.questionLabel}
                            helpText={question.helpText}
                            component={TextArea}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                        </React.Fragment>
                      )
                    })
                  }
                />
              </Row>

              {/* <FormArrayControl
                name="methodsOfPayment"
                label={<Trans id="moneyLostPage.methodPayment" />}
                helperText={<Trans id="moneyLostPage.selectMethod" />}
              >
                {methodsOfPayment.map((key) => {
                  return (
                    <Box key={key}>
                      <CheckboxAdapter name="methodPayment" value={key}>
                        {i18n._(key)}
                      </CheckboxAdapter>
                      {key === 'methodPayment.other' &&
                        values.methodPayment.includes('methodPayment.other') && (
                          <ConditionalForm>
                            <Field name="methodOther" component={Input} />
                          </ConditionalForm>
                        )}
                    </Box>
                  )
                })}
              </FormArrayControl> */}

              <Row className="form-label">
                <Trans id="moneyLostPage.transactionDate" />
              </Row>
              <Row className="form-helper-text">
                <Trans id="moneyLostPage.transactionDateExample" />
              </Row>

              {/* <Stack direction="row" spacing="2">
                <Field
                  name="transactionDay"
                  label={<Trans id="moneyLostPage.transactionDay" />}
                  component={Input}
                  group="transactionDate"
                  w={70}
                  maxLength="2"
                />
                <Field
                  name="transactionMonth"
                  label={<Trans id="moneyLostPage.transactionMonth" />}
                  component={Input}
                  group="transactionDate"
                  w={70}
                  maxLength="2"
                />
                <Field
                  name="transactionYear"
                  label={<Trans id="moneyLostPage.transactionYear" />}
                  component={Input}
                  group="transactionDate"
                  w={110}
                  maxLength="4"
                />
              </Stack> */}

              {/* <Well variantColor="blue">
                <Trans id="moneyLostPage.tip" />
              </Well> */}
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
