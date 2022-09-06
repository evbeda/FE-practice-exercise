import React from "react";
import { useState } from "react";
import { convertToArray } from '../../utils/utils';
import { showFee } from "../../utils/utils";


export function FormTickets({ eventId, tickets, ticketsInfo, setTicketsInfo, changeQuantityTicket }){
    const handleChange = (e) => {
        let selected = e.target.value.split("-");
        let updateTickets = ticketsInfo.map(ticket => {
            if(ticket.id == selected[1]){
                ticket.purchased_amount = parseInt(selected[0])
            }
            return ticket;
        }) 
        setTicketsInfo(updateTickets); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        changeQuantityTicket(eventId, ticketsInfo);
    }
       
    return(
        <form onSubmit={handleSubmit}>
            {tickets.map(ticket => {
                return(
                    <div key={`${ticket.id}-div`}>
                        <label key={`${ticket.id}-label`} for="tickets">
                            {ticket.name}
                        </label>
                        <span>
                            {` $${ticket.price}${showFee(ticket.fee, ticket.fee_type)}`}
                        </span>
                        <select 
                        key={`${ticket.id}-select`}
                        name="tickets"
                        onChange={handleChange}
                        id={ticket.id}
                        >
                            {convertToArray(ticket.quantity).map(num => {
                                return(
                                    <option 
                                    key={`${num}-option`}
                                    value={`${num}-${ticket.id}`}
                                    >
                                        {ticket.quantity > 0 ? num : "sold out" }
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                )
            })}
            <button type="submit">Checkout</button>
        </form>
    )}