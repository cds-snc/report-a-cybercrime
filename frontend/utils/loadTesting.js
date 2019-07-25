import { check, fail } from 'k6'
import http from 'k6/http'

const loadTestingUrl = `${__ENV.LOAD_TESTING_BASE_URL}`
if (loadTestingUrl === 'undefined') {
  fail('ERROR: Environment variable LOAD_TESTING_BASE_URL not defined')
}

export default function() {
  let res = http.get(loadTestingUrl)
  check(res, {
    'is status 200': r => r.status === 200,
  })
}
