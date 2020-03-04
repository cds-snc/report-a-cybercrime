import React from 'react'
import ThemeDecorator from '../../../.storybook/themeDecorator'
import { withKnobs, number, text } from '@storybook/addon-knobs'
import { InfoCard } from '.'
import { H1 } from '../header'
import { P } from '../paragraph'

export default {
  title: 'Container',
  decorators: [ThemeDecorator, withKnobs],
}

export const infoCard = () => {
  const columns = number('Columns / 12', 6)
  return (
    <InfoCard
      bg={text('Background color', 'gray.200')}
      color={text('Text color', 'black')}
      borderColor={text('Border color', 'gray.400')}
      spacing={6}
      columns={{ base: columns / 12 }}
    >
      <H1 mb={6}>Card heading</H1>

      <P>Card body</P>
    </InfoCard>
  )
}
