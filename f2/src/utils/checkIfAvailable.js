require('dotenv').config()

const submissionsPerDay = process.env.SUBMISSIONS_PER_DAY
const secondsBetweenRequests = process.env.SECONDS_BETWEEN_REQUESTS

if (!submissionsPerDay || !secondsBetweenRequests) {
  console.error('ERROR: SUBMISSIONS_PER_DAY or SECONDS_BETWEEN_REQUESTS not configured.  The Server will constantly report unavailable as a result.')
}
// availableData is { numberOfSubmissions, numberOfRequests, lastRequested }
const isAvailable = (availableData) => {
  try {
    const currentTime = new Date()
    const lastRequested = availableData.lastRequested

    if (!lastRequested) return true
    else if (
      currentTime.getDate() !== lastRequested.getDate() ||
      currentTime.getMonth() !== lastRequested.getMonth()
    ) {
      availableData.numberOfSubmissions = 0
      return true
    }
    if (!submissionsPerDay || !secondsBetweenRequests) return false
    if (availableData.numberOfSubmissions >= submissionsPerDay) return false
    if (currentTime - availableData.lastRequested > secondsBetweenRequests * 1000) return true
    
  } catch (error) {
    console.error(`ERROR in isAvailable: ${error}`)
  }
  return false
}

module.exports = { isAvailable }
