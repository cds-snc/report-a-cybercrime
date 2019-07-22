import PropTypes from 'prop-types'
/** @jsx jsx **/
import { jsx, css } from '@emotion/core'
import { Query } from 'react-apollo'
import { Container } from '../container'
import { LanguageSwitcher } from '../../LanguageSwitcher'
import { GET_LANGUAGE_QUERY } from '../../utils/queriesAndMutations'
import rcmpbrandingeng from '../../images/rcmpbrandingeng.svg'
import rcmpbrandingfre from '../../images/rcmpbrandingfre.svg'

export const TopBanner = props => {
  const { bg } = props

  return (
    <Query query={GET_LANGUAGE_QUERY}>
      {({ data: { language } }) => (
        <Container
          bg={bg}
          display="flex"
          flexDirection="row"
          width={1}
          height={[60, null, 60]}
          alignItems="center"
          data-testid="background-color"
        >
          <Container ml={3} width={[250, null, 300]}>
            <img
              src={language === 'en' ? rcmpbrandingeng : rcmpbrandingfre}
              width="300px"
              alt={
                language === 'en'
                  ? 'Royal Canadian Mounted Police'
                  : 'Gendarmerie royale du Canada'
              }
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
