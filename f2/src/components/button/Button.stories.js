import React from 'react'
import ThemeDecorator from '../../../.storybook/themeDecorator'

import { Button } from '.'
import { NextAndCancelButtons } from '../next-and-cancel-buttons'
import { Stack } from '@chakra-ui/core'

export default {
  title: 'Components/Button',
  decorators: [ThemeDecorator],
}

export const textButton = () => (
  <Button variantColor="green" variant="solid">
    Button
  </Button>
)

export const withIcon = () => (
  <Stack spacing={4} direction="row">
    <Button variantColor="green" variant="solid" rightIcon="chevron-right">
      Start
    </Button>
    <Button variantColor="blue" variant="solid" leftIcon="attachment">
      Add File
    </Button>
  </Stack>
)

export const variantColor = () => (
  <Stack spacing={4} direction="row">
    <Button variantColor="green" variant="solid">
      Continue
    </Button>
    <Button variantColor="blue" variant="solid">
      Primary
    </Button>
    <Button variantColor="gray" variant="solid">
      Secondary
    </Button>
    <Button variantColor="black" variant="solid">
      Call to action
    </Button>
    <Button variantColor="red" variant="solid">
      Danger
    </Button>
  </Stack>
)
