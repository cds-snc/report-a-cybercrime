import { selfHarmWordsScan } from '../selfHarmWordsScan'

describe('selfHarmWordsScan', () => {
  it('returns empty list when no words match', () => {
    const data = { a: { b: 'hi' } }
    expect(selfHarmWordsScan(data)).toEqual([])
  })

  it('returns 2 words when they are nested in data', () => {
    const data = {
      a: { b: 'hi' },
      aa: ['this', 'agile', 'thing'],
      cc: { ccc: { dd: 'hi', ee: 'scrum' } },
    }
    expect(selfHarmWordsScan(data)).toEqual(['agile', 'scrum'])
  })

  it('catches words with accents', () => {
    const data = {
      a: 'agilé',
      aa: 'this sçrum',
    }
    expect(selfHarmWordsScan(data)).toEqual(['agile', 'scrum'])
  })
})
