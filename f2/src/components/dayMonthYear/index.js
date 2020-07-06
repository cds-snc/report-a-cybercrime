import React from 'react'
import { Trans } from '@lingui/macro'
import { Field } from '../Field'
import { Stack } from '@chakra-ui/core'
import { TextInput } from '../TextInput'

export const daymonthyear = (props) => (
  <React.Fragment>
    <Stack direction="row" spacing="2">
      <Field
        name="startDay"
        label={<Trans id="whenDidItStart.startDay" />}
        component={TextInput}
        group="whenDidItStart"
        w={70}
        maxLength="2"
      />
      <Field
        name="startMonth"
        label={<Trans id="whenDidItStart.startMonth" />}
        component={TextInput}
        group="whenDidItStart"
        w={70}
        maxLength="2"
      />
      <Field
        name="startYear"
        label={<Trans id="whenDidItStart.startYear" />}
        component={TextInput}
        group="whenDidItStart"
        w={110}
        maxLength="4"
      />
    </Stack>
  </React.Fragment>
)
