import http from 'k6/http'
import { check, sleep } from 'k6'

const checkForReportCount = r => {
  try {
    return JSON.parse(r.body).data.stats.reportCount >= 0
  } catch (error) {
    return false
  }
}

export default function() {
  var url = 'https://report-a-cybercrime.cds-snc.ca/graphql'
  var payload = JSON.stringify({ query: '{ stats { reportCount } }' })
  var params = { headers: { 'Content-Type': 'application/json' } }
  var res = http.post(url, payload, params)

  check(res, {
    'status was 200': r => r.status == 200,
    'transaction time OK': r => r.timings.duration < 1000,
    'api call successful': r => checkForReportCount(r),
  })
  sleep(1)
}
