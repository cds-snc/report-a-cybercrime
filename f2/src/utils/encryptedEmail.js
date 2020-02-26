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

const encryptMessage = (uid, emailAddress, message, sendMail) => {
  const openssl = 'openssl smime -des3 -text -encrypt'
  const messageFileName = `message_${nanoid()}.txt`
  fs.writeFile(messageFileName, message, function(err) {
    if (err) throw err
    exec(
      `${openssl} -in ${messageFileName} ${certFileName(uid)}`,
      { cwd: process.cwd() },
      function(error, stdout, stderr) {
        if (error) throw error
        else if (stderr) console.log(stderr)
        else {
          const attachment = stdout
          console.log('Encrypted Mail: Message encrypted')
          fs.unlink(messageFileName, () => {})
          sendMail(emailAddress, attachment)
        }
      },
    )
  })
}

const encryptFile = (uid, emailAddress, data, sendMail) => {
  const openssl = 'openssl smime -des3 -encrypt'

  try {
    data.evidence.files.forEach(file => {
      if (file.malwareIsClean) {
        const filePath = file.path
        console.log('file is at: ' + filePath)
        //create file name for each file in the format of .mime
        const mimeFile = filePath + '.' + nanoid() + '.mime'
        const encryptedFile = mimeFile + '.encrypt'
        exec(
          //run makemime commend and openssl commend
          `makemime -o ${mimeFile} ${filePath} && ${openssl} -out ${encryptedFile} -in ${mimeFile} ${certFileName(
            uid,
          )}`,
          { cwd: process.cwd() },
          function(error, stdout, stderr) {
            if (error) throw error
            else if (stderr) console.log(stderr)
            else {
              const attachment = fs.readFileSync(encryptedFile)
              console.log('Encrypted File: File encrypted')
              sendMail(emailAddress, attachment)
            }
          },
        )
      }
    })
  } catch (error) {
    console.warn(`ERROR in encryptedFile: ${error}`)
  }
}

async function sendMail(emailAddress, attachment) {
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
    subject: 'Custom attachment',
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
  if (uidList) uidList.forEach(uid => getCert(uid))
  else console.warn('Encrypted Mail: No certs to fetch!')
}

const encryptAndSend = async (uidList, emailList, data, message) => {
  if (uidList && emailList) {
    uidList.forEach((uid, index) =>
      encryptMessage(uid, emailList[index], message, sendMail),
    )
    uidList.forEach((uid, index) =>
      encryptFile(uid, emailList[index], data, sendMail),
    )
  } else console.warn('Encrypted Mail: No certs to encrypt with!')
}

module.exports = { getAllCerts, encryptAndSend }
