import React from 'react'
import ThemeDecorator from '../../../.storybook/themeDecorator'
import FormDecorator from '../../../.storybook/formDecorator'
import { withKnobs } from '@storybook/addon-knobs'
import { Field } from '.'
import { Input } from '../input'
import { TextArea } from '../text-area'

export default {
  title: 'Field',
  decorators: [ThemeDecorator, FormDecorator, withKnobs],
  component: Field,
}

export const input = () => (
  <Field name="textInput" label="Label for an input field" component={Input} />
)

export const textArea = () => (
  <Field
    name="textInput"
    label="Label for a text area"
    helperText="Helper text"
    component={TextArea}
  />
)
