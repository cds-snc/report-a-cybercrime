'use strict'

const nodemailer = require('nodemailer')
require('dotenv').config()

const mailHost = process.env.MAIL_HOST
const mailUser = process.env.MAIL_USER
const mailPass = process.env.MAIL_PASS
const mailTo = process.env.MAIL_TO

// async..await is not allowed in global scope, must use a wrapper
async function main() {
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
        raw: `Content-Type: text/plain
Content-Disposition: attachment

Attached text file`,
      },
    ],
  }

  //   const message = {
  //     from: '"Fred Foo 👻" <foo@guqvkp.m.notification.alpha.cdssandbox.xyz>', // sender address
  //     to: mailTo, // list of receivers
  //     subject: 'node notify test', // Subject line
  //     attachments: [
  //       {
  //         raw: `Content-Type: text/plain;
  //   Content-Disposition: attachment

  //   Attached text file
  // `,
  //       },
  //     ],
  //   }

  let info = await transporter.sendMail(message)

  console.log(`Message sent to ${mailTo}: ${info.messageId}`)
}

main().catch(console.error)
