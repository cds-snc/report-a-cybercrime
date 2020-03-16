// 'use strict'

const nodemailer = require('nodemailer')
const ldap = require('ldapjs')
const fs = require('fs')
const exec = require('child_process').exec
const nanoid = require('nanoid')

require('dotenv').config()

const mailHost = process.env.MAIL_HOST
const mailUser = process.env.MAIL_USER
const mailPass = process.env.MAIL_PASS
const ldapUrl = process.env.LDAP_URL
const mailFrom = process.env.MAIL_FROM

const certFileName = uid => `${uid}.cer`

const getCert = uid => {
  console.info(`Fetching uid for ${uid}`)
  var opts = {
    filter: '(uid=' + uid + ')',
    scope: 'sub',
    attributes: ['cn', 'userCertificate;binary'],
  }
  const ldapClient = ldap.createClient({
    url: ldapUrl,
  })
  ldapClient.search('ou=People,ou=rcmp-grc,o=gc,c=ca', opts, function(
    err,
    res,
  ) {
    res.on('searchEntry', function(entry) {
      console.info(`Encrypted Mail: Found LDAP entry for ${uid}`)
      let cert =
        '-----BEGIN CERTIFICATE-----\r\n' +
        entry.object['userCertificate;binary'].replace(/(.{64})/g, '$1\r\n')
      if (!cert.endsWith('\n')) cert += '\n'
      cert += '-----END CERTIFICATE-----'
      fs.writeFile(certFileName(uid), cert, function(err) {
        if (err) throw err
        else console.info(`Encrypted Mail: Certificate for ${uid} Saved!`)
      })
    })
    res.on('searchReference', function(referral) {
      console.info('Encrypted Mail: referral: ' + referral.uris.join())
    })
    res.on('error', function(err) {
      console.warn('Encrypted Mail: error: ' + err.message)
    })
    res.on('end', function(result) {
      if (result.status !== 0)
        console.info('Encrypted Mail: end status: ' + result.status)
      ldapClient.destroy()
    })
  })
}

const prepareUnencryptedReportEmail = (message, data, callback) => {
  let transporter = nodemailer.createTransport({
    streamTransport: true,
    newline: 'unix',
    buffer: true,
  })

  let attachments = data.evidence.files
    .filter(file => file.malwareIsClean)
    .map(file => ({
      filename: file.name,
      path: file.path,
    }))

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
}

const getEmailWarning = data =>
  data.evidence.files.some(
    file => file.isImageRacyClassified || file.isImageAdultClassified,
  )
    ? ': WARNING: potential offensive image'
    : ''

const encryptMessage = (uid, emailAddress, message, data, sendMail) => {
  const openssl = 'openssl smime -des3 -encrypt'
  const messageFile = `message_${nanoid()}.txt`
  const encryptedFile = messageFile + '.encrypted'
  const subjectSuffix = getEmailWarning(data)

  fs.writeFile(messageFile, message, function(err) {
    if (err) throw err
    exec(
      `${openssl} -in ${messageFile} -out ${encryptedFile} ${certFileName(
        uid,
      )}`,
      { cwd: process.cwd() },
      function(error, _stdout, stderr) {
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

// ----------------------------------------------------

const getAllCerts = uidList => {
  if (uidList.length > 0) uidList.forEach(uid => getCert(uid))
  else console.warn('WARNING: Encrypted Mail: No certs to fetch!')
}

const encryptAndSend = async (uidList, emailList, data, message) => {
  if (uidList.length > 0 && emailList.length > 0) {
    uidList.forEach((uid, index) => {
      prepareUnencryptedReportEmail(message, data, m =>
        encryptMessage(uid, emailList[index], m, data, sendMail),
      )
    })
  } else {
    console.warn('Encrypted Mail: No certs to encrypt with!')
    const subjectSuffix = getEmailWarning(data)
    prepareUnencryptedReportEmail(message, data, m =>
      sendMail(data.contactInfo.email, m, data.reportId, subjectSuffix),
    )
  }
}

module.exports = { getAllCerts, encryptAndSend }
