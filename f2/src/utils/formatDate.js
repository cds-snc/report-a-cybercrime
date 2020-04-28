module.exports = {
  formatDate(day, month, year) {
    const paddedMonth = month ? month.toString().padStart(2, '0') : '00'
    const paddedDay = day ? day.toString().padStart(2, '0') : '00'
    return `${year}-${paddedMonth}-${paddedDay}`
      .replace(/undefined/g, '')
      .replace(/-00/g, '')
  },
}
