const fs = require('fs')

const NotifyClient = require('notifications-node-client').NotifyClient

const key = process.env.NOTIFY_API_KEY
const baseUrl = process.env.NOTIFY_API_BASE_URL

let langJson = fs.readFileSync('src/locales/en.json')
let lang = JSON.parse(langJson)

const notifyEnvVars = [
  'NOTIFY_API_KEY',
  'NOTIFY_API_BASE_URL',
  'NOTIFY_ENGLISH_CONFIRMATION_TEMPLATE_ID',
  'NOTIFY_FRENCH_CONFIRMATION_TEMPLATE_ID',
]

let notifyIsSetup = true
notifyEnvVars.forEach((k) => {
  if (!process.env[`${k}`]) {
    notifyIsSetup = false
    console.warn(
      `ERROR: Notify environment variable ${k} is missing. Emailing links will probably not work.`,
    )
  }
})

const notifyClient =
  process.env.NODE_ENV !== 'test' && key && baseUrl
    ? new NotifyClient(baseUrl, key)
    : false

if (notifyClient) console.info('Notify client created')
else console.warn('ERROR: Notify client not created')

const sendConfirmation = async (email, reportId, language) => {
  let templateId
  if (language === 'fr')
    templateId = process.env.NOTIFY_FRENCH_CONFIRMATION_TEMPLATE_ID
  else templateId = process.env.NOTIFY_ENGLISH_CONFIRMATION_TEMPLATE_ID
  if (!email || !templateId) {
    console.warn('ERROR: could not send confirmation email')
    return false
  }
  try {
    const response = notifyClient.sendEmail(templateId, email, {
      personalisation: { reportId },
    })
    console.info('Notify: confirmation email (probably) sent!')
    return response.body
  } catch (err) {
    console.warn(`ERROR: Notify confirmation email error: ${err.message}`)
    return false
  }
}

const submitFeedback = async (data) => {
  const templateId = process.env.NOTIFY_FEEDBACK_TEMPLATE_ID
  const email = process.env.FEEDBACK_EMAIL
  if (!email || !templateId) {
    console.warn(
      `WARNING: no Notify report template ID or email was passed for feedback ${data}`,
    )
    return false
  }
  try {
    let feedbacks = JSON.parse(data)
    const response = notifyClient.sendEmail(templateId, email, {
      personalisation: { 
        difficultyLevel: lang[feedbacks.wasServiceHard], 
        useAgain: lang[feedbacks.wouldYouUseAgain], 
        comments: feedbacks.howCanWeDoBetter}
    })
    console.info('Notify: feedback email (probably) sent!')
    return response.body
  } catch (err) {
    console.warn(`Notify feedback email error: ${err.message}`)
    return false
  }
}

module.exports = {
  notifyIsSetup,
  sendConfirmation,
  submitFeedback,
}
