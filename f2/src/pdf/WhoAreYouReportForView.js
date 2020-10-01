/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { Text, View } from '@react-pdf/renderer';
import { pdfStyles } from './pdfStyles'

export const WhoAreYouReportForView = (data, i18n) => {
  //const [data] = useStateValue()
  console.log("WhoAreYouReportForView data----------------------------" )
  console.log(data.formData)
  const whoAreYouReportFor = {
    ...testdata.formData.whoAreYouReportFor,
    ...data.formData.whoAreYouReportFor,
  }

  let whoYouReportForString

  if (
    whoAreYouReportFor.whoYouReportFor ===
    'whoAreYouReportForPage.options.myself'
  ) {
    whoYouReportForString = <Trans id="whoAreYouReportForPage.options.myself" />
  } else if (
    whoAreYouReportFor.whoYouReportFor ===
    'whoAreYouReportForPage.options.someone'
  ) {
    whoYouReportForString = (
      <Trans id="whoAreYouReportForPage.options.someone" />
    )
  } else {
    whoYouReportForString = (
      <Trans id="whoAreYouReportForPage.options.business" />
    )
  }
  let title = <Trans id="whoAreYouReportForPage.title" />
  console.log("titles----------------------------")
  console.log(title)

  const title1="fakse"

  return (
    <React.Fragment>
    <View style={pdfStyles.container}>
      <Text style={pdfStyles.subtitle}>i18n._("whoAreYouReportForPage.title")</Text>      

    </View>
    </React.Fragment>
  )
}
