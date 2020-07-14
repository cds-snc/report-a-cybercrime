/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { containsData } from '../utils/containsData'
import { formatDate } from '../utils/formatDate'
import { testdata } from '../ConfirmationSummary'
import { EditButton } from '../components/EditButton'
import { H2 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'
import { Text } from '../components/text'
import { formatList } from '../utils/formatList'

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
          <EditButton
            path="/whenDidItHappen"
            label="confirmationPage.howDidItStart.title.edit"
          />
        </Flex>

        {containsData(whenDidItHappen) ? (
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
              {containsData(whenDidItHappen.description) ? (
                <Text>{whenDidItHappen.description}</Text>
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
