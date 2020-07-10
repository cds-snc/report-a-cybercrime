/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { EditButton } from '../components/EditButton'
import { H2 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'
import { Text } from '../components/text'
import { formatList } from '../utils/formatList'
import { formatDate } from '../utils/formatDate'

export const WhenDidItHappenSummary = (props) => {
  const [data] = useStateValue()
  const { i18n } = useLingui()
  const summary = []
  let overviewLine = ' '

  const whendidithappen = {
    ...testdata.formData.whendidithappen,
    ...data.formData.whendidithappen,
  }
  console.log(whendidithappen.howManyTimes)
  if (whendidithappen.howManyTimes.length > 0) {
    //Obtain all the array data into the summary array
    whendidithappen.howManyTimes.map((key) =>
      summary.push(i18n._(key).toLowerCase()),
    )
    overviewLine =
      i18n._('confirmationPage.whenDidItHappen.overviewPrefix') +
      formatList(summary, {
        pair: i18n._('default.pair'),
        middle: i18n._('default.middle'),
        end: i18n._('default.end'),
      })
  }

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.whenDidItHappen.overviewPrefix" />
          <Trans id="confirmationPage.whenDidItHappen.once" />
          <Trans id="confirmationPage.whenDidItHappen.morethanonce" />
          <Trans id="confirmationPage.whenDidItHappen.notsure" />
          <Trans id="confirmationPage.whenDidItHappen.title.edit" />
          <Trans id=" confirmationPage.whenDidItHappen.whenDidItHappen" />
          <Trans id="confirmationPage.whenDidItHappen.whenDidItStart" />
          <Trans id="confirmationPage.whenDidItHappen.whenDidItEnd" />
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
            <Trans id="confirmationPage.whenDidItHappen.title" />
          </H2>
          <EditButton
            path="/whendidithappen"
            label="confirmationPage.whenDidItHappen.title.edit"
          />
        </Flex>

        {containsData(whendidithappen) ? (
          <React.Fragment>
            <Stack as="dl" spacing={4}>
              <Text>{overviewLine}</Text>
              <DescriptionListItem
                descriptionTitle={
                  <Trans id="confirmationPage.whenDidItHappen.once" />
                }
                description={whendidithappen.once}
              />
              <DescriptionListItem
                descriptionTitle="confirmationPage.whenDidItHappen.once"
                description={whendidithappen.morethanone}
              />
              <DescriptionListItem
                descriptionTitle="confirmationPage.whenDidItHappen.morethanone"
                description={whendidithappen.morethanone}
              />
              <DescriptionListItem
                descriptionTitle="confirmationPage.whenDidItHappen.notsure"
                description={whendidithappen.notsure}
              />
              <DescriptionListItem
                descriptionTitle="confirmationPage.whenDidItHappen.whenDidItHappen"
                description={formatDate(
                  whendidithappen.whenDidItHappenDay,
                  whendidithappen.whenDidItHappenMonth,
                  whendidithappen.whenDidItHappenYear,
                )}
              />
              <DescriptionListItem
                descriptionTitle="confirmationPage.whenDidItHappen.whenDidItStart"
                description={formatDate(
                  whendidithappen.whenDidItStartDay,
                  whendidithappen.whenDidItStartMonth,
                  whendidithappen.whenDidItStartYear,
                )}
              />
              <DescriptionListItem
                descriptionTitle="confirmationPage.whenDidItHappen.whenDidItEnd"
                description={formatDate(
                  whendidithappen.whenDidItEndDay,
                  whendidithappen.whenDidItEndMonth,
                  whendidithappen.whenDidItEndYear,
                )}
              />
              <DescriptionListItem
                descriptionTitle="confirmationPage.whenDidItHappen.notSure"
                description={whendidithappen.notsure}
              />
            </Stack>
          </React.Fragment>
        ) : (
          <Text>
            <Trans id="confirmationPage.whenDidItHappen.nag" />
          </Text>
        )}
      </Stack>
    </React.Fragment>
  )
}
