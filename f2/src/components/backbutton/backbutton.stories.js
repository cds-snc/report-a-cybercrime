import React from 'react'
import { BackButton } from '.'
import ThemeDecorator from '../../../.storybook/themeDecorator'
import { withKnobs, text } from '@storybook/addon-knobs'

//Doc Page
export default {
  title: 'Components/Back Button',
  decorators: [ThemeDecorator, withKnobs],
  component: BackButton,
}

//Stories
export const backButton = () => <BackButton />
