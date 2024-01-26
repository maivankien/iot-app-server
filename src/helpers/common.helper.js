exports.areDatesInSameMonth = (dateString1, dateString2) => {
    const date1 = new Date(dateString1)
    const date2 = new Date(dateString2)

    const areMonthsEqual = date1.getMonth() === date2.getMonth()
    const areYearsEqual = date1.getFullYear() === date2.getFullYear()

    return areYearsEqual && areMonthsEqual
}

exports.isFirstDayOfMonth = (dateString) => {
    return new Date(dateString).getDate() === 1
}

exports.isLastDayOfMonth = (dateString) => {
    const date = new Date(dateString)
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

    return date.getDate() === lastDayOfMonth
}