import React, { useEffect, useState } from "react";
import { FormLanguage } from "../Forms/FormLanguage";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import { FormTickets} from "../Forms/FormTickets";
import "./Modal.css"


export function Modal(props){
    const { changeQuantityTicket, eventsToSell, showModal, handleCloseModal } = props
  
    const [ticketsInfo, setTicketsInfo] = useState(
      eventsToSell && eventsToSell.tickets
      ?
      eventsToSell.tickets.map(ticket => {
            return(
                {
                    id: ticket.id,
                    name: ticket.name,
                    price: ticket.price,
                    purchased_amount: 0,
                    fee_type: ticket.fee_type,
                    fee: ticket.fee ? ticket.fee : ""
                }
            )
        })
      :
      [{
        id: "",
        name: "",
        price: "",
        purchased_amount: 0,
        fee_type: "",
        fee: ""
    }]
    )
   
    return(
        <dialog open={showModal} id="modal">
          <div className="container-modal">
          <div className="col-modal" id="form-section">
                  <h1>{eventsToSell ? eventsToSell.eventName : ""}</h1>
                  <p>{eventsToSell ? eventsToSell.startDatetime : ""}</p>
                  <FormTickets
                  eventId={eventsToSell ? eventsToSell.id : ""}
                  tickets={eventsToSell ? eventsToSell.tickets : []}
                  ticketsInfo={ticketsInfo}
                  setTicketsInfo={setTicketsInfo}
                  changeQuantityTicket={changeQuantityTicket}
                  handleCloseModal={handleCloseModal}
                  />
                  <p>Powered by Eventbrite</p>
              </div>
              <div className="col-modal" id="order-section">
                  <OrderSummary 
                  eventsToSell={eventsToSell ? eventsToSell : {}}
                  ticketsInfo={ticketsInfo} 
                  />
              </div>
              <div onClick={handleCloseModal} className="col" id="close-icon">
                <i class="fa-regular fa-circle-xmark"></i>
              </div>
            
          </div>
        </dialog>
    )
}