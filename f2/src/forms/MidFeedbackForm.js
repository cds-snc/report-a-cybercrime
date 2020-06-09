/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from '@emotion/core'
import { H1, H2 } from '../components/header'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { useLocation } from 'react-router-dom'
import { Stack, Box } from '@chakra-ui/core'
import { containsData } from '../utils/containsData'
import { Button } from '../components/button'
import { TextArea } from '../components/text-area'
import { InfoCard } from '../components/container'
import { CheckboxAdapter } from '../components/checkbox'
import { FormArrayControl } from '../components/FormArrayControl'
import { Field } from '../components/Field'
import { Row } from '../components/layout'
import { Alert } from '../components/Messages'

export const MidFeedbackForm = props => {
  const [status, setStatus] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

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
            columns={{ base: 4 / 4, md: 6 / 8 }}
          >
            <H2 as="p">
              <Trans id="midFeedback.thankYou" />
            </H2>
          </InfoCard>
        </Row>
      ) : (
        <Box>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            h="inherit"
            py={4}
            whiteSpace="wrap"
            w={{ base: '100%', md: 'auto' }}
            color="black"
            variant="solid"
            variantColor="gray"
            bg="gray.200"
            borderColor="gray.400"
          >
            <Trans id="midFeedback.summary" />
          </Button>
          {isOpen && (
            <Stack
              bg="gray.200"
              rounded="4px"
              border="1px"
              borderColor="gray.400"
              p={4}
              py={8}
              mt={4}
              spacing={10}
            >
              <H1 as="p">
                <Trans id="midFeedback.title" />
              </H1>
              <Form
                initialValues={{
                  page: location.pathname,
                  midFeedback: [],
                  problemDescription: '',
                }}
                onSubmit={values => {
                  if (
                    !containsData([
                      values.midFeedback,
                      values.problemDescription,
                    ])
                  ) {
                    showWarning = true
                  } else {
                    setStatus('feedback.submitted')
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
                      <Alert status="error">
                        <Trans id="finalFeedback.warning" />
                      </Alert>
                    ) : null}

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
                      variant="solid"
                    >
                      <Trans id="midFeedback.submit" />
                    </Button>
                  </Stack>
                )}
              />
            </Stack>
          )}
        </Box>
      )}
    </React.Fragment>
  )
}
