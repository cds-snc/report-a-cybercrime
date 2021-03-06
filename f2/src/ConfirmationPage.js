/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Route } from 'react-router-dom'
import fetch from 'isomorphic-fetch'
import { Trans } from '@lingui/macro'
import flatten from 'flat'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { ConfirmationSummary } from './ConfirmationSummary'
import { ConfirmationForm } from './forms/ConfirmationForm'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { Page } from './components/Page'
import { formDefaults } from './forms/defaultValues'
import { useLog } from './useLog'

const { getLogger } = require('./utils/winstonLoggerClient')
const logger = getLogger(__filename)

async function postData(url = '', data = {}) {
  // Building a multi-part form for file upload!
  // Stick all our collected data into a single form element called json
  // Maybe there's a better way to generate form fields from json?
  // add the files to the formdata object after.
  const flattenedData = flatten(data, { safe: true })
  var form_data = new FormData()
  Object.keys(flattenedData).forEach((key) => {
    form_data.append(key, JSON.stringify(flattenedData[key]))
  })
  if (data.evidence)
    data.evidence.files.forEach((f) => form_data.append(f.name, f, f.name))

  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrer: 'no-referrer',
    body: form_data,
  }).catch(function (error) {
    console.log({ error })
  })
  return response ? response.text() : 'fetch failed'
}

const prepFormData = (formDataOrig, language) => {
  Object.keys(formDataOrig).forEach((form) => {
    if (formDefaults[form]) {
      formDataOrig[form] = {
        ...formDefaults[form],
        ...formDataOrig[form],
      }
    }
  })
  //this allows us to go directly to the confirmation page during debugging
  const formData = {
    ...formDefaults,
    ...formDataOrig,
  }
  formData.appVersion = process.env.REACT_APP_VERSION
    ? process.env.REACT_APP_VERSION.slice(0, 7)
    : 'no version'

  if (formData.anonymous.anonymousOptions.includes('anonymousPage.yes')) {
    formData.contactInfo = formDefaults.contactInfo
  } else {
    formData.anonymous.anonymousOptions = ['anonymousPage.no']
  }

  if (
    formData.whatWasAffected &&
    !formData.whatWasAffected.affectedOptions.includes(
      'whatWasAffectedForm.financial',
    )
  ) {
    formData.moneyLost = formDefaults.moneyLost
  }

  if (
    formData.whatWasAffected &&
    !formData.whatWasAffected.affectedOptions.includes(
      'whatWasAffectedForm.personalInformation',
    )
  ) {
    formData.personalInformation = formDefaults.personalInformation
  }

  if (
    formData.whatWasAffected &&
    !formData.whatWasAffected.affectedOptions.includes(
      'whatWasAffectedForm.devices',
    )
  ) {
    formData.devicesInfo = formDefaults.devicesInfo
  }

  if (
    formData.whatWasAffected &&
    !formData.whatWasAffected.affectedOptions.includes(
      'whatWasAffectedForm.business_assets',
    )
  ) {
    formData.businessInfo = formDefaults.businessInfo
  }

  return {
    ...formData,
    language,
  }
}

const submitToServer = async (data, dispatch) => {
  console.log('Submitting data:', data)
  logger.info({
    sessionId: data.sessionId,
    message: 'Submiting report to server',
  })
  const reportId = await postData('/submit', data)
  logger.info({
    sessionId: data.sessionId,
    reportId: reportId,
    message: 'Submitted report to server',
  })
  const submitted = reportId && reportId.startsWith('NCFRS-')
  dispatch({ type: 'saveReportId', data: reportId })
  dispatch({ type: 'saveSubmitted', data: submitted })
}

export const ConfirmationPage = () => {
  const [{ formData }, dispatch] = useStateValue() // eslint-disable-line no-unused-vars
  const { i18n } = useLingui()
  useLog('ConfirmationPage')
  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }} mb={10}>
            <Stack spacing={10} shouldWrapChildren>
              <BackButton />
              <H1>
                <Trans id="confirmationPage.title" />
              </H1>
              <P>
                <Trans id="confirmationPage.intro" />
              </P>
            </Stack>
          </Layout>
          <Layout columns={{ base: 4 / 4, md: 8 / 8, lg: 9 / 12 }}>
            <ConfirmationSummary />
            <ConfirmationForm
              onSubmit={() => {
                dispatch({ type: 'saveReportId', data: undefined })
                dispatch({ type: 'saveSubmitted', data: undefined })
                submitToServer(prepFormData(formData, i18n.locale), dispatch)
                history.push('/thankYouPage')
              }}
            />
          </Layout>
        </Page>
      )}
    />
  )
}
