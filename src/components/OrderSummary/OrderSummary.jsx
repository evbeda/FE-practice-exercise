import React from "react";
import { calculateFee } from "../../utils/utils";

export function OrderSummary({ eventTest, ticketsInfo }){
    let subTotal = 0;
    let fees = 0

    return(
        <div>
            <h4>Order summary</h4>
            <div>
                <img src={eventTest.imageUrl} alt={eventTest.eventName}/>
            </div>
            {ticketsInfo.map(ticket => {
                if(ticket.purchased_amount > 0){
                    subTotal += ticket.purchased_amount * ticket.price
                    fees += calculateFee(ticket.purchased_amount, ticket.price, ticket.fee, ticket.fee_type)
                return(
                    <div key={`${ticket.id}-div`}>
                        <p>{ticket.purchased_amount} x {ticket.name}</p>
                        <p>$ {ticket.purchased_amount * ticket.price}</p>
                    </div>
                )}
            })}
            
            <div>
                <h3>SubTotal</h3>
                <p>$ {subTotal}</p>
            </div>
            <div>
                <p>Fees</p><i className="fa-solid fa-circle-info"></i>
                <p>$ {fees}</p>
            </div>
            <div>
                <h3>Total</h3>
                <p>$ {subTotal + fees}</p>
            </div>
        </div>
        
    )
}