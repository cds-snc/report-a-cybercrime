const ldap = require('ldapjs')
const fs = require('fs')

require('dotenv').config()
const ldapUrl = process.env.LDAP_URL

const ldapQuery = (uid, emailAddresses, uidList) => {
  var searchOptions = {
    filter: '(uid=' + uid + ')',
    scope: 'sub',
    attributes: ['mail', 'userCertificate;binary'],
  }
  const ldapClient = ldap.createClient({
    url: ldapUrl,
  })
  ldapClient.search('ou=People,ou=rcmp-grc,o=gc,c=ca', searchOptions, function (
    err,
    res,
  ) {
    res.on('searchEntry', function (entry) {
      const emailAddress = entry.object['mail']
      emailAddresses.push(emailAddress)
      uidList.push(uid)

      let cert =
        '-----BEGIN CERTIFICATE-----\r\n' +
        entry.object['userCertificate;binary'].replace(/(.{64})/g, '$1\r\n')
      if (!cert.endsWith('\n')) cert += '\n'
      cert += '-----END CERTIFICATE-----'
      fs.writeFile(certFileName(uid), cert, function (err) {
        if (err) throw err
        else
          console.info(
            `ldapQuery: Certificate for ${emailAddress} (${uid}) found`,
          )
      })

      res.on('searchReference', function (referral) {
        console.info('Encrypted Mail: referral: ' + referral.uris.join())
      })
      res.on('error', function (err) {
        console.warn('Encrypted Mail: error: ' + err.message)
      })
      res.on('end', function (result) {
        if (result.status !== 0)
          console.info('Encrypted Mail: end status: ' + result.status)
        ldapClient.destroy()
      })
    })
  })
}

function getCertsAndEmail(uids, emailAddresses, uidListFinal) {
  if (uids)
    uids.forEach((uid) => {
      ldapQuery(uid, emailAddresses, uidListFinal)
    })
  else console.warn('ERROR: no HERMIS ids')
}

const certFileName = (uid) => `${uid}.cer`

module.exports = { getCertsAndEmail, certFileName }
