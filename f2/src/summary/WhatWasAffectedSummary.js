/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { EditButton } from '../components/EditButton'
import { H2, H3 } from '../components/header'
import { useLingui } from '@lingui/react'
import { Text } from '../components/text'
import { formatList } from '../utils/formatList'

export const WhatWasAffectedSummary = (props) => {
  const { i18n } = useLingui()

  const [data] = useStateValue()
  const impact = {
    affectedOptions: [],
    ...testdata.formData.whatWasAffected, //Remove after done testing
    ...data.formData.whatWasAffected,
  }

  const summaryOptions = impact.affectedOptions.map((key) =>
    i18n._(key).toLowerCase(),
  )
  const summaryLine = formatList(summaryOptions, {
    pair: i18n._('default.pair'),
    middle: i18n._('default.middle'),
    end: i18n._('default.end'),
  })

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.ImpactTitle.edit" />
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
            <Trans id="confirmationPage.ImpactTitle" />
          </H2>
          {impact.edited && (
            <H3 fontWeight="normal" paddingLeft="1rem">
              <Trans id="confirmationPage.editedTag" />
            </H3>
          )}
          <EditButton
            label="confirmationPage.ImpactTitle.edit"
            path="/whatwasaffected"
            edited={impact.edited}
          />
        </Flex>
        {containsData(impact) ? (
          <Stack as="dl" spacing={4}>
            <Text>
              <Trans id="confirmationPage.whatWasAffected.format" />
              &nbsp;
              <Text as="span" textTransform="lowercase">
                {summaryLine}
              </Text>
            </Text>
          </Stack>
        ) : (
          <Text>
            <Trans id="confirmationPage.impactIntro" />
          </Text>
        )}
      </Stack>
    </React.Fragment>
  )
}
