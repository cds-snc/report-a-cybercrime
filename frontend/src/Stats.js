import React, { PureComponent } from 'react'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'
import { P } from './components/paragraph'
import { IDENTIFIER_FLAGGINGS_WITHIN } from './utils/queriesAndMutations'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

class Chart extends PureComponent {
  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={this.props.data}
            margin={{
              top: 0,
              right: 0,
              left: -25,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="date" />
            <YAxis dataKey="total" />
            <Area type="monotone" dataKey="total" stroke="#000" fill="#999" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

Chart.propTypes = { data: PropTypes.array }

export const Stats = () => (
  <Query
    query={IDENTIFIER_FLAGGINGS_WITHIN}
    variables={{ identifier: '555-555-5555' }}
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
      return <Chart data={stats.identifierFlaggingsWithin.summary} />
    }}
  </Query>
)
