/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { useEffect } from 'react'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { formDefaults } from './forms/defaultValues'
import { HowDidItStartSummary } from './summary/HowDidItStartSummary'
import { BusinessInfoSummary } from './summary/BusinessInfoSummary'
import { ContactInfoSummary } from './summary/ContactInfoSummary'
import { DevicesSummary } from './summary/DevicesSummary'
import { EvidenceInfoSummary } from './summary/EvidenceInfoSummary'
import { InformationSummary } from './summary/InformationSummary'
import { LocationInfoSummary } from './summary/LocationInfoSummary'
import { MoneyLostInfoSummary } from './summary/MoneyLostInfoSummary'
import { SuspectCluesSummary } from './summary/SuspectCluesSummary'
import { WhatHappenedSummary } from './summary/WhatHappenedSummary'
import { WhatWasAffectedSummary } from './summary/WhatWasAffectedSummary'
import { AnonymousSummary } from './summary/AnonymousSummary'
import { WhenDidItHappenSummary } from './summary/WhenDidItHappenSummary'
import { WhoAreYouReportForSummary } from './summary/WhoAreYouReportForSummary'

export const testdata = {
  doneForms: true,
  formData: formDefaults,
}

export const ConfirmationSummary = () => {
  const [data, dispatch] = useStateValue()
  const impact = {
    affectedOptions: [],
    ...testdata.formData.whatWasAffected,
    ...data.formData.whatWasAffected,
  }
  const anonymous = {
    ...testdata.formData.anonymous,
    ...data.formData.anonymous,
  }
  useEffect(() => {
    if (!data.doneForms) {
      dispatch({ type: 'saveDoneForms', data: true })
    }
  })

  return (
    <React.Fragment>
      <Stack spacing={12}>
        <WhoAreYouReportForSummary />
        <HowDidItStartSummary />
        <WhenDidItHappenSummary />
        <WhatWasAffectedSummary />
        {impact.affectedOptions.includes('whatWasAffectedForm.financial') && (
          <MoneyLostInfoSummary />
        )}
        {impact.affectedOptions.includes(
          'whatWasAffectedForm.personalInformation',
        ) && <InformationSummary />}
        {impact.affectedOptions.includes('whatWasAffectedForm.devices') && (
          <DevicesSummary />
        )}
        {impact.affectedOptions.includes(
          'whatWasAffectedForm.business_assets',
        ) && <BusinessInfoSummary />}

        <WhatHappenedSummary />
        <SuspectCluesSummary />
        <EvidenceInfoSummary />
        <LocationInfoSummary />
        {anonymous.anonymousOptions.includes('anonymousPage.yes') ? (
          <AnonymousSummary />
        ) : (
          <ContactInfoSummary />
        )}
      </Stack>
    </React.Fragment>
  )
}
