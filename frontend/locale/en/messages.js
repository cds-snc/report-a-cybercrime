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
    'Bank accounts': 'Bank accounts',
    'Choose all that apply': 'Choose all that apply',
    'Describe what happened': 'Describe what happened',
    'Describe what happened.': 'Describe what happened.',
    'Describe what happened. Provide as much information as you can.':
      'Describe what happened. Provide as much information as you can.',
    'Did you lose money or personal information?':
      'Did you lose money or personal information?',
    'Email address': 'Email address',
    'For internal use only': 'For internal use only',
    'For internal use only.': 'For internal use only.',
    'For more information on how to stay safe online, you can visit <0>Get Cyber Safe</0> and the <1>Top 10 Cyber Crime Prevention Tips.</1>':
      'For more information on how to stay safe online, you can visit <0>Get Cyber Safe</0> and the <1>Top 10 Cyber Crime Prevention Tips.</1>',
    'For more information on how to stay safe online, you can visit <0>GetCyberSafe</0> and the <1>Top 10 Cyber Crime Prevention Tips.</1>':
      'For more information on how to stay safe online, you can visit <0>GetCyberSafe</0> and the <1>Top 10 Cyber Crime Prevention Tips.</1>',
    'Have you or someone you know encountered a cybercrime ?':
      'Have you or someone you know encountered a cybercrime ?',
    'Have you or someone you know encountered a cybercrime?':
      'Have you or someone you know encountered a cybercrime?',
    'How were you affected?': 'How were you affected?',
    'In general terms, who was involved?':
      'In general terms, who was involved?',
    'I\u2019m not sure': 'I\u2019m not sure',
    'Landing Page': 'Landing Page',
    'Language Selection': 'Language Selection',
    Next: 'Next',
    Other: 'Other',
    Phone: 'Phone',
    'Please do not provide any personal information.':
      'Please do not provide any personal information.',
    Privacy: 'Privacy',
    'Report a cybercrime': 'Report a cybercrime',
    'Select where you encountered the cybercrime.':
      'Select where you encountered the cybercrime.',
    'Share how you were impacted.': 'Share how you were impacted.',
    'Share how you were you impacted.': 'Share how you were you impacted.',
    'Share your story': 'Share your story',
    'Share your story\u2192': 'Share your story\u2192',
    'Social media accounts': 'Social media accounts',
    Submit: 'Submit',
    'Tell us your story in three easy steps:':
      'Tell us your story in three easy steps:',
    'Text messages': 'Text messages',
    'Thank you for sharing your story.': 'Thank you for sharing your story.',
    'Was your reputation or productivity affected?':
      'Was your reputation or productivity affected?',
    Website: 'Website',
    'What happened?': 'What happened?',
    'What was involved?': 'What was involved?',
    'What was your reaction?': 'What was your reaction?',
    'When did it take place?': 'When did it take place?',
    'Who was involved?': 'Who was involved?',
    'You are the 5th person to use this tool to share a cybercrime story.':
      'You are the 5th person to use this tool to share a cybercrime story.',
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
