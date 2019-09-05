/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { I18n } from '@lingui/react'
import { ApolloConsumer, Mutation } from 'react-apollo'
import { H1, H2 } from '../components/header'
import { Container } from '../components/container'
import { Text } from '../components/text'
import { Button } from '../components/button'
import { Link } from '../components/link'
import { TrackPageViews } from '../TrackPageViews'
import { Steps } from '../components/stepper'
import { Layout } from '../components/layout'
import {
  SUBMIT_REPORT_MUTATION,
  getScamInfo,
  getLostMoney,
  getSuspectInfo,
  getFiles,
  getContactInfo,
  getSurveyInfo,
} from '../utils/queriesAndMutations'
import { BackButton } from '../components/backbutton'

const scamEventSummary = client => {
  let {
    howWereYouContacted,
    otherMethodOfContact,
    whenWereYouContacted,
    scamDetails,
  } = getScamInfo(client)

  if (otherMethodOfContact) {
    howWereYouContacted = howWereYouContacted.concat(otherMethodOfContact)
  }
  howWereYouContacted = howWereYouContacted
    ? howWereYouContacted.filter(s => s !== 'other')
    : ''
  return (
    <I18n>
      {({ i18n }) => (
        <React.Fragment>
          <H2 fontSize={[3, null, 4]} marginBottom={[1, null, 1]}>
            <Trans>What happened</Trans>{' '}
            <Link
              aria-label={i18n._('Edit scam event')}
              type="button"
              color="black"
              to="/p1/scaminfo"
              textAlign="center"
            >
              <Trans>Edit</Trans>
            </Link>
          </H2>
          {scamDetails ? (
            <Text>
              <strong>
                <Trans>Description</Trans>:{' '}
              </strong>
              {scamDetails}
            </Text>
          ) : null}

          {whenWereYouContacted ? (
            <Text>
              <strong>
                <Trans>Date </Trans>:{' '}
              </strong>
              {whenWereYouContacted}
            </Text>
          ) : null}
          {howWereYouContacted ? (
            <Text>
              <strong>
                <Trans>Contacted by</Trans>:{' '}
              </strong>
              {howWereYouContacted.map(i => i18n._(i)).join(', ')}
            </Text>
          ) : null}
        </React.Fragment>
      )}
    </I18n>
  )
}

const lostMoneySummary = client => {
  let {
    lostAmount,
    lostCurrency,
    lostOtherCurrency,
    lostMethodsOfPayment,
    lostOtherMethodOfPayment,
  } = getLostMoney(client)

  if (lostOtherMethodOfPayment) {
    lostMethodsOfPayment = lostMethodsOfPayment.concat(lostOtherMethodOfPayment)
  }
  lostMethodsOfPayment = lostMethodsOfPayment.filter(s => s !== 'other')
  return (
    <I18n>
      {({ i18n }) => (
        <React.Fragment>
          <H2
            fontSize={[3, null, 4]}
            marginTop={[3, null, 4]}
            marginBottom={[1, null, 1]}
          >
            <Trans>Money lost</Trans>{' '}
            <Link
              aria-label={i18n._('Edit money lost')}
              type="button"
              color="black"
              to="/p1/moneylost"
              textAlign="center"
            >
              <Trans>Edit</Trans>
            </Link>
          </H2>
          {lostAmount ? (
            <Text>
              <strong>
                <Trans>Amount</Trans>:{' '}
              </strong>
              {lostAmount}
            </Text>
          ) : null}
          {lostCurrency || lostOtherCurrency ? (
            <Text>
              <strong>
                <Trans>Currency</Trans>:{' '}
              </strong>
              {lostOtherCurrency ? lostOtherCurrency : i18n._(lostCurrency)}
            </Text>
          ) : null}
          {lostMethodsOfPayment ? (
            <Text>
              <strong>
                <Trans>Payment method</Trans>:{' '}
              </strong>
              {lostMethodsOfPayment.map(i => i18n._(i)).join(', ')}
            </Text>
          ) : null}
        </React.Fragment>
      )}
    </I18n>
  )
}

const suspectInfoSummary = client => {
  let {
    suspectName,
    suspectAddress,
    suspectLanguage,
    otherSuspectLanguage,
    suspectPhone,
    suspectEmail,
    suspectWebsite,
    suspectIP,
  } = getSuspectInfo(client)

  if (otherSuspectLanguage) {
    suspectLanguage = suspectLanguage.concat(otherSuspectLanguage)
  }
  suspectLanguage = suspectLanguage.filter(s => s !== 'Other language')

  return (
    <I18n>
      {({ i18n }) => (
        <React.Fragment>
          <H2
            fontSize={[3, null, 4]}
            marginTop={[3, null, 4]}
            marginBottom={[1, null, 1]}
          >
            <Trans>About the suspect</Trans>{' '}
            <Link
              aria-label={i18n._('Edit scammer details')}
              type="button"
              color="black"
              to="/p1/suspectinfo"
              textAlign="center"
            >
              <Trans>Edit</Trans>
            </Link>
          </H2>

          {suspectName ? (
            <Text>
              <strong>
                <Trans>Name</Trans>:{' '}
              </strong>
              {suspectName}
            </Text>
          ) : null}

          {suspectEmail ? (
            <Text>
              <strong>
                <Trans>Email address</Trans>:{' '}
              </strong>
              {suspectEmail}
            </Text>
          ) : null}

          {suspectPhone ? (
            <Text>
              <strong>
                <Trans>Phone number</Trans>:{' '}
              </strong>
              {suspectPhone}
            </Text>
          ) : null}

          {suspectWebsite ? (
            <Text>
              <strong>
                <Trans>Website</Trans>:{' '}
              </strong>
              {suspectWebsite}
            </Text>
          ) : null}

          {suspectAddress ? (
            <Text>
              <strong>
                {' '}
                <Trans>Mailing address</Trans>:{' '}
              </strong>
              {suspectAddress}
            </Text>
          ) : null}
          {suspectIP ? (
            <Text>
              <strong>
                <Trans>IP address</Trans>:{' '}
              </strong>
              {suspectIP}
            </Text>
          ) : null}
          {suspectLanguage ? (
            <Text>
              <strong>
                <Trans>Language of correspondence</Trans>:{' '}
              </strong>
              {suspectLanguage.map(i => i18n._(i)).join(', ')}
            </Text>
          ) : null}
        </React.Fragment>
      )}
    </I18n>
  )
}

const fileUploadSummary = client => {
  const files = getFiles(client)
  const fileList = files.join(', ')
  return (
    <React.Fragment>
      <H2
        fontSize={[3, null, 4]}
        marginTop={[3, null, 4]}
        marginBottom={[1, null, 1]}
      >
        <Trans>Files attached</Trans>{' '}
        <I18n>
          {({ i18n }) => {
            return (
              <Link
                aria-label={i18n._('Edit files attached')}
                type="button"
                color="black"
                to="/p1/uploadfiles"
                textAlign="center"
              >
                <Trans>Edit</Trans>
              </Link>
            )
          }}
        </I18n>
      </H2>
      {files.length ? (
        <Text>
          <strong>
            <Trans>File name</Trans>:{' '}
          </strong>
          {fileList}
        </Text>
      ) : null}
    </React.Fragment>
  )
}
const contactInfoSummary = client => {
  let {
    userIsTheVictim,
    contactInfoName,
    contactInfoEmail,
    contactInfoPhone,
  } = getContactInfo(client)

  return (
    <I18n>
      {({ i18n }) => (
        <React.Fragment>
          <H2
            fontSize={[3, null, 4]}
            marginTop={[3, null, 4]}
            marginBottom={[1, null, 1]}
          >
            <Trans>Contact information</Trans>{' '}
            <Link
              aria-label={i18n._('Edit contact info')}
              type="button"
              color="black"
              to="/p1/contactinfo"
              textAlign="center"
            >
              <Trans>Edit</Trans>
            </Link>
          </H2>

          {contactInfoName ? (
            <Text>
              <strong>
                <Trans>Name</Trans>:{' '}
              </strong>
              {contactInfoName}
            </Text>
          ) : null}

          {contactInfoEmail ? (
            <Text>
              <strong>
                <Trans>Email</Trans>:{' '}
              </strong>
              {contactInfoEmail}
            </Text>
          ) : null}
          {contactInfoPhone ? (
            <Text>
              <strong>
                <Trans>Phone number</Trans>:{' '}
              </strong>
              {contactInfoPhone}
            </Text>
          ) : null}
          {userIsTheVictim ? (
            <Text>
              <strong>
                <Trans>Did the scam happened to you</Trans>:{' '}
              </strong>
              {i18n._(userIsTheVictim)}
            </Text>
          ) : null}
        </React.Fragment>
      )}
    </I18n>
  )
}

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

const submit = (client, submitReport) => {
  let scamInfo = getScamInfo(client)
  let lostMoney = getLostMoney(client)
  let suspectInfo = getSuspectInfo(client)
  let files = getFiles(client)
  let contactInfo = getContactInfo(client)
  const surveyInfo = getSurveyInfo(client)

  let {
    suspectName,
    suspectAddress,
    suspectLanguage,
    otherSuspectLanguage,
    suspectPhone,
    suspectEmail,
    suspectWebsite,
    suspectIP,
  } = suspectInfo
  suspectName = randomizeString(suspectName)
  suspectAddress = randomizeString(suspectAddress)
  suspectPhone = randomizeString(suspectPhone)
  suspectEmail = randomizeString(suspectEmail)
  suspectWebsite = randomizeString(suspectWebsite)
  suspectIP = randomizeString(suspectIP)

  let {
    userIsTheVictim,
    contactInfoName,
    contactInfoEmail,
    contactInfoPhone,
  } = contactInfo
  contactInfoName = randomizeString(contactInfoName)
  contactInfoEmail = randomizeString(contactInfoEmail)
  contactInfoPhone = randomizeString(contactInfoPhone)

  const data = {
    source: 'p1',
    scamInfo,
    lostMoney,
    suspectInfo: {
      suspectName,
      suspectAddress,
      suspectLanguage,
      otherSuspectLanguage,
      suspectPhone,
      suspectEmail,
      suspectWebsite,
      suspectIP,
    },
    files,
    contactInfo: {
      userIsTheVictim,
      contactInfoName,
      contactInfoEmail,
      contactInfoPhone,
    },
    surveyInfo,
  }
  submitReport({ variables: data })
  navigate('thankyou')
}

export const ConfirmationPage = () => {
  return (
    <Layout>
      <BackButton route="/p1/contactinfoquestion">
        <Trans>contact information</Trans>
      </BackButton>
      <Steps activeStep={6} totalSteps={6} />
      <H1>
        <Trans>Review report information</Trans>
      </H1>
      <TrackPageViews />
      <ApolloConsumer>
        {client => {
          client.writeData({
            data: { doneForms: true },
          })

          return (
            <React.Fragment>
              {scamEventSummary(client)}
              {lostMoneySummary(client)}
              {suspectInfoSummary(client)}
              {fileUploadSummary(client)}
              {contactInfoSummary(client)}
            </React.Fragment>
          )
        }}
      </ApolloConsumer>

      <Container
        mt="1rem"
        mb="4rem"
        display={['flex', 'block', 'flex']}
        alignItems="center"
        css={css`
          button,
          div[name='buttonlink-container'] a {
            padding: 0.7rem 1.5rem;
            width: 100%;
            text-align: center;
          }

          @media (max-width: 640px) {
            div[name='buttonlink-container'] a {
              padding: 0.7rem 0;
            }
          }
        `}
      >
        <ApolloConsumer>
          {client => (
            <Mutation mutation={SUBMIT_REPORT_MUTATION}>
              {submitReport => (
                <Container name="buttonlink-container" mt="1rem">
                  <Button
                    type="submit"
                    onClick={() => submit(client, submitReport)}
                  >
                    <Trans>Submit report &nbsp; ❯</Trans>
                  </Button>
                </Container>
              )}
            </Mutation>
          )}
        </ApolloConsumer>
        <Container
          name="buttonlink-container"
          mt="1.9rem"
          ml={['3rem', '0', '3rem']}
        >
          <Link type="button" color="black" to="/p1" textAlign="center">
            <Trans>Cancel report</Trans>
          </Link>
        </Container>
      </Container>
    </Layout>
  )
}
