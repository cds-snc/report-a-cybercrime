import PropTypes from 'prop-types'
/** @jsx jsx **/
import { jsx, css } from '@emotion/core'
import { Query } from 'react-apollo'
import { Container } from '../container'
import GoCSignature from '../gocsig'
import { LanguageSwitcher } from '../../LanguageSwitcher'
import { GET_LANGUAGE_QUERY } from '../../utils/queriesAndMutations'

export const TopBanner = props => {
  const { lang, bg } = props

  return (
    <Query query={GET_LANGUAGE_QUERY}>
      {({ data: { language } }) => (
        <header>
          <Container
            bg={bg}
            display="flex"
            flexDirection="row"
            width={1}
            height={[50, null, 60]}
            alignItems="center"
            data-testid="background-color"
          >
            <Container ml={3} width={[250, null, 300]}>
              <GoCSignature
                width="100%"
                lang={lang}
                flag="#fff"
                text="#fff"
                css={css`
                  display: block;
                `}
              />
            </Container>
            <Container
              flex="1 1 auto"
              mr={3}
              css={css`
                text-align: right;
              `}
            >
              {language === 'en' ? null : <LanguageSwitcher language="en" />}
              {language === 'fr' ? null : <LanguageSwitcher language="fr" />}
            </Container>
          </Container>
        </header>
      )}
    </Query>
  )
}

TopBanner.propTypes = {
  lang: PropTypes.string.isRequired,
  bg: PropTypes.string,
}

TopBanner.defaultProps = {
  bg: 'black',
}
