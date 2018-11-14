/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      if (ord) return n == 1 ? 'one' : 'other'
      return n >= 0 && n < 2 ? 'one' : 'other'
    },
  },
  messages: {
    'For internal use only': 'Pour usage interne uniquement',
    'Language Selection': 'Choix de langue',
    'Report a cybercrime': 'Signaler un acte de cybercrime',
    Submit: 'Soumettre',
    'What happened?': "Ce qui s'est pass\xE9?",
    'loading...': 'Chargement en cours...',
  },
}
