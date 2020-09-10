// 'use strict'
const nodemailer = require('nodemailer')
const fs = require('fs')
const exec = require('child_process').exec
const nanoid = require('nanoid')
const { certFileName } = require('./ldap')

require('dotenv').config()

const mailHost = process.env.MAIL_HOST
const mailUser = process.env.MAIL_USER
const mailPass = process.env.MAIL_PASS
const mailFrom = process.env.MAIL_FROM

const ANALYST_GROUP_MAIL = process.env.ANALYST_GROUP_MAIL

let lang
let langEn = fs.readFileSync('src/locales/en.json')
let langFr = fs.readFileSync('src/locales/fr.json')
let langJsonEn = JSON.parse(langEn)
let langJsonFr = JSON.parse(langFr)

const prepareUnencryptedReportEmail = (message, data, callback) => {
  data.language === 'en' ? (lang = langJsonEn) : (lang = langJsonFr)
  let transporter = nodemailer.createTransport({
    streamTransport: true,
    newline: 'unix',
    buffer: true,
  })
  /*
  Disabling attachments for now, let's try sending a SAS link instead
  let attachments = data.evidence.files
    .filter((file) => file.malwareIsClean)
    .map((file) => ({
      filename: file.name,
      path: file.path,
    }))
  */

  transporter.sendMail(
    {
      from: mailFrom,
      to: data.contactInfo.email,
      subject: `NCFRS report ${data.reportId}`,
      text: `Please find NCFRS Report ${data.reportId} attached to this message`,
      attachments: [
        {
          filename: `${data.reportId}.htm`,
          content: message,
        },
      ],
    },
    (err, info) => {
      if (err) console.warn(`ERROR in prepareUnencryptedReportEmail: ${err}`)
      else {
        callback(info.message.toString())
      }
    },
  )
}

const getEmailWarning = (data) =>
  data.evidence.files.some(
    (file) => file.isImageRacyClassified || file.isImageAdultClassified,
  )
    ? lang['analystReport.potentialOffensiveImageInEmailSubject']
    : ''

const getSelfHarmWord = (data) =>
  data.selfHarmWords.length
    ? lang['analystReport.selfHarmStringInEmailSubject']
    : ''

const encryptMessage = (uidList, emailAddress, message, data, sendMail) => {
  const openssl = 'openssl smime -des3 -encrypt'
  const messageFile = `message_${nanoid()}.txt`
  const encryptedFile = messageFile + '.encrypted'
  const subjectSuffix = getEmailWarning(data) + getSelfHarmWord(data)
  let certList = uidList.map((uid) => certFileName(uid))

  fs.writeFile(messageFile, message, function (err) {
    if (err) throw err
    exec(
      `${openssl} -in ${messageFile} -out ${encryptedFile} -subject "NCFRS report ${
        data.reportId
      } ${subjectSuffix}", ${certList.join(' ')}`,
      { cwd: process.cwd() },
      function (error, _stdout, stderr) {
        if (error) throw error
        else if (stderr) console.warn(stderr)
        else {
          console.log('Encrypted Mail: Message encrypted')
          const attachment = fs.readFileSync(encryptedFile)
          fs.unlink(messageFile, () => {})
          fs.unlink(encryptedFile, () => {})
          sendMail(emailAddress, attachment, data.reportId, subjectSuffix)
        }
      },
    )
  })
}

async function sendMail(emailAddress, attachment, reportId, emailSuffix) {
  if (!emailAddress) return

  let transporter = nodemailer.createTransport({
    host: mailHost,
    port: 465,
    secure: true,
    auth: {
      user: mailUser,
      pass: mailPass,
    },
  })

  //data.language === 'en' ? (lang = langJsonEn) : (lang = langJsonFr)

  // With encrypted e-mail, just pass the raw output of openssl to nodemailer.
  // This is because the output of openssl's "smime" command is already a valid RFC822 message
  const message = {
    envelope: {
      from: mailFrom,
      to: emailAddress,
    },
    raw: attachment,
  }

  let info = await transporter.sendMail(message)
  console.info(
    `Encrypted Mail: Message sent to ${emailAddress}: ${info.messageId}`,
  )
}

const encryptAndSend = async (uidList, emailList, data, message) => {
  if (uidList.length > 0 && emailList.length > 0) {
    if (ANALYST_GROUP_MAIL) {
      prepareUnencryptedReportEmail(message, data, (m) =>
        encryptMessage(uidList, ANALYST_GROUP_MAIL, m, data, sendMail),
      )
    } else {
      console.error(
        'Environmental variable ANALYST_GROUP_MAIL is not defined, so encrypted email is not sent!',
      )
    }
  } else if (process.env.MAIL_LOCAL) {
    console.warn('Encrypted Mail: No certs to encrypt with!')
    const subjectSuffix = getEmailWarning(data) + getSelfHarmWord(data)
    prepareUnencryptedReportEmail(message, data, (m) =>
      sendMail(process.env.MAIL_LOCAL, m, data.reportId, subjectSuffix),
    )
  } else {
    console.warn('Encrypted Mail: No certs to encrypt with!')
    const subjectSuffix = getEmailWarning(data) + getSelfHarmWord(data)
    prepareUnencryptedReportEmail(message, data, (m) =>
      sendMail(data.contactInfo.email, m, data.reportId, subjectSuffix),
    )
  }
}

module.exports = { encryptAndSend }
