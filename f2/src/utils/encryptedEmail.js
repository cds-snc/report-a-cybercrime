// 'use strict'
const nodemailer = require('nodemailer')
const fs = require('fs')
const exec = require('child_process').exec
const nanoid = require('nanoid')
const { certFileName } = require('./ldap')
const { getFileExtension } = require('./filenameUtils')
const { png2jpeg } = require('./imageConversion')

require('dotenv').config()

const mailHost = process.env.MAIL_HOST
const mailUser = process.env.MAIL_USER
const mailPass = process.env.MAIL_PASS
const mailFrom = process.env.MAIL_FROM

const prepareUnencryptedReportEmail = async (message, data, callback) => {
  let transporter = nodemailer.createTransport({
    streamTransport: true,
    newline: 'unix',
    buffer: true,
  })

  Promise.all(
    data.evidence.files
      .filter((file) => file.malwareIsClean)
      .map(async (file) => {
        let fileExtension = getFileExtension(file.name)
        if (fileExtension.endsWith('png')) {
          let jpgPath = file.path.substr(0, file.path.lastIndexOf('.')) + '.jpg'
          await png2jpeg(file.path, jpgPath)
          return {
            filename: file.name.substr(0, file.name.lastIndexOf('.')) + '.jpg',
            path: jpgPath,
          }
        } else {
          return {
            filename: file.name,
            path: file.path,
          }
        }
      }),
  ).then((attachments) => {
    transporter.sendMail(
      {
        from: mailFrom,
        to: data.contactInfo.email,
        subject: `NCFRS report ${data.reportId}`,
        text: message,
        html: message,
        attachments,
      },
      (err, info) => {
        if (err) console.warn(`ERROR in prepareUnencryptedReportEmail: ${err}`)
        else {
          callback(info.message.toString())
        }
      },
    )
  })
}

const getEmailWarning = (data) =>
  data.evidence.files.some(
    (file) => file.isImageRacyClassified || file.isImageAdultClassified,
  )
    ? ': WARNING: potential offensive image'
    : ''

const getSelfHarmWord = (data) =>
  data.selfHarmWords.length ? ': WARNING: self harm words detected' : ''

const encryptMessage = (uid, emailAddress, message, data, sendMail) => {
  const openssl = 'openssl smime -des3 -encrypt'
  const messageFile = `message_${nanoid()}.txt`
  const encryptedFile = messageFile + '.encrypted'
  const subjectSuffix = getEmailWarning(data) + getSelfHarmWord(data)

  fs.writeFile(messageFile, message, function (err) {
    if (err) throw err
    exec(
      `${openssl} -in ${messageFile} -out ${encryptedFile} ${certFileName(
        uid,
      )}`,
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

  const message = {
    from: mailFrom,
    to: emailAddress,
    subject: `NCFRS report ${reportId}${emailSuffix}`,
    text: `NCFRS report ${reportId}${emailSuffix}`,
    html: `NCFRS report ${reportId}${emailSuffix}`,
    attachments: [
      {
        raw: attachment,
      },
    ],
  }

  let info = await transporter.sendMail(message)
  console.info(
    `Encrypted Mail: Message sent to ${emailAddress}: ${info.messageId}`,
  )
}

const encryptAndSend = async (uidList, emailList, data, message) => {
  if (uidList.length > 0 && emailList.length > 0) {
    uidList.forEach((uid, index) => {
      prepareUnencryptedReportEmail(message, data, (m) =>
        encryptMessage(uid, emailList[index], m, data, sendMail),
      )
    })
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
