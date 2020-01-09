import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, useField } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Checkbox } from '../components/checkbox'
import { FormControl, Stack, Box } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { FormLabel } from '../components/FormLabel'
import { ConditionalForm } from '../components/container'

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

export const HowDidItStartForm = props => {
  const { i18n } = useLingui()

  const [data] = useStateValue()
  const channel = {
    howDidTheyReachYou: [],
    damage: '',
    ...data.formData.impact,
  }

  const howDidTheyReachYou = [
    'howDidTheyReachYou.email',
    'howDidTheyReachYou.phone',
    'howDidTheyReachYou.online',
    'howDidTheyReachYou.app',
    'howDidTheyReachYou.others',
  ]
  return (
    <React.Fragment>
      {false ? (
        <div>
          <Trans id="howDidTheyReachYou.email" />
          <Trans id="howDidTheyReachYou.phone" />
          <Trans id="howDidTheyReachYou.online" />
          <Trans id="howDidTheyReachYou.app" />
          <Trans id="howDidTheyReachYou.others" />
        </div>
      ) : null}

      <Form
        initialValues={channel}
        onSubmit={data => props.onSubmit(data)}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            <Control as="fieldset" name="howDidItStart">
              <FormLabel as="legend" htmlFor="howDidItStart" mb={2}>
                <Trans id="howDidTheyReachYou.question" />
              </FormLabel>
              <Stack spacing={4} shouldWrapChildren>
                {howDidTheyReachYou.map(key => {
                  return (
                    <Box key={key}>
                      <CheckboxArrayControl
                        name="howDidItStart"
                        value={key}
                        isChecked={channel.howDidTheyReachYou.includes(key)}
                      >
                        {i18n._(key)}
                      </CheckboxArrayControl>
                      {values.howDidTheyReachYou.includes(key) && (
                        <ConditionalForm>
                          Conditional form for {key}
                        </ConditionalForm>
                      )}
                    </Box>
                  )
                })}
              </Stack>
            </Control>

            <NextAndCancelButtons>
              <Trans id="howDidItStartPage.nextButton">
                Next: ??
              </Trans>
            </NextAndCancelButtons>
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

HowDidItStartForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
