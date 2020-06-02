const fetch = require('isomorphic-unfetch')

let url = 'https://www.google.com/recaptcha/api/siteverify'
let secret = process.env.REACT_APP_RECAPTCHA_SECRET_KEY

const verifyRecaptcha = (token, res) => {
  console.info('Verifying Google Recaptcha:', token)
  var form_data = `secret=${secret}&response=${token}`
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrer: 'no-referrer',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: form_data,
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        console.error(response)
        throw Error(response.statusText)
      }
    })
    .then((score) => {
      console.log(`Score from google reCaptcha ${JSON.stringify(score)}`)
      res.send(score)
    })
    .catch((error) => {
      console.error(error)
      res.statusCode = 500
      res.statusMessage = 'Error validating google reCaptcha'
      res.send(JSON.stringify(error))
    })
}

module.exports = { verifyRecaptcha }
