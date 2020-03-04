import React from 'react'
import { BackButton } from '.'
import ThemeDecorator from '../../../.storybook/themeDecorator'
import { withKnobs, text } from '@storybook/addon-knobs'

//Doc Page
export default {
  title: 'Back Button',
  decorators: [ThemeDecorator, withKnobs],
  component: BackButton,
}

//Story variables
const route = text('Route', '/')
const label = text('Label', 'Back to the future')

//Stories
export const backButton = () => <BackButton to={route}>{label}</BackButton>
