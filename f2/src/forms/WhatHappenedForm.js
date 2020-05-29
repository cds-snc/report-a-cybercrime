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
  const { fyiForm }  = data.formData

  return (
    <Form
      initialValues={whatHappened}
      onSubmit={localOnSubmit}
      render={({ handleSubmit }) => (
        <Stack as="form" onSubmit={handleSubmit} spacing={6} shouldWrapChildren>
          <Field
            name="whatHappened"
            label={<Trans id="whatHappenedPage.summary" />}
            helperText={<Trans id="whatHappenedPage.hint" />}
            component={TextArea}
            h="300px"
          />
          <NextAndCancelButtons
            next={fyiForm ? <Trans id="fyiForm.nextPage2" /> : <Trans id="whatHappenedPage.nextPage" />}
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
