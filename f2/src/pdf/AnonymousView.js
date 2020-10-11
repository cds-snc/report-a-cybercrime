/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Text, View, Image } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'
import line from '../images/line.png'

export const AnonymousView = (props) => {
  const lang = props.lang
  return (
    <View style={pdfStyles.section}>
        <Text style={pdfStyles.title}>{lang["confirmationPage.anonymous.title"]}</Text>    
        <Text style={pdfStyles.sectionContent}>{lang["confirmationPage.anonymous.nag"]}</Text>  
        <Image style={pdfStyles.sectionSeparator} src={line} />
    </View> 
  )
}
