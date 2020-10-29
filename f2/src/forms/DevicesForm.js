/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Input } from '../components/formik/input'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field, ErrorMessage } from 'formik'
import { NextCancelButtons } from '../components/formik/button'
import { Error, Info } from '../components/formik/alert'
import { useStateValue } from '../utils/state'
import { formDefaults } from './defaultValues'
import { WarningModal } from '../components/formik/warningModal'

export const DevicesForm = (props) => {
  const [data] = useStateValue()
  const devicesInfo = {
    ...formDefaults.devicesInfo,
    ...data.formData.devicesInfo,
  }

  return (
    <React.Fragment>
      <Formik
        initialValues={devicesInfo}
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, dirty, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <WarningModal dirty={dirty} isSubmitting={isSubmitting} />
            <Container>
              <Row className="form-question" lg={1}></Row>
              <ErrorMessage name="devicePage" component={Error} />
              <Row className="form-section">
                <Field
                  name="device"
                  label={<Trans id="devicePage.device" />}
                  helpText={<Trans id="devicePage.deviceExample" />}
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="device"
                />
              </Row>
              <Row className="form-section">
                <Field
                  name="account"
                  label={<Trans id="devicePage.account" />}
                  helpText={<Trans id="devicePage.accountExample" />}
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="account"
                />
              </Row>
              <Row className="form-section">
                <Info>
                  <Trans id="devicePage.tip" />
                </Info>
              </Row>
              <Row>
                <NextCancelButtons
                  submit={<Trans id="devicePage.nextButton" />}
                  cancel={<Trans id="button.cancelReport" />}
                  label={<Trans id="devicePage.nextPage" />}
                />
              </Row>
            </Container>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
DevicesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
