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
const isProductionSystem = process.env.NODE_ENV === 'production'

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
      console.log(`Encrypted Mail: Found LDAP entry for ${uid}`)
      let cert =
        '-----BEGIN CERTIFICATE-----\r\n' +
        entry.object['userCertificate;binary'].replace(/(.{64})/g, '$1\r\n')
      if (!cert.endsWith('\n')) cert += '\n'
      cert += '-----END CERTIFICATE-----'
      fs.writeFile(certFileName(uid), cert, function(err) {
        if (err) throw err
        else console.log(`Encrypted Mail: Certificate for ${uid} Saved!`)
      })
    })
    res.on('searchReference', function(referral) {
      console.log('Encrypted Mail: referral: ' + referral.uris.join())
    })
    res.on('error', function(err) {
      console.warn('Encrypted Mail: error: ' + err.message)
    })
    res.on('end', function(result) {
      if (result.status !== 0)
        console.log('Encrypted Mail: end status: ' + result.status)
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
    .filter(file => !isProductionSystem || file.malwareIsClean)
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

const encryptMessage = (uid, emailAddress, message, data, sendMail) => {
  const openssl = 'openssl smime -des3 -encrypt'
  const messageFile = `message_${nanoid()}.txt`
  const encryptedFile = messageFile + '.encrypted'

  const subjectSuffix = data.evidence.files.some(
    file => file.isImageRacyClassified || file.isImageAdultClassified,
  )
    ? ': WARNING: potential offensive image'
    : ''

  fs.writeFile(messageFile, message, function(err) {
    if (err) throw err
    exec(
      `${openssl} -in ${messageFile} -out ${encryptedFile} ${certFileName(
        uid,
      )}`,
      { cwd: process.cwd() },
      function(error, _stdout, stderr) {
        if (error) throw error
        else if (stderr) console.log(stderr)
        else {
          console.log('Encrypted Mail: Message encrypted')
          const attachment = isProductionSystem
            ? fs.readFileSync(encryptedFile)
            : fs.readFileSync(messageFile)
          fs.unlink(messageFile, () => {})
          fs.unlink(encryptedFile, () => {})
          sendMail(emailAddress, attachment, data.reportId, subjectSuffix)
        }
      },
    )
  })
}

async function sendMail(emailAddress, attachment, reportId, emailSuffix) {
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
  console.log(
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
      const emailAddress =
        !isProductionSystem && data.contactInfo.email
          ? data.contactInfo.email
          : emailList[index]
      prepareUnencryptedReportEmail(message, data, m =>
        encryptMessage(uid, emailAddress, m, data, sendMail),
      )
    })
  } else {
    console.warn('Encrypted Mail: No certs to encrypt with!')
    prepareUnencryptedReportEmail(message, data, m =>
      encryptMessage(undefined, undefined, m, data, sendMail),
    )
  }
}

module.exports = { getAllCerts, encryptAndSend }
