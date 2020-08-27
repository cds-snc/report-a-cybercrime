/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { useStateValue } from '../utils/state'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field } from 'formik'
import { NextCancelButtons } from '../components/formik/button'
import { Input } from '../components/formik/input'

export const LocationAnonymousInfoForm = (props) => {
  const [data] = useStateValue()
  const location = {
    ...data.formData.location,
  }

  return (
    <React.Fragment>
      <Formik
        initialValues={location}
        onSubmit={(values) => {
          props.onSubmit(values)
        }}
      >
        {({ handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row>
                <Field
                  name="city"
                  label={<Trans id="LocationAnonymousInfoForm.city" />}
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="city"
                  type="text"
                />
              </Row>
              <Row>
                <Field
                  name="province"
                  label={<Trans id="LocationAnonymousInfoForm.province" />}
                  component={Input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="province"
                  type="text"
                />
              </Row>
              <Row>
                <NextCancelButtons
                  submit={<Trans id="LocationAnonymousInfoForm.nextButton" />}
                  cancel={<Trans id="button.cancelReport" />}
                  label={<Trans id="LocationAnonymousInfoForm.nextPage" />}
                />
              </Row>
            </Container>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}

LocationAnonymousInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
