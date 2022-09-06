
import { SubTotal } from "../subtotal/SubTotal"
import { TicketQuantity } from "../ticketQuantity/TicketQuantity"
import React from "react"

export const OrderSummary = (props) =>{

    const { modal } = props
    
    let tickets = modal.event.tickets.filter(e => e.purchase > 0)

    const calculateFee = (ticket) => {
        switch(ticket.fee_type){
            case "fixed":
                return parseFloat(ticket.fee) * ticket.purchase

            case "percent":
                return parseFloat(ticket.fee) * ticket.purchase * ticket.price / 100

            case "none":
                return 0

            default:
                return 0
        }

    }


    let fees = 0
    modal.event.tickets.forEach(e => fees += calculateFee(e))


    let subTotal = 0

    tickets.forEach(element => {
        subTotal += element.purchase * element.price
    })


    return(
        <div className="OrderSummary">
            {tickets.map(e => {
                return <TicketQuantity key={e.id} price={e.price} ticketName={e.name} purchase={e.purchase}/>
            })}

            <SubTotal subTotal={subTotal} fees={fees}/>
            <p>Total{subTotal + fees}</p>
            
        </div>
    )
}