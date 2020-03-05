import React from 'react'
import { BackButton } from '.'
import ThemeDecorator from '../../../.storybook/themeDecorator'

//Doc Page
export default {
  title: 'Components/Back Button',
  decorators: [ThemeDecorator],
  component: BackButton,
}

//Stories
export const backButton = () => <BackButton />
