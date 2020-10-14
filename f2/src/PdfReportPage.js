import React from 'react'
import { BlobProvider } from '@react-pdf/renderer'
import { PdfDocument } from './pdf/PdfDocument'
import { Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { A } from './components/formik/link'
import { useStateValue } from './utils/state'

export const PdfReportPage = (props) => {
  const [data] = useStateValue()
  const { i18n } = useLingui()

  return (
    <React.Fragment>
      {false ? (
        <div>
          <Trans id="pdf.betaText" />
          <Trans id="pdf.bottom.site1" />
          <Trans id="pdf.bottom.site2" />
          <Trans id="pdf.bottom.site3" />
          <Trans id="pdf.bottom.site4" />
          <Trans id="pdf.getPdfReport" />
          <Trans id="pdf.next.title" />
          <Trans id="pdf.next.content" />
          <Trans id="pdf.referenceNumber" />
          <Trans id="pdf.thankyou" />
          <Trans id="pdf.websites.title" />
        </div>
      ) : null}
      <BlobProvider document={<PdfDocument data={data} locale={i18n.locale} />}>
        {({ blob, url, loading, error }) => {
          return (
            <A href={url} target="_blank" fontSize="xl">
              <Trans id="pdf.getPdfReport" />
            </A>
          )
        }}
      </BlobProvider>
    </React.Fragment>
  )
}
