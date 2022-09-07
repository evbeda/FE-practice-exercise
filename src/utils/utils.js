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