export const format = (list, listFormat) => {
  //This code is vaguely inspired by listFormat sepcs: https://tc39.es/proposal-intl-list-format/

  let size = list.length
  let result = ''

  let templatePair = listFormat.style
  let templateEnd = listFormat.type

  if (size === 1) {
    // return first list item by itself
    result = list[0]
  }
  if (size >= 2) {
    //Create parts from list
    let last = list.pop()
    result += list.join(templatePair)
    result += templateEnd
    result += last
  }

  return result
}
