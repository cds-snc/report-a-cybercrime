module.exports = {
  formatDate(day, month, year) {
    return `${day}/${month}/${year}`
      .replace(/undefined/g, '')
      .replace(/^\/+/, '')
  },
}
