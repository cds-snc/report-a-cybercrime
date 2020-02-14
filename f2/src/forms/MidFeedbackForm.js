/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { H1 } from '../components/header'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field, useField } from 'react-final-form'
import { Stack, FormControl, Box } from '@chakra-ui/core'
import { FormLabel } from '../components/FormLabel'
import { FormHelperText } from '../components/FormHelperText'
import { Checkbox } from '../components/checkbox'
import { Button } from '../components/button'
import { Layout } from '../components/layout'
import { TextArea } from '../components/text-area'

const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...rest} isInvalid={error && touched} />
}

const CheckboxArrayControl = ({ name, value, defaultIsChecked, children }) => {
  const {
    input: { checked, ...input },
    meta: { error, touched },
  } = useField(name, {
    type: 'checkbox', // important for RFF to manage the checked prop
    value, // important for RFF to manage list of strings
    defaultIsChecked,
  })

  return (
    <Checkbox {...input} isChecked={checked} isInvalid={error && touched}>
      {children}
    </Checkbox>
  )
}

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
                  <Control as="fieldset" name="midFeedback">
                    <FormLabel as="legend" htmlFor="midFeedback" mb={2}>
                      <Trans id="midFeedback.problem.label" />
                    </FormLabel>
                    <FormHelperText>
                      <Trans id="midFeedback.problem.helperText" />
                    </FormHelperText>
                    <Stack spacing={4}>
                      {midFeedback.map(key => {
                        return (
                          <Box key={key}>
                            <CheckboxArrayControl
                              name="midFeedback"
                              value={key}
                              isChecked={midFeedback.includes(key)}
                            >
                              {i18n._(key)}
                            </CheckboxArrayControl>
                          </Box>
                        )
                      })}
                    </Stack>
                  </Control>

                  <Field name="problemDescription">
                    {props => (
                      <FormControl>
                        <FormLabel>
                          <Trans id="midFeedback.description.label" />
                        </FormLabel>

                        <FormHelperText>
                          <Trans id="midFeedback.description.helperText" />
                        </FormHelperText>

                        <TextArea
                          id="problemDescription"
                          name={props.input.name}
                          value={props.input.value}
                          onChange={props.input.onChange}
                        />
                      </FormControl>
                    )}
                  </Field>
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
