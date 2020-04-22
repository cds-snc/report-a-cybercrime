module.exports = {
  validateDate(day, month, year) {
    //condition for an error to occur: append a lingui id to the list of error
    // if it has a value AND this value is a number over 31
    if (day && (isNaN(day) || day > 31 || day === '0' || day === '00')) {
      return false
      // errors.whenDidItStart = 'whenDidItStart.hasValidationErrors'
      // errors= true
    }
    // if it has a value AND this value is a number over 12
    if (
      month &&
      (isNaN(month) || month > 12 || month === '0' || month === '00')
    ) {
      return false
    }
    // if it has a value AND year is a number containing 4 digits
    if (year && (isNaN(year) || year.length !== 4 || year === '0000')) {
      return false
    }

    // if date is in the future and date is valid
    // values.startMonth - 1 : UTC Date Months are values from 0 to 11
    if (Date.UTC(year, month - 1, day) > Date.now()) {
      return false
    }
    // validate if the date in different month  match the calendar
    var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (month === 1 || month > 2) {
      if (day > ListofDays[month - 1]) {
        return false
      }
    }
    //validate if the dayin Feb can't be >29 in leap year, the day in Feb can't be >28 in non-leap year
    if (month === '2' || month === '02') {
      var lyear = false
      if ((!(year % 4) && year % 100) || !(year % 400)) {
        lyear = true
      }
      if (lyear === false && day >= 29) {
        return false
      }
      if (lyear === true && day > 29) {
        return false
      }
    }
    return true
  },
}
