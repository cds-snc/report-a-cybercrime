/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P } from './components/paragraph'
import { A } from './components/link'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { InfoCard } from './components/container'
import { TrackPageViews } from './TrackPageViews'
import { Layout } from './components/layout'
import { Text } from './components/text'
import { Stack, IconButton, Link } from '@chakra-ui/core'
import { Link as Route } from 'react-router-dom'

export const ThankYouPage = () => {
  const { i18n } = useLingui()
  return (
    <Layout>
      <TrackPageViews />

      <Stack spacing={10}>
        <InfoCard bg="green.900" rounded="5px">
          <P color="green.200">
            <H1>
              <Trans id="thankYouPage.title" />
            </H1>
          </P>

          <P color="green.200">
            <Trans id="thankYouPage.summary" />
          </P>

          <P color="green.200">
            <Trans
              id="thankYouPage.referenceNumber"
              values={{ reference: '#NC300234234' }}
            >
              <Text as="span" color="yellow.200" fontSize="xl" />
            </Trans>
          </P>
        </InfoCard>

        <Stack spacing={4} shouldWrapChildren>
          <H2>
            <Trans id="thankYouPage.helpResource" />
          </H2>
          <Ul>
            <Li>
              <A
                href={
                  i18n.locale === 'en'
                    ? 'http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-eng.htm'
                    : 'http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-fra.htm'
                }
              >
                <Trans id="thankYouPage.helpResource1" />
              </A>
            </Li>
            <Li>
              <A
                href={
                  i18n.locale === 'en'
                    ? 'http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-eng.htm'
                    : 'http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-fra.htm'
                }
              >
                <Trans id="thankYouPage.helpResource2" />
              </A>
            </Li>
            <Li>
              <A
                href={
                  i18n.locale === 'en'
                    ? 'http://www.antifraudcentre.ca/index-eng.htm'
                    : 'http://www.antifraudcentre.ca/index-fra.htm'
                }
              >
                <Trans id="thankYouPage.helpResource3" />
              </A>
            </Li>
          </Ul>

          <H2>
            <Trans id="thankYouPage.otherReportOption" />
          </H2>
          <Ul>
            <Li>
              <Trans id="thankYouPage.otherReportOption1" />
            </Li>

            <Li>
              <Trans id="thankYouPage.otherReportOption2" />
            </Li>

            <Li>
              <Trans id="thankYouPage.otherReportOption3" />
            </Li>

            <Li>
              <Trans id="thankYouPage.otherReportOption4">
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'https://www.consumer.equifax.ca/personal/'
                      : 'https://www.consumer.equifax.ca/personnel/'
                  }
                />
                <A
                  href={
                    i18n.locale === 'en'
                      ? 'https://www.transunion.ca/'
                      : 'https://www.transunion.ca/fr'
                  }
                />
              </Trans>
            </Li>
          </Ul>

          <InfoCard borderColor="transparent" bg="green.100" p={1}>
            <IconButton bg="green.100" icon="check" marginRight="4px" />
            <Trans id="thankYouPage.safelyCloseWindow"></Trans>
          </InfoCard>

          <Link as={Route} to="/" color="blue.600">
            <Trans id="thankYouPage.createNewReport" />
            <IconButton bg="white" icon="chevron-right" />
          </Link>

          <InfoCard borderColor="transparent" bg="blue.300" p={0.5}>
            <P color="white" fontSize="med">
              <IconButton
                color="white"
                bg="blue.300"
                icon="chat"
                marginRight="2px"
              />
              <Trans id="thankYouPage.feedback">
                <Text as="span" color="white" />
              </Trans>
            </P>
          </InfoCard>
        </Stack>
      </Stack>
    </Layout>
  )
}
