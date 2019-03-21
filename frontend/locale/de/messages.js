/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      var s = String(n).split('.'),
        v0 = !s[1]
      if (ord) return 'other'
      return n == 1 && v0 ? 'one' : 'other'
    },
  },
  messages: {
    ALPHA: 'ALPHA',
    'Bank accounts': 'Bank accounts',
    'Coming soon: tell us about your experiences to help us build a better service.':
      'In K\xFCrze: Erz\xE4hlen Sie uns von Ihren Erfahrungen, damit wir einen besseren Service aufbauen k\xF6nnen.',
    'Describe what happened': 'Describe what happened',
    'Describe what happened.': 'Describe what happened.',
    'Did you lose money or personal information?':
      'Did you lose money or personal information?',
    'Email address': 'Email address',
    'For more information on how to stay safe online, you can visit <0>GetCyberSafe</0> and the <1>Top 10 Cyber Crime Prevention Tips.</1>':
      'For more information on how to stay safe online, you can visit <0>GetCyberSafe</0> and the <1>Top 10 Cyber Crime Prevention Tips.</1>',
    'Have you or someone you know encountered a cybercrime?':
      'Have you or someone you know encountered a cybercrime?',
    'How did that happen?': 'How did that happen?',
    'How were you affected?': 'How were you affected?',
    'In general terms, who was involved?':
      'In general terms, who was involved?',
    'I\u2019m not sure': 'I\u2019m not sure',
    'Landing Page': 'Landing Page',
    Next: 'Next',
    Other: 'Other',
    'Page Not Found': 'Page Not Found',
    Phone: 'Phone',
    'Please complete the form to tell us what was affected.':
      'Please complete the form to tell us what was affected.',
    'Please complete the text box to tell us how you were affected.':
      'Please complete the text box to tell us how you were affected.',
    'Please complete the text box to tell us what happened.':
      'Please complete the text box to tell us what happened.',
    'Please do not provide any personal information.':
      'Please do not provide any personal information.',
    Privacy: 'Privacy',
    'Select where you encountered the cybercrime.':
      'Select where you encountered the cybercrime.',
    'Share how you were impacted.': 'Share how you were impacted.',
    'Share your story\u2192': 'Share your story\u2192',
    'Social media accounts': 'Social media accounts',
    'Sorry, but the page you were trying to view does not exist.':
      'Sorry, but the page you were trying to view does not exist.',
    'Tell us your story in three easy steps:':
      'Tell us your story in three easy steps:',
    'Terms and Conditions': 'Terms and Conditions',
    'Text messages': 'Text messages',
    'Thank you for sharing your story.': 'Thank you for sharing your story.',
    'This site will be changing as we test ideas and learn from people like you.':
      'This site will be changing as we test ideas and learn from people like you.',
    'Was your reputation or productivity affected?':
      'Was your reputation or productivity affected?',
    'We want to help people affected by cybercrime.':
      'Wir wollen den von Cyberkriminalit\xE4t betroffenen Menschen helfen.',
    Website: 'Website',
    'What Happened': 'What Happened',
    'What is a cybercrime?': 'What is a cybercrime?',
    'What was affected? Choose all that apply.':
      'What was affected? Choose all that apply.',
    'What was your reaction?': 'What was your reaction?',
    'When did it take place?': 'When did it take place?',
    'You are the {0}th person to use this tool to share a cybercrime story.': function(
      a,
    ) {
      return [
        'You are the ',
        a('0'),
        'th person to use this tool to share a cybercrime story.',
      ]
    },
    'loading...': 'loading...',
  },
}
