/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { Trans } from '@lingui/macro'
import { jsx } from '@emotion/core'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Stack, Box } from '@chakra-ui/core'

export const ConfirmationForm = props => {
  return (
    <React.Fragment>
      <Form
        onSubmit={props.onSubmit}
        render={({ handleSubmit }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            <NextAndCancelButtons
              button={<Trans id="confirmationPage.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

ConfirmationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
