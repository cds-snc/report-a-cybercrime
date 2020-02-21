/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, useField } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Stack, FormControl, Alert, AlertIcon } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { ConditionalForm } from '../components/container'
import { TextInput } from '../components/TextInput'
import { CheckboxAdapter } from '../components/checkbox'
import { FormArrayControl } from '../components/FormArrayControl'
import { A } from '../components/link'
import { Field } from '../components/Field'

const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...rest} isInvalid={error && touched} />
}

export const InformationForm = props => {
  const { i18n } = useLingui()
  const [data] = useStateValue()
  const information = {
    typeOfInfoReq: [],
    typeOfInfoObtained: [],
    infoObtainedOther: '',
    tellUsMore: '',
    ...data.formData.personalInformation,
  }

  const typeOfInfoReq = [
    'typeOfInfoReq.creditCard',
    'typeOfInfoReq.dob',
    'typeOfInfoReq.homeAddress',
    'typeOfInfoReq.sin',
    'typeOfInfoReq.other',
  ]

  const typeOfInfoObtained = [
    'typeOfInfoObtained.creditCard',
    'typeOfInfoObtained.dob',
    'typeOfInfoObtained.homeAddress',
    'typeOfInfoObtained.sin',
    'typeOfInfoObtained.other',
  ]

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="typeOfInfoReq.creditCard" />
          <Trans id="typeOfInfoReq.dob" />
          <Trans id="typeOfInfoReq.homeAddress" />
          <Trans id="typeOfInfoReq.sin" />
          <Trans id="typeOfInfoReq.other" />
          <Trans id="typeOfInfoObtained.creditCard" />
          <Trans id="typeOfInfoObtained.dob" />
          <Trans id="typeOfInfoObtained.homeAddress" />
          <Trans id="typeOfInfoObtained.sin" />
          <Trans id="typeOfInfoObtained.other" />
        </div>
      ) : null}
      <Form
        initialValues={information}
        onSubmit={props.onSubmit}
        render={({ handleSubmit, values }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            <FormArrayControl
              name="infoReqOther"
              label={<Trans id="informationPage.typeOfInfoReq" />}
              helperText={<Trans id="informationPage.typeOfInfoReqExample" />}
            >
              {typeOfInfoReq.map(key => {
                return (
                  <React.Fragment key={key}>
                    <CheckboxAdapter name="infoReqOther" value={key}>
                      {i18n._(key)}
                    </CheckboxAdapter>
                    {key === 'typeOfInfoReq.other' &&
                      values.typeOfInfoReq.includes('typeOfInfoReq.other') && (
                        <ConditionalForm>
                          <Field name="infoReqOther" component={TextInput} />
                        </ConditionalForm>
                      )}
                  </React.Fragment>
                )
              })}
            </FormArrayControl>
            <FormArrayControl
              name="infoReqOther"
              label={<Trans id="informationPage.typeOfInfoObtained" />}
              helperText={
                <Trans id="informationPage.typeOfInfoObtainedExample" />
              }
            >
              {typeOfInfoObtained.map(key => {
                return (
                  <React.Fragment key={key}>
                    <CheckboxAdapter name="typeOfInfoObtained" value={key}>
                      {i18n._(key)}
                    </CheckboxAdapter>
                    {key === 'typeOfInfoObtained.other' &&
                      values.typeOfInfoReq.includes(
                        'typeOfInfoObtained.other',
                      ) && (
                        <ConditionalForm>
                          <Field
                            name="typeOfInfoObtained"
                            component={TextInput}
                          />
                        </ConditionalForm>
                      )}
                  </React.Fragment>
                )
              })}
            </FormArrayControl>

            <Field
              name="tellUsMore"
              label={<Trans id="informationPage.tellUsMore" />}
              helperText={<Trans id="informationPage.tellUsMoreExample" />}
              component={TextInput}
            />
            <Alert status="info" backgroundColor="blue.100">
              <AlertIcon name="info-outline" color="blue.800" />
              <Trans id="informationPage.tip">
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'https://www.consumer.equifax.ca/personal/'
                      : 'https://www.consumer.equifax.ca/personnel/'
                  }
                  isExternal // Opens new tab
                />
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'https://www.transunion.ca/'
                      : 'https://www.transunion.ca/fr'
                  }
                  isExternal // Opens new tab
                />
              </Trans>
            </Alert>
            <NextAndCancelButtons
              next={<Trans id="informationPage.nextStep" />}
              button={<Trans id="informationPage.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}
InformationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
