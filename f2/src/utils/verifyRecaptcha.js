import fetch from 'isomorphic-fetch'

async function postData(token) {
  let url = 'https://www.google.com/recaptcha/api/siteverify'
  var form_data = new FormData()
  form_data.append('secret', '6LdoTPAUAAAAAIyDeMoNv8Ur7QnDzKeICh91a6Wp')
  form_data.append('response', token)

  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrer: 'no-referrer',
    body: form_data,
  })
  return response
}

export const verifyRecaptcha = async (token) => {
  console.info('Verifying Google Recaptcha:', token)
  await postData(token)
}
