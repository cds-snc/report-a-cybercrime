const Jimp = require('jimp')

async function png2jpeg(png, jpg) {
  await Jimp.read(png)
    .then((image) => {
      image.quality(50).write(jpg)
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = { png2jpeg }
