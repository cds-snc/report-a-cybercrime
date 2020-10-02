/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { Text, View } from '@react-pdf/renderer';
import { pdfStyles } from './pdfStyles'


const fakeContains = () => {
  return false
}

export const WhoAreYouReportForView = (data, i18n) => {
  //const [data] = useStateValue()
  console.log("WhoAreYouReportForView data----------------------------" )
  console.log(data.formData)

  const whoAreYouReportFor = {
    ...testdata.formData.whoAreYouReportFor,
    ...data.formData.whoAreYouReportFor,
  }

  let whoYouReportForString

  console.log(data.formData.language)
  //i18n._activate("en")
  if (
		whoAreYouReportFor.whoYouReportFor ===
		'whoAreYouReportForPage.options.myself'
	  ) {
		whoYouReportForString = i18n._("whoAreYouReportForPage.options.myself")
	  } else if (
		whoAreYouReportFor.whoYouReportFor ===
		'whoAreYouReportForPage.options.someone'
	  ) {
		whoYouReportForString = i18n._("whoAreYouReportForPage.options.someone")
		
	  } else {
		whoYouReportForString = i18n._("whoAreYouReportForPage.options.business")
	
    }
    
  let title = <Trans id="whoAreYouReportForPage.title" />
  console.log("titles----------------------------")
  console.log(title)

  const title1="fakse"

  return (

    <View style={pdfStyles.container}>
      <Text style={pdfStyles.subtitle}>{i18n._("whoAreYouReportForPage.title")}</Text>      
      {containsData(whoAreYouReportFor) ? (
        <View>
          <Text style={pdfStyles.question}>{i18n._("confirmationPage.youAreReportingFor")} 	
            <Text style={pdfStyles.answer}>{whoYouReportForString}</Text>
          </Text>
          {containsData(whoAreYouReportFor.someoneDescription) ? (
            <Text style={pdfStyles.question}>{i18n._("whoAreYouReportForPage.details")}
              <Text style={pdfStyles.answer}>{whoAreYouReportFor.someoneDescription}</Text>
            </Text>
          ) : null}
          {containsData(whoAreYouReportFor.businessDescription) ? (
            <Text style={pdfStyles.question}>{i18n._("whoAreYouReportForPage.details")}
              <Text style={pdfStyles.answer}>{whoAreYouReportFor.businessDescription}</Text>
            </Text>
          ) : null} 
        </View>
      ) : (
        <Text>
         {i18n._("confirmationPage.whoAreYouReportFor.nag")}
        </Text>
      )}
    </View>
  )
}
