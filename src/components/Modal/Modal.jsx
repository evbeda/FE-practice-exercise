import React, { useEffect, useState } from "react";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import { FormTickets} from "../Forms/FormTickets";
import "./Modal.css"
import { formatedDatetime } from "../../utils/utils"


export function Modal(props){
    const { changeQuantityTicket, eventsToSell, showModal, handleCloseModal } = props
  
    const [ticketsInfo, setTicketsInfo] = useState(
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
    )
   
    return(
        <dialog open={showModal} id="modal">
          <div className="container-modal">
          <div className="col-modal" id="form-section">
                  <h1 id="event-name-modal">{eventsToSell.eventName.toUpperCase()}</h1>
                  <p id="event-date-modal">{formatedDatetime(eventsToSell.startDatetime)}</p>
                  <FormTickets
                  eventId={eventsToSell.id}
                  tickets={eventsToSell.tickets}
                  ticketsInfo={ticketsInfo}
                  setTicketsInfo={setTicketsInfo}
                  changeQuantityTicket={changeQuantityTicket}
                  handleCloseModal={handleCloseModal}
                  />
                  <p className="powered">Powered by <span id="eventbrite">eventbrite</span></p>
              </div>
              <div className="col-modal" id="order-section">
                  <OrderSummary 
                  eventsToSell={eventsToSell ? eventsToSell : {}}
                  ticketsInfo={ticketsInfo} 
                  />
              </div>
              <div onClick={handleCloseModal} className="col" id="close-icon">
                <i className="fa-regular fa-circle-xmark" id="close-modal"></i>
              </div>
            
          </div>
        </dialog>
    )
}