/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { TextArea } from '../components/text-area'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { Field } from '../components/Field'

export const WhatHappenedForm = (props) => {
  const [data] = useStateValue()

  const whatHappened = {
    whatHappened: '',
    ...data.formData.whatHappened,
  }

  return (
    <Form
      initialValues={whatHappened}
      onSubmit={props.onSubmit}
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
            next={<Trans id="whatHappenedPage.nextPage" />}
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
