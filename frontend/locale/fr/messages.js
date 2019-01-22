/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      if (ord) return n == 1 ? 'one' : 'other'
      return n >= 0 && n < 2 ? 'one' : 'other'
    },
  },
  messages: {
    'Bank accounts': 'Comptes bancaires',
    'Choose all that apply': "Cochez toutes les r\xE9ponses qui s'appliquent",
    'Describe what happened': "D\xE9crivez ce qui s'est pass\xE9",
    'Describe what happened.': "D\xE9crivez ce qui s'est pass\xE9.",
    'Did you lose money or personal information?':
      "Avez-vous perdu de l'argent ou des renseignements personnels?",
    'Email address': 'Adresse de courriel',
    'For internal use only.': 'Pour usage interne seulement.',
    'For more information on how to stay safe online, you can visit <0>GetCyberSafe</0> and the <1>Top 10 Cyber Crime Prevention Tips.</1>':
      "Pour plus d'informations sur la fa\xE7on de rester en s\xE9curit\xE9 en ligne, vous pouvez visiter <0>Pensez cybers\xE9curit\xE9</0> et le <1>Les dix meilleurs conseils pour pr\xE9venir un cybercrime.</1>",
    'For research purposes only.': '\xC0 des fins de recherche seulement.',
    'Have you or someone you know encountered a cybercrime?':
      "Avez-vous, ou connaissez-vous quelqu'un qui a, \xE9t\xE9 confront\xE9 \xE0 un cybercrime?",
    'How did that happen?': "Comment cela s'est-il pass\xE9?",
    'How were you affected?': 'Comment avez-vous \xE9t\xE9 affect\xE9?',
    'In general terms, who was involved?':
      'En termes g\xE9n\xE9raux, qui \xE9tait impliqu\xE9?',
    'I\u2019m not sure': 'Je ne suis pas certain(e)',
    'Landing Page': "Page d'atterrissage",
    Next: 'Suivant',
    Other: 'Autre',
    Phone: 'T\xE9l\xE9phone',
    'Please do not provide any personal information.':
      'Veuillez ne pas fournir de renseignements personnels.',
    'Please tell us what happened.':
      "S'il vous pla\xEEt, dites-nous ce qui s'est pass\xE9.",
    'Please tell us what how you were affected.':
      'Veuillez nous dire de quelle fa\xE7on vous avez \xE9t\xE9 affect\xE9.',
    'Please tell us what things were affected.':
      "S'il vous pla\xEEt, dites-nous quelles sont les choses qui ont \xE9t\xE9 affect\xE9.",
    Privacy: 'Confidentialit\xE9',
    'Select where you encountered the cybercrime.':
      'Veuillez s\xE9lectionner o\xF9 vous avez rencontr\xE9 la cybercriminalit\xE9.',
    'Share how you were impacted.':
      'Partagez comment vous avez \xE9t\xE9 affect\xE9.',
    'Share your story\u2192': 'Partagez votre histoire\u2192',
    'Social media accounts': 'Comptes de m\xE9dias sociaux',
    'Tell us your story in three easy steps:':
      'Racontez-nous votre histoire en trois \xE9tapes faciles:',
    'Terms and Conditions': 'Avis',
    'Text messages': 'Messages texte',
    'Thank you for sharing your story.':
      "Merci d'avoir partag\xE9 votre histoire.",
    'Was your reputation or productivity affected?':
      'Votre r\xE9putation ou votre productivit\xE9 ont-elles \xE9t\xE9 affect\xE9es?',
    Website: 'Site web',
    'What Happened': "Qu'est-ce qui s'est pass\xE9?",
    'What happened?': "Qu'est-ce qui s'est pass\xE9?",
    'What is a cybercrime?': "Qu'est-ce qu'un cybercrime?",
    'What was affected? Choose all that apply.':
      "Qu'est-ce qui a \xE9t\xE9 affect\xE9? Cochez toutes les r\xE9ponses qui s'appliquent.",
    'What was involved?': "Qu'est-ce qui a \xE9t\xE9 impliqu\xE9?",
    'What was your reaction?': 'Quelle a \xE9t\xE9 votre r\xE9action?',
    'When did it take place?': "Quand cela s'est-il pass\xE9?",
    'You are the 5th person to use this tool to share a cybercrime story.':
      'Vous \xEAtes la 5e personne \xE0 utiliser cet outil pour partager une histoire de cybercriminalit\xE9.',
    'You are the {0}th person to use this tool to share a cybercrime story.': function(
      a,
    ) {
      return [
        'Vous \xEAtes la ',
        a('0'),
        'e personne \xE0 utiliser cet outil pour partager une histoire de cybercriminalit\xE9.',
      ]
    },
    'loading...': 'chargement en cours...',
  },
}
