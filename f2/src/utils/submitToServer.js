import fetch from 'isomorphic-fetch'

async function postData(url = '', data = {}) {
  var form_data = new FormData()
  form_data.append('json', JSON.stringify(data))

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
  return await response
}

export const submitToServer = async (data) => {
  console.info('Submitting Feedback:', data)
  await postData('/submitFeedback', data)
}
