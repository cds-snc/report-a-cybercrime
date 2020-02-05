import { formatList } from '../formatList'

describe('createPartsFromList', () => {
  it('formats a list with no items', () => {
    const list = []
    const style = {
      pair: 'pair',
      middle: 'middle',
      end: 'end',
    }

    const formattedList = formatList(list, style)
    expect(formattedList).toEqual('')
  })
  it('formats a list with 1 items', () => {
    const list = ['a']
    const style = {
      pair: 'pair',
      middle: 'middle',
      end: 'end',
    }

    const formattedList = formatList(list, style)
    expect(formattedList).toEqual('a')
  })
  it('formats a list with 2 items', () => {
    const list = ['a', 'b']
    const style = {
      pair: 'pair',
      middle: 'middle',
      end: 'end',
    }

    const formattedList = formatList(list, style)
    expect(formattedList).toEqual('apairb')
  })
  it('formats a list with 3 items', () => {
    const list = ['a', 'b', 'c']
    const style = {
      pair: 'pair',
      middle: 'middle',
      end: 'end',
    }

    const formattedList = formatList(list, style)
    expect(formattedList).toEqual('amiddlebendc')
  })
})
