/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
//import { TextArea } from '../components/text-area'
import { TextArea } from '../components/formik/textArea'
import { useStateValue } from '../utils/state'
import { formDefaults } from './defaultValues'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field } from 'formik'
import { NextCancelButtons } from '../components/formik/button'
import { LocationInfoFormSchema } from './LocationInfoFormSchema'

export const LocationInfoForm = (props) => {
  const [data] = useStateValue()
  const locationInfo = {
    ...formDefaults.locationInfo,
    ...data.formData.locationInfo,
  }

  let formLabel = <Trans id="locationinfoPage.postalCode" />
  let formHelpText = <Trans id="locationinfoPage.postalCodeExample" />
  let nextPage = <Trans id="locationinfoPage.nextPage" />

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
            <Row className="form-question">
              <Row className="form-label">{formLabel}</Row>

              <Row className="form-helper-text">
                <br />
                {formHelpText}
              </Row>
            </Row>
            <Row className="form-section">
              <Field
                name="locationInfo"
                component={TextArea}
                onChange={handleChange}
                onBlur={handleBlur}
                h="25px"
                marginTop="-0.5rem"
                id="textarea-locationInfo"
              ></Field>
            </Row>
            <Row>
              <NextCancelButtons
                submit={<Trans id="locationPage.nextButton" />}
                cancel={<Trans id="button.cancelReport" />}
                label={nextPage}
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
