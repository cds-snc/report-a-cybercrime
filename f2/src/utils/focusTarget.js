//Source: https://github.com/alphagov/govuk-frontend/blob/master/src/govuk/components/error-summary/error-summary.js

export const focusTarget = target => {
  // If the element that was clicked was not a link, return early
  if (target.tagName !== 'A' || target.href === false) {
    return false
  }

  let inputId = getFragmentFromUrl(target.href)
  let input = document.getElementById(inputId)
  if (!input) {
    return false
  }

  let legendOrLabel = getAssociatedLegendOrLabel(input)
  if (!legendOrLabel) {
    return false
  }

  // Scroll the legend or label into view *before* calling focus on the input to
  // avoid extra scrolling in browsers that don't support `preventScroll` (which
  // at time of writing is most of them...)
  legendOrLabel.scrollIntoView()
  input.focus({ preventScroll: true })

  return true
}

const getFragmentFromUrl = url => {
  if (url.indexOf('#') === -1) {
    return false
  }

  return url.split('#').pop()
}

const getAssociatedLegendOrLabel = input => {
  var fieldset = input.closest('fieldset')

  if (fieldset) {
    var legends = fieldset.getElementsByTagName('legend')

    if (legends.length) {
      var candidateLegend = legends[0]

      // If the input type is radio or checkbox, always use the legend if there
      // is one.
      if (input.type === 'checkbox' || input.type === 'radio') {
        return candidateLegend
      }

      // For other input types, only scroll to the fieldset’s legend (instead of
      // the label associated with the input) if the input would end up in the
      // top half of the screen.
      //
      // This should avoid situations where the input either ends up off the
      // screen, or obscured by a software keyboard.
      var legendTop = candidateLegend.getBoundingClientRect().top
      var inputRect = input.getBoundingClientRect()

      // If the browser doesn't support Element.getBoundingClientRect().height
      // or window.innerHeight (like IE8), bail and just link to the label.
      if (inputRect.height && window.innerHeight) {
        var inputBottom = inputRect.top + inputRect.height

        if (inputBottom - legendTop < window.innerHeight / 2) {
          return candidateLegend
        }
      }
    }
  }

  return (
    document.querySelector("label[for='" + input.getAttribute('id') + "']") ||
    input.closest('label')
  )
}
