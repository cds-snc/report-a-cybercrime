import React from 'react'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { H1, H2 } from './components/header'
import { P, Lead } from './components/paragraph'
import { Layout } from './components/layout'
import { Icon, Stack } from '@chakra-ui/core'
import { Page } from './components/Page'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { ButtonLink, A } from './components/link'
import { Well } from './components/Messages'
import { Link } from './components/link'
import { BackButton } from './components/backbutton'

export const Covid19Page = () => {
  const { i18n } = useLingui()
  return (
    <Page>
      <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
        <Stack spacing={20}>
          <BackButton />
          <H1>
            <Trans id="covid19.title" />
          </H1>
          <Lead>
            <Trans id="covid19.text1">
              <b />
            </Trans>
          </Lead>
          <Stack spacing={4}>
            <H2>
              <Trans id="covid19.protect" />
            </H2>
            <Ul>
              <Li>
                <Trans id="covid19.protect.list1" />
              </Li>
              <Li>
                <Trans id="covid19.protect.list2" />
              </Li>
              <Li>
                <Trans id="covid19.protect.list3" />
              </Li>
              <Li>
                <Trans id="covid19.protect.list4" />
              </Li>
              <Li>
                <Trans id="covid19.protect.list5" />
              </Li>
            </Ul>
          </Stack>
          <Stack spacing={4} alignItems="flex-start">
            <P>
              <Trans id="covid19.report" />
            </P>
            <ButtonLink to="/startPage">
              <Trans id="landingPage.nextButton.reportNow" />
              <Icon
                focusable="false"
                ml={2}
                mr={-2}
                name="chevron-right"
                size="28px"
              />
            </ButtonLink>
          </Stack>
          <Stack spacing={4}>
            <H2>
              <Trans id="covid19.resources" />
            </H2>
            <Ul>
              <Li>
                <Trans id="covid19.resources.list1">
                  <A
                    href={
                      i18n.locale === 'en'
                        ? 'https://www.antifraudcentre-centreantifraude.ca/features-vedette/2020/covid-19-eng.htm'
                        : 'https://www.antifraudcentre-centreantifraude.ca/features-vedette/2020/covid-19-fra.htm'
                    }
                    isExternal
                  />
                </Trans>
              </Li>
              <Li>
                <Trans id="covid19.resources.list2">
                  <A
                    href={
                      i18n.locale === 'en'
                        ? 'https://cyber.gc.ca/en/guidance/cyber-hygiene-covid-19'
                        : 'https://cyber.gc.ca/fr/orientation/pratiques-exemplaires-en-cybersecurite-pour-la-covid-19'
                    }
                    isExternal
                  />
                </Trans>
              </Li>
            </Ul>
          </Stack>
        </Stack>
      </Layout>
    </Page>
  )
}

export const CovidWell = (props) => {
  return (
    <Layout mb={10} columns={{ base: 4 / 4, lg: 9 / 12, xl: 7 / 12 }}>
      <Well variantColor="yellow">
        <Link to="/covid-19" color="yellow.900">
          <Trans id="covid19.know" />
        </Link>
      </Well>
    </Layout>
  )
}
