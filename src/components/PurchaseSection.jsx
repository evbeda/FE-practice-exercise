import React from "react";
import { useState } from "react";

import { Ticket } from "./Ticket";

export function PurchaseSection() {

    const props = {
        "id": 1,
        "eventName": "Test Event 1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend consequat velit, at rutrum lacus semper vel. Nam tempus vulputate sapien eget facilisis. Nulla ut.",
        "imageUrl": "https://place-hold.it/200x200",
        "startDatetime": "2022-10-15T13:45:00Z",
        "endDateTime": "2022-10-15T16:00:00Z",
        "venue": "123 Fake St.",
        "followers": 156,
        "tickets": [
          {
            "quantity": 100,
            "price": 14.56,
            "name": "General Ticket",
            "fee_type": "fixed",
            "fee": "1.50",
            "sold":0
          },
          {
            "quantity": 50,
            "price": 35.0,
            "name": "VIP Ticket",
            "fee_type": "percent",
            "fee": "5"
          },
          {
            "quantity": 5,
            "price": 35.0,
            "name": "VIP Ticket",
            "fee_type": "none"
          }
        ]
    }

    const ticketSelection = [];

    props.tickets.forEach(ticket => {
        const ticketCopy = {...ticket};
        ticketSelection.push(ticket);
    });

    console.log(ticketSelection)

    // ticketSelection.forEach(ticket => ticket.purchase = 0);

    return (
        <div>
            <h3>{props.eventName}</h3>
            <p>{props.startDatetime} - {props.endDateTime}</p>
            <hr/>
            {ticketSelection.map(t => <Ticket {...ticketSelection}/>)}
            <div>
                <p>
                    Powered by Eventbrite
                </p>
                <p>
                    <label for="card">
                        <span>Language:</span>
                    </label>
                    <select id="card" name="usercard">
                        <option value="english">English</option>
                        <option value="espanol">Espanol</option>
                        <option value="francias">Francais</option>
                    </select>
                </p>
            </div>
        </div>
    )
    
}