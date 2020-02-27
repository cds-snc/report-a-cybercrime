/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from '@emotion/core'
import { H1, H2 } from '../components/header'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { Stack, Box, AlertIcon, Alert } from '@chakra-ui/core'
import { containsData } from '../utils/containsData'
import { Button } from '../components/button'
import { TextArea } from '../components/text-area'
import { InfoCard } from '../components/container'
import { CheckboxAdapter } from '../components/checkbox'
import { FormArrayControl } from '../components/FormArrayControl'
import { Field } from '../components/Field'
import { Row } from '../components/layout'

export const MidFeedbackForm = props => {
  const [status, setStatus] = useState('')
  const [isOpen, setIsOpen] = useState(false)

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
                  if (!containsData(values)) {
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
                      <Alert status="warning">
                        <AlertIcon />
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
