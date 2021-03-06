import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field } from 'formik'
import { CheckBoxRadio } from '../components/formik/checkboxRadio'
import { Warning } from '../components/formik/alert'
import { NextCancelButtons } from '../components/formik/button'
import { WarningModal } from '../components/formik/warningModal'

export const AnonymousInfoForm = (props) => {
  const [data] = useStateValue()

  const anonymous = {
    ...data.formData.anonymous,
  }

  return (
    <Formik
      initialValues={anonymous}
      onSubmit={(values) => {
        if (
          JSON.stringify(values.anonymousOptions) ===
          JSON.stringify(['anonymousPage.yes'])
        ) {
          data.formData.location.postalCode = ''
        } else {
          data.formData.location.city = ''
          data.formData.location.province = ''
        }
        props.onSubmit(values)
      }}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        dirty,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <WarningModal dirty={dirty} isSubmitting={isSubmitting} />
          <Container>
            <Row className="form-section">
              <Field
                name="anonymousOptions"
                label={<Trans id="anonymousPage.yes" />}
                component={CheckBoxRadio}
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
