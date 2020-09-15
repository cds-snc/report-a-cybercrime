import React from 'react'
import { Trans } from '@lingui/macro'
import { Field } from '../Field'
import { Stack } from '@chakra-ui/core'
import { TextInput } from '../TextInput'

export const DatePicker = (props) => (
  <Stack direction="row" spacing="2">
    <Field
      name={props.datePickerName + 'Day'}
      label={<Trans id="whenDidItStart.startDay" />}
      component={TextInput}
      //group={props.group}
      w={70}
      maxLength="2"
    />
    <Field
      name={props.datePickerName + 'Month'}
      label={<Trans id="whenDidItStart.startMonth" />}
      component={TextInput}
      //group={props.group}
      w={70}
      maxLength="2"
    />
    <Field
      name={props.datePickerName + 'Year'}
      label={<Trans id="whenDidItStart.startYear" />}
      component={TextInput}
      //group={props.group}
      w={110}
      maxLength="4"
    />
  </Stack>
)

export const SingleDatePicker = (props) => {
  return (
    <Stack spacing={4} pb="5">
      <Field
        name={props.name}
        datePickerName={props.datePickerName}
        group={props.group}
        label={props.label}
        helperText={props.helperText}
        component={DatePicker}
      />
    </Stack>
  )
}

export const DateRangePicker = (props) => {
  return (
    <React.Fragment>
      <SingleDatePicker
        name={props.name + 'Start'}
        datePickerName="start"
        group={props.group}
        label={props.startLabel}
        helperText={props.helperText}
      />
      <SingleDatePicker
        name={props.name + 'End'}
        datePickerName="end"
        group={props.group}
        label={props.endLabel}
        helperText={props.helperText}
      />
    </React.Fragment>
  )
}
