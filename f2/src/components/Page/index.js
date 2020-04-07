/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { MidFeedbackForm } from '../../forms/MidFeedbackForm'
import { TrackPageViews } from '../../TrackPageViews'
import { Layout } from '../layout'
import { submitToServer } from '../../utils/submitToServer'
import { Well } from '../Messages'
import { P } from '../paragraph'
import { Text } from '../text'
import { Link } from '../link'
import { Icon } from '@chakra-ui/core'

export const Page = (props) => (
  <React.Fragment>
    <TrackPageViews />
    <Layout mb={10} columns={{ base: 4 / 4, lg: 9 / 12, xl: 7 / 12 }}>
      <Well as="details" listStyle="none" variantColor="yellow">
        <Text fontWeight="bold" as="summary">
          COVID-19 cybercrime and fraud
        </Text>
        <P mt={4}>
          If you have been the victim of fraud or cybercrime, including
          COVID&#8209;19 scams and cyber threats, contact your local police and
          report online through this tool.
        </P>
        <Link fontWeight="bold" color="yellow.900" to="/covid-19">
          What you need to know
          <Icon name="chevron-right" />
        </Link>
      </Well>
    </Layout>

    {props.children}
    <Layout mt={10} columns={{ base: 4 / 4, lg: 9 / 12, xl: 7 / 12 }}>
      <MidFeedbackForm
        onSubmit={(data) => {
          submitToServer(data)
        }}
      />
    </Layout>
  </React.Fragment>
)

Page.propTypes = {
  children: PropTypes.node,
}
