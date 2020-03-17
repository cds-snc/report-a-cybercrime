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

const encryptMessage = (uid, emailAddress, message, data, sendMail) => {
  const openssl = 'openssl smime -des3 -text -encrypt'
  const messageFileName = `message_${nanoid()}.txt`
  fs.writeFile(messageFileName, message, function(err) {
    if (err) throw err
    exec(
      `${openssl} -in ${messageFileName} ${certFileName(uid)}`,
      { cwd: process.cwd() },
      function(error, stdout, stderr) {
        if (error) throw error
        else if (stderr) console.warn(stderr)
        else {
          const attachment = stdout
          console.info('Encrypted Mail: Message encrypted')
          fs.unlink(messageFileName, () => {})
          sendMail(emailAddress, attachment, data.reportId, 'Report')
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
            else if (stderr) console.warn(stderr)
            else {
              const attachment = fs.readFileSync(encryptedFile)
              console.info('Encrypted File: File encrypted')
              if (file.isImageRacyClassified || file.isImageAdultClassified)
                sendMail(
                  emailAddress,
                  attachment,
                  data.reportId,
                  'WARNING: potential offensive image',
                )
              else
                sendMail(emailAddress, attachment, data.reportId, 'Attachment')
            }
          },
        )
      } else {
        console.warn(
          `WARNING: malware detected in ${file.path} (${data.reportId})`,
        )
      }
    })
  } catch (error) {
    console.warn(`ERROR in encryptedFile: ${error}`)
  }
}

async function sendMail(emailAddress, attachment, reportId, emailType) {
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
    subject: `NCFRS - ref ${reportId} : ${emailType}`,
    text: 'Plaintext version of the message',
    html: 'HTML version of the message',
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

const encryptAndSend = async (uidList, emailList, data, message) => {
  if (uidList && emailList) {
    uidList.forEach((uid, index) =>
      encryptMessage(uid, emailList[index], message, data, sendMail),
    )
    uidList.forEach((uid, index) =>
      encryptFile(uid, emailList[index], data, sendMail),
    )
  } else console.warn('Encrypted Mail: No certs to encrypt with!')
}

module.exports = { encryptAndSend }
