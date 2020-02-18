/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field, useField } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Checkbox } from '../components/checkbox'
import { TextArea } from '../components/text-area'
import { Stack, FormControl, Box, Alert, AlertIcon } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'
import { useStateValue } from '../utils/state'
import { ConditionalForm } from '../components/container'
import { TextInput } from '../components/TextInput'
import { A } from '../components/link'

const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...rest} isInvalid={error && touched} />
}

const CheckboxArrayControl = ({ name, value, defaultIsChecked, children }) => {
  const {
    input: { checked, ...input },
    meta: { error, touched },
  } = useField(name, {
    type: 'checkbox', // important for RFF to manage the checked prop
    value, // important for RFF to manage list of strings
    defaultIsChecked,
  })

  return (
    <Checkbox {...input} isChecked={checked} isInvalid={error && touched}>
      {children}
    </Checkbox>
  )
}

export const InformationForm = props => {
  const { i18n } = useLingui()
  const [data] = useStateValue()
  const information = {
    typeOfInfoReq: [],
    infoReqOther: '',
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
            <Control as="fieldset" name="typeOfInfoReq">
              <FormLabel as="legend" htmlFor="typeOfInfoReq" mb={2}>
                <Trans id="informationPage.typeOfInfoReq" />
              </FormLabel>
              <FormHelperText>
                <Trans id="informationPage.typeOfInfoReqExample" />
              </FormHelperText>
              <Stack spacing={4} shouldWrapChildren>
                {typeOfInfoReq.map(key => {
                  return (
                    <Box key={key}>
                      <CheckboxArrayControl name="typeOfInfoReq" value={key}>
                        {i18n._(key)}
                      </CheckboxArrayControl>
                      {key === 'typeOfInfoReq.other' &&
                        values.typeOfInfoReq.includes(
                          'typeOfInfoReq.other',
                        ) && (
                          <ConditionalForm>
                            <Field name="infoReqOther">
                              {props => (
                                <FormControl>
                                  <FormLabel htmlFor={key}></FormLabel>
                                  <TextInput
                                    id="infoReqOther"
                                    name={props.input.name}
                                    value={props.input.value}
                                    onChange={props.input.onChange}
                                  />
                                </FormControl>
                              )}
                            </Field>
                          </ConditionalForm>
                        )}
                    </Box>
                  )
                })}
              </Stack>
            </Control>
            <Control as="fieldset" name="typeOfInfoObtained">
              <FormLabel as="legend" htmlFor="typeOfInfoObtained" mb={2}>
                <Trans id="informationPage.typeOfInfoObtained" />
              </FormLabel>
              <FormHelperText>
                <Trans id="informationPage.typeOfInfoObtainedExample" />
              </FormHelperText>
              <Stack spacing={4} shouldWrapChildren>
                {typeOfInfoObtained.map(key => {
                  return (
                    <Box key={key}>
                      <CheckboxArrayControl
                        name="typeOfInfoObtained"
                        value={key}
                      >
                        {i18n._(key)}
                      </CheckboxArrayControl>
                      {key === 'typeOfInfoObtained.other' &&
                        values.typeOfInfoObtained.includes(
                          'typeOfInfoObtained.other',
                        ) && (
                          <ConditionalForm>
                            <Field name="infoObtainedOther">
                              {props => (
                                <FormControl>
                                  <FormLabel htmlFor={key}></FormLabel>
                                  <TextInput
                                    id="infoObtainedOther"
                                    name={props.input.name}
                                    value={props.input.value}
                                    onChange={props.input.onChange}
                                  />
                                </FormControl>
                              )}
                            </Field>
                          </ConditionalForm>
                        )}
                    </Box>
                  )
                })}
              </Stack>
            </Control>

            <Field name="tellUsMore">
              {props => (
                <FormControl>
                  <FormLabel htmlFor="tellUsMore">
                    <Trans id="informationPage.tellUsMore" />
                  </FormLabel>
                  <FormHelperText>
                    <Trans id="informationPage.tellUsMoreExample" />
                  </FormHelperText>
                  <TextArea
                    id="tellUsMore"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  />
                </FormControl>
              )}
            </Field>
            <Alert status="success" backgroundColor="blue.100">
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
