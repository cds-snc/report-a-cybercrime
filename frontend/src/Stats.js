import React, { PureComponent } from 'react'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'
import { i18nMark, Trans } from '@lingui/react'
import { P } from './components/paragraph'
import { H3 } from './components/header'
import { IDENTIFIER_FLAGGINGS_WITHIN } from './utils/queriesAndMutations'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
import theme from './theme'
import { ThemeContext } from '@emotion/core'

class Chart extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <H3 mt={6} textAlign="center">
          <Trans>Reports similar to yours</Trans>
        </H3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={this.props.data}
              margin={{
                top: 0,
                right: 0,
                left: -20,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis fontFamily={theme.fontSans} dataKey="date" />
              <YAxis
                dataKey="total"
                fontFamily={theme.fontSans}
                label={{
                  value: i18nMark('Reports per day'),
                  fontSize: '17px',
                  angle: -90,
                  fontFamily: theme.fontSans,
                }}
              />
              <Area type="monotone" dataKey="total" stroke="#000" fill="#999" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </React.Fragment>
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
