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
import { P } from '../components/paragraph'

export const WhatHappenedForm = (props) => {
  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.whatHappened))
      props.onSubmit(data)
  }

  const [data] = useStateValue()
  const whatHappened = {
    ...formDefaults.whatHappened,
    ...data.formData.whatHappened,
  }
  const { fyiForm } = data.formData

  let formLabel = <Trans id="whatHappenedPage.summary" />
  let formHelpText = <Trans id="whatHappenedPage.hint" />
  let nextButton = <Trans id="whatHappenedPage.nextPage" />

  if (fyiForm) {
    formLabel = <Trans id="whatHappenedPage.fyi.summary" />
    formHelpText = <Trans id="whatHappenedPage.fyi.hint" />
    nextButton = <Trans id="fyiForm.nextPage2" />
  }

  return (
    <Form
      initialValues={whatHappened}
      onSubmit={localOnSubmit}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} spacing={6} shouldWrapChildren>
          <Field
            name="whatHappened"
            label={formLabel}
            helperText={formHelpText}
            component={TextArea}
            h="300px"
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
