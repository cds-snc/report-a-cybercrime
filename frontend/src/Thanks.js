/** @jsx jsx */
import { Stats } from './Stats'
import { TrackPageViews } from './TrackPageViews'
import { jsx } from '@emotion/core'
import { Container } from './components/container'

export const Thanks = () => (
  <Container mx={'auto'} width={[1, 1, 1]}>
    <Stats />
    <TrackPageViews />
  </Container>
)
