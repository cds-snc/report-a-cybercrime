/** @jsx jsx */
import React from 'react'
import { H1 } from '../components/header'
import Trans from '@lingui/react/cjs/Trans'
import { Form, Field } from 'react-final-form'
import { Stack, FormControl } from '@chakra-ui/core'
import { FormLabel } from '../components/FormLabel'
import { FormHelperText } from '../components/FormHelperText'

export const MidFeedbackForm = ({ onSubmit }) => {
  return (
    <Box as="details">
      <H1 as="summary">
        <Trans id="midFeedback.title" />
      </H1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <Stack as="form" onSubmit={handleSubmit} spacing={6}>
            <FormControl>
              <FormLabel>
                <Trans id="midFeedback.problem.label" />
              </FormLabel>
              <FormHelperText>
                <Trans id="midFeedback.problem.help" />
              </FormHelperText>
            </FormControl>
          </Stack>
        )}
      />
    </Box>
  )
}
