const randomLetter = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return letters[Math.floor(Math.random() * letters.length)]
}

const randomDigit = () => Math.floor(Math.random() * 10)

const randomizeString = s =>
  s
    ? s
        .replace(/[a-z]/g, () => randomLetter())
        .replace(/[A-Z]/g, () => randomLetter().toUpperCase())
        .replace(/[0-9]/g, () => randomDigit())
    : s

module.exports.randomizeString = randomizeString
