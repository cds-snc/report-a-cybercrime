/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { FormRow } from '../components/formik/row'
import { Formik, Field } from 'formik'
import { NextCancelButtons, SkipButton } from '../components/formik/button'
import { LocationInfoFormSchema } from './LocationInfoFormSchema'
import { ErrorText } from '../components/formik/paragraph'
import { Input } from '../components/formik/input'
import { ErrorSummary } from '../components/formik/alert'
import { formDefaults } from './defaultValues'
import { WarningModal } from '../components/formik/warningModal'

export const LocationInfoForm = (props) => {
  const [, dispatch] = useStateValue()
  const [data] = useStateValue()
  const { doneForms } = data
  const locationInfo = {
    ...formDefaults.location,
    ...data.formData.location,
  }

  const errorDescription = {
    postalCode: {
      label: <Trans id="locationinfoPage.postalCode" />,
      message: <Trans id="locationInfoForm.Warning" />,
    },
  }

  function RemoveData() {
    return dispatch({
      type: 'saveFormData',
      data: {
        location: {
          postalCode: '',
          city: '',
          province: '',
        },
      },
    })
  }

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="locationinfoPage.postalCity" />
          <Trans id="locationinfoPage.postalCity.notFoundWarning" />
          <Trans id="locationinfoPage.postalProv" />
          <Trans id="locationinfoPage.postalProv.notFoundWarning" />
        </div>
      ) : null}
      <Formik
        initialValues={locationInfo}
        validateOnChange={false}
        validationSchema={LocationInfoFormSchema()}
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          submitCount,
          dirty,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <WarningModal dirty={dirty} isSubmitting={isSubmitting} />
            {errors.postalCode && (
              <ErrorSummary
                errors={errorDescription}
                submissions={submitCount}
                title={<Trans id="default.hasValidationErrors" />}
              />
            )}
            <Container>
              <FormRow>
                <Trans id="locationinfoPage.skipInfo" />
              </FormRow>
              <FormRow marginBottom="1rem">
                <SkipButton
                  label={<Trans id="locationinfoPage.skipButton" />}
                  onClick={() => {
                    RemoveData()
                  }}
                  to={doneForms ? '/confirmation' : '/contactinfo'}
                />
              </FormRow>
              <FormRow>
                {errors.postalCode && (
                  <ErrorText>{errors.postalCode}</ErrorText>
                )}
              </FormRow>
              <FormRow>
                <Field
                  name="postalCode"
                  label={<Trans id="locationinfoPage.postalCode" />}
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="postalCode"
                  type="text"
                  helpText={<Trans id="locationinfoPage.postalCodeExample" />}
                />
              </FormRow>
              <Row>
                <NextCancelButtons
                  submit={<Trans id="locationPage.nextButton" />}
                  cancel={<Trans id="button.cancelReport" />}
                  label={<Trans id="locationinfoPage.nextPage" />}
                />
              </Row>
            </Container>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}

LocationInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
