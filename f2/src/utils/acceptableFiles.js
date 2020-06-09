const acceptableExtensions = '.png, .jpg, .jpeg, .doc, .docx, .xls, .xlsx, .pdf, .txt, .rtf, .PNG, .JPG, .JPEG, .DOC, .DOCX, .XLS, .XLSX, .PDF, .TXT, .RTF'
  .split(',')
  .map((ext) => ext.trim())

const getExtension = (fileName) =>
  fileName.includes('.') ? fileName.split('.').pop() : ''

const fileExtensionPasses = (fileName) => {
  return acceptableExtensions.indexOf('.' + getExtension(fileName)) > -1
}

const fileSizePasses = (fileSize) => fileSize > 0 && fileSize <= 4 * 1024 * 1024

module.exports = { acceptableExtensions, fileExtensionPasses, fileSizePasses }
