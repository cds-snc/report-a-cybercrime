const NotifyClient = require('notifications-node-client').NotifyClient

const key = process.env.NOTIFY_API_KEY
const baseUrl = process.env.NOTIFY_API_BASE_URL

const notifyEnvVars = [
  'NOTIFY_API_KEY',
  'NOTIFY_API_BASE_URL',
  'NOTIFY_CONFIRMATION_TEMPLATE_ID',
]

let notifyIsSetup = true
notifyEnvVars.forEach(k => {
  if (!process.env[`${k}`]) {
    notifyIsSetup = false
    console.warn(
      `WARNING: Notify environment variable ${k} is missing. Emailing links will probably not work.`,
    )
  }
})

const notifyClient =
  process.env.NODE_ENV !== 'test' && key && baseUrl
    ? new NotifyClient(baseUrl, key)
    : false

if (notifyClient) console.log('Notify client created')
else console.warn('Notify client NOT created')

const sendConfirmation = async (email, reportId) => {
  const templateId = process.env.NOTIFY_CONFIRMATION_TEMPLATE_ID
  if (!email || !templateId) {
    console.warn(
      'WARNING: no Notify confirmation template ID or email was passed, mail not sent',
    )
    return false
  }
  try {
    const response = notifyClient.sendEmail(templateId, email, {
      personalisation: { reportId },
    })
    console.log('Notify: confirmation email (probably) sent!')
    return response.body
  } catch (err) {
    console.error(`Notify confirmation email Error: ${err.message}`)
    return false
  }
}

const sendUnencryptedReport = async (email, report) => {
  const templateId = process.env.NOTIFY_REPORT_TEMPLATE_ID
  if (!email || !templateId) {
    console.warn(
      'WARNING: no Notify report template ID or email was passed, mail not sent',
    )
    return false
  }
  try {
    const response = notifyClient.sendEmail(templateId, email, {
      personalisation: { report },
    })
    console.log('Notify: report email (probablty) sent!')
    return response.body
  } catch (err) {
    console.error(`Notify report email error: ${err.message}`)
    return false
  }
}

module.exports = {
  notifyIsSetup,
  sendConfirmation,
  sendUnencryptedReport,
}
