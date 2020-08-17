import React from 'react'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { RadioAdapter } from '../components/radio'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { FormArrayControl } from '../components/FormArrayControl'
import { TextArea } from '../components/text-area'
import { Text } from '../components/text'
import { Field } from '../components/Field'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { formDefaults } from './defaultValues'

const clearData = (dataOrig) => {
  let data = JSON.parse(JSON.stringify(dataOrig))

  if (data.whoYouReportFor !== 'whoAreYouReportForPage.options.someone') {
    data.someoneDescription = ''
  }
  if (data.whoYouReportFor !== 'whoAreYouReportForPage.options.business') {
    data.businessDescription = ''
  }

  return data
}

export const WhoAreYouReportForForm = (props) => {
  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.whoAreYouReportFor))
      props.onSubmit(clearData({ ...data }))
  }

  const [data] = useStateValue()
  const whoAreYouReportFor = {
    ...formDefaults.whoAreYouReportFor,
    ...data.formData.whoAreYouReportFor,
  }

  const optionsList = [
    {
      name: 'someoneDescription',
      value: 'whoAreYouReportForPage.options.someone',
      label: 'whoAreYouReportForPage.someone.label',
      hint: 'whoAreYouReportForPage.someone.helperText',
    },
    {
      name: 'businessDescription',
      value: 'whoAreYouReportForPage.options.business',
      label: 'whoAreYouReportForPage.business.label',
      hint: 'whoAreYouReportForPage.business.helperText',
    },
  ]

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="whoAreYouReportForPage.business.helperText" />
          <Trans id="whoAreYouReportForPage.business.label" />
          <Trans id="whoAreYouReportForPage.nextButton" />
          <Trans id="whoAreYouReportForPage.nextPage" />
          <Trans id="whoAreYouReportForPage.someone.label" />
          <Trans id="whoAreYouReportForPage.someone.helperText" />
          <Trans id="whoAreYouReportForPage.options.business" />
          <Trans id="whoAreYouReportForPage.options.myself" />
          <Trans id="whoAreYouReportForPage.options.someone" />
          <Trans id="whoAreYouReportForPage.or" />
          <Trans id="whoAreYouReportForPage.title" />
        </div>
      ) : null}

      <Form
        initialValues={whoAreYouReportFor}
        onSubmit={localOnSubmit}
        render={({ handleSubmit }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={12}
          >
            <FormArrayControl name="whoAreYouReportFor">
              <React.Fragment key="whoAreYouReportForPage.options.myself">
                <RadioAdapter
                  name="whoYouReportFor"
                  value="whoAreYouReportForPage.options.myself"
                >
                  <Trans id="whoAreYouReportForPage.options.myself" />
                </RadioAdapter>
              </React.Fragment>
              <React.Fragment>
                <Text ml={2} lineHeight="1.5rem">
                  <Trans id="whoAreYouReportForPage.or" />
                </Text>
              </React.Fragment>
              {optionsList.map((option) => {
                return (
                  <React.Fragment key={option.value}>
                    <RadioAdapter
                      name="whoYouReportFor"
                      value={option.value}
                      conditionalField={
                        <Field
                          name={option.name}
                          label={<Trans id={option.label} />}
                          helperText={<Trans id={option.hint} />}
                          component={TextArea}
                        />
                      }
                    >
                      <Trans id={option.value} />
                    </RadioAdapter>
                  </React.Fragment>
                )
              })}
            </FormArrayControl>
            <NextAndCancelButtons
              next={<Trans id="whoAreYouReportForPage.nextPage" />}
              button={<Trans id="whoAreYouReportForPage.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}

WhoAreYouReportForForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
