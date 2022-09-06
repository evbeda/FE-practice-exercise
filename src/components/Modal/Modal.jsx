import React, { useState } from "react";
import { FormLanguage } from "../Forms/FormLanguage";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import { FormTickets} from "../Forms/FormTickets";

const eventTest = {
    id: 1,
    eventName: "Test Event 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend consequat velit, at rutrum lacus semper vel. Nam tempus vulputate sapien eget facilisis. Nulla ut.",
    imageUrl: "https://place-hold.it/200x200",
    startDatetime: "2022-10-15T13:45:00Z",
    endDateTime: "2022-10-15T16:00:00Z",
    venue: "123 Fake St.",
    followers: 156,
    tickets: [
      {
        id: 1,
        quantity: 100,
        price: 14.56,
        name: "General Ticket",
        fee_type: "fixed",
        fee: "1.50"
      },
      {
        id: 2,
        quantity: 50,
        price: 35.0,
        name: "VIP Ticket",
        fee_type: "percent",
        fee: "5"
      },
      {
        id: 3,
        quantity: 5,
        price: 35.0,
        name: "VIP Ticket",
        fee_type: "none"
      }
    ]
  }

export function Modal(props){
    const { changeQuantityTicket } = props
    const [ticketsInfo, setTicketsInfo] = useState(
        eventTest.tickets.map(ticket => {
            return(
                {
                    id: ticket.id,
                    name: ticket.name,
                    price: ticket.price,
                    purchased_amount: 0,
                    fee_type: ticket.fee_type,
                }
            )
        })
    )
    return(
        <dialog open>
            <div className="row">
                <h1>{eventTest.eventName}</h1>
                <p>{eventTest.startDatetime}</p>
                <FormTickets
                eventId={eventTest.id}
                tickets={eventTest.tickets}
                ticketsInfo={ticketsInfo}
                setTicketsInfo={setTicketsInfo}
                changeQuantityTicket={changeQuantityTicket}
                />
                <p>Powered by Eventbrite</p>
                <FormLanguage />
            </div>
            <div className="row">
                <OrderSummary 
                eventTest={eventTest}
                ticketsInfo={ticketsInfo} 
                />
            </div>
        </dialog>
    )
}