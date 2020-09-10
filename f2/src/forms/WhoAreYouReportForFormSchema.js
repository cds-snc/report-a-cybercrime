import React from 'react'
import * as Yup from 'yup'
import { Trans } from '@lingui/macro'

const whoAreYouReportFormSchema = Yup.object().shape({
  whoYouReportFor: Yup.string().required(<Trans id="whoAreYouReportForPage.hasValidationErrors" />),
})

export const WhoAreYouReportForFormSchema = () => {
  return whoAreYouReportFormSchema
}
