/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from '@emotion/core'
import { H1, H2 } from '../components/header'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field, useField } from 'react-final-form'
import { Stack, FormControl, Box, Alert, AlertIcon } from '@chakra-ui/core'
import { FormLabel } from '../components/FormLabel'
import { FormHelperText } from '../components/FormHelperText'
import { Button } from '../components/button'
import { TextArea } from '../components/text-area'
import { InfoCard } from '../components/container'
import { CheckboxAdapter } from '../components/checkbox'
import { FormArrayControl } from '../components/FormArrayControl'
import { Row } from '../components/layout'

const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...rest} isInvalid={error && touched} />
}

export const MidFeedbackForm = props => {
  const [status, setStatus] = useState('')

  const onChangeStatus = () => {
    setStatus('feedback.submitted')
  }

  const validate = () => {
    return {}
  }

  const { i18n } = useLingui()

  const midFeedback = [
    'midFeedback.problem.confusing',
    'midFeedback.problem.broken',
    'midFeedback.problem.adaptive',
    'midFeedback.problem.worry',
    'midFeedback.problem.other',
  ]

  let showWarning = false

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

      {status ? (
        <Row>
          <InfoCard
            bg="blue.200"
            borderColor="blue.300"
            borderBottom="3px"
            columns={{ base: 4 / 4, md: 6 / 8 }}
          >
            <H2 as="p">
              <Trans id="midFeedback.thankYou" />
            </H2>
          </InfoCard>
        </Row>
      ) : (
        <Box as="details">
          <Button
            h="inherit"
            py={4}
            whiteSpace="wrap"
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
              initialValues={{
                midFeedback: [],
                problemDescription: '',
              }}
              onSubmit={values => {
                if (
                  values.midFeedback.length === 0 &&
                  values.problemDescription.length === 0
                ) {
                  showWarning = true
                } else {
                  props.onSubmit(values)
                }
              }}
              validate={validate}
              render={({ handleSubmit, values }) => (
                <Stack
                  as="form"
                  onSubmit={handleSubmit}
                  shouldWrapChildren
                  spacing={6}
                >
                  {showWarning ? (
                    <Alert status="warning">
                      <AlertIcon />
                      <Trans id="finalFeedback.warning" />
                    </Alert>
                  ) : null}
                  <Control as="fieldset" name="midFeedback">
                    <FormArrayControl
                      name="midFeedback"
                      label={<Trans id="midFeedback.problem.label" />}
                      helperText={<Trans id="midFeedback.problem.helperText" />}
                    >
                      <Stack spacing={4}>
                        {midFeedback.map(key => {
                          return (
                            <Box key={key}>
                              <CheckboxAdapter
                                name="midFeedback"
                                value={key}
                                isChecked={midFeedback.includes(key)}
                              >
                                {i18n._(key)}
                              </CheckboxAdapter>
                            </Box>
                          )
                        })}
                      </Stack>
                    </FormArrayControl>
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
                    onChange={onChangeStatus}
                  >
                    <Trans id="midFeedback.submit" />
                  </Button>
                </Stack>
              )}
            />
          </Stack>
        </Box>
      )}
    </React.Fragment>
  )
}
