/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field, ErrorMessage } from 'formik'
import { NextCancelButtons, SkipButton } from '../components/formik/button'
import { LocationInfoFormSchema } from './LocationInfoFormSchema'
import { P } from '../components/paragraph'
import { Input } from '../components/formik/input'
import { Error } from '../components/formik/alert'

export const LocationInfoForm = (props) => {
  const [data] = useStateValue()
  const locationInfo = {
    ...data.formData.locationInfo,
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
        validationSchema={LocationInfoFormSchema()}
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
      >
        {({ handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row>
                <P w="100%">
                  <Trans id="locationinfoPage.skipInfo" />
                </P>
              </Row>
              <Row>
                <SkipButton
                  label={<Trans id="locationinfoPage.skipButton" />}
                  to="/contactinfo"
                />
              </Row>
              <P>
                <br />
              </P>
              <Row>
                <Field
                  name="postalCode"
                  label={<Trans id="locationinfoPage.postalCode" />}
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="postalCode"
                  type="text"
                  helpText="For example: K1A 0R2"
                />
              </Row>
              <Row>
                <ErrorMessage name="postalCode" component={Error} />
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
