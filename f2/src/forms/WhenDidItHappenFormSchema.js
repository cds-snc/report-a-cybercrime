import React from 'react'
import { Trans } from '@lingui/macro'
import { evalDate, evalDateRange } from '../utils/validateDate'

/*
  Define form questions
*/
const formQuestions = {
  incidentFrequency: {
    label: <Trans id="whenDidItHappenPage.question" />,
    errorMessage:
      'Please make a selection, if you are not sure select "I\'m not sure".',
  },
  once: {
    name: 'happenedOnce',
    value: 'once',
    id: 'incidentFrequency-Once',
    radioLabel: <Trans id="whenDidItHappenPage.options.once" />,
    datePicker: {
      label: <Trans id="whenDidItHappenPage.singleDate.label" />,
      helpText: <Trans id="whenDidItStart.labelExample" />,
      id: 'happenedOnceDatePicker',
      errorMessage: 'Please review the date entered',
    },
  },
  moreThanOnce: {
    name: 'happenedMoreThanOnce',
    value: 'moreThanOnce',
    id: 'happenedMoreThanOnce',
    radioLabel: <Trans id="whenDidItHappenPage.options.moreThanOnce" />,
    datePickerStart: {
      label: <Trans id="whenDidItHappenPage.dateRange.start.label" />,
      helpText: <Trans id="whenDidItStart.labelExample" />,
      id: 'happenedMoreThanOnceStart',
      errorMessage: 'Please review the date entered',
    },
    datePickerEnd: {
      label: <Trans id="whenDidItHappenPage.dateRange.end.label" />,
      helpText: <Trans id="whenDidItStart.labelExample" />,
      id: 'happenedMoreThanOnceEnd',
      errorMessage: 'Please review the date entered',
    },
  },
  notSure: {
    name: 'description',
    value: 'notSure',
    id: 'incidentFrequency-NotSure',
    radioLabel: <Trans id="whenDidItHappenPage.options.notSure" />,
    descriptionLabel: <Trans id="whenDidItHappenPage.notSure.label" />,
    descriptionHelpText: <Trans id="whenDidItHappenPage.notSure.helperText" />,
  },
}

/*
  Evaluate fields as the user enters data.
*/
const realTimeValidation = (values) => {
  let errors = {}

  if (values.incidentFrequency === 'once') {
    let happenedOnceError = {}

    happenedOnceError = evalDate(
      values.happenedOnceDay,
      values.happenedOnceMonth,
      values.happenedOnceYear,
    )

    if (Object.keys(happenedOnceError).length > 0) {
      errors['happenedOnceDay'] = happenedOnceError.day
        ? happenedOnceError.day
        : null
      errors['happenedOnceMonth'] = happenedOnceError.month
        ? happenedOnceError.month
        : null
      errors['happenedOnceYear'] = happenedOnceError.year
        ? happenedOnceError.year
        : null
      errors['happenedOnce'] = true
    }
  } else if (values.incidentFrequency === 'moreThanOnce') {
    const dateRangeErrors = evalDateRange(values)

    if (dateRangeErrors.startError) {
      errors['startDay'] = dateRangeErrors.startError.day
        ? dateRangeErrors.startError.day
        : null
      errors['startMonth'] = dateRangeErrors.startError.month
        ? dateRangeErrors.startError.month
        : null
      errors['startYear'] = dateRangeErrors.startError.year
        ? dateRangeErrors.startError.year
        : null
      errors['start'] = true
    }

    if (dateRangeErrors.endError) {
      errors['endDay'] = dateRangeErrors.endError.day
        ? dateRangeErrors.endError.day
        : null
      errors['endMonth'] = dateRangeErrors.endError.month
        ? dateRangeErrors.endError.month
        : null
      errors['endYear'] = dateRangeErrors.endError.year
        ? dateRangeErrors.endError.year
        : null
      errors['end'] = true
    }
  }

  return errors
}

/*
  Evaluate fields on submit. Every field is validated independantly. We are simply checking for 
  empty fields here as content is evaluated in real time.
*/
const onSubmitValidation = (values) => {
  const errors = {}
  const fields = {}

  if (values.incidentFrequency === 'once') {
    if (
      values.happenedOnceDay ||
      values.happenedOnceMonth ||
      values.happenedOnceYear
    ) {
      fields['happenedOnceDay'] = !values.happenedOnceDay
      fields['happenedOnceMonth'] = !values.happenedOnceMonth
      fields['happenedOnceYear'] = !values.happenedOnceYear

      const hasError =
        fields['happenedOnceDay'] ||
        fields['happenedOnceMonth'] ||
        fields['happenedOnceYear']

      if (hasError) {
        fields['happenedOnce'] = true
        errors['fields'] = fields
      }
    }
  } else if (values.incidentFrequency === 'moreThanOnce') {
    if (values.startDay || values.startMonth || values.startYear) {
      fields['startDay'] = !values.startDay
      fields['startMonth'] = !values.startMonth
      fields['startYear'] = !values.startYear

      const hasStartError =
        fields['startDay'] || fields['startMonth'] || fields['startYear']

      if (hasStartError) {
        fields['start'] = true
        errors['fields'] = fields
      }
    }

    if (values.endDay || values.endMonth || values.endYear) {
      fields['endDay'] = !values.endDay
      fields['endMonth'] = !values.endMonth
      fields['endYear'] = !values.endYear

      const hasEndError =
        fields['endDay'] || fields['endMonth'] || fields['endYear']

      if (hasEndError) {
        fields['end'] = true
        errors['fields'] = fields
      }
    }
  }

  console.log(errors)

  return errors
}

/*
  Create an error summary to display at the top of the page.
*/
const createErrorSummary = (errors) => {
  const errorSummary = {}

  const happenedOnce =
    errors.happenedOnce ||
    errors.happenedOnceDay ||
    errors.happenedOnceMonth ||
    errors.happenedOnceYear
  const start =
    errors.start || errors.startDay || errors.startMonth || errors.startYear
  const end = errors.end || errors.endDay || errors.endMonth || errors.endYear
  const incidentFrequency = errors.incidentFrequency

  if (happenedOnce) {
    errorSummary['happenedOnce'] = {
      label: formQuestions.once.datePicker.label,
      message: formQuestions.once.datePicker.errorMessage,
    }
  }

  if (start) {
    errorSummary['start'] = {
      label: formQuestions.moreThanOnce.datePickerStart.label,
      message: formQuestions.moreThanOnce.datePickerStart.errorMessage,
    }
  }

  if (end) {
    errorSummary['end'] = {
      label: formQuestions.moreThanOnce.datePickerEnd.label,
      message: formQuestions.moreThanOnce.datePickerEnd.errorMessage,
    }
  }

  if (incidentFrequency) {
    errorSummary['incidentFrequency'] = {
      label: <Trans id="whenDidItHappenPage.question" />,
      message:
        'Please make a selection, if you are not sure select "I\'m not sure".',
    }
  }

  return errorSummary
}

export const whenDidItHappenFormSchema = {
  QUESTIONS: formQuestions,
  REAL_TIME_VALIDATION: realTimeValidation,
  ON_SUBMIT_VALIDATION: onSubmitValidation,
  CREATE_ERROR_SUMMARY: createErrorSummary,
}
