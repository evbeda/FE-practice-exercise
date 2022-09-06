import React from "react"
export const TicketQuantity = (props) => {

    const {price, ticketName, purchase} = props

    const subTotal = purchase * price

    return (
        <div>
            <p>{purchase} <span>{ticketName}</span></p>
            <p>${subTotal}</p>
        </div>
    )
}