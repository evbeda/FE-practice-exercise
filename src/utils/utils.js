import moment from "moment";
import 'moment/locale/es';
moment.locale('es');


export const formatedDatetime = (datetime) => {
  let eventDateToShare = ""
  let eventDate = moment(datetime)
  let today = moment()
  const diffDates = eventDate.diff(today,"days")
  switch(diffDates){
    case 0:
      eventDateToShare = "Today!!!"
      break;
    case 1:
      eventDateToShare = "Tomorrow!!!"
      break;
    default:
      eventDateToShare = eventDate.format("llll")
  }
  return eventDateToShare
}

export function convertToArray(number){
    let numberArray = [];
    for (let i = 0; i < number + 1; i++){
        numberArray.push(i)
    }
    return numberArray;
}

export function calculateFee(quantity, price, fee, type){
    switch(type){
        case "fixed":
            return quantity * fee
        case "percent":
            return (quantity * price) * (fee / 100)
        default:
            return null
    }
}

export function showFee(fee, fee_type){
    switch(fee_type){
        case "fixed":
            return `+ $${fee}`
        case "percent":
            return `+ ${fee}%`
        default:
            return ""
    }
}
