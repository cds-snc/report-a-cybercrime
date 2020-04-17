import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { CheckboxAdapter } from '../components/checkbox'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { Alert } from '../components/Messages'
import { formDefaults } from './defaultValues'

const clearData = (dataOrig) => {
  let data = JSON.parse(JSON.stringify(dataOrig))
  return data
}

export const AnonymousInfoForm = (props) => {
  const [data] = useStateValue()

  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.anonymous)) props.onSubmit(data)
  }

  const consentOption = 'anonymousPage.yes'
  const anonymous = {
    ...formDefaults.anonymous,
    ...data.formData.anonymous,
  }

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="anonymousPage.yes" />
        </div>
      ) : null}

      <Form
        initialValues={anonymous}
        onSubmit={localOnSubmit}
        render={({ values, handleSubmit }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            <CheckboxAdapter name="anonymousOptions" value={consentOption}>
              <Trans id="anonymousPage.yes" />
            </CheckboxAdapter>
            {values.anonymousOptions.includes(consentOption) && (
              <Alert status="warning" withIcon>
                <Trans id="anonymousPage.warning" />
              </Alert>
            )}
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
