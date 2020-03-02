/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Route } from 'react-router-dom'
import fetch from 'isomorphic-fetch'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { P } from './components/paragraph'
import { Layout } from './components/layout'
import { ConfirmationSummary } from './ConfirmationSummary'
import { ConfirmationForm } from './forms/ConfirmationForm'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { Page } from './components/Page'

async function postData(url = '', data = {}) {
  // Building a multi-part form for file upload!
  // Stick all our collected data into a single form element called json
  // Maybe there's a better way to generate form fields from json?
  // add the files to the formdata object after.
  var form_data = new FormData()
  form_data.append('json', JSON.stringify(data))
  if (data.evidence)
    data.evidence.files.forEach(f => form_data.append(f.name, f, f.name))

  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrer: 'no-referrer',
    body: form_data,
  })
  return response
}

const prepFormData = (formData, language) => {
  formData.appVersion = process.env.REACT_APP_VERSION
    ? process.env.REACT_APP_VERSION.slice(0, 7)
    : 'no version'

  if (
    formData.whatWasAffected &&
    !formData.whatWasAffected.affectedOptions.includes(
      'whatWasAffectedForm.financial',
    )
  ) {
    formData.moneyLost = {
      demandedMoney: '',
      moneyTaken: '',
      methodPayment: [],
      transactionDay: '',
      transactionMonth: '',
      transactionYear: '',
      tellUsMore: '',
    }
  }

  if (
    formData.whatWasAffected &&
    !formData.whatWasAffected.affectedOptions.includes(
      'whatWasAffectedForm.personal_information',
    )
  ) {
    formData.personalInformation = {
      typeOfInfoReq: [],
      infoReqOther: '',
      typeOfInfoObtained: [],
      infoObtainedOther: '',
      tellUsMore: '',
    }
  }

  if (
    formData.whatWasAffected &&
    !formData.whatWasAffected.affectedOptions.includes(
      'whatWasAffectedForm.devices',
    )
  ) {
    formData.devicesInfo = {
      device: '',
      account: '',
      devicesTellUsMore: '',
    }
  }

  if (
    formData.whatWasAffected &&
    !formData.whatWasAffected.affectedOptions.includes(
      'whatWasAffectedForm.business_assets',
    )
  ) {
    formData.businessInfo = {
      business: '',
    }
  }

  return {
    ...formData,
    language,
  }
}

const submitToServer = async (data, dispatch) => {
  console.log('Submitting data:', data)
  const response = await postData('/submit', data)
  const reportId = await response.text()
  dispatch({ type: 'saveFormData', data: { reportId, submitted: true } })
}

export const ConfirmationPage = () => {
  const [{ formData }, dispatch] = useStateValue() // eslint-disable-line no-unused-vars
  const { i18n } = useLingui()
  if (formData.reportId !== '') {
    dispatch({ type: 'saveFormData', data: { reportId: '' } })
  }
  return (
    <Route
      render={({ history }) => (
        <Page>
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }} mb={10}>
            <Stack spacing={10} shouldWrapChildren>
              <BackButton onClick={() => history.goBack()}>
                <Trans id="confirmationPage.backButton" />
              </BackButton>
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
