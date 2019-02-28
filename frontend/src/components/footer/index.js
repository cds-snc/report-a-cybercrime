import PropTypes from 'prop-types'
/** @jsx jsx **/
import { jsx, css } from '@emotion/core'
import { Container } from '../container'
import WordMark from '../wordmark'
import { Li } from '../list-item'
import { Ul } from '../unordered-list'
import { FooterLink } from '../link'
import { Trans } from '@lingui/macro'

export const Footer = props => {
  const { lang, bg } = props

  return (
    <Container
      bg={bg}
      display="flex"
      flexDirection="row"
      width={1}
      height={[50, null, 60]}
      alignItems="center"
      data-testid="background-color"
    >
      <Container color="white" flex="1 1 auto">
        <Ul listStyleType="none" mb={0}>
          <Li ml={3} display="inline-block">
            <FooterLink
              href={
                lang === 'en'
                  ? 'https://digital.canada.ca/legal/privacy/'
                  : 'https://numerique.canada.ca/transparence/confidentialite/'
              }
            >
              <Trans>Privacy</Trans>
            </FooterLink>
          </Li>
          <Li ml={3} display="inline-block">
            <FooterLink
              href={
                lang === 'en'
                  ? 'https://digital.canada.ca/legal/terms/'
                  : 'https://numerique.canada.ca/transparence/avis/'
              }
            >
              <Trans>Terms and Conditions</Trans>
            </FooterLink>
          </Li>
        </Ul>
      </Container>
      <Container mr={3} width={['4em', null, '6em']}>
        <WordMark
          width="100%"
          flag="#fff"
          text="#fff"
          css={css`
            display: block;
          `}
        />
      </Container>
    </Container>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}
