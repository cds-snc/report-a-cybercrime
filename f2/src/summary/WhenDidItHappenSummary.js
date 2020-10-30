/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { formatDate } from '../utils/formatDate'
import { testdata } from '../ConfirmationSummary'
import { EditButton } from '../components/EditButton'
import { H2, H3 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'
import { Text } from '../components/text'

export const WhenDidItHappenSummary = (props) => {
  const [data] = useStateValue()

  const whenDidItHappen = {
    ...testdata.formData.whenDidItHappen,
    ...data.formData.whenDidItHappen,
  }

  let freqString

  if (whenDidItHappen.incidentFrequency === 'once') {
    freqString = <Trans id="whenDidItHappenPage.options.once" />
  } else if (whenDidItHappen.incidentFrequency === 'moreThanOnce') {
    freqString = <Trans id="whenDidItHappenPage.options.moreThanOnce" />
  } else {
    freqString = <Trans id="whenDidItHappenPage.options.notSure" />
  }

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.howDidItStart.overviewPrefix" />
          <Trans id="whenDidItHappenPage.dateRange.start.label" />
          <Trans id="whenDidItHappenPage.dateRange.end.label" />
          <Trans id="whenDidItHappenPage.singleDate.label" />
          <Trans id="confirmationPage.howManyTimes" />
          <Trans id="whenDidItHappenPage.options.notSure.details" />
          <Trans id="whenDidItHappenPage.details" />
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
            <Trans id="whenDidItHappenPage.title" />
          </H2>
          {whenDidItHappen.edited && (
            <H3 fontWeight="normal" paddingLeft="1rem">
              <Trans id="confirmationPage.editedTag" />
            </H3>
          )}
          <EditButton
            label="confirmationPage.howDidItStart.title.edit"
            path="/whenDidItHappen"
            edited={whenDidItHappen.edited}
          />
        </Flex>

        {whenDidItHappen.incidentFrequency ? (
          <React.Fragment>
            <Stack as="dl" spacing={4}>
              <DescriptionListItem
                descriptionTitle="confirmationPage.howManyTimes"
                description={freqString}
              />
              <DescriptionListItem
                descriptionTitle="whenDidItHappenPage.singleDate.label"
                description={formatDate(
                  whenDidItHappen.happenedOnceDay,
                  whenDidItHappen.happenedOnceMonth,
                  whenDidItHappen.happenedOnceYear,
                )}
              />
              <DescriptionListItem
                descriptionTitle="whenDidItHappenPage.dateRange.start.label"
                description={formatDate(
                  whenDidItHappen.startDay,
                  whenDidItHappen.startMonth,
                  whenDidItHappen.startYear,
                )}
              />
              <DescriptionListItem
                descriptionTitle="whenDidItHappenPage.dateRange.end.label"
                description={formatDate(
                  whenDidItHappen.endDay,
                  whenDidItHappen.endMonth,
                  whenDidItHappen.endYear,
                )}
              />
              {whenDidItHappen.description ? (
                <DescriptionListItem
                  descriptionTitle="whenDidItHappenPage.details"
                  description={whenDidItHappen.description}
                />
              ) : null}
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
