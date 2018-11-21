/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2)
      if (ord)
        return n10 == 1 && n100 != 11
          ? 'one'
          : n10 == 2 && n100 != 12
          ? 'two'
          : n10 == 3 && n100 != 13
          ? 'few'
          : 'other'
      return n == 1 && v0 ? 'one' : 'other'
    },
  },
  messages: {
    'Choose all that apply': 'Choose all that apply',
    'Describe what happened.': 'Describe what happened.',
    'Describe what happened. Provide as much information as you can.':
      'Describe what happened. Provide as much information as you can.',
    'Did you lose money or personal information?':
      'Did you lose money or personal information?',
    'For internal use only': 'For internal use only',
    'Have you or someone you know encountered a cybercrime?':
      'Have you or someone you know encountered a cybercrime?',
    'How were you affected?': 'How were you affected?',
    'I\u2019m not sure': 'I\u2019m not sure',
    'Language Selection': 'Language Selection',
    Next: 'Next',
    'Report a cybercrime': 'Report a cybercrime',
    'Select where you encountered the cybercrime.':
      'Select where you encountered the cybercrime.',
    'Share how you were you impacted.': 'Share how you were you impacted.',
    'Share your story': 'Share your story',
    Submit: 'Submit',
    'Thank you for sharing your story.': 'Thank you for sharing your story.',
    'Was your reputation or productivity affected?':
      'Was your reputation or productivity affected?',
    'What happened?': 'What happened?',
    'What was involved?': 'What was involved?',
    'What was your reaction?': 'What was your reaction?',
    'When did it take place?': 'When did it take place?',
    'Who was involved?': 'Who was involved?',
    'You do not need to provide any personal information.':
      'You do not need to provide any personal information.',
    'bank account': 'bank account',
    email: 'email',
    'loading...': 'loading...',
    phone: 'phone',
    'social media': 'social media',
    'text message': 'text message',
    website: 'website',
  },
}
