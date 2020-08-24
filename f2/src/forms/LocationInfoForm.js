/** @jsx jsx */
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
            <P w="100%">
              <Trans id="locationinfoPage.skipInfo" />
            </P>
            <SkipButton
              label={<Trans id="locationinfoPage.skipButton" />}
              to="/contactinfo"
            />
            <P>
              <br />
            </P>
            <Field
              name="postalCode"
              label="Postal code"
              component={Input}
              onChange={handleChange}
              onBlur={handleBlur}
              id="postalCode"
              type="text"
              helpText="For example: K1A 0R2"
            />
            <ErrorMessage name="postalCode" component={Error} />
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
  )
}

LocationInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
