/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
import { useLingui } from '@lingui/react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { Input } from '../components/input'
import { Field } from '../components/Field'
import { FormArrayControl } from '../components/FormArrayControl'
import { RadioAdapter } from '../components/radio'

export const BusinessInfoForm = ({ onSubmit }) => {
  const [data] = useStateValue()
  const { i18n } = useLingui()
  let { businessInfo } = data.formData
  businessInfo = {
    nameOfBusiness: '',
    industry: '',
    role: '',
    numberOfEmployee: '',
    ...businessInfo,
  }

  const numberOfEmployee = [
    'numberOfEmployee.1To99',
    'numberOfEmployee.100To499',
    'numberOfEmployee.500More',
  ]
  const recurrenceCheck = {
    numberOfEmployee: [],
    ...data.formData.timeline,
  }
  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="numberOfEmployee.1To99" />
          <Trans id="numberOfEmployee.100To499" />
          <Trans id="numberOfEmployee.500More" />
        </div>
      ) : null}
      <Form
        initialValues={businessInfo}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            <Field
              name="nameOfBusiness"
              label={<Trans id="businessPage.nameOfBusiness" />}
              component={Input}
            />

            <Field
              name="industry"
              label={<Trans id="businessPage.industry" />}
              helperText={<Trans id="businessPage.industryExample" />}
              component={Input}
            />

            <Field
              name="role"
              label={<Trans id="businessPage.role" />}
              helperText={<Trans id="businessPage.roleExample" />}
              component={Input}
            />
            <FormArrayControl
              name="numberOfEmployee"
              label={<Trans id="numberOfEmployee.label" />}
              helperText={<Trans id="numberOfEmployee.labelExample" />}
            >
              {numberOfEmployee.map((key) => {
                return (
                  <React.Fragment key={key}>
                    <RadioAdapter
                      name="numberOfEmployee"
                      value={key}
                      isChecked={recurrenceCheck.numberOfEmployee.includes(key)}
                    >
                      {i18n._(key)}
                    </RadioAdapter>
                  </React.Fragment>
                )
              })}
            </FormArrayControl>

            <NextAndCancelButtons
              next={<Trans id="businessInfoPage.nextPage" />}
              button={<Trans id="businessInfoPage.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

BusinessInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
