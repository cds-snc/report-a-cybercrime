import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { I18n } from '@lingui/react'
import { t, Trans } from '@lingui/macro'
import { H3 } from './components/header'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
import theme from './theme'

export class Chart extends PureComponent {
  render() {
    return (
      <I18n>
        {({ i18n }) => (
          <React.Fragment>
            <H3 mt={6} textAlign="center">
              <Trans>Reports similar to yours</Trans>
            </H3>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer
                width={this.props.width}
                height={this.props.height}
              >
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
                      value: i18n._(t`Reports per day`),
                      fontSize: '17px',
                      angle: -90,
                      fontFamily: theme.fontSans,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="total"
                    stroke="#000"
                    fill="#999"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </React.Fragment>
        )}
      </I18n>
    )
  }
}

Chart.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  data: PropTypes.array,
}
