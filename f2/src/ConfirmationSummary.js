/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { Link } from './components/link'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

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

export const testdata = {
  doneForms: true,
  formData: {
    consent: { consentOptions: ['privacyConsentInfoForm.yes'] },
    howdiditstart: {
      howDidTheyReachYou: [],
      email: '',
      phone: '',
      online: '',
      application: '',
      others: '',
      whenDidItStart: '',
      howManyTimes: '',
    },
    whatWasAffected: {
      affectedOptions: [],
      optionOther: '',
    },
    moneyLost: {
      demandedMoney: '',
      moneyTaken: '',
      methodPayment: [],
      transactionDate: '',
      tellUsMore: '',
    },
    personalInformation: {
      typeOfInfoReq: [],
      typeOfInfoObtained: [],
      infoReqOther: '',
      infoObtainedOther: '',
      tellUsMore: '',
    },
    devicesInfo: { device: '', account: '', devicesTellUsMore: '' },
    businessInfo: { business: '' },
    whatHappened: { whatHappened: '' },

    suspectClues: {
      suspectClues1: '',
      suspectClues2: '',
      suspectClues3: '',
    },
    evidence: {
      files: [],
      fileDescriptions: [],
    },
    location: { postalCode: '' },
    contactInfo: { fullName: '', email: '', phone: '' },
  },
}

export const EditButton = ({ path, label }) => {
  const { i18n } = useLingui()
  return (
    <Link to={path} aria-label={i18n._(label)} ml={4}>
      <Trans id="button.edit" />
    </Link>
  )
}

export const ConfirmationSummary = () => {
  const [data, dispatch] = useStateValue()
  const impact = {
    affectedOptions: [],
    ...testdata.formData.whatWasAffected, //Remove after done testing
    ...data.formData.whatWasAffected,
  }
  if (!data.doneForms) {
    dispatch({ type: 'saveDoneForms', data: true })
  }

  return (
    <React.Fragment>
      <Stack spacing={12}>
        <HowDidItStartSummary />
        <WhatWasAffectedSummary />
        {impact.affectedOptions.includes('whatWasAffectedForm.financial') && (
          <MoneyLostInfoSummary />
        )}
        {impact.affectedOptions.includes(
          'whatWasAffectedForm.personal_information',
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
        <ContactInfoSummary />
      </Stack>
    </React.Fragment>
  )
}
