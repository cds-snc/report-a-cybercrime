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

    let question1Str = 'Was service hard?'
    let answer1Str = lang[feedbacks.wasServiceHard] == undefined? '' : lang[feedbacks.wasServiceHard]
    let question2Str = 'How can we do better?'
    let answer2Str = feedbacks.howCanWeDoBetter
    let question3Str = ''
    let answer3Str = ''

    if (data.includes('midFeedback')){
      question1Str = 'Page:'
      answer1Str = feedbacks.page
      question2Str = 'What kind of problem is happening?'
      answer2Str = ''
      for(feedback of feedbacks.midFeedback) {
        answer2Str += lang[feedback]
        answer2Str += '\n'
      }
      question3Str = 'Problem discription:'
      answer3Str = feedbacks.problemDescription
    }

    const response = notifyClient.sendEmail(templateId, email, {
      personalisation: { 
        question1: question1Str,
        answer1: answer1Str,
        question2: question2Str,        
        answer2: answer2Str,
        question3: question3Str,
        answer3: answer3Str}
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
