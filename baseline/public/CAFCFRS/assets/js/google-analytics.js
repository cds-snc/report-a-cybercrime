;(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r
  ;(i[r] =
    i[r] ||
    function() {
      ;(i[r].q = i[r].q || []).push(arguments)
    }),
    (i[r].l = 1 * new Date())
  ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
  a.async = 1
  a.src = g
  m.parentNode.insertBefore(a, m)
})(
  window,
  document,
  'script',
  'https://www.google-analytics.com/analytics.js',
  'ga',
)

ga('create', 'UA-102484926-13', 'auto')
;(function(history) {
  const pushState = history.pushState
  history.pushState = function(state) {
    if (typeof history.onpushstate == 'function') {
      history.onpushstate({ state: state })
    }
    ga('send', 'pageview', arguments[arguments.length - 1])
    return pushState.apply(history, arguments)
  }
})(window.history)
