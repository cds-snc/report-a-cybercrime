const { getFileExtension } = require('./filenameUtils')
const acceptableExtensions = '.png, .jpg, .jpeg, .doc, .docx, .xls, .xlsx, .pdf, .txt, .rtf'
  .split(',')
  .map((ext) => ext.trim())

const fileExtensionPasses = (fileName) => {
  return acceptableExtensions.indexOf('.' + getFileExtension(fileName)) > -1
}

const fileSizePasses = (fileSize) => fileSize > 0 && fileSize <= 4 * 1024 * 1024

module.exports = { acceptableExtensions, fileExtensionPasses, fileSizePasses }
