/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { Field } from '../components/Field'
import { TextArea } from '../components/text-area'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { formDefaults } from './defaultValues'
import { FormHelperText } from '../components/FormHelperText'
import { FormLabel } from '../components/FormLabel'

export const WhatHappenedForm = (props) => {
  /*const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.whatHappened))
      props.onSubmit(data)
  }*/

  const [data] = useStateValue()
  const whatHappened = {
    ...formDefaults.whatHappened,
    ...data.formData.whatHappened,
  }
  const { fyiForm } = data.formData

  let formLabel = <Trans id="whatHappenedPage.summary" />
  let formHelpText = <Trans id="whatHappenedPage.hint" />
  let nextButton = <Trans id="whatHappenedPage.nextPage" />
  let formHelpText2

  if (fyiForm) {
    formLabel = <Trans id="whatHappenedPage.fyi.summary" />
    formHelpText = <Trans id="whatHappenedPage.fyi.hint" />
    formHelpText2 = <Trans id="whatHappenedPage.fyi.hint2" />
    nextButton = <Trans id="fyiForm.nextPage2" />
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
                <Trans id="howDidTheyReachYou.reminder" />
              </Row>
              <ErrorMessage name="howDidTheyReachYou" component={Error} />
            </Row>
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
              >
                <Warning>
                  <Trans id="anonymousPage.warning" />
                </Warning>
              </Field>
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
    <Form
      initialValues={whatHappened}
      onSubmit={localOnSubmit}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} shouldWrapChildren>
          <FormLabel htmlFor="whatHappened">{formLabel}</FormLabel>
          <FormHelperText htmlFor="whatHappened">
            {formHelpText}
            {formHelpText2 ? (
              <p>
                <br />
                {formHelpText2}
              </p>
            ) : null}
          </FormHelperText>
          <Field
            name="whatHappened"
            component={TextArea}
            h="300px"
            marginTop="-1.5rem"
          />
          <NextAndCancelButtons
            next={nextButton}
            button={<Trans id="whatHappenedPage.nextButton" />}
          />
        </Stack>
      )}
    />
  )
}

WhatHappenedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
