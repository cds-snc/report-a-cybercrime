import React from 'react'
import { Trans } from '@lingui/macro'
import { Field } from '../Field'
import { Stack } from '@chakra-ui/core'
import { TextInput } from '../TextInput'

export const DatePicker = (props) => (
  <Stack direction="row" spacing="2">
    <Field
      name={props.name + 'Day'}
      label={<Trans id="whenDidItStart.startDay" />}
      component={TextInput}
      group={props.group}
      w={70}
      maxLength="2"
    />
    <Field
      name={props.name + 'Month'}
      label={<Trans id="whenDidItStart.startMonth" />}
      component={TextInput}
      group={props.group}
      w={70}
      maxLength="2"
    />
    <Field
      name={props.name + 'Year'}
      label={<Trans id="whenDidItStart.startYear" />}
      component={TextInput}
      group={props.group}
      w={110}
      maxLength="4"
    />
  </Stack>
)

export const SingleDatePicker = (props) => {
  console.log(props)
  return (
    <DatePicker
      name="whenDidItStart"
      group={props.group}
      label={props.label}
      helperText={props.helperText}
    />
  )
}

export const DateRangePicker = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <DatePicker
        name={props.group + 'Start'}
        group={props.group + 'Start'}
        label={props.label + 'Start'}
        helperText={props.helperText + 'Start'}
      />
      <DatePicker
        name={props.group + 'End'}
        group={props.group + 'End'}
        label={props.label + 'End'}
        helperText={props.helperText + 'End'}
      />
    </React.Fragment>
  )
}
