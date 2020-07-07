import React from 'react'
import { Trans } from '@lingui/macro'
import { Field } from '../Field'
import { Stack } from '@chakra-ui/core'
import { TextInput } from '../TextInput'

export const DatePicker = (props) => (
  <React.Fragment>
    <Stack direction="row" spacing="2">
      <Field
        name={props.name + 'day'}
        label={<Trans id="whenDidItStart.startDay" />}
        component={TextInput}
        group={props.group}
        w={70}
        maxLength="2"
      />
      <Field
        name={(props.name = 'month')}
        label={<Trans id="whenDidItStart.startMonth" />}
        component={TextInput}
        group={props.group}
        w={70}
        maxLength="2"
      />
      <Field
        name={props.name + 'year'}
        label={<Trans id="whenDidItStart.startYear" />}
        component={TextInput}
        group={props.group}
        w={110}
        maxLength="4"
      />
    </Stack>
  </React.Fragment>
)

export const SingleDatePicker = (props) => {
  return <DatePicker name={props.name} group={props.group} />
}

export const DateRangePicker = (props) => {
  return (
    <React.Fragment>
      <DatePicker name={props.start.name} group={props.start.group} />
      <DatePicker name={props.end.name} group={props.end.group} />
    </React.Fragment>
  )
}
