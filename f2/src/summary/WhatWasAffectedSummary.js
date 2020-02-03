/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata, EditButton } from '../ConfirmationSummary'
import { H2 } from '../components/header'
import { useLingui } from '@lingui/react'
import { Text } from '../components/text'
import { useIntl } from 'react-intl'

export const WhatWasAffectedSummary = props => {
  const { i18n } = useLingui()
  const intl = useIntl()

  const [data] = useStateValue()
  const impact = {
    affectedOptions: [],
    ...testdata.formData.whatWasAffected, //Remove after done testing
    ...data.formData.whatWasAffected,
  }

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.ImpactTitle.edit" />
        </div>
      ) : null}
      <Stack spacing={4} borderBottom="2px" borderColor="gray.300" pb={4}>
        <Flex align="baseline">
          <H2 fontWeight="normal">
            <Trans id="confirmationPage.ImpactTitle" />
          </H2>
          <EditButton
            path="/whatwasaffected"
            label="confirmationPage.ImpactTitle.edit"
          />
        </Flex>
        {impact.affectedOptions.length > 0 ? (
          <Stack as="dl" spacing={4}>
            <Text>
              <Trans id="confirmationPage.whatWasAffected.format" />
              &nbsp;
              <Text as="span" textTransform="lowercase">
                {intl.formatList(
                  impact.affectedOptions.map(i => i18n._(i)),
                  { type: 'conjunction' },
                )}
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
