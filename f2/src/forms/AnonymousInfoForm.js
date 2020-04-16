import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { RadioAdapter } from '../components/radio'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { FormArrayControl } from '../components/FormArrayControl'
import { formDefaults } from './defaultValues'

const validate = (values) => {
  const errors = {}
  //condition for an error to occur: append a lingui id to the list of error
  if (!values.anonymous || values.anonymous.length < 1) {
    errors.anonymous = 'AnonymousPage.warning'
  }
  return errors
}

const clearData = (dataOrig) => {
  let data = JSON.parse(JSON.stringify(dataOrig))
  return data
}

export const AnonymousInfoForm = (props) => {
  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.anonymous)) props.onSubmit(data)
  }

  const { i18n } = useLingui()

  const [data] = useStateValue()
  const anonymous = {
    ...formDefaults.anonymous,
    ...data.formData.anonymous,
  }

  const ifanonymous = ['anonymousPage.yes', 'anonymousPage.no']

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="anonymousPage.yes" />
          <Trans id="anonymousPage.no" />
        </div>
      ) : null}

      <Form
        initialValues={anonymous}
        onSubmit={(data) => localOnSubmit(clearData(data))}
        validate={validate}
        render={({ handleSubmit }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={12}
          >
            <FormArrayControl
              name="anonymous"
              label={<Trans id="anonymousForm.title" />}
              errorMessage={<Trans id="anonymousPage.warning" />}
            >
              {ifanonymous.map((key) => {
                return (
                  <React.Fragment key={key}>
                    <RadioAdapter name="anonymous" value={key}>
                      {i18n._(key)}
                    </RadioAdapter>
                  </React.Fragment>
                )
              })}
            </FormArrayControl>
            <NextAndCancelButtons
              next={<Trans id="anonymousPage.nextPage" />}
              button={<Trans id="anonymousPage.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

AnonymousInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
