const flatten = require('flat')
const fetch = require('isomorphic-fetch')
const FormData = require('form-data')

async function submitReportToServer(url = '', data = {}) {
  // Building a multi-part form for file upload!
  // add the files to the formdata object after.
  const flattenedData = flatten(data, { safe: true })
  var form_data = new FormData()
  Object.keys(flattenedData).forEach((key) => {
    form_data.append(key, JSON.stringify(flattenedData[key]))
  })
  if (data.evidence)
    data.evidence.files.forEach((f) => form_data.append(f.name, f, f.name))

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

data = {
  language: 'en',
  anonymous: { anonymous: 'yes' },
  evidence: { files: [], fileDescriptions: [] },
  contactInfo: { email: '' },
}
submitReportToServer('http://localhost:3000/submit', data)
