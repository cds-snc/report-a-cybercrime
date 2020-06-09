require('dotenv').config()
const logger = require('./winstonLogger')
const { getReportCount } = require('./saveRecord')

const submissionsPerDay = process.env.SUBMISSIONS_PER_DAY
const secondsBetweenRequests = process.env.SECONDS_BETWEEN_REQUESTS
const checkReferer = process.env.CHECK_REFERER

const allowedReferrers = [
  'antifraudcentre-centreantifraude.ca',
  'centreantifraude-antifraudcentre.ca',
  'antifraudcentre.ca',
  'centreantifraude.ca',
]

let availableData = {
  numberOfSubmissions: 0,
  numberOfRequests: 0,
  lastRequested: undefined,
}

if (!submissionsPerDay || !secondsBetweenRequests) {
  logger.error({message:
    `SUBMISSIONS_PER_DAY or SECONDS_BETWEEN_REQUESTS not configured.
     The Server will constantly report unavailable as a result.`,
     SUBMISSIONS_PER_DAY: `${submissionsPerDay}`,
     SECONDS_BETWEEN_REQUESTS: `${secondsBetweenRequests}`})
}

getReportCount(availableData)

const isAvailable = () => {
  try {

    /*
      If submissions per day or seconds between requests have not been set,
      or we have reach the maximum number of submissions, the app is not available.
    */
    if (!submissionsPerDay || !secondsBetweenRequests) return false
    if (availableData.numberOfSubmissions >= submissionsPerDay) return false

    //If we do not have a record of the last request, the app is available.
    if (!availableData.lastRequested) return true
    else {
      
      const currentTime = new Date()
      const lastRequested = new Date(availableData.lastRequested.getTime())
      const timeSinceLastRequest = currentTime - lastRequested

      //If the last request was not received today the app is available.
      if (currentTime.setHours(0,0,0,0) !== lastRequested.setHours(0,0,0,0)) {
        availableData.numberOfSubmissions = 0
        return true
      }

      //If enough time has elepsed since the last request, the app is available.
      if ( timeSinceLastRequest > (secondsBetweenRequests * 1000) ) return true
    }
    
  } catch (error) {
    logger.error({message:`ERROR in isAvailable: ${error}`})
  }
  return false
}

const requestAccess = (referer) => {
  try {

    getReportCount(availableData)

    var validReferer = false

    //Only check referer if the environment variable is set
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
  
    /*
      If referer is not on the approved list or we have reached maximum number of submissions, the
      app is not available.
    */
    if (maxSubmissions || !validReferer) {
      return false
    } else {
      availableData.numberOfRequests += 1
      availableData.lastRequested = new Date()
      logger.info({
        message:'Request Access Complete',
        availableData: availableData
      })
      return true
    }
  }
  catch(error) {
    logger.error({message:`ERROR in requestAccess: ${error}`})
    return false
  }

}

const incrementSubmissions = () => {
  availableData.numberOfSubmissions++
}

const getAvailableData = () => {
  return availableData
}

module.exports = { isAvailable, requestAccess, incrementSubmissions, getAvailableData }
