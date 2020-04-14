require('dotenv').config()

const submissionsPerDay = process.env.SUBMISSIONS_PER_DAY
const secondsBetweenRequests = process.env.SECONDS_BETWEEN_REQUESTS

if (!submissionsPerDay || !secondsBetweenRequests)
  console.error('ERROR: Availability not configured')
else console.info('Availability configured')

// availableData is { numberOfSubmissions, numberOfRequests, lastRequested }
const isAvailable = (availableData) => {
  try {
    const currentTime = new Date()
    if (!submissionsPerDay || !secondsBetweenRequests) return false
    if (availableData.numberOfSubmissions >= submissionsPerDay) return false
    if (
      !availableData.lastRequested ||
      currentTime - availableData.lastRequested > secondsBetweenRequests * 1000
    )
      return true
  } catch (error) {
    console.error(`ERROR in isAvailable: ${error}`)
  }
  return false
}

module.exports = { isAvailable }
