import React from 'react'
import { Page, Text, Link, View, Document, Image } from '@react-pdf/renderer'
import { pdfStyles } from './pdfStyles'
import { testdata } from '../ConfirmationSummary'
import topBannerEn from '../images/topbanner-en.png'
import topBannerFr from '../images/topbanner-fr.png'
import footerCanada from '../images/footerCanada.png'
import betaEn from '../images/beta-en.png'
import betaFr from '../images/beta-fr.png'
import langEn from '../locales/en.json'
import langFr from '../locales/fr.json'
import { WhoAreYouReportForView } from './WhoAreYouReportForView'
import { AnonymousView } from './AnonymousView'
import { ContactInfoView } from './ContactInfoView'
import { HowDidItStartView } from './HowDidItStartView'
import { WhenDidItHappenView } from './WhenDidItHappenView'
import { WhatWasAffectedView } from './WhatWasAffectedView'
import { MoneyLostInfoView } from './MoneyLostInfoView'
import { InformationView } from './InformationView'
import { DevicesView } from './DevicesView'
import { BusinessInfoView } from './BusinessInfoView'
import { WhatHappenedView } from './WhatHappenedView'
import { SuspectCluesView } from './SuspectCluesView'
import { EvidenceInfoView } from './EvidenceInfoView'
import { LocationInfoView } from './LocationInfoView'

export const PdfDocument = (props) => {
  const lang = props.locale === 'fr' ? langFr : langEn

  const impact = {
    affectedOptions: [],
    ...testdata.formData.whatWasAffected,
    ...props.data.formData.whatWasAffected,
  }
  const anonymous = {
    ...testdata.formData.anonymous,
    ...props.data.formData.anonymous,
  }
  const { fyiForm } = props.data.formData

  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        <View style={pdfStyles.header} fixed>
          <View style={pdfStyles.rowContainer}>
            <Image
              style={pdfStyles.topbanner}
              src={props.locale === 'en' ? topBannerEn : topBannerFr}
            />
            <Image
              style={pdfStyles.beta}
              src={props.locale === 'en' ? betaEn : betaFr}
            />
            <Text style={pdfStyles.betaText}>{lang['pdf.betaText']}</Text>
          </View>
        </View>
        <View style={pdfStyles.thankyou}>
          <Text style={pdfStyles.thankyouTitle}>{lang['pdf.thankyou']}</Text>
          <Text style={pdfStyles.referenceNumber}>
            {lang['pdf.referenceNumber'] + props.data.reportId}
          </Text>
        </View>

        {fyiForm ? null : (
          <View>
            <WhoAreYouReportForView data={props.data} lang={lang} />
            <HowDidItStartView data={props.data} lang={lang} />
            <WhenDidItHappenView data={props.data} lang={lang} />
            <WhatWasAffectedView data={props.data} lang={lang} />
            {impact.affectedOptions.includes(
              'whatWasAffectedForm.financial',
            ) && <MoneyLostInfoView data={props.data} lang={lang} />}
            {impact.affectedOptions.includes(
              'whatWasAffectedForm.personalInformation',
            ) && <InformationView data={props.data} lang={lang} />}
            {impact.affectedOptions.includes('whatWasAffectedForm.devices') && (
              <DevicesView data={props.data} lang={lang} />
            )}
            {impact.affectedOptions.includes(
              'whatWasAffectedForm.business_assets',
            ) && <BusinessInfoView data={props.data} lang={lang} />}
          </View>
        )}
        <WhatHappenedView data={props.data} lang={lang} />
        {fyiForm ? null : <SuspectCluesView data={props.data} lang={lang} />}
        <EvidenceInfoView data={props.data} lang={lang} />
        <LocationInfoView data={props.data} lang={lang} />
        {anonymous.anonymousOptions.includes('anonymousPage.yes') ? (
          <AnonymousView data={props.data} lang={lang} />
        ) : (
          <ContactInfoView data={props.data} lang={lang} />
        )}
        <View style={pdfStyles.bottomSection}>
          <Text style={pdfStyles.bottomTitle}>{lang['pdf.next.title']}</Text>
          <Text style={pdfStyles.bottomContent}>
            {lang['pdf.next.content']}
          </Text>
        </View>
        <View style={pdfStyles.bottomSection}>
          <Text style={pdfStyles.bottomTitle}>
            {lang['pdf.websites.title']}
          </Text>
          <Text style={pdfStyles.bottomContent}>
            {lang['pdf.bottom.site1']}
          </Text>
          <Link style={pdfStyles.bottomLink}>
            www.antifraudcentre-centreantifraude.ca
          </Link>
          <Text style={pdfStyles.bottomContent}>
            {lang['pdf.bottom.site2']}
          </Text>
          <Link style={pdfStyles.bottomLink}>www.rcmp-grc.gc.ca</Link>
          <Text style={pdfStyles.bottomContent}>
            {lang['pdf.bottom.site3']}
          </Text>
          <Link style={pdfStyles.bottomLink}>www.rcmp-grc.gc.ca/en/nc3</Link>
          <Text style={pdfStyles.bottomContent}>
            {lang['pdf.bottom.site4']}
          </Text>
          <Link style={pdfStyles.bottomLink}>www.getcybersafe.gc.ca</Link>
        </View>
        <Image style={pdfStyles.footerCanada} src={footerCanada} fixed />
      </Page>
    </Document>
  )
}
