export const formatDate = (day, month, year) =>
  `${day}/${month}/${year}`.replace(/undefined/g, '').replace(/^\/+/, '')
