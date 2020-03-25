import React from 'react'
import PropTypes from 'prop-types'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { RadioAdapter } from '../components/radio'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { FormArrayControl } from '../components/FormArrayControl'

const validate = () => {
  return {}
}
const clearData = dataOrig => {
  let data = JSON.parse(JSON.stringify(dataOrig))
  return data
}

export const AnonymousInfoForm = props => {
  const { i18n } = useLingui()

  const [data] = useStateValue()
  const anonymous = {
    ifanonymous: '',
    ...data.formData.anonymous,
  }
  //TODO: Move this form data to some sort of a schema file instead?

  // const anonymous= {
  //   ifanonymous: [],
  //   ...data.formData.timeline,
  // }

  const ifanonymous = ['ifanonymous.yes', 'ifanonymous.no']

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="ifanonymous.yes" />
          <Trans id="ifanonymous.no" />
        </div>
      ) : null}

      <Form
        initialValues={anonymous}
        onSubmit={data => props.onSubmit(clearData(data))}
        validate={validate}
        render={({ handleSubmit }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={12}
          >
            <FormArrayControl
              name="ifanonymous"
              label={<Trans id="ifanonymous.title" />}
            >
              {ifanonymous.map(key => {
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
              next={<Trans id="ifanonymous.nextPage" />}
              button={<Trans id="ifanonymous.nextButton" />}
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
