import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { pdfStyles } from './pdfStyles'
import { WhoAreYouReportForView } from './WhoAreYouReportForView'

const WhoAreYouReportForView1 = (data) => {
	return (
		<View>
		<Text style={pdfStyles.title}>who</Text>
		</View>
	)
}
const testFunction = (data) => {
	console.log('I am in testFunction')
	return (
		<View >
			<Text>I'm only visible in odd pages again!</Text>
		</View>
	)
}

// Create Document Component
const PdfDocument = (data, i18n) => {  
	console.log("PdfDocument-------------------------")
	console.log(data)
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
			  <WhoAreYouReportForView data={data} i18n={i18n}/>
		)} />
		
		</Page>
	</Document>
  )
}

export default PdfDocument;
