import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field } from 'formik'
import { CheckBox } from '../components/formik/checkbox'
import { Warning } from '../components/formik/alert'
import { NextCancelButtons } from '../components/formik/button'

export const AnonymousInfoForm = (props) => {
  const [data] = useStateValue()

  const anonymous = {
    ...data.formData.anonymous,
  }

  return (
    <Formik
      initialValues={anonymous}
      onSubmit={(values) => {
        props.onSubmit(values)
      }}
    >
      {({ values, handleSubmit, handleChange, handleBlur }) => (
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row className="form-section">
              <Field
                name="anonymousOptions"
                label={<Trans id="anonymousPage.yes" />}
                component={CheckBox}
                value="anonymousPage.yes"
                onChange={handleChange}
                onBlur={handleBlur}
                type="checkbox"
                id="checkbox-anonymous-option"
              />
              {values.anonymousOptions.includes('anonymousPage.yes') && (
                <Warning>
                  <Trans id="anonymousPage.warning" />
                </Warning>
              )}
            </Row>
            <Row>
              <NextCancelButtons
                submit={<Trans id="anonymousPage.nextButton" />}
                cancel={<Trans id="button.cancelReport" />}
                label={<Trans id="anonymousPage.nextPage" />}
              />
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  )
}

AnonymousInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
