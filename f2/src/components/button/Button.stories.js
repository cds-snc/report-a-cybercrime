import React from 'react'
import { Button } from '.'
import ThemeDecorator from '../../../.storybook/themeDecorator'

export default {
  title: 'Button',
  decorators: [ThemeDecorator],
}

export const normal = () => <Button>foo</Button>
