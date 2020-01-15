/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { Link } from './components/link'
import { Stack, Code } from '@chakra-ui/core'
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
      affectedOptions: [
        'whatWasAffectedForm.financial',
        'whatWasAffectedForm.personal_information',
        'whatWasAffectedForm.devices',
        'whatWasAffectedForm.business_assets',
        'whatWasAffectedForm.other',
      ],
    },
    moneyLost: {
      demandedMoney: 'moneylost1',
      moneyTaken: 'moneylost2',
      methodPayment: 'moneylost3',
      transactionDate: 'moneylost4',
      tellUsMore: 'moneylost5',
    },
    personalInformation: {
      typeOfInfoReq: '',
      typeOfInfoObtained: '',
      tellUsMore: '',
    },
    devices: { deviceOrAccount: '4', devicesTellUsMore: '5' },
    businessInfo: { business: '' },
    whatHappened: { whatHappened: 'what happened summary text area' },
    suspectClues: {
      suspectClues: '',
      suspectClues1: 'suspectclues1',
      suspectClues2: 'suspectclues2',
      suspectClues3: 'suspectclues3',
    },
    evidence: {
      files: ['nodejs travel expenses_Page_4_Image_0001.jpg', 'file.jpg'],
      fileDescriptions: ['file', 'other-file'],
    },
    location: { postalCode: '', cityTown: '' },
    contactInfo: { email: '' },
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

  if (!data.doneForms) {
    dispatch({ type: 'saveDoneForms', data: true })
  }

  return (
    <React.Fragment>
      <Stack spacing={12} shouldWrapChildren>
        <Code>{JSON.stringify(data)}</Code>
        <HowDidItStartSummary />
        <WhatWasAffectedSummary />
        <MoneyLostInfoSummary />
        <InformationSummary />
        <DevicesSummary />
        <BusinessInfoSummary />
        <WhatHappenedSummary />
        <SuspectCluesSummary />
        <EvidenceInfoSummary />
        <LocationInfoSummary />
        <ContactInfoSummary />
      </Stack>
    </React.Fragment>
  )
}
