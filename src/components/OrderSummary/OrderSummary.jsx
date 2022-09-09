import React , {useEffect, useState} from "react";
import { calculateFee } from "../../utils/utils";

import "./OrderSummary.css"

export function OrderSummary({ eventsToSell, ticketsInfo }){

    let subTotal = 0;
    let fees = 0
    
    return(
        <div class="order-container">
            <div>
                <img src={eventsToSell.imageUrl} alt={eventsToSell.eventName} className="img-order"/>
            </div>
            <h4>Order summary</h4>
            {ticketsInfo.map(ticket => {
                if(ticket.purchased_amount > 0){
                    subTotal += ticket.purchased_amount * ticket.price
                    fees += calculateFee(ticket.purchased_amount, ticket.price, ticket.fee, ticket.fee_type)
                return(
                    <div key={`${ticket.id}-div`} className="row-order">
                        <p>{ticket.purchased_amount} x {ticket.name}</p>
                        <p>$ {ticket.purchased_amount * ticket.price}</p>
                    </div>
                )}
            })}
            
            <div className="row-order">
                <p className="info-order">SubTotal</p>
                <p className="info-order">$ {subTotal}</p>
            </div>
            <div className="row-order">
                <p className="info-order">Fees<i className="fa-solid fa-circle-info" id="fee-icon"></i></p>
                <p className="info-order">$ {fees}</p>
            </div>
            <div className="row-order">
                <h3 class="total-order">Total</h3>
                <p class="total-order">$ {(subTotal + fees).toFixed(2)}</p>
            </div>
        </div>
        
    )
}