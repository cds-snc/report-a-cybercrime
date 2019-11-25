import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { ApolloConsumer } from 'react-apollo'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field, useField } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Checkbox } from '../components/checkbox'
import { Text } from '../components/text'
import { TextArea } from '../components/text-area'
import { finalFormAdapter } from '../utils/finalFormAdapter'
import { getImpact } from '../utils/queriesAndMutations'
import {
  FormControl,
  CheckboxGroup,
  FormLabel,
  Code,
  Box,
  Stack,
} from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'

const CheckboxAdapter = finalFormAdapter(Checkbox)

const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...rest} isInvalid={error && touched} />
}

const CheckboxArrayControl = ({ name, value, children }) => {
  const {
    input: { checked, ...input },
    meta: { error, touched },
  } = useField(name, {
    type: 'checkbox', // important for RFF to manage the checked prop
    value, // important for RFF to manage list of strings
  })
  return (
    <Checkbox {...input} isChecked={checked} isInvalid={error && touched}>
      {children}
    </Checkbox>
  )
}

const CheckboxStyle = styled('label')`
  margin-bottom: 8pt;
`

const validate = () => {
  return {}
}

export const ImpactStatementInfoForm = props => {
  const { i18n } = useLingui()

  const howWereYouAffected = [
    'impactPage.affected1',
    'impactPage.affected2',
    'impactPage.affected3',
    'impactPage.affected4',
    'impactPage.affected5',
    'impactPage.affected6',
    'impactPage.affected7',
  ]
  return (
    <ApolloConsumer>
      {client => (
        <Form
          initialValues={getImpact(client)}
          onSubmit={data => props.onSubmit(client, data)}
          validate={validate}
          render={({ handleSubmit, values }) => (
            <Box as="form" onSubmit={handleSubmit}>
              <Control as="fieldset" name="howWereYouAffected">
                <FormLabel as="legend" htmlFor="howWereYouAffected">
                  <Text fontWeight="bold">
                    <Trans id="impactPage.detail" />
                  </Text>
                </FormLabel>
                <Stack spacing={2} shouldWrapChildren>
                  {howWereYouAffected.map(key => {
                    return (
                      <CheckboxArrayControl
                        name="howWereYouAffected"
                        value={key}
                      >
                        {i18n._(key)}
                      </CheckboxArrayControl>
                    )
                  })}
                </Stack>
              </Control>

              <Field name="damage">
                {props => (
                  <FormControl>
                    <FormLabel>
                      <Text fontWeight="bold">
                        <Trans id="impactPage.summary" />
                      </Text>
                    </FormLabel>
                    <FormHelperText variant="above">
                      <Text color="blackAlpha.600">
                        <Trans id="impactPage.example" />
                      </Text>
                    </FormHelperText>
                    <TextArea
                      id="damage"
                      name={props.input.name}
                      value={props.input.value}
                      onChange={props.input.onChange}
                    />
                  </FormControl>
                )}
              </Field>

              <NextAndCancelButtons>
                <Trans id="impactPage.nextButton">
                  Next: Contact information
                </Trans>
              </NextAndCancelButtons>
            </Box>
          )}
        />
      )}
    </ApolloConsumer>
  )
}

ImpactStatementInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
