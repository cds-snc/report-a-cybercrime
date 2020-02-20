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
import { formatList } from '../utils/formatList'

export const HowDidItStartSummary = props => {
  const [data] = useStateValue()
  const { i18n } = useLingui()
  const summary = []
  let overviewLine = ' '

  const howdiditstart = {
    ...testdata.formData.howdiditstart,
    ...data.formData.howdiditstart,
  }

  if (howdiditstart.howDidTheyReachYou.length > 0) {
    //Obtain all the array data into the summary array
    howdiditstart.howDidTheyReachYou.map(key =>
      summary.push(
        key === 'howDidTheyReachYou'
          ? howdiditstart
          : i18n._(key).toLowerCase(),
      ),
    )

    overviewLine =
      i18n._('confirmationPage.howDidItStart.overviewPrefix') +
      formatList(summary, {
        pair: i18n._('default.pair'),
        middle: i18n._('default.middle'),
        end: i18n._('default.end'),
      })
  }

  const hasDataToDisplay = howdiditstart.howDidTheyReachYou.length > 0

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.howDidItStart.overviewPrefix" />
          <Trans id="confirmationPage.howDidItStart.conjuction" />
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

      <Stack
        spacing={4}
        borderBottom="2px"
        borderColor="gray.300"
        pb={4}
        {...props}
      >
        <Flex align="baseline">
          <H2 fontWeight="normal">
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
                description={
                  howdiditstart.startDay +
                  ' ' +
                  howdiditstart.startMonth +
                  ' ' +
                  howdiditstart.startYear
                }
              />
              <DescriptionListItem
                descriptionTitle="confirmationPage.howManyTimes"
                description={i18n._(howdiditstart.howManyTimes)}
              />
            </Stack>
          </React.Fragment>
        ) : (
          <Text>
            <Trans id="confirmationPage.howDidItStart.nag" />
          </Text>
        )}
      </Stack>
    </React.Fragment>
  )
}
