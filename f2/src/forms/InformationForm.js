/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextArea } from '../components/text-area'
import { Stack, FormControl, Alert, AlertIcon, Box } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'
import { useStateValue } from '../utils/state'
import { ConditionalForm } from '../components/container'
import { TextInput } from '../components/TextInput'
import { CheckboxAdapter } from '../components/checkbox'
import { FormArrayControl } from '../components/FormArrayControl'
import { A } from '../components/link'
import { Field } from '../components/Field'
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
            <Stack spacing={4} shouldWrapChildren>
              <FormArrayControl
                name="typeOfInfoReq"
                label={<Trans id="informationPage.typeOfInfoReq" />}
                helperText={<Trans id="informationPage.typeOfInfoReqExample" />}
              >
                {typeOfInfoReq.map(key => {
                  return (
                    <Box key={key}>
                      <CheckboxAdapter name="typeOfInfoReq" value={key}>
                        {i18n._(key)}
                      </CheckboxAdapter>
                      {key === 'typeOfInfoReq.other' &&
                        values.typeOfInfoReq.includes(
                          'typeOfInfoReq.other',
                        ) && (
                          <ConditionalForm>
                            <Field name="infoReqOther" component={TextInput} />
                          </ConditionalForm>
                        )}
                    </Box>
                  )
                })}
              </FormArrayControl>
            </Stack>

            <Stack spacing={4} shouldWrapChildren>
              <FormArrayControl
                name="typeOfInfoObtained"
                label={<Trans id="informationPage.typeOfInfoObtained" />}
                helperText={
                  <Trans id="informationPage.typeOfInfoObtainedExample" />
                }
              >
                {typeOfInfoObtained.map(key => {
                  return (
                    <Box key={key}>
                      <CheckboxAdapter name="typeOfInfoObtained" value={key}>
                        {i18n._(key)}
                      </CheckboxAdapter>
                      {key === 'typeOfInfoObtained.other' &&
                        values.typeOfInfoObtained.includes(
                          'typeOfInfoObtained.other',
                        ) && (
                          <ConditionalForm>
                            <Field
                              name="infoObtainedOther"
                              component={TextInput}
                            />
                          </ConditionalForm>
                        )}
                    </Box>
                  )
                })}
              </FormArrayControl>
            </Stack>
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
              <Trans id="informationPage.tip" />
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
