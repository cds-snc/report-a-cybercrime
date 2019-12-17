import React from 'react'
import PropTypes from 'prop-types'
import { ApolloConsumer } from 'react-apollo'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field, useField } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Checkbox } from '../components/checkbox'
import { Text } from '../components/text'
import { TextArea } from '../components/text-area'
import { getImpact } from '../utils/queriesAndMutations'
import { FormControl, FormLabel, Stack } from '@chakra-ui/core'
import { FormHelperText } from '../components/FormHelperText'
import { useStateValue } from '../utils/state'

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

const validate = () => {
  return {}
}

export const ImpactStatementInfoForm = props => {
  const { i18n } = useLingui()

  const [data] = useStateValue()
  const impact = {
    howWereYouAffected: [],
    damage: '',
    ...data.formData.impact,
  }

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
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="impactPage.affected1" />
          <Trans id="impactPage.affected2" />
          <Trans id="impactPage.affected3" />
          <Trans id="impactPage.affected4" />
          <Trans id="impactPage.affected5" />
          <Trans id="impactPage.affected6" />
          <Trans id="impactPage.affected7" />
        </div>
      ) : null}

      <Form
        initialValues={impact}
        onSubmit={data => props.onSubmit(data)}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            <Control as="fieldset" name="howWereYouAffected">
              <FormLabel as="legend" htmlFor="howWereYouAffected" mb={2}>
                <Text fontWeight="bold">
                  <Trans id="impactPage.detail" />
                </Text>
              </FormLabel>
              <Stack spacing={4} shouldWrapChildren>
                {howWereYouAffected.map(key => {
                  return (
                    <CheckboxArrayControl
                      key={key}
                      name="howWereYouAffected"
                      value={key}
                      isChecked={impact.howWereYouAffected.includes(key)}
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
                  <FormLabel htmlFor="damage">
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
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

ImpactStatementInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
