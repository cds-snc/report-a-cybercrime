import { useEffect } from 'react'
import { useStateValue } from './utils/state'

const { getLogger } = require('./utils/winstonLoggerClient')
const logger = getLogger(__filename)

export const useLog = (page) => {
  const [state] = useStateValue()
  useEffect(() => {
    let startDate = new Date()
    return () => {
      const timeSinceLoad = (new Date().getTime() - startDate.getTime()) / 1000
      logger.info({
        sessionId: state.sessionId,
        message: 'PageViewTime',
        page: page,
        viewTime: timeSinceLoad,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
