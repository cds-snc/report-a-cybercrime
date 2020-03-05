import React from 'react'
import ThemeDecorator from '../../../.storybook/themeDecorator'
import { jsxDecorator } from 'storybook-addon-jsx'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import { Button } from '.'
import { NextAndCancelButtons } from '../next-and-cancel-buttons'

export default {
  title: 'Components/Button',
  decorators: [jsxDecorator, ThemeDecorator, withKnobs],
}

const variantColors = {
  Green: 'green',
  Blue: 'blue',
  Red: 'red',
  Gray: 'gray',
  Black: 'black',
}
const variants = {
  Solid: 'solid',
  Ghost: 'ghost',
  Outline: 'outline',
  Link: 'link',
}

const icon = {
  After: {
    rightIcon: 'chevron-right',
  },
  Before: {
    leftIcon: 'attachment',
  },
  None: null,
}

export const textButton = () => (
  <Button
    variantColor={select('Variant Color', variantColors, 'green')}
    variant={select('Variant', variants, 'solid')}
  >
    {text('Button text', 'Button')}
  </Button>
)

export const withIcon = () => (
  <Button
    variantColor={select('Variant Color', variantColors, 'green')}
    variant={select('Variant', variants, 'solid')}
    {...select('Icon', icon, icon.After)}
  >
    {text('Button text', 'Button')}
  </Button>
)

export const nextAndCancelButtons = () => (
  <NextAndCancelButtons
    button={text('Next Button Text', 'Continue')}
    cancelRoute="/"
  />
)
