module.exports = {
  locales: ['en', 'fr'],
  catalogs: [
    {
      path: 'src/locales/{locale}',
      include: ['src'],
    },
  ],
  format: 'minimal',
  sourceLocale: 'en',
}
