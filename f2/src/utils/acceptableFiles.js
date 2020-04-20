const acceptableExtensions = '.png, .jpg, .jpeg, .doc, .docx, .xls, .xlsx, .pdf, .txt, .rtf'
  .split(',')
  .map((ext) => ext.trim())

const getExtension = (fileName) =>
  fileName.includes('.') ? fileName.split('.').pop() : ''

const fileExtensionPasses = (fileName) => {
  return acceptableExtensions.indexOf('.' + getExtension(fileName)) > -1
}

const fileSizePasses = (fileSize) => fileSize <= 4 * 1024 * 1024

module.exports = { acceptableExtensions, fileExtensionPasses, fileSizePasses }
