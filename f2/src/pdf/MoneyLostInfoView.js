/** @jsx jsx */
import { jsx } from '@emotion/core'
import { containsData } from '../utils/containsData'
import { testdata } from '../ConfirmationSummary'
import { Text, View, Image } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'
import { DescriptionItemView } from './DescriptionItemView'
import { formatList } from '../utils/formatList'
import { formatDate } from '../utils/formatDate'
import line from '../images/line.png'

export const MoneyLostInfoView = (props) => {
  const lang = props.lang

  const methodPaymentSummary = []
  let methodPaymentLine

  const moneyLost = {
    ...testdata.formData.moneyLost,
    ...props.data.formData.moneyLost,
  }

  moneyLost.methodPayment.map((key) =>
    methodPaymentSummary.push(
      key === 'methodPayment.other' ? moneyLost.methodOther : lang[key],
    ),
  )
  methodPaymentLine = formatList(methodPaymentSummary, {
    pair: lang['default.pair'],
    middle: lang['default.middle'],
    end: lang['default.end'],
  })

  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.title}>{lang["confirmationPage.moneyLostTitle"]}</Text>      
      {containsData(moneyLost) ? (
        <View>
          <DescriptionItemView 
            title="confirmationPage.moneyLost.demandedMoney" 
            description={moneyLost.demandedMoney} 
            lang={lang}
          />  
          <DescriptionItemView 
            title="confirmationPage.moneyLost.moneyTaken" 
            description={moneyLost.moneyTaken} 
            lang={lang}
          /> 
          <DescriptionItemView 
            title="confirmationPage.moneyLost.methodPayment" 
            description={methodPaymentLine} 
            lang={lang}
          /> 
          <DescriptionItemView 
            title="confirmationPage.moneyLost.transactionDate" 
            description={formatDate(
              moneyLost.transactionDay,
              moneyLost.transactionMonth,
              moneyLost.transactionYear,
            )} 
            lang={lang}
          />
        </View>
      ) : (
        <Text style={pdfStyles.sectionContent}>{lang["confirmationPage.moneyLost.nag"]}</Text>
      )}
      <Image style={pdfStyles.sectionSeparator} src={line} />
    </View>
  )
}

