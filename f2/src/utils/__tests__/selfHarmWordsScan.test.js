import { selfHarmWordsScan } from '../selfHarmWordsScan'

describe('selfHarmWordsScan', () => {
  it('returns empty list when no words match', () => {
    const data = { a: { b: 'hi' } }
    expect(selfHarmWordsScan(data)).toEqual([])
  })

  it('returns 2 words when they are in data when no words match', () => {
    const data = {
      a: { b: 'hi' },
      aa: ['this', 'agile', 'thing'],
      cc: { ccc: { dd: 'hi', ee: 'scrum' } },
    }
    expect(selfHarmWordsScan(data)).toEqual(['agile', 'scrum'])
  })
})
