const Jimp = require('jimp')
const crypto = require('crypto')
const { getFileExtension } = require('./filenameUtils')
const fs = require('fs')

function png2jpeg(png, jpg) {
  return Jimp.read(png)
    .then((image) => {
      return image.quality(50).writeAsync(jpg)
    })
    .then((done) => {})
    .catch((err) => {
      console.log(err)
    })
}

async function convertImages(files) {
  return Promise.all(
    files
      .filter((file) => file.malwareIsClean)
      .map(async (file) => {
        let fileExtension = getFileExtension(file.name)
        if (fileExtension.endsWith('png')) {
          let jpgPath = file.path.substr(0, file.path.lastIndexOf('.')) + '.jpg'
          await png2jpeg(file.path, jpgPath)
          var shasum = crypto.createHash('sha1')
          let imageData = fs.readFileSync(jpgPath)
          shasum.update(imageData)
          const sha1Hash = shasum.digest('hex')
          console.log(JSON.stringify(file))
          let jsonFile = {}
          Object.assign(jsonFile, file)
          jsonFile.name =
            file.name.substr(0, file.name.lastIndexOf('.')) + '.jpg'
          jsonFile.type = 'image/jpeg'
          jsonFile.path = jpgPath
          jsonFile.size = imageData.length
          jsonFile.sha1 = sha1Hash
          console.log(JSON.stringify(jsonFile))
          return jsonFile
        } else {
          return null
        }
      }),
  )
}

module.exports = { convertImages }
