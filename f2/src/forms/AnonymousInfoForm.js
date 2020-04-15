import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { CheckboxAdapter } from '../components/checkbox'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { FormArrayControl } from '../components/FormArrayControl'
import { Alert } from '../components/Messages'

const clearData = (dataOrig) => {
  let data = JSON.parse(JSON.stringify(dataOrig))
  return data
}

export const AnonymousInfoForm = (props) => {
  const [data] = useStateValue()
  const whetherCheck = {
    checkBoxOptions: [],
    ...data.formData.whetherConsent,
  }
  const checkBoxOptions = ['anonymousPage.yes']
  const anonymous = {
    anonymous: '',
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
        onSubmit={(data) => props.onSubmit(clearData(data))}
        render={({ handleSubmit }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={12}
          >
            <FormArrayControl name="checkBoxOptions">
              {checkBoxOptions.map((key) => {
                return (
                  <React.Fragment key={key}>
                    <CheckboxAdapter
                      name="checkBoxOptions"
                      value={key}
                      isChecked={whetherCheck.checkBoxOptions.includes(key)}
                      conditionalField={
                        <Alert status="warning" withIcon>
                          {<Trans id="anonymousPage.warning" />}
                        </Alert>
                      }
                    >
                      <Trans id="anonymousPage.yes" />
                    </CheckboxAdapter>
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
