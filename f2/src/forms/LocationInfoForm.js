/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Flex, Icon } from '@chakra-ui/core'
import { P } from '../components/paragraph'
import { Button } from '../components/button'
import { ErrorSummary } from '../components/ErrorSummary'
import { Input } from '../components/input'
import { Field } from '../components/Field'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { formDefaults } from './defaultValues'
import { containsData } from '../utils/containsData'

export const validate = (values) => {
  const errors = {}
  //condition for an error to occur: append a lingui id to the list of error
  const postalCodeRegEXP = /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i
  if (
    'postalCode' in values &&
    containsData(values.postalCode) &&
    !new RegExp(postalCodeRegEXP).test(values.postalCode)
  ) {
    errors.postalCode = 'locationInfoForm.Warning'
  }
  return errors
}

const defaultLocation = formDefaults.location

export const LocationInfoForm = (props) => {
  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.location)) props.onSubmit(data)
  }

  const [data, dispatch] = useStateValue()

  let location
  if (!data.formData.location) {
    dispatch({ type: 'saveFormData', data: { location: defaultLocation } })
    location = defaultLocation
  } else {
    location = {
      ...defaultLocation,
      ...data.formData.location,
    }
  }

  return (
    <React.Fragment>
      <Form
        initialValues={location}
        onSubmit={localOnSubmit}
        validate={validate}
        render={({
          handleSubmit,
          values,
          errors,
          submitFailed,
          hasValidationErrors,
        }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            {submitFailed && hasValidationErrors ? (
              <ErrorSummary>
                <Trans id="locationinfoPage.hasValidationErrors" />
              </ErrorSummary>
            ) : null}
            <Flex direction="row" align="center" wrap="wrap" mb={10}>
              <P w="100%">
                <Trans id="locationinfoPage.skipInfo" />
              </P>
              <Button
                as={ReactRouterLink}
                fontSize={{ base: 'lg', md: 'xl' }}
                color="black"
                variant="solid"
                variantColor="gray"
                bg="gray.400"
                borderColor="gray.500"
                to="/contactinfo"
                textAlign="center"
              >
                <Trans id="locationinfoPage.skipButton" />
                <Icon
                  focusable="false"
                  ml={2}
                  mr={-2}
                  name="chevron-right"
                  size="28px"
                />
              </Button>
            </Flex>
            <Field
              name="postalCode"
              label={<Trans id="locationinfoPage.postalCode" />}
              errorMessage={<Trans id="locationInfoForm.Warning" />}
              helperText={
                <Trans id="locationinfoPage.postalCodeExample"></Trans>
              }
              component={Input}
            />

            <NextAndCancelButtons
              next={<Trans id="locationinfoPage.nextPage" />}
              button={<Trans id="locationinfoPage.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

LocationInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
