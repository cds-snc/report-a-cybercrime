/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field, useField } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { Checkbox } from '../components/checkbox'
import { TextArea } from '../components/text-area'
import { Stack, FormControl, VisuallyHidden, Box } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'
import { useStateValue } from '../utils/state'
import { ConditionalForm } from '../components/container'

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

const validate = () => {
  return {}
}


export const InformationForm = props => {
  const { i18n } = useLingui()
  const [data] = useStateValue()
  const information = {
    typeOfInfoReq: '',
    typeOfInfoObtained: '',
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

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="typeOfInfoReq.creditCard" />
          <Trans id="typeOfInfoReq.dob" />
          <Trans id="typeOfInfoReq.homeAddress" />
          <Trans id="typeOfInfoReq.sin" />
          <Trans id="typeOfInfoReq.other" />

        </div>
      ) : null}
      <Form
        initialValues={information}
        onSubmit={props.onSubmit}
        render={({ handleSubmit, values }) => (
          <Stack as="form" onSubmit={handleSubmit} shouldWrapChildren spacing={6}>
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
                      <CheckboxArrayControl
                        name="typeOfInfoReq"
                        value={key}

                      >
                        {i18n._(key)}
                      </CheckboxArrayControl>
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
                {typeOfInfoReq.map(key => {
                  return (
                    <Box key={key}>
                      <CheckboxArrayControl
                        name="typeOfInfoObtained"
                        value={key}

                      >
                        {i18n._(key)}
                      </CheckboxArrayControl>
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
