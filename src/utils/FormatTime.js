import moment from 'moment';

export const formatTime = (startDatetime) => {
    let eventDate = moment(startDatetime)
    let currentDate = moment()
    const diference = eventDate.diff(currentDate,"days")
    switch (diference) {
        case 1:
            const dateTomorrow = 'Tomorrow at '.concat(moment(startDatetime).format('LT'))
            console.log(dateTomorrow)
            return dateTomorrow
        case 0:
            const dateToday = 'Today at '.concat(moment(startDatetime).format('LT'))
            console.log(dateToday)
            return dateToday
        default:
            const startDatetimeFormated = moment(startDatetime).format("llll")
            return startDatetimeFormated
        }
    }
