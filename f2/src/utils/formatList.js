export const formatList = (list, listFormat) => {
  //This code is vaguely inspired by listFormat sepcs: https://tc39.es/proposal-intl-list-format/

  let size = list.length
  let result = ''

  const templatePair = listFormat.pair ? listFormat.pair : ' '
  const templateMiddle = listFormat.middle ? listFormat.middle : ' '
  const templateEnd = listFormat.end ? listFormat.end : ' '

  if (size === 1) {
    // return first list item by itself
    result = list[0]
  }
  if (size === 2) {
    //This list is a pair.
    result = list.join(templatePair)
  }

  if (size >= 3) {
    let last = list.pop()
    result = list.join(templateMiddle) + templateEnd + last
  }

  return result
}

//Make a component that extends <Text/> and joins parts of the list
