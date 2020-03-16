/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextArea } from '../components/text-area'
import { Stack, FormControl, Alert, AlertIcon } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'
import { useStateValue } from '../utils/state'
import { ConditionalForm } from '../components/container'
import { TextInput } from '../components/TextInput'
import { CheckboxAdapter } from '../components/checkbox'
import { FormArrayControl } from '../components/FormArrayControl'
import { Field } from '../components/Field'
import { A } from '../components/link'
import { P } from '../components/paragraph'

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
                    <React.Fragment key={key}>
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
                    </React.Fragment>
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
                    <React.Fragment key={key}>
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
                    </React.Fragment>
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
            <Alert align="center" status="success" backgroundColor="blue.100">
              <AlertIcon name="info-outline" color="blue.800" />
              <P fontSize="md" mb={0}>
                <Trans id="informationPage.tip">
                  <A
                    href={
                      i18n.locale === 'en'
                        ? 'https://www.consumer.equifax.ca/fr/c/portal/update_language?p_l_id=23&redirect=%2Ffr%2Fpersonnel%2F&languageId=en_US'
                        : 'https://www.consumer.equifax.ca/en/c/portal/update_language?p_l_id=23&redirect=%2Fen%2Fpersonal%2F&languageId=fr_FR'
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
              </P>
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
