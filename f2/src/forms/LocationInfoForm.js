/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field } from 'formik'
import { NextCancelButtons, SkipButton } from '../components/formik/button'
import { LocationInfoFormSchema } from './LocationInfoFormSchema'
import { P } from '../components/formik/paragraph'
import { Input } from '../components/formik/input'
import { ErrorSummary } from '../components/formik/alert'
import { formDefaults } from './defaultValues'
import { WarningModal } from '../components/formik/warningModal'

export const LocationInfoForm = (props) => {
  const [data] = useStateValue()
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
              <Row>
                <Trans id="locationinfoPage.skipInfo" />
              </Row>
              <Row>
                <SkipButton
                  label={<Trans id="locationinfoPage.skipButton" />}
                  to="/contactinfo"
                />
              </Row>
              <br />
              <Row>
                {errors.postalCode && (
                  <P color="#dc3545" fontSize="1.25rem" marginBottom="0.5rem">
                    {errors.postalCode}
                  </P>
                )}
              </Row>
              <Row className="form-section">
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
              </Row>
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
