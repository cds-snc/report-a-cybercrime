/** @jsx jsx */
import PropTypes from 'prop-types'
import React from 'react'
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
  let { businessInfo } = data.formData
  businessInfo = {
    business: '',
    ...businessInfo,
  }
  return (
    <React.Fragment>
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
              label={<Trans id="businessPage.numberOfEmployee" />}
              helperText={<Trans id="businessPage.numberOfEmployeeExample" />}
            >
              <RadioAdapter name="numberOfEmployee" value="1 to 99 employees">
                1 to 99 employees
              </RadioAdapter>
              <RadioAdapter
                name="numberOfEmployee"
                value=" 100 to 499 employees"
              >
                100 to 499 employees
              </RadioAdapter>
              <RadioAdapter
                name="numberOfEmployee"
                value=" 500 employees or more"
              >
                500 employees or more
              </RadioAdapter>
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
