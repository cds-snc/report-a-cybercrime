/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { useIntl } from 'react-intl'
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
  const intl = useIntl()

  const howdiditstart = {
    ...testdata.formData.howdiditstart,
    ...data.formData.howdiditstart,
  }

  const overviewLine =
    i18n._('confirmationPage.howDidItStart.overviewPrefix') +
    ' ' +
    intl
      .formatList(
        howdiditstart.howDidTheyReachYou.map(key =>
          key === 'howDidTheyReachYou.others'
            ? howdiditstart.others
            : i18n._(key).toLowerCase(),
        ),
        { type: 'conjunction' },
      )
      .replace('others') +
    '.'

  const hasDataToDisplay = howdiditstart.howDidTheyReachYou.length > 0

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
          <Trans id="confirmationPage.whenDidItStart" />
          <Trans id="confirmationPage.howManyTimes" />
          <Trans id="confirmationPage.howDidItStart.title.edit" />
        </div>
      ) : null}

      <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
        <Flex align="baseline">
          <H2>
            <Trans id="confirmationPage.howDidItStart.title" />
          </H2>
          <EditButton
            path="/howdiditstart"
            label="confirmationPage.howDidItStart.title.edit"
          />
        </Flex>

        {hasDataToDisplay ? (
          <React.Fragment>
            <Stack as="dl" spacing={4}>
              <Text>{overviewLine}</Text>
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
              <DescriptionListItem
                descriptionTitle="confirmationPage.whenDidItStart"
                description={i18n._(howdiditstart.whenDidItStart)}
              />
              <DescriptionListItem
                descriptionTitle="confirmationPage.howManyTimes"
                description={i18n._(howdiditstart.howManyTimes)}
              />
            </Stack>
          </React.Fragment>
        ) : null}
      </Stack>
    </React.Fragment>
  )
}
