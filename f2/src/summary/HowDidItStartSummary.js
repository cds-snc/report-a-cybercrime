/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata } from '../ConfirmationSummary'
import { EditButton } from '../components/EditButton'
import { H2, H3 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'
import { Text } from '../components/text'
import { formatList } from '../utils/formatList'

export const HowDidItStartSummary = (props) => {
  const [data] = useStateValue()
  const { i18n } = useLingui()
  const summary = []
  let methodOfContact = ' '

  const howdiditstart = {
    ...testdata.formData.howdiditstart,
    ...data.formData.howdiditstart,
  }

  if (howdiditstart.howDidTheyReachYou.length > 0) {
    //Obtain all the array data into the summary array
    howdiditstart.howDidTheyReachYou.map((key) =>
      summary.push(
        key === 'howDidTheyReachYou.others' && howdiditstart.others !== ''
          ? howdiditstart.others
          : i18n._(key).toLowerCase(),
      ),
    )

    methodOfContact = formatList(summary, {
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
          <Trans id="confirmationPage.howDidItStart.overviewPrefix" />
          <Trans id="confirmationPage.howDidItStart.conjuction" />
          <Trans id="confirmationPage.howDidItStart.email" />
          <Trans id="confirmationPage.howDidItStart.phone" />
          <Trans id="confirmationPage.howDidItStart.online" />
          <Trans id="confirmationPage.howDidItStart.application" />
          <Trans id="confirmationPage.howDidItStart.others" />
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
          {howdiditstart.edited && (
            <H3 fontWeight="normal" paddingLeft="1rem">
              <Trans id="confirmationPage.editedTag" />
            </H3>
          )}
          <EditButton
            label="confirmationPage.howDidItStart.title.edit"
            path="/howdiditstart"
            edited={howdiditstart.edited}
          />
        </Flex>

        {howdiditstart.howDidTheyReachYou.length ? (
          <React.Fragment>
            <Stack as="dl" spacing={4}>
              <DescriptionListItem
                descriptionTitle="confirmationPage.howDidItStart.overviewPrefix"
                description={methodOfContact}
              />
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
