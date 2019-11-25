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
import { ApolloConsumer } from 'react-apollo'
import { Text } from './components/text'
import { Tag, Stack } from '@chakra-ui/core'

export const NextSteps = () => {
  const { i18n } = useLingui()
  return (
    <Layout>
      <ApolloConsumer>
        {client =>
          client.writeData({
            data: {
              doneForms: false,
              scamInfo: JSON.stringify({}),
              lostMoney: JSON.stringify({}),
              suspectInfo: JSON.stringify({}),
              files: [],
              contactInfo: JSON.stringify({}),
              timeFrame: JSON.stringify({}),
              whatHappened: JSON.stringify({}),
              scammerDetails: JSON.stringify({}),
              impact: JSON.stringify({}),
              tellUsMore: JSON.stringify({}),
            },
          })
        }
      </ApolloConsumer>
      <TrackPageViews />
      <Stack spacing={10}>
        <H1>
          <Trans id="nextStepsPage.title" />
        </H1>
        <P>
          <Trans id="nextStepsPage.summary">
            <Text as="span" fontWeight="bold" />
          </Trans>
        </P>

        <InfoCard>
          <Stack spacing={4} shouldWrapChildren>
            <H2>
              <Trans id="nextStepsPage.helpResource" />
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
                  <Trans id="nextStepsPage.helpResource1" />
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
                  <Trans id="nextStepsPage.helpResource2" />
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
                  <Trans id="nextStepsPage.helpResource3" />
                </A>
              </Li>
            </Ul>
            <H2>
              <Trans id="nextStepsPage.nextStepSummary" />
            </H2>
            <P>
              <Trans id="nextStepsPage.nextStepDetail" />
            </P>
          </Stack>
        </InfoCard>
        <Stack spacing={4}>
          <H2>
            <Trans id="nextStepsPage.otherReportOption" />
          </H2>
          <Ul>
            <Li>
              <Trans id="nextStepsPage.otherReportOption1" />
            </Li>
            <Li>
              <Trans id="nextStepsPage.otherReportOption2" />
            </Li>
            <Li>
              <Trans id="nextStepsPage.otherReportOption3">
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
        </Stack>
      </Stack>
    </Layout>
  )
}
