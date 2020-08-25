/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { TextArea } from '../components/formik/textArea'
import { useStateValue } from '../utils/state'
import { formDefaults } from './defaultValues'
import { Form, Container, Row } from 'react-bootstrap'
import { Formik, Field } from 'formik'
import { NextCancelButtons } from '../components/formik/button'

export const WhatHappenedForm = (props) => {
  const [data] = useStateValue()
  const whatHappened = {
    ...formDefaults.whatHappened,
    ...data.formData.whatHappened,
  }
  const { fyiForm } = data.formData

  let formLabel = <Trans id="whatHappenedPage.summary" />
  let formHelpText = <Trans id="whatHappenedPage.hint" />
  let nextPage = <Trans id="whatHappenedPage.nextPage" />
  let formHelpText2

  if (fyiForm) {
    formLabel = <Trans id="whatHappenedPage.fyi.summary" />
    formHelpText = <Trans id="whatHappenedPage.fyi.hint" />
    formHelpText2 = <Trans id="whatHappenedPage.fyi.hint2" />
    nextPage = <Trans id="fyiForm.nextPage2" />
  }

  return (
    <Formik
      initialValues={whatHappened}
      onSubmit={(values) => {
        props.onSubmit(values)
      }}
    >
      {({ handleSubmit, handleChange, handleBlur }) => (
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row className="form-question">
              <Row className="form-label">
                {formLabel}
              </Row>
              <Row className="form-helper-text">
                {formHelpText}
                {formHelpText2 ? (
                <p>
                  <br />
                  {formHelpText2}
                </p>
                ) : null}
              </Row>
            </Row>
            <Row className="form-section">
              <Field
                name="whatHappened"
                component={TextArea}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="10"
                id="textarea-whatHappened"              >
              </Field>
            </Row>
            <Row>
              <NextCancelButtons
                submit={<Trans id="whatHappenedPage.nextButton" />}
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

WhatHappenedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
