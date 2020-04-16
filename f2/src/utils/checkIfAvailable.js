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
    //convert current date and lastRequested date with format of 00/00/0000
    const currentDate =
      (currentTime.getDate() > 9
        ? currentTime.getDate()
        : '0' + currentTime.getDate()) +
      '/' +
      (currentTime.getMonth() > 8
        ? currentTime.getMonth() + 1
        : '0' + (currentTime.getMonth() + 1)) +
      '/' +
      currentTime.getFullYear()

    const lastRequestedDate =
      (availableData.lastRequested.getDate() > 9
        ? availableData.lastRequested.getDate()
        : '0' + availableData.lastRequested.getDate()) +
      '/' +
      (availableData.lastRequested.getMonth() > 8
        ? availableData.lastRequested.getMonth() + 1
        : '0' + (availableData.lastRequested.getMonth() + 1)) +
      '/' +
      availableData.lastRequested.getFullYear()

    if (currentDate != lastRequestedDate) {
      availableData.numberOfSubmissions = 0
      return true
    }
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
