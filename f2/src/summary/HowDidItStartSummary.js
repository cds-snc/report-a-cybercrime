/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'
import { Text } from '../components/text'

export const HowDidItStartSummary = ({ onSubmit }) => {
  const [data] = useStateValue()
  const { i18n } = useLingui()

  const howdiditstart = {
    howDidTheyReachYou: [
      'howDidTheyReachYou.email',
      'howDidTheyReachYou.phone',
      'howDidTheyReachYou.app',
      'howDidTheyReachYou.others',
    ],
    email: 'sastels@gmail.com',
    phone: '111111',
    online: '',
    application: 'app',
    others: 'other vector',
    ...data.formData.howdiditstart,
  }

  const overviewLine =
    i18n._('confirmationPage.howDidItStart.overviewPrefix') +
    howdiditstart.howDidTheyReachYou
      .map(key =>
        key === 'howDidTheyReachYou.others'
          ? howdiditstart.others
          : i18n._(key).toLowerCase(),
      )
      .join(', ')
      .replace('others') +
    '.'

  console.log({ overviewLine })

  const hasDataToDisplay = true

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.howDidItStart.overviewPrefix" />
          <Trans id="confirmationPage.howDidItStart.email" />
          <Trans id="confirmationPage.howDidItStart.phone" />
          <Trans id="confirmationPage.howDidItStart.online" />
          <Trans id="confirmationPage.howDidItStart.application" />
          <Trans id="confirmationPage.howDidItStart.others" />
        </div>
      ) : null}

      <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
        <Flex align="baseline">
          <H2>
            <Trans id="confirmationPage.howDidItStart.title" />
          </H2>
          <EditButton path="/howdiditstart" label="Edit How Did It Start" />
        </Flex>
        <Text>{overviewLine}</Text>
        <Stack as="dl" spacing={4} shouldWrapChildren>
          <DescriptionListItem
            descriptionTitle="confirmationPage.howDidItStart.email"
            description={howdiditstart.email}
          />
          <DescriptionListItem
            descriptionTitle="confirmationPage.howDidItStart.phone"
            description={howdiditstart.phone}
          />
          <DescriptionListItem
            descriptionTitle="confirmationPage.howDidItStart.online"
            description={howdiditstart.online}
          />
          <DescriptionListItem
            descriptionTitle="confirmationPage.howDidItStart.application"
            description={howdiditstart.application}
          />
          <DescriptionListItem
            descriptionTitle="confirmationPage.howDidItStart.others"
            description={howdiditstart.others}
          />
        </Stack>
      </Stack>
    </React.Fragment>
  )
}
