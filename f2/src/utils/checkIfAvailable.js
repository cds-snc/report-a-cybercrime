require('dotenv').config()
const logger = require('./src/utils/winstonLogger')

const submissionsPerDay = process.env.SUBMISSIONS_PER_DAY
const secondsBetweenRequests = process.env.SECONDS_BETWEEN_REQUESTS
const checkReferer = process.env.CHECK_REFERER

let availableData

availableData = {
  numberOfSubmissions: 0,
  numberOfRequests: 0,
  lastRequested: undefined,
}
const allowedReferrers = [
  'antifraudcentre-centreantifraude.ca',
  'centreantifraude-antifraudcentre.ca',
  'antifraudcentre.ca',
  'centreantifraude.ca',
]

if (!submissionsPerDay || !secondsBetweenRequests) {
  logger.error({message:
    `SUBMISSIONS_PER_DAY or SECONDS_BETWEEN_REQUESTS not configured.
     The Server will constantly report unavailable as a result.`,
     SUBMISSIONS_PER_DAY: `${submissionsPerDay}`,
     SECONDS_BETWEEN_REQUESTS: `${secondsBetweenRequests}`})
}

const isAvailable = (availableData) => {
  try {
    const currentTime = new Date()
    const lastRequested = availableData.lastRequested

    if (!submissionsPerDay || !secondsBetweenRequests) return false
    if (availableData.numberOfSubmissions >= submissionsPerDay) return false

    if (!lastRequested) return true
    else {

      const timeSinceLastRequest = currentTime - lastRequested

      if (currentTime.setHours(0,0,0,0) !== lastRequested.setHours(0,0,0,0)) {
        availableData.numberOfSubmissions = 0
        return true
      }
      if ( timeSinceLastRequest > (secondsBetweenRequests * 1000) ) return true
    }
    
  } catch (error) {
    logger.error({message:`ERROR in isAvailable: ${error}`})
  }
  return false
}

const requestAccess = (referer) => {
  try {

    var validReferer = false

    if (checkReferer) {
      validReferer = referer ? allowedReferrers.includes(new URL(referer).host.toLowerCase()) : referer
    } else {
      validReferer = true
    }
  
    var maxSubmissions = availableData.numberOfSubmissions >= submissionsPerDay
  
    var availabilityCheck = {
      "SUBMISSIONS_PER_DAY": submissionsPerDay,
      "NUMBER_OF_SUBMISSIONS": availableData.numberOfSubmissions,
      "MAX_SUBMISSIONS": maxSubmissions,
      "CHECK_REFERER": checkReferer,
      "REFERER": referer,
      "VALID_REFERER": validReferer
    }
  
    logger.info({
      message: 'Availability Check',
      availabilityCheck: availabilityCheck
    })
  
    if (maxSubmissions || !validReferer) {
      return false
    } else {
      availableData.numberOfRequests += 1
      availableData.lastRequested = new Date()
      logger.info({
        message: 'New Request',
        availableData: availableData,
      })
      return true
    }
  }
  catch(error) {
    logger.error({message:`ERROR in requestAccess: ${error}`})
    return false
  }

}

module.exports = { isAvailable, requestAccess }
