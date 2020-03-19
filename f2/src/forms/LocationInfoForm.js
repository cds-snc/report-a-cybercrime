/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { TextInput } from '../components/TextInput'
import { Stack, FormControl, VisuallyHidden } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'
import { useStateValue } from '../utils/state'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Flex, Icon } from '@chakra-ui/core'
import { P } from '../components/paragraph'
import { Button } from '../components/button'
import { Alert } from '../components/Messages'

const defaultLocation = {
  postalCode: '',
}
let postalValidation = true

export const LocationInfoForm = props => {
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

  function checkPostal(postal) {
    var regex = new RegExp(
      /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i,
    )
    if (regex.test(postal)) {
      return true
    } else {
      return false
    }
  }

  return (
    <Form
      initialValues={location}
      onSubmit={values => {
        if (!checkPostal(values.postalCode) && values.postalCode !== '') {
          postalValidation = false
        } else {
          props.onSubmit(values)
        }
      }}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} shouldWrapChildren spacing={6}>
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
          <Field name="postalCode">
            {props => (
              <FormControl>
                <FormLabel htmlFor="postalCode">
                  <Trans id="locationinfoPage.postalCode" />
                </FormLabel>
                <FormHelperText>
                  <Trans id="locationinfoPage.postalCodeExample">
                    <VisuallyHidden as="span" />
                  </Trans>
                </FormHelperText>
                <TextInput
                  id="postalCode"
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                />
              </FormControl>
            )}
          </Field>
          {postalValidation ? null : (
            <Alert status="error">
              <Trans id="locationInfoForm.warning" />
            </Alert>
          )}
          <NextAndCancelButtons
            next={<Trans id="locationinfoPage.nextPage" />}
            button={<Trans id="locationinfoPage.nextButton" />}
          />
        </Stack>
      )}
    />
  )
}

LocationInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
