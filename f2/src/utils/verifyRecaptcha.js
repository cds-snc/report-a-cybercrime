const fetch = require('isomorphic-fetch')

let url = 'https://www.google.com/recaptcha/api/siteverify'
let secret = '6LdoTPAUAAAAAIyDeMoNv8Ur7QnDzKeICh91a6Wp'

async function postData(token) {
  var form_data = `secret=${secret}&response=${token}`

  // Default options are marked with *
  let response = await fetch(url, {
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
  let result = await response.json()
  return result
}

const verifyRecaptcha = async (token) => {
  console.info('Verifying Google Recaptcha:', token)
  response = await postData(token)
  return response
}

module.exports = { verifyRecaptcha }
