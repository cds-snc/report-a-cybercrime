require('dotenv').config()

const submissionsPerDay = process.env.SUBMISSIONS_PER_DAY
const secondsBetweenRequests = process.env.SECONDS_BETWEEN_REQUESTS

if (!submissionsPerDay || !secondsBetweenRequests)
  console.error('ERROR: Availability not configured')
else console.info('Availability configured')

// availableData is { numberOfSubmissions, numberOfRequests, lastRequested }
const isAvailable = (availableData) => {
  try {
    const currentTime = new date()
    //convert current date and lastRequested date with format of 00/00/0000
    const currentDate =
      (currentTime.getDate() + 1 > 9
        ? currentTime.getDate() + 1
        : '0' + currentTime.getDate() + 1) +
      '/' +
      (currentTime.getMonth() > 8
        ? currentTime.getMonth() + 1
        : '0' + (currentTime.getMonth() + 1)) +
      '/' +
      currentTime.getFullYear()
    console.log('current date is: ' + currentDate)

    const lastRequestedDate =
      (lastRequested.getDate() > 9
        ? lastRequested.getDate()
        : '0' + lastRequested.getDate()) +
      '/' +
      (lastRequested.getMonth() > 8
        ? lastRequested.getMonth() + 1
        : '0' + (lastRequested.getMonth() + 1)) +
      '/' +
      lastRequested.getFullYear()
    console.log('last requested date is: ' + lastRequestedDate)

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
