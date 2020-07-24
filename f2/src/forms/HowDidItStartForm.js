import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { Well } from '../components/Messages'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik'
import { getSchema, getHowDidItStartSchema } from '../utils/validationSchema'

export const HowDidItStartForm = (props) => {
  const { i18n } = useLingui()
  const [data] = useStateValue()
  const howDidItStart = {
    ...data.formData.howdiditstart,
  }

  return (
    <React.Fragment>
      <Stack shouldWrapChildren spacing={12}>
        <Formik
          enableReinitialize={true}
          initialValues={{
            email: howDidItStart.email.checked,
            emailDescription: howDidItStart.email.description,
            phone: howDidItStart.phone.checked,
            phoneDescription: howDidItStart.phone.description,
            web: howDidItStart.web.checked,
            webDescription: howDidItStart.web.description,
            software: howDidItStart.software.checked,
            softwareDescription: howDidItStart.software.description,
            other: howDidItStart.other.checked,
            otherDescription: howDidItStart.other.description,
          }}
          validationSchema={getSchema()}
          onSubmit={async (values) => {
            if (!values.email) {
              values.emailDescription = ''
            }
            if (!values.phone) {
              values.phoneDescription = ''
            }
            if (!values.web) {
              values.webDescription = ''
            }
            if (!values.software) {
              values.softwareDescription = ''
            }
            if (!values.other) {
              values.otherDescription = ''
            }

            howDidItStart.email.checked = values.email
            howDidItStart.email.description = values.emailDescription
            howDidItStart.phone.checked = values.phone
            howDidItStart.phone.description = values.phoneDescription
            howDidItStart.web.checked = values.web
            howDidItStart.web.description = values.webDescription
            howDidItStart.software.checked = values.software
            howDidItStart.software.description = values.softwareDescription
            howDidItStart.other.checked = values.other
            howDidItStart.other.description = values.otherDescription

            props.onSubmit(howDidItStart)
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Container>
                <Row className="form-question">
                  <Row className="form-label">
                    <Trans id="howDidTheyReachYou.question" />
                  </Row>
                  <Row className="form-helper-text">
                    <Trans id="howDidTheyReachYou.reminder" />
                  </Row>
                </Row>

                <Row className="checkbox-row">
                  <Form.Check controlId="howDidItStartEmail" inline={true}>
                    {touched.email && errors.email ? (
                      <div className="error-message">{errors.name}</div>
                    ) : null}
                    <Form.Check.Input
                      defaultChecked={values.email}
                      value={values.email}
                      name="email"
                      type="checkbox"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`checkbox ${
                        touched.email && errors.email ? 'error' : null
                      }`}
                    />
                    <Form.Check.Label className="form-check-label">
                      <Trans id="howDidTheyReachYou.email" />
                    </Form.Check.Label>
                  </Form.Check>
                  {values.email && (
                    <Form.Group
                      controlId="howDidItStartEmailDescription"
                      className="conditional-field"
                    >
                      <Form.Label className="question-label">
                        <Trans id="howDidTheyReachYouLabel.question1" />
                      </Form.Label>
                      <Form.Text className="help-text-label">
                        <Trans id="howDidTheyReachYouLabel.hint1" />
                      </Form.Text>
                      <Form.Control
                        as="textarea"
                        name="emailDescription"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.emailDescription}
                        className="open-text-entry"
                      />
                    </Form.Group>
                  )}
                </Row>

                <Row className="checkbox-row">
                  <Form.Check controlId="howDidItStartPhone" inline={true}>
                    <Form.Check.Input
                      defaultChecked={values.phone}
                      value={values.phone}
                      name="phone"
                      type="checkbox"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="checkbox"
                    />
                    <Form.Check.Label className="form-check-label">
                      <Trans id="howDidTheyReachYou.phone" />
                    </Form.Check.Label>
                  </Form.Check>
                  {values.phone && (
                    <Form.Group
                      controlId="howDidItStartPhoneDescription"
                      className="conditional-field"
                    >
                      <Form.Label className="question-label">
                        <Trans id="howDidTheyReachYouLabel.question2" />
                      </Form.Label>
                      <Form.Text className="help-text-label">
                        <Trans id="howDidTheyReachYouLabel.hint2" />
                      </Form.Text>
                      <Form.Control
                        as="textarea"
                        name="phoneDescription"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneDescription}
                        className="open-text-entry"
                      />
                    </Form.Group>
                  )}
                </Row>

                <Row className="checkbox-row">
                  <Form.Check controlId="howDidItStartWeb" inline={true}>
                    <Form.Check.Input
                      defaultChecked={values.web}
                      value={values.web}
                      name="web"
                      type="checkbox"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="checkbox"
                    />
                    <Form.Check.Label className="form-check-label">
                      <Trans id="howDidTheyReachYou.online" />
                    </Form.Check.Label>
                  </Form.Check>
                  {values.web && (
                    <Form.Group
                      controlId="howDidItStartWebDescription"
                      className="conditional-field"
                    >
                      <Form.Label className="question-label">
                        <Trans id="howDidTheyReachYouLabel.question3" />
                      </Form.Label>
                      <Form.Text className="help-text-label">
                        <Trans id="howDidTheyReachYouLabel.hint3" />
                      </Form.Text>
                      <Form.Control
                        as="textarea"
                        name="webDescription"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.webDescription}
                        className="open-text-entry"
                      />
                    </Form.Group>
                  )}
                </Row>

                <Row className="checkbox-row">
                  <Form.Check controlId="howDidItStartSoftware" inline={true}>
                    <Form.Check.Input
                      defaultChecked={values.software}
                      value={values.software}
                      name="software"
                      type="checkbox"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="checkbox"
                    />
                    <Form.Check.Label className="form-check-label">
                      <Trans id="howDidTheyReachYou.app" />
                    </Form.Check.Label>
                  </Form.Check>
                  {values.software && (
                    <Form.Group
                      controlId="howDidItStartSoftwareDescription"
                      className="conditional-field"
                    >
                      <Form.Label className="question-label">
                        <Trans id="howDidTheyReachYouLabel.question4" />
                      </Form.Label>
                      <Form.Text className="help-text-label">
                        <Trans id="howDidTheyReachYouLabel.hint4" />
                      </Form.Text>
                      <Form.Control
                        as="textarea"
                        name="softwareDescription"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.softwareDescription}
                        className="open-text-entry"
                      />
                    </Form.Group>
                  )}
                </Row>

                <Row className="checkbox-row">
                  <Form.Check controlId="howDidItStartOther" inline={true}>
                    <Form.Check.Input
                      defaultChecked={values.other}
                      value={values.other}
                      name="other"
                      type="checkbox"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="checkbox"
                    />
                    <Form.Check.Label className="form-check-label">
                      <Trans id="howDidTheyReachYou.others" />
                    </Form.Check.Label>
                  </Form.Check>
                  {values.other && (
                    <Form.Group
                      controlId="howDidItStartOtherDescription"
                      className="conditional-field"
                    >
                      <Form.Label className="question-label">
                        <Trans id="howDidTheyReachYouLabel.question5" />
                      </Form.Label>
                      <Form.Text className="help-text-label">
                        <Trans id="howDidTheyReachYouLabel.hint5" />
                      </Form.Text>
                      <Form.Control
                        as="textarea"
                        name="otherDescription"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.otherDescription}
                        className="open-text-entry"
                      />
                    </Form.Group>
                  )}
                </Row>
                <Button type="submit">Submit</Button>
              </Container>
            </Form>
          )}
        />

        <Well variantColor="blue">
          <Trans id="howDidItStartPage.tip" />
        </Well>
      </Stack>
    </React.Fragment>
  )
}

HowDidItStartForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
