/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      if (ord) return n == 1 ? 'one' : 'other'
      return n >= 0 && n < 2 ? 'one' : 'other'
    },
  },
  messages: {
    'Choose all that apply': "Cochez tout ce qui s'applique",
    'Describe what happened.': "D\xE9crivez ce qui s'est pass\xE9.",
    'Describe what happened. Provide as much information as you can.':
      "D\xE9crivez ce qui s'est pass\xE9. Fournissez autant d'informations que possible.",
    'Did you lose money or personal information?':
      "Avez-vous perdu de l'argent ou des renseignements personnels ?",
    'For internal use only': 'Pour usage interne uniquement',
    'Have you or someone you know encountered a cybercrime?':
      "Avez-vous, ou quelqu'un que vous connaissez, \xE9t\xE9 confront\xE9 \xE0 un cybercrime ?",
    'How were you affected?': 'Comment avez-vous \xE9t\xE9 affect\xE9 ?',
    'I\u2019m not sure': 'Je ne suis pas s\xFBr',
    'Language Selection': 'Choix de langue',
    Next: 'Suivant',
    'Report a cybercrime': 'Signaler un acte de cybercrime',
    'Select where you encountered the cybercrime.':
      "S\xE9lectionnez l'endroit o\xF9 vous avez rencontr\xE9 la cybercriminalit\xE9.",
    'Share how you were you impacted.':
      "Partagez l'impact que vous avez eu sur vous.",
    'Share your story': 'Partagez votre histoire',
    Submit: 'Soumettre',
    'Thank you for sharing your story.':
      "Merci d'avoir partag\xE9 votre histoire.",
    'Was your reputation or productivity affected?':
      'Votre r\xE9putation ou votre productivit\xE9 a-t-elle \xE9t\xE9 affect\xE9e ?',
    'What happened?': "Ce qui s'est pass\xE9?",
    'What was involved?': "De quoi s'agissait-il ?",
    'What was your reaction?': 'Quelle a \xE9t\xE9 votre r\xE9action ?',
    'When did it take place?': "Quand cela s'est-il pass\xE9 ?",
    'Who was involved?': 'Qui \xE9tait impliqu\xE9 ?',
    'You do not need to provide any personal information.':
      "Vous n'avez pas besoin de fournir de renseignements personnels.",
    'bank account': 'compte en banque',
    email: 'courriel',
    'loading...': 'Chargement en cours...',
    phone: 't\xE9l\xE9phoner',
    'social media': 'm\xE9dias sociaux',
    'text message': 'message SMS',
    website: 'site Internet',
  },
}
