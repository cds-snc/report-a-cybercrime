const generate = require('nanoid/generate')

// removed a few letters that might be misread or might lead randomly to inappropriate words in the id
// letters removed: i, j, l, o, u, v

// from https://zelark.github.io/nano-id-cc/
// estimate 200000 reports / year -> 23 reports / hour
// if we run for 94 years there will be a 1% chance of duplication

// more precisely, we have 30 characters and length 11, so total ids is
// 30^11 =  17,714,700,000,000,000 = 1.77147e+16

// if we receive 200,000 reports a year, then over 10 years we will have 2,000,000 reports

// Now, from https://en.wikipedia.org/wiki/Birthday_problem if p(n, d) is the probability of collision
// after generating n ids with d total possible ids, then

// p(n, d) ~ 1 - e^(-n^2 / (2d)) = 1 - e^(-(2000000)^2 / (2 * 1.77147e+16)) = 0.00011289421

// so over 10 years there is a 99.99% chance that we will NOT have any collisions

export const generateReportId = () => {
  const alphabet = '0123456789abcdefghkmnpqrstwxyz'
  return 'NCFRS-' + generate(alphabet, 11)
}
