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
      name="whenDidItHappen"
      group="{props.group}"
      // group="whenDidItHappen"
      label={props.label}
      helperText={props.helperText}
    />
  )
}

export const DateStartPicker = (props) => {
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
export const DateEndPicker = (props) => {
  console.log(props)
  return (
    <DatePicker
      name="whenDidItEnd"
      group={props.group}
      label={props.label}
      helperText={props.helperText}
    />
  )
}
// export const DateRangePicker2 = (props) => {
//   console.log(props)
//   return (
//     <React.Fragment>
//       <DatePicker
//         name="whenDitItStart"
//         group={props.group + 'Start'}
//         label={<Trans id="whenDidItStart.label"/>}
//         helperText={<Trans id="whenDidItStart.labelExample"/>}

//       />
//       <DatePicker
//         name="whenDitItEnd"
//         group={props.group + 'End'}
//         label={<Trans id="whenDidItEnd.label"/>}
//         helperText={<Trans id="whenDidItEnd.labelExample"/>}

//       />
//     </React.Fragment>
//   )
// }
