import React from 'react'
import { Layout } from '../layout'
import { BackButton } from '../backbutton'
import { Stack } from '@chakra-ui/core'
import { H1 } from '../header'
import { P } from '../paragraph'
import { Page } from '../Page'

export const TestPage = (props) => {
  return (
    <Page>
      <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
        <Stack spacing={10} shouldWrapChildren>
          <BackButton />
          <H1>{props.title}</H1>
          <Stack spacing={4}>
            <P>{props.description}</P>
          </Stack>
        </Stack>
      </Layout>
    </Page>
  )
}
