/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route } from 'react-router-dom'
import fetch from 'isomorphic-fetch'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { TrackPageViews } from './TrackPageViews'
import { Layout } from './components/layout'
import { ConfirmationSummary } from './ConfirmationSummary'
import { ConfirmationForm } from './forms/ConfirmationForm'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { generateReportId } from './utils/generateReportId'

const randLetter = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return letters[Math.floor(Math.random() * letters.length)]
}
const randDigit = () => Math.floor(Math.random() * 10)

const randomizeString = s =>
  s
    ? s
        .replace(/[a-z]/g, () => randLetter())
        .replace(/[A-Z]/g, () => randLetter().toUpperCase())
        .replace(/[0-9]/g, () => randDigit())
    : s

async function postData(url = '', data = {}) {
  // Building a multi-part form for file upload!
  // Stick all our collected data into a single form element called json
  // Maybe there's a better way to generate form fields from json?
  // add the files to the formdata object after.
  var form_data = new FormData();
  form_data.append('json', JSON.stringify(data));
  data.evidence.files.forEach(f => form_data.append(f.name, f, f.name));

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
  return await response
}

const prepFormData = formData => {
  let contactInfo = formData.contactInfo ? formData.contactInfo : {}
  let { fullName, email, postalCode } = contactInfo
  fullName = randomizeString(fullName)
  email = randomizeString(email)
  postalCode = randomizeString(postalCode)
  
  if (!(formData.whatWasAffected.affectedOptions.includes('whatWasAffectedForm.financial'))) {
    formData.moneyLost={
      demandedMoney: '',
      moneyTaken: '',
      methodPayment: '',
      transactionDate: '',
      tellUsMore: '',
    } }
     
    if(!(formData.whatWasAffected.affectedOptions.includes('whatWasAffectedForm.personal_information'))){
      formData.personalInformation={
        typeOfInfoReq: '',
        typeOfInfoObtained: '',
        tellUsMore: '',
      }}
      
      if(!(formData.whatWasAffected.affectedOptions.includes('whatWasAffectedForm.devices'))){
        formData.devicesInfo={
          deviceOrAccount: '', 
          devicesTellUsMore: ''
        }}
        
        if(!(formData.whatWasAffected.affectedOptions.includes('whatWasAffectedForm.business_assets'))){
          formData.businessInfo={
            business: '' 
          }}
          
  return {
    ...formData,
    contactInfo: {
      fullName,
      email,
      postalCode,
    },
  }
}

const submitToServer = async data => {
  console.log('Submitting data:', data)
  await postData('/submit', data)
}

export const ConfirmationPage = () => {
  const [{ formData }, dispatch] = useStateValue() // eslint-disable-line no-unused-vars

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />
          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/contactinfo">
              <Trans id="confirmationPage.backButton" />
            </BackButton>         
              <H1>
                <Trans id="confirmationPage.title" />
              </H1>        
            <ConfirmationSummary />
            <ConfirmationForm
              onSubmit={() => {
                const reportId = generateReportId()
                dispatch({
                  type: 'saveFormData',
                  data: { reportId },
                })
                let data = prepFormData(formData, reportId)
                submitToServer({ ...data, reportId }) // pass reportId to protect against dispatch race condition
                history.push('/thankYouPage')
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
