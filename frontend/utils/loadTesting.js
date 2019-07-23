import { check } from 'k6'
import http from 'k6/http'

export default function() {
  let res = http.get('https://www.report-a-cybercrime.alpha.rcmp-grc.gc.ca/')
  check(res, {
    'is status 200': r => r.status === 200,
  })
}
