const randLetter = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return letters[Math.floor(Math.random() * letters.length)]
}
const randDigit = () => Math.floor(Math.random() * 10)

export const randomizeString = s =>
  s
    ? s
        .replace(/[a-z]/g, () => randLetter())
        .replace(/[A-Z]/g, () => randLetter().toUpperCase())
        .replace(/[0-9]/g, () => randDigit())
    : s
