'use strict'

const nodemailer = require('nodemailer')
const ldap = require('ldapjs')
const fs = require('fs')
const exec = require('child_process').exec

require('dotenv').config()

const mailHost = process.env.MAIL_HOST
const mailUser = process.env.MAIL_USER
const mailPass = process.env.MAIL_PASS
const mailLdap = process.env.MAIL_LDAP
const mailUid = process.env.MAIL_UID
const mailTo = process.env.MAIL_TO

const encryptMessage = (uid, message, sendMail) => {
  fs.writeFile(uid + '.txt', message, function(err) {
    if (err) throw err
    // console.log('Message Saved!')
    exec(
      'openssl smime -encrypt -out /dev/stdout ' +
        '-in ' +
        uid +
        '.txt ' +
        uid +
        '.cer',
      { cwd: process.cwd() },
      function(error, stdout, stderr) {
        const attachment = stdout
        console.log(attachment)
        sendMail(attachment)
      },
    )
  })
}

function getCert(uid, callback) {
  var opts = {
    filter: '(uid=' + uid + ')',
    scope: 'sub',
    attributes: ['cn', 'userCertificate;binary'],
  }
  const ldapClient = ldap.createClient({
    url: mailLdap,
  })
  ldapClient.search('ou=People,ou=rcmp-grc,o=gc,c=ca', opts, function(
    err,
    res,
  ) {
    res.on('searchEntry', function(entry) {
      // console.log('entry: ' + JSON.stringify(entry.object))
      /* We can probably do this without any files by using /dev/stdin or something???? */
      fs.writeFile(
        uid + '.cer',
        '-----BEGIN CERTIFICATE-----\r\n' +
          entry.object['userCertificate;binary'].replace(/(.{64})/g, '$1\r\n') +
          '-----END CERTIFICATE-----',
        function(err) {
          if (err) throw err
          console.log('Certificate Saved!')
          callback()
        },
      )
    })
    res.on('searchReference', function(referral) {
      console.log('referral: ' + referral.uris.join())
    })
    res.on('error', function(err) {
      console.error('error: ' + err.message)
    })
    res.on('end', function(result) {
      console.log('end status: ' + result.status)
    })
  })

  console.log('DONE!!!!!!')
}

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(attachment) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: mailHost,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: mailUser, // generated ethereal user
      pass: mailPass, // generated ethereal password
    },
  })

  // send mail with defined transport object
  const message = {
    from: '"Fred Foo 👻" <foo@guqvkp.m.notification.alpha.cdssandbox.xyz>', // sender address
    to: mailTo, // list of receivers
    subject: 'Custom attachment',
    attachments: [
      {
        raw: attachment,
      },
    ],
  }
  let info = await transporter.sendMail(message)
  console.log(`Message sent to ${mailTo}: ${info.messageId}`)
}

// main().catch(console.error)

// getCert(mailUid, () => encryptMessage(mailUid, 'Hello there!', sendMail))

getCert(mailUid, () => {})

console.log('Doing other stuff...')

encrypt(mailUid, 'hi Norm!')
