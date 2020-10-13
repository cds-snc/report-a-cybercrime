/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { EditButton } from '../components/EditButton'
import { H2 } from '../components/header'
import { Text } from '../components/text'
import { DescriptionListItem } from '../components/DescriptionListItem'

export const WhoAreYouReportForSummary = (props) => {
  const [data] = useStateValue()

  const whoAreYouReportFor = {
    ...testdata.formData.whoAreYouReportFor,
    ...data.formData.whoAreYouReportFor,
  }

  let whoYouReportForString

  if (
    whoAreYouReportFor.whoYouReportFor ===
    'whoAreYouReportForPage.options.myself'
  ) {
    whoYouReportForString = <Trans id="whoAreYouReportForPage.options.myself" />
  } else if (
    whoAreYouReportFor.whoYouReportFor ===
    'whoAreYouReportForPage.options.someone'
  ) {
    whoYouReportForString = (
      <Trans id="whoAreYouReportForPage.options.someone" />
    )
  } else {
    whoYouReportForString = (
      <Trans id="whoAreYouReportForPage.options.business" />
    )
  }

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.whoAreYouReportFor.title.edit" />
          <Trans id="whoAreYouReportForPage.details" />
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
            <Trans id="whoAreYouReportForPage.title" />
          </H2>
          <EditButton
            path="/whoAreYouReportFor"
            label="confirmationPage.whoAreYouReportFor.title.edit"
          />
        </Flex>

        {containsData(whoAreYouReportFor) ? (
          <React.Fragment>
            <Stack as="dl" spacing={4}>
              <Text>
                <Trans id="confirmationPage.youAreReportingFor" />
                &nbsp;
                <Text as="span">{whoYouReportForString}</Text>
              </Text>
              {containsData(whoAreYouReportFor.someoneDescription) ? (
                <DescriptionListItem
                  descriptionTitle="whoAreYouReportForPage.details"
                  description={whoAreYouReportFor.someoneDescription}
                />
              ) : null}
              {containsData(whoAreYouReportFor.businessDescription) ? (
                <DescriptionListItem
                  descriptionTitle="whoAreYouReportForPage.details"
                  description={whoAreYouReportFor.businessDescription}
                />
              ) : null}
            </Stack>
          </React.Fragment>
        ) : (
          <Text>
            <Trans id="confirmationPage.whoAreYouReportFor.nag" />
          </Text>
        )}
      </Stack>
    </React.Fragment>
  )
}
