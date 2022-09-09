import React , {useEffect, useState} from "react";
import { calculateFee } from "../../utils/utils";

import "./OrderSummary.css"

export function OrderSummary({ eventsToSell, ticketsInfo }){

    let subTotal = 0;
    let fees = 0
    
    return(
        <div className="order-container">
            <div>
                <img src={eventsToSell.imageUrl} alt={eventsToSell.eventName} className="img-order" data-testid="img-event"/>
            </div>
            <h4 data-testid="order-sumary-h4">Order summary</h4>
            {ticketsInfo.map(ticket => {
                if(ticket.purchased_amount > 0){
                    subTotal += ticket.purchased_amount * ticket.price
                    fees += calculateFee(ticket.purchased_amount, ticket.price, ticket.fee, ticket.fee_type)
                return(
                    <div key={`${ticket.id}-div`} className="row-order">
                        <p data-testid="ticket-quantity-name">{ticket.purchased_amount} x {ticket.name}</p>
                        <p data-testid="price-purchased">$ {ticket.purchased_amount * ticket.price}</p>
                    </div>
                )}
            })}
            
            <div className="row-order">
                <p className="info-order" data-testid="subtotal">SubTotal</p>
                <p className="info-order" data-testid="subtotal-price">$ {subTotal}</p>
            </div>
            <div className="row-order">
                <p className="info-order" data-testid="fee">Fees<i className="fa-solid fa-circle-info" id="fee-icon" data-testid="icon-fee-info"></i></p>
                <p className="info-order" data-testid="fee-price">$ {fees}</p>
            </div>
            <div className="row-order">
                <h3 className="total-order" data-testid="total">Total</h3>
                <p className="total-order" data-testid="total-price">$ {(subTotal + fees).toFixed(2)}</p>
            </div>
        </div>
        
    )
}