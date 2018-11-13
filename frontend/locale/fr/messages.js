/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      if (ord) return n == 1 ? "one" : "other";
      return n >= 0 && n < 2 ? "one" : "other";
    }
  },
  messages: {
    "For internal use only": "Pour usage interne uniquement",
    "Report a cybercrime": "Signaler une cybercriminalit\xE9",
    Submit: "Soumettre",
    "What happened?": "Ce qui s'est pass\xE9?"
  }
};
