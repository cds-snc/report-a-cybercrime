import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { pdfStyles } from './pdfStyles'
import { WhoAreYouReportForView } from './WhoAreYouReportForView'
import { testdata } from '../ConfirmationSummary'


const testFunction = (data) => {
	console.log('I am in testFunction')
	return (
		<View >
			<Text>I'm only visible in odd pages again!</Text>
		</View>
	)
}

const testFunction1 = () => {
	console.log('I am in testFunction1')
	return (
		<View >
			<Text>I'm only visible in odd pages again1!</Text>
		</View>
	)
}

const WhoAreYouReportForView1 = (formData, i18n) => {
	const whoAreYouReportFor = {
		...testdata.formData.whoAreYouReportFor,
		...formData.whoAreYouReportFor,
	  }
	
	  console.log(whoAreYouReportFor)
	  let whoYouReportForString
	
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
	  return whoYouReportForString
}

// Create Document Component
const PdfDocument = (props) => {  

	console.log("PdfDocument-------------------------")
	console.log(props.data)
  return (
	<Document>
		<Page size="A4" style={pdfStyles.body}>
		<Text style={pdfStyles.title}>Report Summary</Text>
		<View style={pdfStyles.container}>
				<Text style={pdfStyles.subtitle}>Who are you reporting for?-- static</Text>
				<Text style={pdfStyles.question}>You are reporting for: 	-- static <Text style={pdfStyles.answer}>A business-- static</Text></Text>
				<Text style={pdfStyles.question}>Details:-- static <Text style={pdfStyles.answer}>LCBO-- static</Text></Text>
		</View>

		<View render={() => {
			console.log('I am in odd pages view')
			return (
			<View >
				<Text>I'm only visible in odd pages!</Text>
			</View>
			)
		}} />
		<View render={() => (
			  //<WhoAreYouReportForView data={props.data} i18n={props.i18n}/>
			  <View style={pdfStyles.container}>
			  <Text style={pdfStyles.subtitle}>{WhoAreYouReportForView1(props.data.formData, props.i18n)}</Text>      
				{WhoAreYouReportForView(props.data, props.i18n)}
			</View>
		)} />
		
		</Page>
	</Document>
  )
}

export default PdfDocument;
