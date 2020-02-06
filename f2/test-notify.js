'use strict'

const nodemailer = require('nodemailer')
const ldap = require('ldapjs')
const fs = require('fs')
const exec = require('child_process').exec

require('dotenv').config()

const mailHost = process.env.MAIL_HOST
const mailUser = process.env.MAIL_USER
const mailPass = process.env.MAIL_PASS
const ldapUrl = process.env.LDAP_URL
const ldapUid = process.env.LDAP_UID
const mailTo = process.env.MAIL_TO
const mailFrom = process.env.MAIL_FROM
const mailCertFile = ldapUid + '.cer'

function getCert(uid, certFile) {
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
      console.log('Encrypted Mail: Found LDAP entry')
      const cert =
        '-----BEGIN CERTIFICATE-----\r\n' +
        entry.object['userCertificate;binary'].replace(/(.{64})/g, '$1\r\n') +
        '-----END CERTIFICATE-----'
      fs.writeFile(certFile, cert, function(err) {
        if (err) throw err
        else console.log('Encrypted Mail: Certificate Saved!')
      })
    })
    res.on('searchReference', function(referral) {
      console.log('Encrypted Mail: referral: ' + referral.uris.join())
    })
    res.on('error', function(err) {
      console.error('Encrypted Mail: error: ' + err.message)
    })
    res.on('end', function(result) {
      if (result.status != 0)
        console.log('Encrypted Mail: end status: ' + result.status)
      ldapClient.destroy()
    })
  })
}

const encryptMessage = (uid, message, sendMail) => {
  fs.writeFile(uid + '.txt', message, function(err) {
    if (err) throw err
    exec(
      'openssl smime -des3 -text -encrypt -out /dev/stdout ' +
        '-in ' +
        uid +
        '.txt ' +
        uid +
        '.cer',
      { cwd: process.cwd() },
      function(error, stdout, stderr) {
        if (error) throw error
        if (stderr) console.log(stderr)
        if (!error && !stderr) {
          const attachment = stdout
          console.log('Encrypted Mail: Message encrypted')
          console.log(attachment)

          sendMail(attachment)
        }
      },
    )
  })
}

async function sendMail(attachment) {
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
    to: mailTo,
    subject: 'Custom attachment',
    attachments: [
      {
        raw: attachment,
      },
    ],
  }
  // console.log(message)

  let info = await transporter.sendMail(message)
  console.log(`Encrypted Mail: Message sent to ${mailTo}: ${info.messageId}`)
}

// ----------------------------------------------------

const sendMail2 = () => {}

getCert(ldapUid, mailCertFile)

setTimeout(
  () => encryptMessage(ldapUid, 'Hello!\nHi from NodeJS!\n', sendMail),
  1000,
)

const davidAttachment = `MIME-Version: 1.0
Content-Disposition: attachment; filename="smime.p7m"
Content-Type: application/x-pkcs7-mime; smime-type=enveloped-data; name="smime.p7m"
Content-Transfer-Encoding: base64

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
ZeWp52b+0fpRkMTmMa3GGMQ4Pg==`

//sendMail(davidAttachment)
