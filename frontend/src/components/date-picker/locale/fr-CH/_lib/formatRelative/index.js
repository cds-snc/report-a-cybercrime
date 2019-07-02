var formatRelativeLocale = {
  lastWeek: '[hier] dddd [à] LT',
  yesterday: '[hier à] LT',
  today: '[aujourd’hui à] LT',
  tomorrow: '[demain à] LT',
  nextWeek: 'dddd [à] LT',
  other: 'L',
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}
