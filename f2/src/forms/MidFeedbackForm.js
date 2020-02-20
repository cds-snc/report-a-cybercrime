/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { H1 } from '../components/header'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { Stack, Box } from '@chakra-ui/core'
import { Button } from '../components/button'
import { Layout } from '../components/layout'
import { TextArea } from '../components/text-area'
import { CheckboxAdapter } from '../components/checkbox'
import { FormArrayControl } from '../components/FormArrayControl'
import { Field } from '../components/Field'

export const MidFeedbackForm = ({ onSubmit }) => {
  const { i18n } = useLingui()

  const midFeedback = [
    'midFeedback.problem.confusing',
    'midFeedback.problem.broken',
    'midFeedback.problem.adaptive',
    'midFeedback.problem.worry',
    'midFeedback.problem.other',
  ]

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="midFeedback.problem.confusing" />
          <Trans id="midFeedback.problem.broken" />
          <Trans id="midFeedback.problem.adaptive" />
          <Trans id="midFeedback.problem.worry" />
          <Trans id="midFeedback.problem.other" />
        </div>
      ) : null}
      <Layout mt={10}>
        <Box as="details">
          <Button
            as="summary"
            w={{ base: '100%', md: 'auto' }}
            color="black"
            variant="solid"
            variantColor="gray"
            bg="gray.200"
            borderColor="gray.400"
          >
            <Trans id="midFeedback.summary" />
          </Button>
          <Stack
            spacing={10}
            pt={4}
            pb={10}
            borderTop={18}
            borderStyle="solid"
            borderColor="blue.600"
          >
            <H1 as="p">
              <Trans id="midFeedback.title" />
            </H1>
            <Form
              d="block"
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <Stack
                  as="form"
                  onSubmit={handleSubmit}
                  shouldWrapChildren
                  spacing={6}
                >
                  <FormArrayControl
                    name="midFeedback"
                    label={<Trans id="midFeedback.problem.label" />}
                    helperText={<Trans id="midFeedback.problem.helperText" />}
                  >
                    {midFeedback.map(key => {
                      return (
                        <React.Fragment key={key}>
                          <CheckboxAdapter
                            name="midFeedback"
                            value={key}
                            isChecked={midFeedback.includes(key)}
                          >
                            {i18n._(key)}
                          </CheckboxAdapter>
                        </React.Fragment>
                      )
                    })}
                  </FormArrayControl>
                  <Field
                    name="problemDescription"
                    label={<Trans id="midFeedback.description.label" />}
                    helperText={
                      <Trans id="midFeedback.description.helperText" />
                    }
                    component={TextArea}
                  />
                  <Button
                    type="submit"
                    w={{ base: '100%', md: 'auto' }}
                    variantColor="blue"
                  >
                    <Trans id="midFeedback.submit" />
                  </Button>
                </Stack>
              )}
            />
          </Stack>
        </Box>
      </Layout>
    </React.Fragment>
  )
}
