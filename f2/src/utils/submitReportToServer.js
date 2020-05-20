var fs = require('fs')
const flatten = require('flat')
const fetch = require('isomorphic-fetch')
const FormData = require('form-data')
const { formDefaults } = require('../forms/defaultValues')

async function submitReportToServer(url = '', data = {}) {
  const flattenedData = flatten(data, { safe: true })
  console.log(flattenedData)

  var form_data = new FormData()
  Object.keys(flattenedData).forEach((key) => {
    form_data.append(key, JSON.stringify(flattenedData[key]))
  })
  if (data.evidence)
    data.evidence.files.forEach((f) => form_data.append(f.name, f, f.name))
  form_data.append(
    'bread.jpg',
    fs.createReadStream(
      '/Users/stephen/Git/report-a-cybercrime/utils/bread.jpg',
    ),
  )

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrer: 'no-referrer',
    body: form_data,
  })
  console.log(`${response.status} (${response.statusText})`)
}

const path = './TestData.json'

fs.access(path, fs.F_OK, (err) => {
  if (err) {
    console.error(err)
    console.info('Using data from JSON Object')
    let data = JSON.parse(JSON.stringify(formDefaults))
    data.contactInfo.fullName = 'Mallory'
    // data.contactInfo.extra = 'extra field!'
    submitReportToServer('https://report-dev.con.rcmp-grc.gc.ca/submit', data)
    return
  }
  console.info('Using data from JSON File')
  let rawdata = fs.readFileSync('Test.json');
  let data = JSON.parse(rawdata);
  data.contactInfo.fullName = 'MalDlory'
  // data.contactInfo.extra = 'extra field!'
  submitReportToServer('https://report-dev.con.rcmp-grc.gc.ca/submit', data)
}
)
