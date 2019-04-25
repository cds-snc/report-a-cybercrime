import React from 'react'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'
import { P } from './components/paragraph'
import { FLAGGINGS_WITHIN } from './utils/queriesAndMutations'

export const Stats = ({
  identifier = '555-555-5555',
  startDate = '2019-04-01',
  endDate = '2019-04-20',
  children,
}) => (
  <Query
    query={FLAGGINGS_WITHIN}
    variables={{
      identifier,
      startDate,
      endDate,
    }}
    errorPolicy="all"
  >
    {({ loading, error, data }) => {
      if (loading) return ''
      if (error)
        return (
          <P color="crimson" fontWeight="bolder">
            Error connecting to database:
            <br />
            {error.message}
          </P>
        )

      let { stats } = data
      {
        return children(stats.flaggingsWithin)
      }
    }}
  </Query>
)

Stats.propTypes = {
  identifier: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
}
