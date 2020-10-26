import { useEffect } from 'react'

const { getLogger } = require('./utils/winstonLoggerClient')
const logger = getLogger(__filename)

export const useLog = (sessionId, page) => {
  useEffect(() => {
    let startDate = new Date()
    return () => {
      const timeSinceLoad = (new Date().getTime() - startDate.getTime()) / 1000
      console.log('session id and time took ' + timeSinceLoad)
      logger.info({
        sessionId: sessionId,
        message: 'PageViewTime',
        page: page,
        viewTime: timeSinceLoad,
      })
    }
  }, [])
}
