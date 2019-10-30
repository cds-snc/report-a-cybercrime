const NotifyClient = require('notifications-node-client').NotifyClient

const key = process.env.NOTIFY_API_KEY
const baseUrl = process.env.NOTIFY_API_BASE_URL

const notifyEnvVars = [
  'NOTIFY_API_KEY',
  'NOTIFY_API_BASE_URL',
  'NOTIFY_CONFIRMATION_TEMPLATE_ID',
]

let notifySetup = true
notifyEnvVars.forEach(k => {
  if (!process.env[`${k}`]) {
    notifySetup = false
    console.warn(
      `WARNING: Notify environment variable ${k} is missing. Feedback will be disabled and emailing links will probably not work.`,
    )
  }
})

const notifyClient =
  process.env.NODE_ENV !== 'test' && key && baseUrl
    ? new NotifyClient(baseUrl, key)
    : false

const sendNotification = async (params = { email, templateId, options }) => {
  const { templateId, email, options } = params

  if (!templateId || !email) {
    console.warn(
      'WARNING: no Notify template ID or email was passed, mail not sent',
    )
    return false
  }
  console.log(` sending notification to: ${email}`)
  console.log({ options })

  try {
    const response = notifyClient.sendEmail(templateId, email, options)
    return response.body
  } catch (err) {
    console.log(err.message)
    return false
  }
}

const sendConfirmation = async email => {
  sendNotification({
    email: email,
    templateId: process.env.NOTIFY_CONFIRMATION_TEMPLATE_ID,
  })
}
module.exports = {
  notifySetup,
  sendConfirmation,
}
