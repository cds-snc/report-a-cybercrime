/** @jsx jsx */
import { jsx } from '@emotion/core'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { Text, View, Image } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'
import { DescriptionItemView } from './DescriptionItemView'
import line from '../images/line.png'

export const DevicesView = (props) => {
  const lang = props.lang

  const devices = {
    ...testdata.formData.devicesInfo,
    ...props.data.formData.devicesInfo,
  }

  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.title}>{lang["confirmationPage.devicesTitle"]}</Text>      
      {containsData(devices) ? (
        <View>
          <DescriptionItemView 
            title="confirmationPage.devices.device" 
            description={devices.device} 
            lang={lang}
          />  
          <DescriptionItemView 
            title="confirmationPage.devices.account" 
            description={devices.account} 
            lang={lang}
          /> 
        </View>
      ) : (
        <Text style={pdfStyles.sectionContent}>{lang["confirmationPage.devices.nag"]}</Text>
      )}
      <Image style={pdfStyles.sectionSeparator} src={line} />
    </View>
  )
}
