import React from "react";
import { useState } from "react";
import { convertToArray } from '../../utils/utils';
import { showFee } from "../../utils/utils";
import "./Form.css";
import { alertMessage } from "./alert";


export function FormTickets({ eventId, tickets, ticketsInfo, setTicketsInfo, changeQuantityTicket, handleCloseModal }){
    const [isDisabled, setDisabled] = useState(true)

    const handleChange = (e) => {
        let selected = e.target.value.split("-");
        let updateTickets = ticketsInfo.map(ticket => {
            if(ticket.id == selected[1]){
                ticket.purchased_amount = parseInt(selected[0])
            }
            return ticket;
        }) 
        setTicketsInfo(updateTickets);
        setDisabled(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        changeQuantityTicket(eventId, ticketsInfo);
        alertMessage()
        handleCloseModal();
        
    }
       
    return(
        <form onSubmit={handleSubmit}>
            {tickets.map(ticket => {
                return(
                    <div key={`${ticket.id}-div`} className="container-form">
                        <div className="ticket-name-price">
                            <label key={`${ticket.id}-label`} htmlFor="tickets">
                                {ticket.name}
                            </label>
                            <p className="ticket-price">
                                {` $${ticket.price}${showFee(ticket.fee, ticket.fee_type)}`}
                            </p>
                        </div>
                        <div className="row-form">
                            <select 
                            key={`${ticket.id}-select`}
                            name="tickets"
                            onChange={handleChange}
                            id={ticket.id}
                            className="option-ticket"
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
                    </div>
                )
            })}
            <button id="form-btn" type="submit" disabled={isDisabled}>Checkout</button>
        </form>
    )}