import formatDistance from './_lib/formatDistance/index.js'
import formatLong from './_lib/formatLong/index.js'
import formatRelative from './_lib/formatRelative/index.js'
import localize from './_lib/localize/index.js'
import match from './_lib/match/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Polish locale.
 * @language Polish
 * @iso-639-2 pol
 * @author Mateusz Derks [@ertrzyiks]{@link https://github.com/ertrzyiks}
 * @author Just RAG [@justrag]{@link https://github.com/justrag}
 * @author Mikolaj Grzyb [@mikolajgrzyb]{@link https://github.com/mikolajgrzyb}
 * @author Mateusz Tokarski [@mutisz]{@link https://github.com/mutisz}
 */
var locale = {
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4,
  },
}

export default locale
