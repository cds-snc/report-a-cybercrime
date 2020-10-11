/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Text, View } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'

export const DescriptionItemView = (props)  => {
	if (typeof props.description === 'undefined' || props.description.length === 0) {
	  return null
	}
	return (
	  <View style={pdfStyles.descriptionItem}> 
		<View style={pdfStyles.descriptionRow}> 
		  <View style={pdfStyles.descriptionItemTitle}> 
		    <Text style={pdfStyles.descriptionContentTitle}>{props.lang[props.title]}</Text> 
		  </View> 
		  <View style={pdfStyles.descriptionItemDescription}> 
			<Text style={pdfStyles.descriptionContentDescription}>{props.description}</Text> 
		  </View> 
		</View>
	  </View>
	)
}